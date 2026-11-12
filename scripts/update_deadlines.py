"""Collect upcoming main-track submission deadlines and write content/deadlines.js.

Runs monthly from .github/workflows/update-deadlines.yml (and can be run by hand):
    pip install pyyaml
    python scripts/update_deadlines.py

Data: the community-maintained se-deadlines dataset
(https://github.com/se-deadlines/se-deadlines.github.io, _data/conferences.yml),
plus hand-entered deadlines from scripts/deadline_sources.json ("manual").
Which conferences are included is configured in scripts/deadline_sources.json.
"""
import datetime as dt
import json
import os
import re
import urllib.request

import yaml

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CONFIG = os.path.join(ROOT, "scripts", "deadline_sources.json")
OUT = os.path.join(ROOT, "content", "deadlines.js")
DATA_URL = "https://raw.githubusercontent.com/se-deadlines/se-deadlines.github.io/main/_data/conferences.yml"


def load_dataset():
    req = urllib.request.Request(DATA_URL, headers={"User-Agent": "seas-group-website deadline updater"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return yaml.safe_load(r.read().decode("utf-8")) or []


def as_date(value):
    m = re.match(r"\s*(\d{4}-\d{2}-\d{2})", str(value))
    return dt.date.fromisoformat(m.group(1)) if m else None


def main():
    today = dt.date.today()
    cfg = json.load(open(CONFIG, encoding="utf-8"))
    confs = cfg["conferences"]
    dataset = load_dataset()

    deadlines = []
    for conf in confs:
        names = {n.upper() for n in conf.get("se_deadlines", [])}
        for entry in dataset:
            if str(entry.get("name", "")).upper() not in names:
                continue
            raw = entry.get("deadline") or []
            for value in (raw if isinstance(raw, list) else [raw]):
                date = as_date(value)
                if date and date >= today:
                    deadlines.append({
                        "conf": conf["short"],
                        "edition": f"{conf['short']} {entry.get('year', '')}".strip(),
                        "what": (entry.get("description", "").split(" - ")[-1] if " - " in entry.get("description", "") else "Research papers"),
                        "date": date.isoformat(),
                        "url": entry.get("link") or conf.get("url", ""),
                        "note": (entry.get("note") or "").strip(),
                        "place": entry.get("place") or "",
                    })
    for m in cfg.get("manual", []):
        date = as_date(m.get("date"))
        if date and date >= today:
            deadlines.append({"conf": m["conf"], "edition": m.get("edition", m["conf"]), "what": m.get("what", ""),
                              "date": date.isoformat(), "url": m.get("url", ""), "note": "", "place": m.get("place", "")})

    seen, unique = set(), []
    for d in sorted(deadlines, key=lambda d: (d["date"], d["conf"])):
        key = (d["conf"], d["date"])
        if key not in seen:
            seen.add(key)
            unique.append(d)
    with_deadline = {d["conf"] for d in unique}
    pending = [{"conf": c["short"], "url": c.get("url", "")} for c in confs if c["short"] not in with_deadline]

    with open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write("/*\n * UPCOMING CONFERENCE DEADLINES - generated automatically, do not edit by hand.\n"
                " * Updated monthly by .github/workflows/update-deadlines.yml (scripts/update_deadlines.py)\n"
                " * from https://github.com/se-deadlines/se-deadlines.github.io.\n"
                " * To change conferences or add deadlines by hand, edit scripts/deadline_sources.json.\n */\n")
        f.write(f"var SEAS_DEADLINES_UPDATED = {json.dumps(today.isoformat())};\n")
        f.write("var SEAS_DEADLINES = " + json.dumps(unique, indent=2, ensure_ascii=False) + ";\n")
        f.write("var SEAS_DEADLINES_PENDING = " + json.dumps(pending, indent=2, ensure_ascii=False) + ";\n")
    print(f"{len(unique)} upcoming deadlines; not announced yet: {', '.join(p['conf'] for p in pending) or 'none'}")


if __name__ == "__main__":
    main()

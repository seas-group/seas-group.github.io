# SEAS group website

Website of the **Software Engineering for Automotive and Embedded Systems (SEAS)** group,
Chalmers University of Technology & University of Gothenburg.
Hosted on GitHub Pages at <https://seas-group.github.io> (repo `seas-group/seas-group.github.io`).
Design: [Pulse](https://zumatools.com/website-templates/saas-landing/) by ZumaTools (MIT, see `LICENSE-template.txt`).
Colors and fonts are CSS variables at the top of `assets/css/style.css`.

## Editing content

All content lives in plain text files in `content/` – no build step, no database.
Edit them directly on GitHub (pencil icon) and the site updates within a minute.

| What                         | File                      |
|------------------------------|---------------------------|
| News & events                | `content/news.js`         |
| Research focus & problems    | `content/research.js`     |
| Group members (bio, links)   | `content/members.js`      |
| Recent publications, datasets| `content/publications.js` |
| Top SE venues (JUFO / CORE)  | `content/venues.js`       |
| Numbers in the stats bar     | `content/stats.js`        |

Each file has instructions at the top. Typical edit = copy a `{ ... },` block, paste it at the
top of the list, change the text. Keep the quotes and commas.
`*_SHOWN` numbers control how many items are displayed (only the most recent ones).

Member photos: put a 480×600 JPG in `images/people/` and reference it in `members.js`.
Original photos and bios are kept in `_source/` (not published).

## Conference deadlines

The "Upcoming deadlines" list (`content/deadlines.js`) is generated automatically on the 1st of
every month by `.github/workflows/update-deadlines.yml`, using the community-maintained
[se-deadlines](https://github.com/se-deadlines/se-deadlines.github.io) dataset. Run it any time from
the repo's Actions tab ("Update conference deadlines" → "Run workflow").
To change which conferences are listed, or to add a deadline by hand for a conference the dataset
does not cover, edit `scripts/deadline_sources.json`.

## Preview locally

```bash
python -m http.server 8765
```

Then open <http://localhost:8765>.

## Deploy

Edit files directly on GitHub, or clone, edit and push:

```bash
git clone https://github.com/seas-group/seas-group.github.io.git
```

Every push to `main` is deployed automatically by `.github/workflows/deploy-pages.yml`.

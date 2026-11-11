/* Renders the content/*.js data into index.html. Normally no need to edit. */
(function () {
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function fill(id, items, fn) {
    var el = $(id);
    if (el && items) el.innerHTML = items.map(fn).join("");
  }
  function take(list, n) { return (list || []).slice(0, n || (list || []).length); }

  // Research
  if ($("seas-focus") && typeof SEAS_FOCUS !== "undefined") $("seas-focus").innerHTML = SEAS_FOCUS;
  fill("seas-research", typeof SEAS_RESEARCH !== "undefined" && SEAS_RESEARCH, function (r) {
    return '<div class="col-3 col-6-medium col-12-small"><section class="seas-theme">' +
      '<span class="seas-theme-icon icon solid ' + esc(r.icon) + '"></span>' +
      '<header><h3>' + esc(r.title) + '</h3></header>' +
      '<p>' + r.summary + '</p>' +
      '<ul class="seas-problems">' + (r.problems || []).map(function (p) { return '<li>' + p + '</li>'; }).join("") + '</ul>' +
      '</section></div>';
  });

  // News
  fill("seas-news", typeof SEAS_NEWS !== "undefined" && take(SEAS_NEWS, SEAS_NEWS_SHOWN), function (n) {
    return '<li><article class="box excerpt"><header>' +
      '<span class="date">' + esc(n.date) + '</span>' +
      '<h3>' + (n.link ? '<a href="' + esc(n.link) + '">' + esc(n.title) + '</a>' : esc(n.title)) + '</h3>' +
      '</header><p>' + n.text + '</p></article></li>';
  });

  // Publications
  fill("seas-pubs", typeof SEAS_PUBS !== "undefined" && take(SEAS_PUBS, SEAS_PUBS_SHOWN), function (p) {
    return '<li><a class="seas-pub-title" href="' + esc(p.link) + '">' + esc(p.title) + '</a>' +
      '<span class="seas-pub-authors">' + esc(p.authors) + '</span>' +
      '<span class="seas-pub-venue">' + esc(p.venue) + ', ' + esc(p.year) + '</span></li>';
  });
  fill("seas-pubs-more", typeof SEAS_PUBS_MORE !== "undefined" && SEAS_PUBS_MORE, function (l, i) {
    return '<li><a href="' + esc(l.url) + '" class="button' + (i ? ' alt' : '') + ' icon solid fa-external-link-alt">' + esc(l.label) + '</a></li>';
  });

  // Datasets
  fill("seas-datasets", typeof SEAS_DATASETS !== "undefined" && take(SEAS_DATASETS, SEAS_DATASETS_SHOWN), function (d) {
    return '<li><h3><a href="' + esc(d.link) + '">' + esc(d.title) + '</a></h3><p>' + d.text + '</p></li>';
  });

  // Members
  fill("seas-members", typeof SEAS_MEMBERS !== "undefined" && SEAS_MEMBERS, function (m) {
    var links = [
      ["gu", "University of Gothenburg", "fa-university"],
      ["chalmers", "Chalmers", "fa-university"],
      ["web", "Website", "fa-globe"],
      ["scholar", "Google Scholar", "fa-graduation-cap"]
    ].filter(function (l) { return m[l[0]]; }).map(function (l) {
      return '<li><a class="icon solid ' + l[2] + '" href="' + esc(m[l[0]]) + '">' + l[1] + '</a></li>';
    }).join("");
    return '<div class="col-4 col-6-medium col-12-small"><article class="seas-member">' +
      '<img src="' + esc(m.photo) + '" alt="' + esc(m.name) + '" loading="lazy" />' +
      '<h3>' + esc(m.name) + '</h3><p class="seas-role">' + m.role + '</p>' +
      '<p class="seas-bio">' + m.bio + '</p>' +
      (links ? '<ul class="seas-links">' + links + '</ul>' : '') +
      '</article></div>';
  });

  // Venues
  function venueRow(v) {
    return '<tr><td><a href="' + esc(v.url) + '"><strong>' + esc(v.short) + '</strong></a> ' + esc(v.name) + '</td>' +
      '<td>' + (esc(v.jufo) || '&ndash;') + '</td><td>' + (esc(v.core) || '&ndash;') + '</td></tr>';
  }
  fill("seas-venues-journals", typeof SEAS_VENUES_JOURNALS !== "undefined" && SEAS_VENUES_JOURNALS, venueRow);
  fill("seas-venues-conferences", typeof SEAS_VENUES_CONFERENCES !== "undefined" && SEAS_VENUES_CONFERENCES, venueRow);
})();

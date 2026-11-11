/*
 * TOP SOFTWARE ENGINEERING VENUES
 * ------------------------------------------------------------------
 * JUFO = Finnish Publication Forum level (https://jfp.csc.fi/en/)
 * CORE = CORE conference ranking (https://portal.core.edu.au/conf-ranks/)
 * Rankings are revised regularly - check the portals when updating.
 * (Note: JUFO level 3 is being discontinued from the 2027 classification.)
 * Leave jufo/core as "" when a venue has no ranking (or it is not yet filled in);
 * it is then shown as a dash.
 */
var SEAS_VENUES_JOURNALS = [
  { name: "IEEE Transactions on Software Engineering", short: "TSE", jufo: "3", core: "A*", url: "https://www.computer.org/csdl/journal/ts" },
  { name: "ACM Transactions on Software Engineering and Methodology", short: "TOSEM", jufo: "3", core: "A*", url: "https://dl.acm.org/journal/tosem" },
  { name: "Empirical Software Engineering", short: "EMSE", jufo: "3", core: "A", url: "https://link.springer.com/journal/10664" },
  { name: "Information and Software Technology", short: "IST", jufo: "3", core: "A", url: "https://www.sciencedirect.com/journal/information-and-software-technology" },
  { name: "Journal of Systems and Software", short: "JSS", jufo: "3", core: "A", url: "https://www.sciencedirect.com/journal/journal-of-systems-and-software" },
  { name: "Software and Systems Modeling", short: "SoSyM", jufo: "3", core: "", url: "https://link.springer.com/journal/10270" },
  { name: "Automated Software Engineering", short: "AUSE", jufo: "", core: "", url: "https://link.springer.com/journal/10515" },
  { name: "Software Quality Journal", short: "SQJ", jufo: "", core: "", url: "https://link.springer.com/journal/11219" },
  { name: "IEEE Software", short: "IEEE Software", jufo: "", core: "", url: "https://www.computer.org/csdl/magazine/so" },
  { name: "e-Informatica Software Engineering Journal", short: "e-Informatica", jufo: "", core: "", url: "https://www.e-informatyka.pl/" }
];

var SEAS_VENUES_CONFERENCES = [
  { name: "International Conference on Software Engineering", short: "ICSE", jufo: "3", core: "A*", url: "https://conf.researchr.org/series/icse" },
  { name: "ACM Int. Conference on the Foundations of Software Engineering", short: "FSE", jufo: "", core: "A*", url: "https://conf.researchr.org/series/fse" },
  { name: "IEEE/ACM Int. Conference on Automated Software Engineering", short: "ASE", jufo: "", core: "A*", url: "https://conf.researchr.org/series/ase" },
  { name: "Int. Symposium on Software Testing and Analysis", short: "ISSTA", jufo: "", core: "A", url: "https://conf.researchr.org/series/issta" },
  { name: "Int. Symposium on Empirical Software Engineering and Measurement", short: "ESEM", jufo: "", core: "A", url: "https://conf.researchr.org/series/esem" },
  { name: "Int. Conference on Software Maintenance and Evolution", short: "ICSME", jufo: "", core: "A", url: "https://conf.researchr.org/series/icsme" },
  { name: "Int. Conference on Mining Software Repositories", short: "MSR", jufo: "", core: "A", url: "https://conf.researchr.org/series/msr" },
  { name: "Int. Conference on Software Analysis, Evolution and Reengineering", short: "SANER", jufo: "", core: "A", url: "https://conf.researchr.org/series/saner" },
  { name: "Int. Conference on Software Architecture", short: "ICSA", jufo: "", core: "A", url: "https://conf.researchr.org/series/icsa" },
  { name: "European Conference on Software Architecture", short: "ECSA", jufo: "", core: "", url: "https://conf.researchr.org/series/ecsa" },
  { name: "Euromicro Conference on Software Engineering and Advanced Applications", short: "SEAA", jufo: "", core: "", url: "https://dsd-seaa.com/" },
  { name: "Int. Conference on Product-Focused Software Process Improvement", short: "PROFES", jufo: "", core: "", url: "https://conf.researchr.org/series/profes" },
  { name: "Int. Conference on Predictive Models and Data Analytics in Software Engineering", short: "PROMISE", jufo: "", core: "", url: "https://conf.researchr.org/series/promise" },
  { name: "IEEE/ACM Int. Conference on AI Engineering – Software Engineering for AI", short: "CAIN", jufo: "", core: "", url: "https://conf.researchr.org/series/cain" }
];

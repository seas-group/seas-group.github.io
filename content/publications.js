/*
 * RECENT PUBLICATIONS AND DATASETS
 * ------------------------------------------------------------------
 * Add new items at the TOP of each list (newest first).
 * Only the first SEAS_PUBS_SHOWN / SEAS_DATASETS_SHOWN items are shown,
 * so older items simply drop off the page; you can also delete them.
 */
var SEAS_PUBS_SHOWN = 10;

var SEAS_PUBS = [
  { year: 2026, title: "A Nightly Feedback-Driven Strategy for Quality Control in Safety-Critical Software Development",
    authors: "S. Sun, P. Nemeth, S. Johansson, T. Wiik, D. Friberg, F. Fotrousi, M. Staron",
    venue: "ESEM 2026", link: "https://doi.org/10.4230/LIPIcs.ESEM.2026.81" },
  { year: 2026, title: "Developing a Roadmap to an AI-first Organization: A Case Study in Embedded Software Development",
    authors: "V. Kjellberg, S. Basu, S. Sun, F. Fotrousi, M. Staron",
    venue: "arXiv preprint", link: "https://arxiv.org/abs/2609.30863" },
  { year: 2026, title: "Security in a Workflow: Exploring Role-Based Agentic Architectures for Vulnerability Handling",
    authors: "S. Basu, M. Staron",
    venue: "SEAA 2026", link: "https://doi.org/10.1007/978-3-032-36587-3_30" },
  { year: 2026, title: "Understanding Conversational Patterns in Multi-agent Programming: A Case Study on Fibonacci Game Development",
    authors: "S. Basu, V. Kjellberg, S. Sun, B. Haraldsson, M. A. A. Babu, W. Meding, F. Fotrousi, M. Staron",
    venue: "AIware '26", link: "https://doi.org/10.1145/3805760.3814914" },
  { year: 2026, title: "Strategies for Guiding LLMs to Use Software Design Patterns: A Case of Singleton",
    authors: "V. Kjellberg, F. Fotrousi, M. Staron",
    venue: "PROMISE '26", link: "https://doi.org/10.1145/3803846.3807469" },
  { year: 2026, title: "Evaluating Train–Test Data Leakage in Automotive Image Datasets",
    authors: "M. A. A. Babu, M. Staron, A. Bálint, D. Durisic, S. K. Pandey",
    venue: "IEEE IV 2026", link: "https://doi.org/10.1109/IV66570.2026.11623865" },
  { year: 2026, title: "An Investigation of the AUTOSAR Adaptive Platform from an Industry Perspective",
    authors: "B. Haraldsson, S. Basu, M. Staron, E. Mayer",
    venue: "ICSA 2026", link: "https://doi.org/10.1109/ICSA66085.2026.00019" },
  { year: 2026, title: "Data Leakage in Automotive Perception: Practitioners' Insights",
    authors: "M. A. A. Babu, S. K. Pandey, D. Durisic, A. Bálint, M. Staron",
    venue: "CAIN 2026", link: "https://doi.org/10.1145/3793653.3793775" },
  { year: 2026, title: "From LLMs to Agents in Programming: The Impact of Providing an LLM with a Compiler",
    authors: "V. Kjellberg, M. Staron, F. Fotrousi",
    venue: "SANER 2026", link: "https://doi.org/10.1109/SANER67736.2026.00021" },
  { year: 2026, title: "Agentic Pipelines in Embedded Software Engineering: Emerging Practices and Challenges",
    authors: "S. Sun, M. Staron",
    venue: "SANER 2026", link: "https://doi.org/10.1109/SANER67736.2026.00024" },
  { year: 2026, title: "The Impact of Class Noise-handling on the Effectiveness of ML-based Methods for Build Outcome and Code Change Request Predictions",
    authors: "K. Al-Sabbagh, M. Staron, R. Hebig",
    venue: "ACM TOSEM", link: "https://doi.org/10.1145/3764864" },
  { year: 2025, title: "Literate Programming with LLMs? - A Study on Rosetta Code and CodeNet",
    authors: "S. Sun, M. Staron",
    venue: "IEEE TSE", link: "https://doi.org/10.1109/TSE.2025.3629828" }
];

var SEAS_PUBS_MORE = [
  { label: "Full 2025–2026 list", url: "https://miroslawstaron.github.io/pubs.html" },
  { label: "Google Scholar", url: "https://scholar.google.com/citations?user=oMZ1ucgAAAAJ" },
  { label: "Chalmers research portal", url: "https://research.chalmers.se/en/person/miroslaw" }
];

var SEAS_DATASETS_SHOWN = 5;

var SEAS_DATASETS = [
  { title: "SEEVE – vulnerable C code snippets",
    text: "Collection of vulnerable C code snippets mapped to CVEs, for security and vulnerability-detection experiments.",
    link: "https://github.com/miroslawstaron/seeve" },
  { title: "agenticAI – multi-agent research framework",
    text: "Framework for multi-agent LLM conversations: code, diagram and requirement generation, and source-code analysis.",
    link: "https://github.com/miroslawstaron/agenticAI" },
  { title: "Cybersecurity pattern analysis system",
    text: "Embeds source code and compares it with reference examples to find security and vulnerability patterns.",
    link: "https://github.com/miroslawstaron/cybersecurity_pattern_analysis_system" },
  { title: "Singleton examples",
    text: "Reference implementations of the Singleton design pattern, used in our studies of LLM design-pattern adherence.",
    link: "https://github.com/miroslawstaron/singleton_examples" },
  { title: "Engineering Generative AI-Based Software – companion code",
    text: "Chapter-by-chapter code and examples for the book on engineering generative-AI software.",
    link: "https://github.com/miroslawstaron/engineering_generative_ai_systems" }
];

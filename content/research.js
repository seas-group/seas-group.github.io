/*
 * RESEARCH FOCUS & PROBLEMS WE WORK ON
 * ------------------------------------------------------------------
 * SEAS_FOCUS is the one-paragraph summary shown in the banner.
 * Each entry in SEAS_RESEARCH is one research theme card:
 *   icon     - a Font Awesome icon name (see https://fontawesome.com/v5/search?m=free&s=solid)
 *   title    - theme name
 *   summary  - one or two sentences
 *   problems - list of concrete problems/questions we are working on
 * Add, remove or reorder themes freely.
 */
var SEAS_FOCUS =
  "We develop methods and tools that help industry build <strong>trustworthy, AI-enabled software</strong> " +
  "for cars, telecom and other embedded systems &mdash; working side by side with our industrial partners.";

var SEAS_RESEARCH = [
  {
    icon: "fa-robot",
    title: "AI agents for software engineering",
    summary: "How LLMs and multi-agent systems can design, write, repair and review software in industrial settings.",
    problems: [
      "Making LLM-generated code follow software design patterns and architecture",
      "Compiler- and tool-guided program repair with LLM agents",
      "Conversational patterns and collaboration in multi-agent programming",
      "Roadmaps for becoming an AI-first software organization"
    ]
  },
  {
    icon: "fa-car",
    title: "Automotive software architecture & security",
    summary: "Architectures for software-defined vehicles and the vulnerabilities that come with them.",
    problems: [
      "AUTOSAR Classic and Adaptive Platform in industrial practice",
      "Complexity, variant management and maintainability of embedded software",
      "Mapping and handling software vulnerabilities in connected vehicles",
      "Agentic workflows for vulnerability detection and fixing"
    ]
  },
  {
    icon: "fa-database",
    title: "Data quality for machine learning",
    summary: "Making ML-based perception and analytics systems trustworthy by engineering the data they learn from.",
    problems: [
      "Detecting train–test data leakage in automotive image datasets",
      "Noise handling in data used for build and code-review prediction",
      "Evaluating retrieval-augmented generation (RAG) systems",
      "LLM-based retrieval of autonomous-driving log data"
    ]
  },
  {
    icon: "fa-chart-line",
    title: "Measurement, CI/CD & quality",
    summary: "Software measurement programs, dashboards and continuous integration that scale in large organizations.",
    problems: [
      "Balancing cost and quality assurance in industrial CI/CD",
      "Feedback-driven quality control for safety-critical software",
      "Self-managing measurement systems and data-quality automation",
      "AI agents for requirements compliance checking"
    ]
  }
];

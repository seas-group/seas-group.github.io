/*
 * GROUP MEMBERS
 * ------------------------------------------------------------------
 * Put a portrait (ideally 480x600 px, JPG) in images/people/ and reference it in `photo`.
 * Links: leave "" if a member has no page of that kind; the button is then hidden.
 *   gu       - University of Gothenburg staff page (www.gu.se)
 *   chalmers - Chalmers staff/research page (www.chalmers.se / research.chalmers.se)
 *   web      - any other personal website
 */
var SEAS_MEMBERS = [
  {
    name: "Miroslaw Staron",
    role: "Professor in Software Engineering &middot; Group leader",
    photo: "images/people/miroslaw.jpg",
    bio: "Miroslaw Staron is Professor in Software Engineering at the Department of Computer Science and Engineering, " +
         "University of Gothenburg and Chalmers University of Technology. His research covers software design, AI engineering, " +
         "automotive, telecommunication and medical software engineering, and software measurement. He is Editor-in-Chief of " +
         "<a href=\"https://www.sciencedirect.com/journal/information-and-software-technology\">Information and Software Technology</a> " +
         "and author of books including <em>Engineering Generative AI-Based Software</em>, <em>Machine Learning Infrastructure and Best Practices for Software Engineers</em>, " +
         "<em>Automotive Software Architectures</em> and <em>Action Research in Software Engineering</em>.",
    gu: "https://www.gu.se/en/about/find-staff/miroslawstaron",
    chalmers: "https://www.chalmers.se/en/persons/miroslaw/",
    web: "https://www.staron.nu",
    scholar: "https://scholar.google.com/citations?user=oMZ1ucgAAAAJ"
  },
  {
    name: "Wilhelm Meding",
    role: "Researcher",
    photo: "images/people/wilhelm.jpg",
    bio: "Wilhelm Meding is a seasoned systems manager and researcher with 26 years at Ericsson and deep expertise in software and systems engineering. " +
         "He has led cross-functional teams, defined requirements for high-performance systems and delivered trustworthy analytics and dashboards. " +
         "His work applies AI to software engineering: data-quality automation, self-managing measurement systems and AI agents for requirements compliance. " +
         "He has authored around 70 publications.",
    gu: "",
    chalmers: "https://research.chalmers.se/en/person/medingw",
    web: "",
    scholar: ""
  },
  {
    name: "Simin Sun",
    role: "PhD student",
    photo: "images/people/simin.jpg",
    bio: "Simin Sun earned her master's degree in Computer Science and Engineering from Eindhoven University of Technology in 2023 and is pursuing a PhD in Software Engineering " +
         "at Chalmers and the University of Gothenburg. With over five years of industry experience, her research focuses on AI for software engineering, " +
         "using LLM-based methods and tools to improve engineering workflows and developers' experience.",
    gu: "https://www.gu.se/en/about/find-staff/siminsun",
    chalmers: "https://www.chalmers.se/en/persons/siminsu/",
    web: "",
    scholar: ""
  },
  {
    name: "Viktor Kjellberg",
    role: "PhD student",
    photo: "images/people/viktor.jpg",
    bio: "Viktor Kjellberg's research focuses on design-optimized software creation, code repair and the effect of AI in industry. " +
         "He studies LLMs in software engineering, including compiler-guided repair, making LLMs align with design patterns and LLM-based code generation, " +
         "as well as the adoption of LLM-based agents in industrial software development.",
    gu: "https://www.gu.se/en/about/find-staff/viktorkjellberg",
    chalmers: "https://www.chalmers.se/personer/viktorkj/",
    web: "",
    scholar: ""
  },
  {
    name: "Md Abu Ahammed Babu",
    role: "PhD student",
    photo: "images/people/babu.jpg",
    // TODO: replace with Babu's own bio (bio_babu.txt was empty; this draft is based on his publications)
    bio: "Md Abu Ahammed Babu is a PhD student in software engineering at Chalmers and the University of Gothenburg. " +
         "His research focuses on data quality and reliability in machine-learning systems for automotive perception, " +
         "in particular detecting and handling train&ndash;test data leakage in automotive image datasets.",
    gu: "",
    chalmers: "https://www.chalmers.se/en/persons/ahammed/",
    web: "",
    scholar: ""
  },
  {
    name: "Jenifa Mariyanayagam",
    role: "PhD student",
    photo: "images/people/jenifa.jpg",
    bio: "Jenifa Mariyanayagam is a PhD student in the Software Engineering division at the University of Gothenburg. " +
         "She holds an MSc in Software Engineering and Technology from Chalmers and a bachelor's degree in computer science and engineering from Anna University, India. " +
         "Her earlier work focused on evaluating retrieval-augmented generation systems, comparing retrieval strategies and their effect on answer quality.",
    gu: "",   // TODO: add gu.se staff page when available
    chalmers: "",
    web: "",
    scholar: ""
  }
];

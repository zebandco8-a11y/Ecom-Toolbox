import { WordCounter, CaseConverter, Deduper, HtmlTagger } from "../components/tools";
export const siteName = "EcomToolbox"; // change to your brand
export const tools = [
  { slug: "word-counter", name: "Word & Character Counter", category: "Text", Component: WordCounter,
    desc: "Count words, characters and bytes, and check them against common marketplace title limits.",
    body: "Paste your title, bullet point or description to see its length instantly. Pick a marketplace preset to see how close you are to the limit. Limits change by category, so always confirm them in your seller dashboard." },
  { slug: "case-converter", name: "Case Converter", category: "Text", Component: CaseConverter,
    desc: "Convert text to UPPERCASE, lowercase, Title Case or Sentence case in one click.",
    body: "Clean up product titles and descriptions quickly. Title Case suits most marketplace titles; sentence case suits bullet points." },
  { slug: "duplicate-remover", name: "Duplicate Line & Keyword Remover", category: "Ecommerce", Component: Deduper,
    desc: "Remove duplicate keywords or lines, with optional sorting. Ideal for backend search terms.",
    body: "Paste one keyword or phrase per line. The tool removes repeats, ignoring capitalization if you choose, and shows how many it removed." },
  { slug: "html-tagger", name: "HTML Tagger for Product Descriptions", category: "Ecommerce", Component: HtmlTagger,
    desc: "Turn plain text into clean paragraph, bullet-list or line-break HTML for product descriptions.",
    body: "Write each paragraph or point on its own line, choose a format and copy the HTML. Marketplaces allow different tags, so check your platform's rules before pasting." },
];

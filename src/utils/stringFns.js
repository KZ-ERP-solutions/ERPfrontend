const sentenceCase = (s) =>
  titleCase(s).toLowerCase().charAt(0).toUpperCase() +
  titleCase(s).toLowerCase().slice(1)

// snake_case & kebab-case to title case
const titleCase = (s) =>
  s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_

const stringFns = { sentenceCase, titleCase }
export default stringFns

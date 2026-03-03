export const sanitizeContent = (text = "") =>
  text
    .replace(/\u00A0/g, " ") 
    .replace(/[ \t]+\n/g, "\n") 
    .replace(/\n{3,}/g, "\n\n") 
    .trim();

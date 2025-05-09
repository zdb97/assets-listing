/**
 * Truncates string to a specified maximum length and appends "..."
 * @param text - The text to truncate.
 * @param maxLength - The maximum length of the text.
 * @returns The truncated text with "..."
 */
export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

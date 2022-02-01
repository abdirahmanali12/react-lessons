export function conterest(textColor, bgColor) {
  if (!textColor)
    return bgColor === "primary-color" ? "text-white" : "primary-color-text";
  return textColor;
}

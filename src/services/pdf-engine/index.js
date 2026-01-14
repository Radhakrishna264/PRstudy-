import { generatePDF } from "./generators/generatePDF";
import { parsePDF } from "./parsers/parsePDF";
import { getTemplate } from "./templates/templateRegistry";
import { applyWatermark } from "./watermark/watermarkEngine";

export {
  generatePDF,
  parsePDF,
  getTemplate,
  applyWatermark,
};

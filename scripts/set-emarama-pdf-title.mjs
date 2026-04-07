/**
 * Sets PDF document Title metadata (shown in browser PDF chrome, e.g. top-left label).
 * Run: node scripts/set-emarama-pdf-title.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument } from "pdf-lib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pdfPath = join(__dirname, "..", "public", "private", "emarama-bci-intro.pdf");

const bytes = readFileSync(pdfPath);
const pdf = await PDFDocument.load(bytes);
pdf.setTitle("MENU");
const out = await pdf.save();
writeFileSync(pdfPath, Buffer.from(out));
console.log("OK: PDF Title metadata set to MENU ->", pdfPath);

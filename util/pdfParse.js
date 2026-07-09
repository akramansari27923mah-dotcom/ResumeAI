import pdfParse from "pdf-parse/lib/pdf-parse.js";

export const convertPdfIntoText = async (file) => {
  const arrayBuffer = await file.arrayBuffer();

  const buffer = Buffer.from(arrayBuffer);

  const data = await pdfParse(buffer);

  return data.text;
};

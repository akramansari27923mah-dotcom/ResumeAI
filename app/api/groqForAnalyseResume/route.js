import { historyModel } from "@/schemas/history.model";
import { resumeAnalyser } from "@/util/groqForAnalyseResume";
import { jsonParse } from "@/util/jsonParse";
import { convertPdfIntoText } from "@/util/pdfParse";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const token = await req?.cookies?.get("token");
    const decoded = jwt.verify(token?.value, process.env.JWT_SECRET_KEY);

    if (!file) {
      return NextResponse.json({
        success: false,
        message: "No file uploaded",
      });
    }
    const resume = await convertPdfIntoText(file);

    const resumeResult = await resumeAnalyser(resume);

    const resumeResultParse = jsonParse(resumeResult);

    await historyModel.create({
      resume: resumeResultParse,
      userId: decoded.id,
    });

    return NextResponse.json(
      {
        success: true,
        data: resumeResultParse,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

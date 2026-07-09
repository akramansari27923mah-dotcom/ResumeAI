"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileText, LoaderCircle, UploadCloud, X } from "lucide-react";
import { useResume } from "@/contexts/resume.context";
import { api } from "@/util/axios";
import { useRouter } from "next/navigation";
import { saveInLocalStorage } from "@/util/localstorage";
import { showSuccess } from "@/util/toaster";

export default function PdfUploader() {
  const [file, setFile] = useState(null);
  const { loading, setLoading, setResult } = useResume();
  const route = useRouter();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
    return showSuccess('Resume Uploaded')
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
    onDrop,
  });

  const handelResult = async () => {
    try {
      setLoading(true);

      const { data } = await api.post(
        "/groqForAnalyseResume",
        { file: file },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (data?.success) {
        showSuccess("Report Generated")
        setResult(data?.data);
        saveInLocalStorage("result", data?.data);
        route.push("/dashboard/analysis-report");
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto h-153 ">
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold text-white">Upload Your Resume</h2>
        <p className="mt-2 text-sm text-gray-500">
          Upload your resume in PDF format to receive an AI-powered analysis and
          personalized feedback.
        </p>
      </div>

      <div
        {...getRootProps()}
        className={`cursor-pointer rounded-2xl border-2 border-dashed p-10 transition-all duration-300
        ${
          isDragActive
            ? "border-blue-500 bg-blue-500/10"
            : "border-zinc-700 hover:border-blue-500 hover:bg-zinc-900"
        }`}
      >
        <input type="file" {...getInputProps()} />

        <div className="flex flex-col items-center text-center gap-4">
          <div className="rounded-full bg-blue-500/10 p-5">
            <UploadCloud className="h-10 w-10 text-blue-500" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white ">
              Upload Your Resume
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Drag & drop your PDF here or click to browse
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Only PDF files
            </p>
          </div>
        </div>
      </div>

      {file && (
        <>
          <div className="mt-5 flex items-center justify-between rounded-xl border border-zinc-700 bg-zinc-900 p-4">
            <div className="flex items-center gap-3">
              <FileText className="text-red-500" />

              <div>
                <p className="font-medium text-white">{file?.name}</p>

                {/* <p className="text-sm text-zinc-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p> */}
              </div>
            </div>

            <button
              onClick={() => setFile(null)}
              className="rounded-lg p-2 transition hover:bg-zinc-800"
            >
              <X className="h-5 w-5 text-zinc-400" />
            </button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              className={`px-4 py-3 bg-blue-600 text-white ${loading ? "cursor-progress" : "cursor-pointer"}`}
              onClick={handelResult}
            >
              {loading ? (
                <div className={`flex justify-center items-center gap-2`}>
                  <LoaderCircle className="animate-spin" />
                  <span>Analysing...</span>
                </div>
              ) : (
                "Analyses Resume"
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

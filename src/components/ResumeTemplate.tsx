'use client'

import { FormValues } from "@/utils/form";
import { PDFViewer } from "@react-pdf/renderer";
import { OceanTemplate } from "./resume/ocean";

export default function ResumeTemplate(data:FormValues) {

    return (
      <>
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center w-full h-full p-8">
        <div className="bg-white shadow-lg rounded-md p-4 w-full h-full" >
           <PDFViewer  width="100%" height="100%">
            <OceanTemplate {...data} />
           </PDFViewer>
        </div>
      </main>
    </>
    )
  }
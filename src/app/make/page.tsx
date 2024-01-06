"use client"

import ResumeFormCN from '@/components/ResumeFormCN'
import dynamic from 'next/dynamic';
import { FormValues } from '@/utils/form';
import { placeholderResumeDetails } from '@/utils/placeholderResumeDetails';
import { useState } from 'react'

const ResumePDF = dynamic(()=> import("@/components/ResumeTemplate"),{
  ssr:false
})

export default function Home() {

  const [resumeDetails , setResumeDetails] = useState<FormValues>(placeholderResumeDetails);

  function dataHandler(data:FormValues){
    setResumeDetails(data)
  }

  return (
    <div className='border-box flex h-screen'>
      <div className='w-1/2 m-10 overflow-scroll resume-template-container'>
        <ResumeFormCN resumeHandler={dataHandler}/>
      </div>

      <div className='w-1/2'>
        <ResumePDF {...resumeDetails}/>
      </div>
    </div>
  )
}

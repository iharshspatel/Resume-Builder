"use client"

import React from 'react'
import { Form, FormField } from "@/components/ui/form"
import { useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { FormValues } from '@/utils/form'
import InputField from './form/inputfield'
import TextArea from './form/textarea'
import DatePicker from './form/datepicker'

interface ResumeFormCNProps {
  resumeHandler: (values: FormValues) => void;
}

function ResumeFormCN({resumeHandler}:ResumeFormCNProps){

  const form = useForm<FormValues>();

  let { control, setValue, watch } = form

  const { fields: professionalExperience, append: appendExperience, remove: removeExperience } = useFieldArray({ control, name: "professionalExperience" })
  const { fields: customSections, append: appendCustomSection, remove: removeCustomSection } = useFieldArray({ control, name: 'customSections' });

  const addFieldToCustomSection = (sectionIndex: number) => {
    const newField = { name: '', city: '', startDate: new Date(), endDate: new Date(), location: '', description: '' };
    const updatedCustomSections = [...customSections];
    updatedCustomSections[sectionIndex].fields.push(newField);
    setValue('customSections', updatedCustomSections);
  };

  const removeFieldFromCustomSection = (sectionIndex: number, fieldIndex: number) => {
    const updatedCustomSections = [...customSections];
    updatedCustomSections[sectionIndex].fields.splice(fieldIndex, 1);
    setValue('customSections', updatedCustomSections);
  };

  function onSubmit(values: FormValues) {
    console.log(values)
    resumeHandler(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <div className='form-container'>

          <h3 className='text-lg font-bold block my-4'>Personal Details</h3>

          <div className='flex w-full flex-wrap personal-details-input-container'>

            <FormField
              control={form.control}
              name="personalDetails.jobTitle"
              render={({ field }) => (
                <InputField placeholder='Job Title' label='Job Title' field={field} description="" style="w-full flex-1 mx-2" />
              )}
            />

            <FormField
              control={form.control}
              name="personalDetails.firstName"
              render={({ field }) => (
                <InputField placeholder='First Name' label='First Name' field={field} description="" style="w-full flex-1 mx-2" />
              )}
            />

          </div>

          <div className='flex w-full flex-wrap personal-details-input-container'>

            <FormField
              control={form.control}
              name="personalDetails.lastName"
              render={({ field }) => (
                <InputField placeholder='Last Name' label='Last Name' field={field} description="" style="w-full flex-1 mx-2" />
              )}
            />


            <FormField
              control={form.control}
              name="personalDetails.email"
              render={({ field }) => (
                <InputField placeholder='Email' label='Email' field={field} description="" style="w-full flex-1 mx-2" />
              )}
            />
          </div>

          <div className='flex w-full flex-wrap personal-details-input-container'>
            <FormField
              control={form.control}
              name="personalDetails.phone"
              render={({ field }) => (
                <InputField placeholder='Phone' label='Phone' field={field} description="" style="w-full flex-1 mx-2" />
              )}
            />

            <FormField
              control={form.control}
              name="personalDetails.city"
              render={({ field }) => (
                <InputField placeholder='City' label='City' field={field} description="" style="w-full flex-1 mx-2" />
              )}
            />
          </div>

          <div className='w-1/2'>
            <FormField
              control={form.control}
              name="personalDetails.country"
              render={({ field }) => (
                <InputField placeholder='Country' label='Country' field={field} description="" style="mx-2" />
              )}
            />
          </div>
        </div>


        <div className='form-container'>

          <h3 className='text-lg font-bold block my-4'>Professional Summary</h3>

          <FormField
            control={form.control}
            name="professionalSummary"
            render={({ field }) => (
              <TextArea field={field} placeholder='Professional Summary' label='Professional Summary' description='' style='mx-2' />
            )}
          />

        </div>

        <div className='form-container'>

          <h3 className='text-lg font-bold block my-4'>Professional Experience</h3>

          {Array.isArray(professionalExperience) &&
            professionalExperience.map((experience, index) => (

              <div key={index}>

                <div className='flex w-full flex-wrap professional-details-input-container'>

                  <FormField
                    control={form.control}
                    name={`professionalExperience.${index}.title`}
                    render={({ field }) => (
                      <InputField placeholder='Title' label={`Title ${index + 1}`} field={field} description="" style="flex-1 mx-2" />
                    )}
                  />


                  <FormField
                    control={form.control}
                    name={`professionalExperience.${index}.employer`}
                    render={({ field }) => (
                      <InputField placeholder='Employer' label={`Employer ${index + 1}`} field={field} description="" style="w-full flex-1 mx-2" />
                    )}
                  />
                </div>

                <div className='flex w-full flex-wrap professional-details-input-container'>
                  <FormField
                    control={form.control}
                    name={`professionalExperience.${index}.startDate`}
                    render={({ field }) => (
                      <DatePicker field={field} placeholder='Pick a Date' description='' label='Start Date' style='w-full flex-1 mx-2' />
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`professionalExperience.${index}.endDate`}
                    render={({ field }) => (
                      <DatePicker field={field} placeholder='Pick a Date' description='' label='End Date' style='w-full flex-1 mx-2' />
                    )}
                  />
                </div>



                <FormField
                  control={form.control}
                  name={`professionalExperience.${index}.location`}
                  render={({ field }) => (
                    <InputField placeholder='Location' label={`Location ${index + 1}`} field={field} description="" style="mx-2" />
                  )}
                />



                <FormField
                  control={form.control}
                  name={`professionalExperience.${index}.description`}
                  render={({ field }) => (
                    <TextArea placeholder='Description' label={`Description ${index + 1}`} field={field} description='' style='mx-2' />
                  )}
                />

                <Button type="button" className='mx-2' onClick={() => removeExperience(index)}>
                  Remove Experience
                </Button>

              </div>
            ))}
          <Button type="button" className='my-5 mx-2' onClick={() => appendExperience({ title: '', employer: '', startDate: new Date(), endDate: new Date(), location: '', description: '' })}>
            Add Professional Experience
          </Button>

        </div>



        <div className='form-container'>

          <h3 className='text-lg font-bold block my-4'>College Details</h3>

          <div className='flex w-full flex-wrap personal-details-input-container'>

            <FormField
              control={form.control}
              name={`education.school`}
              render={({ field }) => (
                <InputField placeholder='College' label={`College`} field={field} description="" style="w-full flex-1 mx-2" />
              )}
            />


            <FormField
              control={form.control}
              name={`education.degree`}
              render={({ field }) => (
                <InputField placeholder='Degree' label={`Degree`} field={field} description="" style="w-full flex-1 mx-2" />
              )}
            />

          </div>

          <div className='flex w-full flex-wrap personal-details-input-container'>


            <FormField
              control={form.control}
              name={`education.startDate`}
              render={({ field }) => (
                <DatePicker field={field} placeholder='Pick a Date' description='' label='Start Date' style='w-full flex-1 mx-2' />
              )}
            />


            <FormField
              control={form.control}
              name={`education.endDate`}
              render={({ field }) => (
                <DatePicker field={field} placeholder='Pick a Date' description='' label='End Date' style='w-full flex-1 mx-2' />
              )}
            />

          </div>


        </div>


        <div className='form-container'>

          <h3 className='text-lg font-bold block my-4'>Custom Sections</h3>

          {Array.isArray(customSections) &&
            customSections.map((section, index) => (
              <div key={index} className='my-2'>


                <FormField
                  control={form.control}
                  name={`customSections.${index}.title`}
                  render={({ field }) => (
                    <InputField placeholder='Title' label={`Title ${index + 1}`} field={field} description="" style="mx-2" />
                  )}
                />





                {/* Fields within the custom section */}
                {section.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className='my-2'>

                    <div className='flex'>

                      <div className='mx-2 flex-1'>

                        <FormField
                          control={form.control}
                          name={`customSections.${index}.fields.${fieldIndex}.name`}
                          render={({ field }) => (
                            <InputField placeholder='Field' label={`Field`} field={field} description="" style="w-full flex-1" />
                          )}
                        />

                      </div>

                      <div className='flex-1 w-full mx-2'>

                        <FormField
                          control={form.control}
                          name={`customSections.${index}.fields.${fieldIndex}.city`}
                          render={({ field }) => (
                            <InputField placeholder='City' label={`City`} field={field} description="" style="w-full flex-" />
                          )}
                        />

                      </div>

                    </div>


                    <div className='flex w-full flex-wrap personal-details-input-container'>
                      <FormField
                        control={form.control}
                        name={`customSections.${index}.fields.${fieldIndex}.startDate`}
                        render={({ field }) => (
                          <DatePicker field={field} placeholder='Pick a Date' description='' label='Start Date' style='w-full flex-1 mx-2' />
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`customSections.${index}.fields.${fieldIndex}.endDate`}
                        render={({ field }) => (
                          <DatePicker field={field} placeholder='Pick a Date' description='' label='End Date' style='w-full flex-1 mx-2' />
                        )}
                      />

                    </div>

                    <FormField
                      control={form.control}
                      name={`customSections.${index}.fields.${fieldIndex}.location`}
                      render={({ field }) => (
                        <InputField placeholder='Location' label={`Location`} field={field} description="" style="mx-2" />
                      )}
                    />


                    <FormField
                      control={form.control}
                      name={`customSections.${index}.fields.${fieldIndex}.description`}
                      render={({ field }) => (
                        <TextArea placeholder='Description' label={`Description`} field={field} description='' style='mx-2' />
                      )}
                    />

                    <Button type="button" onClick={() => removeFieldFromCustomSection(index, fieldIndex)}>
                      Remove Field
                    </Button>
                  </div>

                ))}

                <Button
                  type="button" className='mr-2'
                  onClick={() => { addFieldToCustomSection(index) }}
                >
                  Add Field
                </Button>




                <Button type="button" onClick={() => removeCustomSection(index)}>
                  Remove Custom Section
                </Button>
              </div>
            ))}

        </div>

        <Button
          type="button"
          onClick={() => appendCustomSection({ title: '', fields: [{ name: '', city: '', startDate: new Date(), endDate: new Date(), location: '', description: '' }] })}
        >
          Add Custom Section
        </Button>


        <div className='w-full'>
          <Button className='w-1/4' type="submit">Submit</Button>
        </div>

      </form>

    </Form>
  )
}

export default ResumeFormCN
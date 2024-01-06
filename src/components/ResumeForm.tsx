"use client"
// components/DynamicForm.tsx
import React from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';

interface FormValues {
  personalDetails: {
    jobTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
  };
  professionalSummary: string;
  professionalExperience: {
    title: string;
    employer: string;
    startDate: Date;
    endDate: Date;
    location: string;
    description: string;
  }[];
  education: {
    school: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  };
  skills: string[];
  customSections: {
    title: string;
    fields: {
      name: string;
      city: string;
      startDate: Date;
      endDate: Date;
      location: string;
      description: string;
    }[];
  }[];
}

const DynamicForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const { fields: professionalExperience, append: appendExperience, remove: removeExperience } =
  useFieldArray({
    control,
    name: 'professionalExperience',
  }) as { fields:{
    name: string;
    city: string;
    startDate: Date;
    endDate: Date;
    location: string;
    description: string;
  }[]; append: Function; remove: Function };

  const { fields: customSections, append: appendCustomSection, remove: removeCustomSection } =
    useFieldArray({
      control,
      name: 'customSections',
    });

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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const watchCustomSections = watch('customSections');
  const watchSkills = watch('skills');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Personal Details */}
      <label>Job Title:</label>
      <input {...register('personalDetails.jobTitle')} />
      <label>First Name:</label>
      <input {...register('personalDetails.firstName')} />
      <label>Last Name:</label>
      <input {...register('personalDetails.lastName')} />
      <label>Email:</label>
      <input {...register('personalDetails.email')} />
      <label>Phone:</label>
      <input {...register('personalDetails.phone')} />
      <label>Country:</label>
      <input {...register('personalDetails.country')} />
      <label>City:</label>
      <input {...register('personalDetails.city')} />

      {/* Professional Summary */}
      <label>Professional Summary:</label>
      <textarea {...register('professionalSummary')} />

      {/* Professional Experience */}
      <label>Professional Experience:</label>
      {Array.isArray(professionalExperience) &&
        professionalExperience.map((experience, index) => (
          <div key={index}>
            <label>{`Title #${index + 1}`}</label>
            <input {...register(`professionalExperience.${index}.title`)} />
            <label>{`Employer #${index + 1}`}</label>
            <input {...register(`professionalExperience.${index}.employer`)} />
            <label>{`Start Date #${index + 1}`}</label>
            <input type="date" {...register(`professionalExperience.${index}.startDate`)} />
            <label>{`End Date #${index + 1}`}</label>
            <input type="date" {...register(`professionalExperience.${index}.endDate`)} />
            <label>{`Location #${index + 1}`}</label>
            <input {...register(`professionalExperience.${index}.location`)} />
            <label>{`Description #${index + 1}`}</label>
            <textarea {...register(`professionalExperience.${index}.description`)} />

            <button type="button" onClick={() => removeExperience(index)}>
              Remove Experience
            </button>
          </div>
        ))}
      <button type="button" onClick={() => appendExperience({ title: '', employer: '', startDate: '', endDate: '', location: '', description: '' })}>
        Add Professional Experience
      </button>

      {/* Education */}
      <label>School:</label>
      <input {...register('education.school')} />
      <label>Degree:</label>
      <input {...register('education.degree')} />
      <label>Start Date:</label>
      <input type="date" {...register('education.startDate')} />
      <label>End Date:</label>
      <input type="date" {...register('education.endDate')} />

      {/* Skills */}
      <label>Skills:</label>
      {Array.isArray(watchSkills) &&
        watchSkills.map((skill, index) => (
          <div key={index}>
            <input {...register(`skills.${index}` as const)} defaultValue={skill} />
            <button type="button" onClick={() => removeExperience(index)}>
              Remove Skill
            </button>
          </div>
        ))}
      <button type="button" onClick={() => appendExperience('')}>
        Add Skill
      </button>

      {/* Custom Sections */}
      <label>Custom Sections:</label>
      {Array.isArray(customSections) &&
        customSections.map((section, index) => (
          <div key={index}>
            <label>{`Custom Section Title #${index + 1}`}</label>
            <input {...register(`customSections.${index}.title`)} />

            {/* Fields within the custom section */}
            {section.fields.map((field, fieldIndex) => (
              <div key={fieldIndex}>
                <label>{`Field #${fieldIndex + 1}`}</label>
                <input {...register(`customSections.${index}.fields.${fieldIndex}.name`)} />
                <label>{`Field City #${fieldIndex + 1}`}</label>
                <input {...register(`customSections.${index}.fields.${fieldIndex}.city`)} />
                <label>{`Field Start Date #${fieldIndex + 1}`}</label>
                <input type="date" {...register(`customSections.${index}.fields.${fieldIndex}.startDate`)} />
                <label>{`Field End Date #${fieldIndex + 1}`}</label>
                <input type="date" {...register(`customSections.${index}.fields.${fieldIndex}.endDate`)} />
                <label>{`Field Location #${fieldIndex + 1}`}</label>
                <input {...register(`customSections.${index}.fields.${fieldIndex}.location`)} />
                <label>{`Field Description #${fieldIndex + 1}`}</label>
                <textarea {...register(`customSections.${index}.fields.${fieldIndex}.description`)} />
              </div>
            ))}

<button
  type="button"
  onClick={() => {addFieldToCustomSection(index)}}
>
  Add Field
</button>

<button type="button" onClick={() => removeFieldFromCustomSection(index, fieldIndex)}>
  Remove Field
</button>


            <button type="button" onClick={() => removeCustomSection(index)}>
              Remove Custom Section
            </button>
          </div>
        ))}
      <button
        type="button"
        onClick={() => appendCustomSection({ title: '', fields: [{ name: '', city: '', startDate: new Date(), endDate: new Date(), location: '', description: '' }] })}
      >
        Add Custom Section
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;

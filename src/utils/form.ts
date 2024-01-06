export interface FormValues {
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
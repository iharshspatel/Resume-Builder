import { FormValues } from "./form";

export const placeholderResumeDetails: FormValues = {
    personalDetails: {
      jobTitle: "Software Development Engineer",
      firstName: "Harsh",
      lastName: "Patel",
      email: "john.doe@example.com",
      phone: "+1 (123) 456-7890",
      country: "United States",
      city: "New York",
    },
    professionalSummary: "Dedicated and results-oriented professional with a proven track record in [Your Industry/Field]. Offering expertise in [Key Skill #1], [Key Skill #2], and [Key Skill #3]. Adept at collaborating with cross-functional teams to drive projects from concept to completion. Known for excellent problem-solving and communication skills. Committed to continuous learning and staying abreast of industry trends. Seeking a challenging role to leverage my skills and contribute to the success of a dynamic organization.",
    professionalExperience: [
      {
        title: "Senior Developer",
        employer: "TechCorp",
        startDate: new Date("2020-01-01"),
        endDate: new Date("2022-12-31"),
        location: "San Francisco",
        description: "Led a team of developers to deliver high-quality software solutions.",
      },
      {
        title: "Junior Developer",
        employer: "CodeCo",
        startDate: new Date("2018-05-01"),
        endDate: new Date("2019-12-31"),
        location: "Los Angeles",
        description: "Contributed to various projects and gained valuable experience in software development.",
      },
    ],
    education: {
      school: "University of Tech",
      degree: "Bachelor of Science in Computer Science",
      startDate: new Date("2014-09-01"),
      endDate: new Date("2018-05-31"),
    },
    skills: ["JavaScript", "React", "Node.js", "Java", "SQL"],
    customSections: [
      {
        title: "Project Experience",
        fields: [
          {
            name: "Project A",
            city: "San Francisco",
            startDate: new Date("2019-01-15"),
            endDate: new Date("2019-05-30"),
            location: "TechCorp",
            description: "Developed a scalable web application using React and Node.js.",
          },
          {
            name: "Project B",
            city: "Los Angeles",
            startDate: new Date("2018-06-01"),
            endDate: new Date("2018-12-15"),
            location: "CodeCo",
            description: "Implemented new features and fixed bugs in an existing Java-based application.",
          },
        ],
      },
    ],
  };
  
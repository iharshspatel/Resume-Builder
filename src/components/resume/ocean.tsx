"use client"

import { FormValues } from "@/utils/form";
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Open Sans',
  fonts: [
  { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
  { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
  ]
  });

const monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];

const styles = StyleSheet.create({
  page: {
    width:"100%",
    flexDirection: 'column',
    fontSize:"10",
    padding:"30px",
    fontFamily:'Open Sans'
  },
  headerSection:{
    width:"100%"
  },
  headerTitle:{
    fontSize:"25",
    margin:"5 0",
    fontWeight:"heavy"
  },
  contactDetailsContaier:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  contactDetails:{
    margin:"5px 0px"
  },
  contactDetail:{
    margin:"2px"
  },
  lineBreak:{
    borderWidth:1,
    borderBottom:1,
    borderColor:"black",
    marginVertical:1
  },
  sections:{
    margin:"10 0"
  },
  sectionTitle:{
    fontWeight:'bold',
    fontSize:"15" 
  },
  sectionSubTitle:{
    fontWeight:'bold',
    fontSize:"12",
    margin:"2px 0px"
  },
  sectionsDetails:{
    margin:"5px 0px"
  },
  subHeaderContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  }
});


export const OceanTemplate = ({ personalDetails, professionalSummary, professionalExperience, education, skills, customSections }:FormValues) => {

  const { jobTitle, firstName, lastName, email, phone, country, city } = personalDetails;
  console.log(professionalExperience, "This is professional Experience")

  return(
  <Document>
    <Page size="A4" object-fit="fill" style={styles.page}>
      <View style={styles.headerSection}>
        <Text style={styles.headerTitle}>{ firstName } { lastName }</Text>
        <Text>{ jobTitle }</Text>

        <View style={styles.contactDetailsContaier}>

            <View style={styles.contactDetails}>
             { email && <Text style={styles.contactDetail}>Email : { email }</Text>}
             { phone && <Text style={styles.contactDetail}>Phone: { phone }</Text>}
            </View>

        </View>

      </View>
        
      <View style={styles.lineBreak}></View>


      <View style={styles.sections}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.sectionsDetails}>{ professionalSummary && professionalSummary}</Text>
      </View>

      <View style={styles.lineBreak}></View>  

      { professionalExperience && <View style={styles.sections}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>

        {
          professionalExperience?.map((exp)=>(
            <View key={exp.employer}>
              <View style={styles.subHeaderContainer}>
                <Text style={styles.sectionSubTitle}>{exp?.title} , At {exp?.employer}</Text>
                <Text> {monthNames[exp?.startDate?.getMonth()]},{exp?.startDate?.getFullYear()} - {monthNames[exp?.endDate?.getMonth()]},{exp?.endDate?.getFullYear()}</Text>
              </View>
              <View>
                <Text>{exp.description}</Text>
              </View>
            </View>
          ))
        }
      </View>
      }

      <View style={styles.lineBreak}></View>  

      <View style={styles.sections}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.subHeaderContainer}>
                <Text style={styles.sectionSubTitle}>{education.school} , {education.degree}</Text>
                <Text> {monthNames[education?.startDate?.getMonth()]},{education?.startDate?.getFullYear()} - {monthNames[education?.endDate?.getMonth()]},{education?.endDate?.getFullYear()}</Text>
        </View>
      </View>

      <View style={styles.lineBreak}></View>  


        {
          customSections.map((customSection)=>(
            <View style={styles.sections}>
              <Text style={styles.sectionTitle}>{customSection.title}</Text>
              {
                customSection.fields.map((field) => (
                  <View key={field.name}>
                  <View style={styles.subHeaderContainer}>
                    <Text style={styles.sectionSubTitle}>{field.name} {field.location && `, At ${field.location}`}</Text>
                    <Text> {monthNames[field?.startDate.getMonth()]},{field?.startDate.getFullYear()} - {monthNames[field.endDate.getMonth()]},{field.endDate.getFullYear()}</Text>
                   </View>
                   
                    <Text>{field.description}</Text>
                  </View>
                ))
              }
            </View>
          ))
        }


        
      
        
    </Page>
  </Document>
)};



  
  
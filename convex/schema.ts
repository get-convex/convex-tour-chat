import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";


export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
  }),
  doctors: defineTable({
    // doctorID: v.id("doctors"), //unique assigned id
    doctorName: v.string(), //First Last
    doctorUsername: v.string(), //username to log in with should be email
    doctorPassword: v.string(), //user password
    doctorPatients: v.array(v.id("patients")) //do doctors need to keep track of their patients?

  }),
  patients: defineTable({ //classification, so will set all data to be numerical
    // patientID: v.id("patients"), //unique assigned id
    patientName: v.object({
      first: v.string(),
      middle: v.string(),
      last: v.string()
  }), //First Last
    patientAge: v.number(),
    patientEthnicity: v.number(), // 0: Caucasian, 1: African American, 2: Asian, 3: Other
    patientEducation: v.number(), //3: higher, 2: bachelors, 1: high school, 0: none
    patientBMI: v.number(), 
    patientSmokes: v.number(), //0 for no smoke, 1 for yes smoke
    patientAlcoholConsumption: v.number(), //alcohol consumption in units(10ml per unit)
    patientPhysicalActivity: v.number(), //number of hours 
    patientFamilyHistory: v.number(), //0 for no family history of parkinsons, 1 for yes
    patientBrainInjury: v.number(), //0 for no, 1 for yes traumatic brain injury
    patientHypertension: v.number(), //presence
    patientDiabetes: v.number(), //presence
    patientDepression: v.number(), //presence
    patientStroke: v.number(), //history
    patientSystolicBP: v.number(), //mmHg of systolic blood pressure
    patientDiastolicBP: v.number(), //mmHg
    patientCholestrolTotal: v.number(), //mg/dL for all cholestrols
    patientCholestrolHDL: v.number(), 
    patientCholestrolLDL: v.number(),
    patientCholestrolTriglycerides: v.number(),
    patientTests: v.array(v.id("tests")), //array of all the tests this patient has taken
    //symptoms and cognitive later perhaps
  }),
  tests: defineTable({ //for each test:
    nRounds: v.number(), //how many rounds of testing
    testType: v.string(), //0 for visual, 1 for auditory, 2 for mix?
    reactionResults: v.array(v.number()), //array of trial times, the time it took from sound/viisual to button press
    pressResults: v.array(v.number()), //time person was pressing button for each trial
    patient: v.id("patients"), //patient's id
    // date: v.object({ //datetime of the test initialization
    //   month: v.int64(),
    //   day: v.int64(),
    //   year: v.int64(),
    //   time: v.number(), //time as a decimal hours 1-24 . minutes 0-59, 12pm = 12.00
    // }),
    outcome: v.number(), //either Parkinsons (1) or no disease (0)
  }),
  ...authTables, //authentication

});
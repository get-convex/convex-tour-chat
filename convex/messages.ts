import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent messages.
    const messages = await ctx.db.query("messages").order("desc").take(100);
    // Reverse the list so that it's in a chronological order.
    return messages.reverse();
  },
});

export const send = mutation({
  args: { body: v.string(), author: v.string() },
  handler: async (ctx, { body, author }) => {
    // Send a new message.
    await ctx.db.insert("messages", { body, author });
  },
});


//adds a patient to the current doctor
export const addPatient = mutation({
  args: { patientName: v.object({
    first: v.string(),
    middle: v.string(),
    last: v.string()
    }), //First Last
    patientAge: v.number(),
    patientEthnicity: v.union(v.literal(3), v.literal(2), v.literal(1), v.literal(0)), // 0: Caucasian, 1: African American, 2: Asian, 3: Other
    patientEducation: v.union(v.literal(3), v.literal(2), v.literal(1), v.literal(0)), //3: higher, 2: bachelors, 1: high school, 0: none
    patientBMI: v.number(), 
    patientSmokes: v.union(v.literal(1), v.literal(0)), //0 for no smoke, 1 for yes smoke
    patientAlcoholConsumption: v.number(), //alcohol consumption in units(10ml per unit)
    patientPhysicalActivity: v.number(), //number of hours 
    patientFamilyHistory: v.union(v.literal(1), v.literal(0)), //0 for no family history of parkinsons, 1 for yes
    patientBrainInjury: v.union(v.literal(1), v.literal(0)), //0 for no, 1 for yes traumatic brain injury
    patientHyptertension: v.union(v.literal(1), v.literal(0)), //presence
    patientDiabetes: v.union(v.literal(1), v.literal(0)), //presence
    patientDepression: v.union(v.literal(1), v.literal(0)), //presence
    patientStroke: v.union(v.literal(1), v.literal(0)), //history
    patientSystolicBP: v.number(), //mmHg of systolic blood pressure
    patientDiastolicBP: v.number(), //mmHg
    patientCholestrolTotal: v.number(), //mg/dL for all cholestrols
    patientCholestrolHDL: v.number(), 
    patientCholestrolLDL: v.number(),
    patientCholestrolTriglycerides: v.number(),
    doctorID: v.id("doctors"), //id of person who added patient
  },
  handler: async (ctx, args) => {
    const newPatientID = await ctx.db.insert("patients", 
      { //DO WE NEED AN ID?
      patientName: args.patientName,
      patientAge: args.patientAge,
      patientEthnicity: args.patientEthnicity,
      patientEducation: args.patientEducation,
      patientBMI: args.patientBMI,
      patientSmokes: args.patientSmokes,
      patientAlcoholConsumption: args.patientAlcoholConsumption,
      patientPhysicalActivity:args.patientPhysicalActivity,
      patientFamilyHistory: args.patientFamilyHistory,
      patientBrainInjury: args.patientBrainInjury,
      patientHyptertension: args.patientHyptertension,
      patientDiabetes: args.patientDiabetes,
      patientDepression: args.patientDepression,
      patientStroke: args.patientStroke,
      patientSystolicBP: args.patientSystolicBP,
      patientDiastolicBP: args.patientDiastolicBP,
      patientCholestrolTotal: args.patientCholestrolTotal,
      patientCholestrolHDL: args.patientCholestrolHDL,
      patientCholestrolLDL: args.patientCholestrolLDL,
      patientCholestrolTriglycerides: args.patientCholestrolTriglycerides,
      patientTests: [], //init new array
      }
    );
    const doc = await ctx.db.get(args.doctorID); //gets doctor, to update their list of patients
    if(!doc){
      throw new Error("doc does not exist");
    }
    const newPatients = [...doc.doctorPatients, newPatientID];
    await ctx.db.patch(args.doctorID, {doctorPatients: newPatients});
  },

});


 //list of patients for that doctor, in chronologically added order
export const listPatients = query({
  args: {},
  handler: async (ctx) => {
    // Grab all patients
    const patients = await ctx.db.query("patients").collect();
    return patients;
  },
});


export const registerDoc = mutation({
  args: {
    name: v.string(), //first, Last
    username: v.string(), //email
    password: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("doctors", { 
      doctorName: args.name,
      doctorPassword: args.password,
      doctorPatients: [],
      doctorUsername: args.username,
    });
  },
});

//begins a new test
export const beginTest = mutation({
  args: {
    testType: v.union(v.literal("visual"), v.literal("auditory"), v.literal("mix")),
    nRounds: v.number(),
    patient: v.id("patients")
  },
  handler: async(ctx, args) => {
    const testid = await ctx.db.insert("tests", {
      patient: args.patient,
      nRounds: args.nRounds,
      testType: args.testType,
      reactionResults: [],
      motorResults: [],
      outcome: -1
    });
    const patient = await ctx.db.get(args.patient);
    if(!patient) throw new Error("patient DNE");
    await ctx.db.patch(args.patient, { //update set of tests patient is taking
      patientTests: [...patient.patientTests, testid]
    });
  },
})
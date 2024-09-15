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
      patientHypertension: args.patientHypertension,
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

//update patient data
export const updatePatientName = mutation({
  args: {
    patientID: v.id("patients"),
    patientName: v.object({
      first: v.string(),
      middle: v.string(),
      last: v.string()
      }), //First Last
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientName: args.patientName});
  }
});

export const updatePatientAge = mutation({
  args: {
    patientID: v.id("patients"),
    patientAge: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientAge: args.patientAge});
  }
});

export const updatePatientEthnicity = mutation({
  args: {
    patientID: v.id("patients"),
    patientEthinicity: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientEthnicity: args.patientEthinicity});
  }
});

export const updatePatientEducation = mutation({
  args: {
    patientID: v.id("patients"),
    patientEducation: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientEducation: args.patientEducation});
  }
});

export const updatePatientBMI = mutation({
  args: {
    patientID: v.id("patients"),
    patientBMI: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientBMI: args.patientBMI});
  }
});

export const updatePatientSmokes = mutation({
  args: {
    patientID: v.id("patients"),
    patientSmokes: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientSmokes: args.patientSmokes});
  }
});

export const updatePatientAlcoholConsumption = mutation({
  args: {
    patientID: v.id("patients"),
    patientAlcohol: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientAlcoholConsumption: args.patientAlcohol});
  }
});

export const updatePatientPhysicalActivity= mutation({
  args: {
    patientID: v.id("patients"),
    patientPhysicalActivity: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientPhysicalActivity: args.patientPhysicalActivity});
  }
});

export const updatePatientFamilyHistory= mutation({
  args: {
    patientID: v.id("patients"),
    patientHist: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientFamilyHistory: args.patientHist});
  }
});

export const updatePatientBrainInjury= mutation({
  args: {
    patientID: v.id("patients"),
    patientBrainInjury: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientBrainInjury: args.patientBrainInjury});
  }
});

export const updatePatientHypertension= mutation({
  args: {
    patientID: v.id("patients"),
    patientHypertension: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientHypertension: args.patientHypertension});
  }
});

export const updatePatientDiabetes= mutation({
  args: {
    patientID: v.id("patients"),
    patientDiabetes: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientDiabetes: args.patientDiabetes});
  }
});

export const updatePatientDepression= mutation({
  args: {
    patientID: v.id("patients"),
    patientDepression: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientDepression: args.patientDepression});
  }
});

export const updatePatientStroke= mutation({
  args: {
    patientID: v.id("patients"),
    patientStroke: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientStroke: args.patientStroke});
  }
});

export const updatePatientSystolicBP= mutation({
  args: {
    patientID: v.id("patients"),
    patientSysBP: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientSystolicBP: args.patientSysBP});
  }
});

export const updatePatientDiastolicBP= mutation({
  args: {
    patientID: v.id("patients"),
    patientDiaBP: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientDiastolicBP: args.patientDiaBP});
  }
});

export const updatePatientCholestrolTotal= mutation({
  args: {
    patientID: v.id("patients"),
    patientCholestrolTotal: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientCholestrolTotal: args.patientCholestrolTotal});
  }
});

export const updatePatientCholestrolHDL= mutation({
  args: {
    patientID: v.id("patients"),
    patientHDL: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientCholestrolHDL: args.patientHDL});
  }
});

export const updatePatientCholestrolLDL= mutation({
  args: {
    patientID: v.id("patients"),
    patientLDL: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientCholestrolLDL: args.patientLDL});
  }
});

export const updatePatientTriglycerides= mutation({
  args: {
    patientID: v.id("patients"),
    patientTriglycerides: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.patientID, {patientCholestrolTriglycerides: args.patientTriglycerides});
  }
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


//new doctor
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
    testType: v.string(),
    nRounds: v.number(),
    patient: v.id("patients")
  },
  handler: async(ctx, args) => {
    const testid = await ctx.db.insert("tests", {
      patient: args.patient,
      nRounds: args.nRounds,
      testType: args.testType,
      reactionResults: [],
      pressResults: [],
      outcome: -1
    });
    const patient = await ctx.db.get(args.patient);
    if(!patient) throw new Error("patient Does Not Exist");
    await ctx.db.patch(args.patient, { //update set of tests patient is taking
      patientTests: [...patient.patientTests, testid]
    });
  },
})


export const getDocByName = query({  //reeturns the document of specified doctor (their username)
  args: {username: v.string()}, //
  handler: async (ctx, args) => {
    // Grab first unique doctor by their usename
    const doc = await ctx.db.query("doctors").filter(q => q.eq(q.field("doctorUsername"), args.username)).unique();
    console.log("doc", doc);
    return doc;
  },
});


//the code for each round of test (read in from arduino?)

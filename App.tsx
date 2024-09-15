// import { useQuery, useMutation } from "convex/react";
// import { api } from "../convex/_generated/api";
import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";


// For demo purposes. In a real app, you'd have real user data.

// const addPatient = useMutation(api.messages.addPatient)

function NavBar() {
  return (
    <nav className="bg-blue-700 text-white">
        <ul className="flex flex-row p-2 gap-2 text-xl justify-start">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
    </nav>
  )
}

function About() {
  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
      <div>
        <h1>Patient Disease Classification</h1>
        <p>This is the page about disease classification.</p>
      </div>
    </main>
  );
}

function Home() {
  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-start mx-20 mt-40">
          <h1 className="font-bold mb-4 text-5xl mx-20">The solution to testing patient reaction times for accurate diagnosis</h1>
        </div>
        <div className="flex flex-row justify-start gap-2 mx-40 mt-4 text-xl">
          Get Started Now:
          <a href="/createaccount"><button className="rounded-md py-1 px-2 bg-blue-700 text-white">Create Account</button></a>
          <a href="/login"><button className="rounded-md py-1 px-2 text-blue-700 bg-white">Log In</button></a>
        </div>
        </div>
    </main>
  );
}




function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    console.log(value)
    setFormData({
      ... formData,
      [name]: value
    })
  }
  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
      <div className="flex flex-row justify-center">
        <div className="flex flex-col h-full justify-center">
          <div className="mt-16 bg-white w-60 p-4 rounded-lg shadow-md">
            <h1 className="text-bold text-2xl">Log In</h1>
            <form className="flex flex-col gap-2">
              <label>Username:</label>
              <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange}></input><br />
              <label>Password:</label>
              <input type="password"></input><br />
              <button type="submit" className="rounded-md p-2 bg-blue-700 text-white" onClick={()=>{alert("Login button pressed")}}>Log In</button>
            </form>
            <div className="bg-red-200 text-red-800 p-2 my-2 rounded-md flex flex-row justify-start hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <p>Incorrect Username or Password</p>
            </div>
            <p className="m-2">Don't have an account? <a href="/createaccount" className="text-blue-700">Create Account</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}


function CreateAccount() {
  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
      <div className="flex flex-row justify-center">
        <div className="flex flex-col h-full justify-center">
          <div className="mt-16 bg-white w-60 p-4 rounded-lg shadow-md">
            <h1 className="text-bold text-2xl">Create Account</h1>
            <form className="flex flex-col gap-1">
              <label>Name:</label>
              <input name="foo"></input><br />
              <label>Username:</label>
              <input></input><br />
              <label>Password:</label>
              <input type="password"></input><br />
              <label>Confirm Password:</label>
              <input type="password"></input><br />
              <button type="submit" className="rounded-md p-2 bg-blue-700 text-white" onClick={()=>{alert()}}>Create Account</button>
            </form>
            <div className="bg-red-200 text-red-800 p-2 my-2 rounded-md flex flex-row justify-start hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <p>One or more fields unfilled</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Patient({ lname, fname }: { lname: string , fname: string }) {
  const navigate = useNavigate()
  return (
    <div className="bg-white shadow-md rounded-md flex flex-row my-4">
      <div className="flex flex-row justify-between w-full py-4 px-6 text-lg">
        <p>{lname}, {fname}</p>
        <div>
          <button className="px-2 py-1 mx-2">View Data</button>
          <button className="px-2 py-1 mx-2 text-white bg-blue-700" onClick={()=>{navigate("/test")}}>Run Test</button>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <main className= "h-screen w-screen  ">
    <NavBar />
    <div className="m-20">
      <h1 className="text-4xl font-bold">Dashboard</h1>
    <a href="/addpatient"><button className="bg-blue-700 text-white px-2 py-1 my-2">+ Add Patient</button></a>
    <div className="grid grid-cols-1">
      <Patient lname="Fake" fname="Patient"/>
    </div>
    </div>
  </main>
)
}




function AddPatient() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mname: '',
    age: '',
    sex: 'Select',
    race: "Select",
    education: 'Select',
    historyOfParkinsons: false,
    traumaticBrainInjury: false,
    hypertension: false,
    diabetes: false,
    depression: false,
    stroke: false,
    smoking: false,
    alcoholConsumption: "",
    physicalActivity: "",
    bodyMassIndex: "",
    sysBP: "",
    diaBP: "",
    totalCholesterol: "",
    LDLCholesterol: "",
    HDLCholesterol: "",
    triglycerides: "",
    updrs: "",
    moca: "",
    cogFunction: "",
    tremors: false,
    rigidity: false,
    bradykinesia: false,
    posInstability: false,
    speechProblem: false,
    sleepDisorder: false,
    constipation: false,
    parkinsonsDisease: false
  })


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({
      ... formData,
      [name]: value
    })
  }
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, type, value, checked} = e.target
    setFormData({
      ... formData,
      [name]: type === 'checkbox' ? checked : value,    })
  }

  const handleSubmit = await (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // await addPatient({
    //   patientName: {
    //     first: formData.fname,
    //     middle: formData.mname,
    //     last: formData.lname
    //   },
    //   patientAge: Number(formData.age),
    //   patientEthnicity: Number(formData.race),
    //   patientEducation: Number(formData.education),
    //   patientBMI: Number(formData.bodyMassIndex),
    //   patientSmokes: Number(formData.smoking),
    //   patientAlcoholConsumption: Number(formData.alcoholConsumption),
    //   patientPhysicalActivity: Number(formData.physicalActivity),
    //   patientFamilyHistory: Number(formData.historyOfParkinsons),
    //   patientBrainInjury: Number(formData.traumaticBrainInjury),
    //   patientHypertension: Number(formData.hypertension),
    //   patientDiabetes: Number(formData.diabetes),
    //   patientDepression: Number(formData.depression),
    //   patientStroke: Number(formData.stroke),
    //   patientSystolicBP: Number(formData.sysBP),
    //   patientDiastolicBP: Number(formData.diaBP),
    //   patientCholestrolHDL: Number(formData.HDLCholesterol),
    //   patientCholestrolLDL: Number(formData.LDLCholesterol),
    //   patientCholestrolTotal: Number(formData.totalCholesterol),
    //   patientCholestrolTriglycerides: Number(formData.triglycerides),
    // })
    console.log("Submission Successful patient added. !")
    navigate("/dashboard")
  }
  return (
    <main className= "w-screen h-screen">
      <NavBar />
      <div className="m-10 flex flex-col justify-center w-full">
        <h1 className="font-bold text-4xl">Add Patient</h1>
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl">General Information</h2>
          <label> First Name: </label><input id="fname" name="fname" type="text" value={formData.fname} onChange={handleInputChange}></input>
          <label> Middle Name: </label><input  id="mname" name="mname" type="text" value={formData.mname} onChange={handleInputChange}></input>
          <label> Last Name: </label><input  id="lname" name="lname" type="text" value={formData.lname} onChange={handleInputChange}></input><br />
          <label>Age: </label><input  id="age" name="age" type="text" value={formData.age} onChange={handleInputChange}></input>
          <label> Biological Sex: </label>
          <select id="sex" name="sex" value={formData.sex} onChange={handleInputChange}>
            <option value="Select">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <label> Race: </label>
          <select id="race" name="race" value={formData.race} onChange={handleInputChange}>
            <option value = "Select">Select</option>
            <option value="African American">African American</option>
            <option value="Asian">Asian</option>
            <option value="Caucasian">Caucasian</option>
            <option value="Other">Other</option>
          </select>
          <label> Education: </label>
          <select  name="education" id="education" value={formData.education} onChange={handleInputChange}>
            <option value="Select">Select</option>
            <option value="No Education">Less than High School</option>
            <option value="High School">High School Diploma</option>
            <option value="Bachelors">Bachelor's Degree</option>
            <option value="Higher">Graduate Degree</option>
          </select>
          <br />
          <h2 className="text-2xl">Medical History</h2>
          <p>Check all that apply:</p>
          <input type="checkbox" checked={formData.historyOfParkinsons} id="historyOfParkinsons" name="historyOfParkinsons" onChange={handleCheckbox}></input><label> Family History of Parkinson's Disease</label>
          <input type="checkbox" checked={formData.traumaticBrainInjury} id="traumaticBrainInjury" name="traumaticBrainInjury" onChange={handleCheckbox}></input><label> Traumatic Brain Injury</label>
          <input type="checkbox" checked={formData.hypertension} id="hypertension" name="hypertension" onChange={handleCheckbox}></input><label> Hypertension</label>
          <input type="checkbox" checked={formData.diabetes} id="diabetes" name="diabetes" onChange={handleCheckbox}></input><label> Diabetes</label>
          <input type="checkbox" checked={formData.depression} id="depression" name="depression" onChange={handleCheckbox}></input><label> Depression</label>
          <input type="checkbox" checked={formData.stroke} id="stroke" name="stroke" onChange={handleCheckbox}></input><label> Stroke</label><br />
          <h2 className="text-2xl">Lifestyle</h2>
          <input type="checkbox" checked={formData.smoking} id="smoking" name="smoking" onChange={handleCheckbox}></input><label> Smoking</label>
          <label>Alcohol Consumption: </label><input id="alcoholConsumption" name="alcoholConsumption" type="text" value={formData.alcoholConsumption} onChange={handleInputChange}></input>
          <label>Physical Activity: </label><input id="physicalActivity" name="physicalActivity" type="text" value={formData.physicalActivity} onChange={handleInputChange}></input>
          <label>Body Mass Index: </label><input id="bodyMassIndex" name="bodyMassIndex" type="text" value={formData.bodyMassIndex} onChange={handleInputChange}></input><br />
          <h2 className="text-2xl">Clinical Measurements</h2>
          <label>Blood Pressure: </label><input id="sysBP" name="sysBP" type="text" value={formData.sysBP} onChange={handleInputChange}></input>/<input id="diaBP" name="diaBP" type="text" value={formData.diaBP} onChange={handleInputChange}></input><br />
          <label>Cholesterol: Total </label><input id="totalCholesterol" name="totalCholesterol" type="text" value={formData.totalCholesterol} onChange={handleInputChange}></input>
          <label> LDL </label><input id="LDLCholesterol" name="LDLCholesterol" type="text" value={formData.LDLCholesterol} onChange={handleInputChange}></input>
          <label> HDL </label><input id="HDLCholesterol" name="HDLCholesterol" type="text" value={formData.HDLCholesterol} onChange={handleInputChange}></input>
          <label> Triglycerides </label><input id="triglycerides" name="triglycerides" type="text" value={formData.triglycerides} onChange={handleInputChange}></input><br />
          <h2 className="text-2xl">Clinical Measurements</h2>
          <label>UPDRS (Unified PArkinson's Disease Rating Scale Score): </label><input id="updrs" name="updrs" type="text" value={formData.updrs} onChange={handleInputChange}></input>
          <label>MoCA (Montreal Cognitive Assessment Score): </label><input id="moca" name="moca" type="text" value={formData.moca} onChange={handleInputChange}></input>
          <label>Functional Assessment Score: </label><input id="cogFunction" name="cogFunction" type="text" value={formData.cogFunction} onChange={handleInputChange}></input><br />
          <h2 className="text-2xl">Symptoms</h2>
          <p>Check all that apply:</p>
          <input type="checkbox"  checked={formData.tremors} id="tremors" name="tremors" onChange={handleCheckbox}></input><label> Tremor</label>
          <input type="checkbox"  checked={formData.rigidity} id="rigidity" name="rigidity" onChange={handleCheckbox}></input><label> Rigidity</label>
          <input type="checkbox"  checked={formData.bradykinesia} id="bradykinesia" name="bradykinesia" onChange={handleCheckbox}></input><label> Bradykinesia</label>
          <input type="checkbox"  checked={formData.posInstability} id="posInstability" name="posInstability" onChange={handleCheckbox}></input><label> Postural Instability</label>
          <input type="checkbox"  checked={formData.speechProblem} id="speechProblem" name="speechProblem" onChange={handleCheckbox}></input><label> Speech Problems</label>
          <input type="checkbox"  checked={formData.sleepDisorder} id="sleepDisorder" name="sleepDisorder" onChange={handleCheckbox}></input><label> Sleep Disorder</label>
          <input type="checkbox"  checked={formData.constipation} id="constipation" name="constipation" onChange={handleCheckbox}></input><label> Constipation</label><br />
          <h2 className="text-2xl">Diagnosis</h2>
          <input type="checkbox"  checked={formData.parkinsonsDisease} id="parkinsonsDisease" name="parkinsonsDisease" onChange={handleCheckbox}></input><label> Parkinson's Disease</label><br />
          <button type="submit" className="rounded-md bg-blue-700 px-2 py-1 m-2 text-white">Submit</button>
          <button className="px-2 py-1 m-2" onClick={()=>navigate("/dashboard")}>Cancel</button>
        </form>
      </div>
    </main>
  )
}

function Test({ lname , fname , sex , age }: { lname: string, fname: string, sex: string, age: string}) {
  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
      <div class="m-20">
        <h1 className="text-4xl font-bold">Run Reaction Time Test</h1>
        <p>Place patient's left and right fingers on the buttons. An LED Light will flash, and the patient should immediately press both buttons.</p>
        <p>Before running the test, please review the following patient information:</p>
        <p><strong>Name: </strong> {lname}, {fname}</p>
        <p><strong>Sex: </strong> {sex}</p>
        <p><strong>Age: </strong> {age}</p>
        <form>
          <label>Number of Trials to Run: </label><select>
            <option>Select</option>
            <option>5</option>
            <option>10</option>
          </select>
        </form>
        <button className="bg-blue-700 text-white px-2 py-1 m-2 text-xl rounded-md">Begin Test</button>
        <button disabled className="bg-blue-700 disabled:bg-slate-300 text-white px-2 py-1 my-2 text-xl rounded-md">View Results</button>
      </div>
    </main>
  )
}

function Results() {
  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
    </main>
  )
}










// // //






export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/addpatient" element={<AddPatient />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
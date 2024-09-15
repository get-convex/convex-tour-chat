import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import {useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { mutation } from "../convex/_generated/server";
//const addPatient = useMutation(api.messages.addPatient)
// For demo purposes. In a real app, you'd have real user data.

function NavBar() {
  return (
    <nav className="bg-primary text-white">
        <ul className="flex flex-row p-2 px-6 gap-4 justify-start">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/patientanalytics">Patient Analytics</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
    </nav>
  )
}



function About() {
  useEffect(() => {
    // Create and append the Visme script for both embeds
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/visme-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="h-screen w-screen">
      <NavBar />
      <div className="flex flex-row justify-center">
        <div>
        <h1 className="text-4xl m-14 font-bold text-primary">Patient Disease Classification</h1>
        <p className="m-14 text-primary-dark">NeuroTrack created a computational algortithm to perform a content-agnostic analysis of the timing of pressing and releasing keystrokes during a controlled series of trials. Combining this information with the patient's medical record, we were able to use machine learning to identify biomarkers of functional impairments in motor development and cognition. A decline in motor function and congition can be an indicator of neurodegenrative disease progression.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 justify-around">
      <div className="column">
            <div
              className="visme_d"
              data-title="patient reaction time"
              data-url="76rqjxez-site-traffic-line-graph-square"
              data-w="600"
              data-full-h="false"
              data-h="500"
              data-domain="my"
              style={{ width: "100%", height: "100%" }}
            ></div>
            <p
              style={{
                width: "142px",
                borderRadius: "3px",
                padding: "3px",
                fontSize: "12px",
                fontFamily: "Arial, sans-serif",
                color: "#314152",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              <a
                href="https://www.visme.co/?vc=Made-With-Visme&utm_medium=Embed"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                  color: "#314152",
                  whiteSpace: "nowrap",
                }}
              >

              </a>
            </p>
          </div>
          <div className="column" >
            <div
              className="visme_d"
              data-title="patient hold time"
              data-url="x40pxvwn-patient-hold-time"
              data-w="600"
              data-full-h="false"
              data-h="500"
              data-domain="my"
              style={{ width: "100%", height: "100%" }}
            ></div>
            <p
              style={{
                width: "142px",
                borderRadius: "3px",
                padding: "3px",
                fontSize: "12px",
                fontFamily: "Arial, sans-serif",
                color: "#314152",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              <a
                href="https://www.visme.co/?vc=Made-With-Visme&utm_medium=Embed"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                  color: "#314152",
                  whiteSpace: "nowrap",
                }}
              >

              </a>
            </p>
          </div>
          <div className="column">
            <div
              className="visme_d"
              data-title="patient hold time compared to baseline and parkinson&#x27;s"
              data-url="6x0j4473-patient-hold-time-compared-to-baseline-and-parkinson-s"
              data-w="600"
              data-full-h="false"
              data-h="500"
              data-domain="my"
              style={{ width: "100%", height: "100%" }}
            ></div>
            <p
              style={{
                width: "142px",
                borderRadius: "3px",
                padding: "3px",
                fontSize: "12px",
                fontFamily: "Arial, sans-serif",
                color: "#314152",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              <a
                href="https://www.visme.co/?vc=Made-With-Visme&utm_medium=Embed"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                  color: "#314152",
                  whiteSpace: "nowrap",
                }}
              >

              </a>
            </p>
          </div>
          <div className="column">
            <div
              className="visme_d"
              data-title="patient reaction time comparison" 
              data-url="kkgm333x-patient-reaction-time-comparison" 
              data-w="600"
              data-full-h="false"
              data-h="500"
              data-domain="my"
              style={{ width: "100%", height: "100%" }}
            ></div>
            <p
              style={{
                width: "142px",
                borderRadius: "3px",
                padding: "3px",
                fontSize: "12px",
                fontFamily: "Arial, sans-serif",
                color: "#314152",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              <a
                href="https://www.visme.co/?vc=Made-With-Visme&utm_medium=Embed"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                  color: "#314152",
                  whiteSpace: "nowrap",
                }}
              >

              </a>
            </p>
          </div>
        </div>
        
    </main>
  )
}

function Home() {
  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-start mx-20 mt-40">
        <div>
        <h1 className="text-primary-dark font-bold text-5xl mx-20">NeuroTrack</h1>
        <h1 className="text-primary font-bold mb-4 text-5xl mx-20">The solution to testing patient reaction times for accurate diagnosis</h1>
        </div>
        
        </div>
        <div className="text-primary-dark flex flex-row justify-start gap-2 mx-40 mt-4 text-xl">
          <a href="/createaccount"><button className="rounded-md py-1 px-2 bg-primary bg- text-white shadow-md">Create Account</button></a>
          <a href="/login"><button className="rounded-md py-1 px-2 text-blue-700 bg-secondary shadow-md">Log In</button></a>
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

  const handleSubmit = (e: React.FormEvent) =>{
    if (formData.username === ""){
      alert("YOU MUST ENTER A VALID USERNAME")
    } else if (formData.password === ""){
      alert("YOU MUST ENTER PASSWORD")
    }
  }
  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
      <div className="flex flex-row justify-center">
        <div className="flex flex-col h-full justify-center">
          <div className="mt-16 bg-secondary-light text-primary-dark w-60 p-4 rounded-lg shadow-md">
            <h1 className="text-bold text-2xl">Log In</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <label>Username:</label>
              <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange}></input><br />
              <label>Password:</label>
              <input type="password"></input><br />
              <button type="submit" className="rounded-md p-2 bg-primary text-white">Log In</button>
            </form>
            <div className="bg-primary-dark text-secondary p-2 my-2 rounded-md flex flex-row justify-start hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <p>Incorrect Username or Password</p>
            </div>
            <p className="m-2">Don't have an account? <a href="/createaccount" className="text-primary">Create Account</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}

function CreateAccount() {
  const navigate = useNavigate()
  const registerDoc = useMutation(api.messages.registerDoc)
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    passwordConfirm: ""
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    console.log(value)
    setFormData({
      ... formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name != "" && formData.username != "" && formData.password != "" && formData.password === formData.passwordConfirm){
      await registerDoc({
        name: formData.name,
        username: formData.username,
        password: formData.password
      })
    }
    navigate("/dashboard")
  }

  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
      <div className="flex flex-row justify-center">
        <div className="flex flex-col h-full justify-center">
          <div className="mt-16 bg-secondary-light text-primary-dark w-60 p-4 rounded-lg shadow-md">
            <h1 className="text-bold text-2xl">Create Account</h1>
            <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
              <label>Name:</label>
              <input name="name" id="name" value={formData.name} type="text" onChange={handleInputChange}></input><br />
              <label>Username:</label>
              <input name="username" id="username" value={formData.username} type="text" onChange={handleInputChange}></input><br />
              <label>Password:</label>
              <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange}></input><br />
              <label>Confirm Password:</label>
              <input type="password" name="passwordConfirm" id="passwordConfirm" value={formData.passwordConfirm} onChange={handleInputChange}></input><br />
              <button type="submit" className="rounded-md p-2 bg-primary text-white" onClick={()=>{alert()}}>Create Account</button>
            </form>
            <div className="bg-primary text-secondary p-2 my-2 rounded-md flex flex-row justify-start hidden">
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



function Patient({ patient }: { patient: object }) {
  const navigate = useNavigate()
  return (
    <div className="bg-secondary-light shadow-md rounded-md flex flex-row my-4">
      <div className="text-primary-dark flex flex-row justify-between w-full py-4 px-6 text-lg">
        <p>{patient.patientName.last}, {patient.patientName.first}</p>
        <div>
          <button className="px-2 py-1 mx-2 bg-secondary text-primary" onClick={()=>{alert(patient)}}>View Data</button>
          <button className="px-2 py-1 mx-2 text-secondary bg-primary" onClick={()=>{navigate("/test")}}>Run Test</button>
        </div>
      </div>
    </div>
  )
}


function Dashboard() {
  const patients = useQuery(api.messages.listPatients);
  return (
    <main className="h-screen w-screen">
      <NavBar />
      <div className="m-20">
        <h1 className="text-4xl font-bold text-primary-dark">Dashboard</h1>
        <a href="/addpatient">
          <button className="bg-primary text-secondary-light px-2 py-1 my-2">+ Add Patient</button>
        </a>
        <div className="grid grid-cols-1">
          {patients?.map((patient, index: number) => (
            <div key={index}>
              <Patient patient={patient} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


function Test() {
  return (
    <main className= "h-screen w-screen  ">
      <NavBar />
      <div className="m-20 text-primary-dark">
        <h1 className="text-4xl font-bold">Run Reaction Time Test</h1>
        <p>Place patient's left and right fingers on the buttons. An LED Light will flash, and the patient should immediately press both buttons.</p>
        <form>
          <label>Number of Trials to Run: </label><select>
            <option>Select</option>
            <option>5</option>
            <option>10</option>
          </select>
        </form>
        <button className="bg-primary text-white px-2 py-1 m-2 text-xl rounded-md">Begin Test</button>
        <button disabled className="bg-primary disabled:bg-slate-300 text-white px-2 py-1 my-2 text-xl rounded-md">View Results</button>
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

function AddPatient() {
  const addPatient = useMutation(api.messages.addPatient)
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
    triglycerides: ""
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    await addPatient({
      patientName: {
        first: formData.fname,
        middle: formData.mname,
        last: formData.lname
      },
      patientAge: Number(formData.age),
      patientEthnicity: Number(formData.race),
      patientEducation: Number(formData.education),
      patientBMI: Number(formData.bodyMassIndex),
      patientSmokes: Number(formData.smoking),
      patientAlcoholConsumption: Number(formData.alcoholConsumption),
      patientPhysicalActivity: Number(formData.physicalActivity),
      patientFamilyHistory: Number(formData.historyOfParkinsons),
      patientBrainInjury: Number(formData.traumaticBrainInjury),
      patientHypertension: Number(formData.hypertension),
      patientDiabetes: Number(formData.diabetes),
      patientDepression: Number(formData.depression),
      patientStroke: Number(formData.stroke),
      patientSystolicBP: Number(formData.sysBP),
      patientDiastolicBP: Number(formData.diaBP),
      patientCholestrolHDL: Number(formData.HDLCholesterol),
      patientCholestrolLDL: Number(formData.LDLCholesterol),
      patientCholestrolTotal: Number(formData.totalCholesterol),
      patientCholestrolTriglycerides: Number(formData.triglycerides),
      doctorID: "k573q5c84z5efb3pzem04knznx70vxdx"
    })
    console.log("Submission Successful patient added. !")
    navigate("/dashboard")
  }
  return (
    <main className= "w-screen h-screen">
      <NavBar />
      <div className="m-10 flex flex-col justify-center w-full text-primary-dark">
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
            <option value="2">Female</option>
            <option value="1">Male</option>
          </select>
          <label> Race: </label>
          <select id="race" name="race" value={formData.race} onChange={handleInputChange}>
            <option value = "Select">Select</option>
            <option value="1">African American</option>
            <option value="2">Asian</option>
            <option value="0">Caucasian</option>
            <option value="3">Other</option>
          </select>
          <label> Education: </label>
          <select  name="education" id="education" value={formData.education} onChange={handleInputChange}>
            <option value="Select">Select</option>
            <option value="0">Less than High School</option>
            <option value="1">High School Diploma</option>
            <option value="2">Bachelor's Degree</option>
            <option value="3">Graduate Degree</option>
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
          <label>Alcohol Consumption (units/week): </label><input id="alcoholConsumption" name="alcoholConsumption" type="text" value={formData.alcoholConsumption} onChange={handleInputChange}></input>
          <label>Physical Activity (hours/week): </label><input id="physicalActivity" name="physicalActivity" type="text" value={formData.physicalActivity} onChange={handleInputChange}></input>
          <label>Body Mass Index: </label><input id="bodyMassIndex" name="bodyMassIndex" type="text" value={formData.bodyMassIndex} onChange={handleInputChange}></input><br />
          <h2 className="text-2xl">Clinical Measurements</h2>
          <label>Blood Pressure: </label><input id="sysBP" name="sysBP" type="text" value={formData.sysBP} onChange={handleInputChange}></input> mmHg/<input id="diaBP" name="diaBP" type="text" value={formData.diaBP} onChange={handleInputChange}></input> mmHg<br />
          <label>Cholesterol (mg/dL): Total </label><input id="totalCholesterol" name="totalCholesterol" type="text" value={formData.totalCholesterol} onChange={handleInputChange}></input>
          <label> LDL (mg/dL): </label><input id="LDLCholesterol" name="LDLCholesterol" type="text" value={formData.LDLCholesterol} onChange={handleInputChange}></input>
          <label> HDL (mg/dL): </label><input id="HDLCholesterol" name="HDLCholesterol" type="text" value={formData.HDLCholesterol} onChange={handleInputChange}></input>
          <label> Triglycerides (mg/dL): </label><input id="triglycerides" name="triglycerides" type="text" value={formData.triglycerides} onChange={handleInputChange}></input><br />
          <button type="submit" className="rounded-md bg-primary px-2 py-1 m-2 text-secondary">Submit</button>
          <button className="px-2 py-1 m-2 bg-secondary text-primary" onClick={()=>navigate("/dashboard")}>Cancel</button>
        </form>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/results" element={<Results />} />
        <Route path="/patientanalytics" element={<About />} />
        <Route path="/addpatient" element={<AddPatient />} />
      </Routes>
    </Router>
  );
}
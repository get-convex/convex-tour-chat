// Filename - App.js

import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// import TaskList component
import TaskList from "../components/TaskList";

// import DetailedTaskView component
import DetailedTaskView from "../components/DetailedTaskView";

function router() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        path="/"
                        element={<TaskList />}
                    />

                    <Route
                        path="/detailed"
                        element={<DetailedTaskView />}
                    />

                    {}
                    <Route
                        path="/"
                        element={<TaskList />}
                    />

                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default router;
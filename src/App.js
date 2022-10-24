import React from "react";
import { useState } from "react";
import './global.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Form from "./form";
import { Fragment } from "react";
import Retrieve from "./rerieve";
import AllData from "./allData";
import { useEffect } from "react";
function App() {
  const [data, setData] = useState({ question: '', answer: '' });
 

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Form/>}>
          </Route>
        <Route path="/retrieve" element={<Retrieve />}>

        </Route>
        <Route path="/all-data" element={<AllData />}>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;

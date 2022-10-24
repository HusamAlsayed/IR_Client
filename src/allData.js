import React from "react";
import { useState } from "react";
import './global.css';
import Mark from "mark.js";
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import { useEffect } from "react";
function AllData() {
    let history = useNavigate();
    let markInstance = new Mark(document.querySelector("#search-node")); 
    const [data, setData] = useState({ query: '' });
    const [response, setResponse] = useState({ question: '', answer: '' });
    useEffect(() => {
        fetch('http://127.0.0.1:8000/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((response) => response.json()).then(item => {
            console.log(item);
            setResponse(item.questions)

        }).catch(item => {
            console.log(item)
        })
    }, []);

    const onClick = () => {
        history('/')
    }

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
 

    return (
        <>
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                <h1><a rel="dofollow">All Questoins - Answers</a></h1>

            </div>
            <div style={{ cursor: 'pointer' }} onClick={onClick} className="box-root padding-bottom--24 flex-flex flex-justifyContent--center">
                <h4><a rel="dofollow">Go Home Page</a></h4>
            </div>
            {response.length  && response?.map(item =><div >
                <div style={{ marginTop: '30px', width: '100%' }} className="formbg-outer">
                    <div style={{ width: '100%', maxWidth: '80%' }} className="formbg">
                        <div style={{ width: '100%' }} className="formbg-inner padding-horizontal--48">
                            <span className="padding-bottom--15">Question: </span>
                            <form style={{ width: '100%' }} id="stripe-login">
                                <div className="field padding-bottom--24">
                                    {item.question}                                   </div>
                            </form>
                            <span className="padding-bottom--15">Answer: </span>
                            <div style={{ fontSize: 15 }}>
                                {item.answer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export default AllData;

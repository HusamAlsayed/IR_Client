import React from "react";
import { useState } from "react";
import './global.css';
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
function Form() {
    let history = useNavigate();
    const [data, setData] = useState({ question: '', answer: '' });
    const handleSubmit = () => {
        fetch('http://127.0.0.1:8000/', {
            method: 'POST',
            body: JSON.stringify({
                ...data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((response) => response.json()).then(item => {
            console.log(item);
            history('/retrieve')

        }).catch(item => {
            console.log(item)
        })
    }

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
            <div className="login-root">
                <div className="box-root flex-flex flex-direction--column" style={{ minHeight: "100vh", flexGrow: 1 }}>
                    <div className="loginbackground box-background--white padding-top--64">
                        <div className="loginbackground-gridContainer">
                            <div className="box-root flex-flex" style={{ gridArea: "top / start / 8 / end" }}>
                                <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}>
                                </div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: " 4 / 2 / auto / 5;" }}>
                                <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: "1" }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: " 6 / start / auto / 2;" }}>
                                <div className="box-root box-background--blue800" style={{ flexGrow: "1" }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: " 7 / start / auto / 4;" }}>
                                <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: "1" }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: " 8 / 4 / auto / 6;" }}>
                                <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: "1" }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: " 2 / 15 / auto / end;" }}>
                                <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: "1" }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: " 3 / 14 / auto / end;" }}>
                                <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: "1" }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: " 4 / 17 / auto / 20;" }}>
                                <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: "1" }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: " 5 / 14 / auto / 17;" }}>
                                <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: "1" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: " 1", zIndex: 9 }}>
                        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                            <h1><a rel="dofollow">Information Retrieval Project</a></h1>
                        </div>
                        <div className="formbg-outer">
                            <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48">
                                    <span className="padding-bottom--15">Plase Fill a question and an answer</span>
                                    <form id="stripe-login">
                                        <div className="field padding-bottom--24">
                                            <label for="email">Question</label>
                                            <input name={"question"} onChange={handleChange} type="email" />
                                        </div>
                                        <div className="field padding-bottom--18">
                                            <label>Answer</label>
                                            <input name={"answer"} onChange={handleChange} type="email" />
                                        </div>
                                    </form>
                                    <div class="field padding-bottom--17" style={{ marginTop: '30px', }}>
                                        <input onClick={handleSubmit} type="submit" name="submit" value="Continue" />
                                    </div>
                                <Link to="/retrieve">
                                    <div style={{ marginTop: '20px', marginBottom: '-20px' }} className="field">
                                        <a className="ssolink" href="#">Retrive Data</a>
                                    </div>
                                </Link>
                                <Link to="/all-data">
                                    <div style={{ marginTop: '20px', marginTop: '30px', marginBottom: '-20px' }} className="field">
                                        <a className="ssolink" href="#">Show Data</a>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
    );
}

export default Form;

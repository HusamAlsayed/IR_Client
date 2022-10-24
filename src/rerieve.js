import React from "react";
import { useState } from "react";
import './global.css';
import Mark from "mark.js";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
function Retrieve() {
    let markInstance = new Mark(document.querySelector("#search-node"));
    const [data, setData] = useState({ query: '' });
    const [response, setResponse] = useState({ question: '', answer: '' });
    const handleSubmit = () => {
        fetch('http://127.0.0.1:8000/answer', {
            method: 'POST',
            body: JSON.stringify({
                ...data, method: "bool"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((response) => response.json()).then(item => {
            console.log(item);
            setResponse({...item?.answer});
            markInstance = new Mark(document.querySelector("#search-node"));
            markInstance.unmark({
                done: () => {
                    markInstance.mark(data.query);
                }
            });
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
    const getHighlightedText = (text, highlight) => {
        // Split on highlight term and include term into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <p style={{display: 'flex', flexWrap: 'wrap'}} > {parts.map((part, i) =>
            <p key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold', backgroundColor: '#ade0ff', marginRight: '2px', marginLeft: '2px' } : {}}>
                {part}
            </p>)
        } </p>;
    }

    return (
       <>
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
                    <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: " 1", zIndex: 9, marginTop: '20px' }}>
                        {/* <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                            <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Information Retrieval Project</a></h1>
                        </div> */}
                        <div className="formbg-outer">
                            <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48">
                                    <span className="padding-bottom--15">Plase Fill a query</span>
                                    <form id="stripe-login">
                                        <div className="field padding-bottom--24">
                                            <input id="#search-node" name={"query"} onChange={handleChange} type="email" />
                                        </div>
                                    </form>
                                    <div class="field padding-bottom--17" style={{ marginTop: '10px', }}>
                                        <input id="#search-node" onClick={handleSubmit} type="submit" name="submit" value="Continue" />
                                    </div>
                                    <Link to="/">
                                        <div style={{ marginTop: '20px', marginBottom: '-20px' }} className="field">
                                            <a className="ssolink" href="#">Fill More Qeustion</a>
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
                        {(response?.answer || response?.question) && <div style={{marginTop: '30px', width: '100%'}} className="formbg-outer">
                            <div style={{ width: '100%', maxWidth: '80%' }} className="formbg">
                                <div style={{ width: '100%' }} className="formbg-inner padding-horizontal--48">
                                    <span className="padding-bottom--15">Question: </span>
                                    <form style={{ width: '100%' }} id="stripe-login">
                                        <div className="field padding-bottom--24">
                                            {getHighlightedText(response.answer, data.query)}                                        </div>
                                    </form>
                                    <span className="padding-bottom--15">Answer: </span>
                                    <div style={{fontSize: 15}}>
                                        {getHighlightedText(response.answer, data.query)}
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>

            </div>
       </>
    );
}

export default Retrieve;

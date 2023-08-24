'use client'
import Image from "next/image";
import greggregorygregson from "../../../public/images/greggregorygregson.jpg";
import peanut from "../../../public/images/peanut.png";
import React from 'react';

/*         devArray: [
            {                
                name: "Greg G. Gregson", title: "Senior Web Developer", desc: "Greg G. Gregson has 12 years developing Web based projects. He personally helped develop React, Vue, and many other javascript frameworks used today.", imgSrc: greggregorygregson 
            },
            {
                name: "Peanut", title: "Senior Web Developer", desc: "has designed and maintained multiple websites dedicated to centralizing intelligence on different areas around revolutionary thinkers and their day to day routines and life. His hobbies include puzzles and gardening", imgSrc: peanut
            }
        ],
        devArrayPos : 0
        */
export default function SolutionsApp() {
        const [devArrayPos, setdevArrayPos] = React.useState(0);
        const [devArray, setDevArray] = React.useState([
            {                
                name: "Greg G. Gregson", title: "Senior Web Developer", desc: "Greg G. Gregson has 12 years developing Web based projects. He personally helped develop React, Vue, and many other javascript frameworks used today.", imgSrc: greggregorygregson 
            },
            {
                name: "Peanut", title: "Senior Web Developer", desc: "has designed and maintained multiple websites dedicated to centralizing intelligence on different areas around revolutionary thinkers and their day to day routines and life. His hobbies include puzzles and gardening", imgSrc: peanut
            }
        ])
        const updateDevPos = (num : Number) => {
            switch (num){
                case 0:
                    if(devArrayPos == 0){
                        setdevArrayPos(devArray.length - 1)
                    }
                    else {
                        setdevArrayPos(devArrayPos - 1)
                    }
                case 1:
                    if(devArrayPos == devArray.length - 1){
                        setdevArrayPos(0)
                    }
                    else{
                        setdevArrayPos(devArrayPos + 1);
                    }
            }
        }
        return(
            <main id="solutionsApp">
                <div id="centerContent">                   
                    <h1 id="title">Solutions</h1>
                    <h2 id="subtitle">Explore what solutions we offer</h2>
                    <h4 id="softwaredevelopmenttitle" className="header">Software Development</h4>
                    <ul id="softwaredevelopmentlist" className="centerText">
                        <li className="softwaredevelopmentlistitem">Custom Developed Software</li>
                        <li className="softwaredevelopmentlistitem">Familiarity with latest standards</li>
                        <li className="softwaredevelopmentlistitem">100% made by cats</li>
                    </ul>
                    <h4 id="webdevelopmenttitle" className="header">Web Development</h4>
                    <ul id="webdevelopmentlist" className="centerText">
                        <li className="webdevelopmentlistitem">Agile Development</li>
                        <li className="webdevelopmentlistitem">CI/CD</li>
                        <li className="webdevelopmentlistitem">Full Stack</li>
                    </ul>
                    <h2 id="devshowcaseheader" className="header">Developer Showcase</h2>
                    <div id="imgDiv">
                        <Image src={devArray[devArrayPos].imgSrc} alt={devArray[devArrayPos].desc}></Image>
                        <button className="button" id="leftButton" onClick={() => updateDevPos(0)}>{'<'}</button>
                        <button className="button" id="rightButton" onClick={() => updateDevPos(1)}>{'>'}</button>
                    </div>
                    <h4 id="devname" className="header">{devArray[devArrayPos].name} - {devArray[devArrayPos].title}</h4>
                    <div id="devdescription" className="centerText">
                        {devArray[devArrayPos].desc}
                    </div>
                </div>
            </main>
        )
}


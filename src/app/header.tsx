"use client"
import Link from "next/link";
import { type } from "os";
import { use, useReducer, useState } from "react";

export default function Header() {
    const [mouseX, setMouseX] = useState(-1);
    const [mouseY, setMouseY] = useState(-1);
    const [highlightDisplay, sethighlightDisplay] = useState("hidden");
    const mouseHandle = (e: React.MouseEvent) => { 
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    }
    const mouseOver = (e: React.MouseEvent) => {
        sethighlightDisplay("absolute");
    }
    const mouseOut = (e: React.MouseEvent) => {
        sethighlightDisplay("hidden");
    }
    return (
        <>
        <nav id="header" className="fixed w-full z-2 h-20 text-3xl flex flex-nowrap bg-[rgba(106,120,101,0.9)] " onMouseMove={(e) => {mouseHandle(e)}} onMouseOver={(e) => {mouseOver(e)}} onMouseOut={(e) => {mouseOut(e)}}>
            <div id="headerTitleDiv" className="flex-1 flex w-auto">
                <div id="headerimg" className="w-auto"></div>
                <div id="headerTitle" className="flex-1 w-auto">Cat Corp LLC</div>
            </div>
            <div id="headerListDiv" className="flex-1 z-2 flex w-auto">
            <Link className="item flex-1 hover:bg-[rgba(106,120,101,1)]" href="/">Home</Link>
            <Link className="item flex-1 hover:bg-[rgba(106,120,101,1)]" href="/about">About</Link>
            <Link className="item flex-1 hover:bg-[rgba(106,120,101,1)]" href="/solutions">Solutions</Link>
            <Link className="item flex-1 hover:bg-[rgba(106,120,101,1)]" href="/contact">Contact</Link>
            </div>
            <div id="headerhighlight" className={"z-4 h-5 w-5 m-0 p-0 block "+ highlightDisplay +" bg-red-500 "} style={{transform: "translate("+ mouseX + "px," + mouseY +"px)"}}></div>
        </nav>
        <div id="emptyspacer" className="w-full z-0 h-20"></div>
        </>
    )
};
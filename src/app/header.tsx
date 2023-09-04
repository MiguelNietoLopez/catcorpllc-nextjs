"use client"
import Link from "next/link";
import ccllc from "../../public/images/CCLLC.svg"
import Image from "next/image";

export default function Header() {
    return (
        <>
        <nav id="header" className="fixed w-full z-2 h-20 text-3xl flex flex-nowrap bg-[rgba(106,120,101,0.9)] ">
            <div id="headerTitleDiv" className="flex-1 static flex w-auto">
                <div id="headerimg" className="w-auto">
                    <Image className="h-20 w-20 ml-2 mr-5" src={ccllc} alt="test"></Image>
                </div>
                <div id="headerTitle" className="flex-1 w-auto">Cat Corp LLC</div>
            </div>
            <div id="headerListDiv" className="flex-1 static flex w-auto">
            <Link className="item flex-1 hover:bg-[rgba(106,120,101,1)]" href="/">Home</Link>
            <Link className="item flex-1 hover:bg-[rgba(106,120,101,1)]" href="/about">About</Link>
            <Link className="item flex-1 hover:bg-[rgba(106,120,101,1)]" href="/solutions">Solutions</Link>
            <Link className="item flex-1 hover:bg-[rgba(106,120,101,1)]" href="/contact">Contact</Link>
            </div>
        </nav>

        <div id="emptyspacer" className="w-full z-0 h-20"></div>
        </>
    )
};
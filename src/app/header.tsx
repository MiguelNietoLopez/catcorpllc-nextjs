import React from "react";
import Link from "next/link";
export default function Header() {
    return (
        <>
        <nav id="header">
            <Link className="item" href="/">Home</Link>
            <Link className="item" href="/about">About</Link>
            <Link className="item" href="/solutions">Solutions</Link>
            <Link className="item" href="/contact">Contact</Link>
        </nav>
        </>
    )
};
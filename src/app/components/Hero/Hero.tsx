/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Menu from "../Menu/Menu";

import './Hero.scss';


export default function Hero() {
  const [loading, setLoading] = useState(false);
  const menuOpen = useSelector((state: any) => state.menuOpen)

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setLoading(true);
    }, 250);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once
  
  return (
    <div className={`hero ${menuOpen ? 'menu-open' :''}`}>
      <Menu />
      <div className={`copy-container ${loading ? 'loaded' :''}`}>
        <h2>Hello.</h2>
        <h2 className="name">I&apos;m Savana.</h2>
      </div>
      <div className="hero-image"></div>
    </div>
  )
}
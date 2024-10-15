/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useSelector } from 'react-redux';
import Menu from "../Menu/Menu";

import './Hero.scss';


export default function Hero() {
  const [loading, setLoading] = useState(false);
  const menuOpen = useSelector((state: any) => state.menuOpen)

  const img = new Image();
  img.src = "/hero-image.jpg";
  img.onload = () => { setLoading(true); }
  
  return (
    <div className={`hero ${menuOpen ? 'menu-open' :''}`}>
      <Menu />
      <div className={`copy-container ${loading ? 'loaded' :''}`}>
        <h2>Hello.</h2>
        <h2 className="name">I&apos;m Savana.</h2>
      </div>
      <div className="hero-image" style={{ backgroundImage: `url(${img.src})`}}></div>
    </div>
  )
}
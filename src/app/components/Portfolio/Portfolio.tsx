/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSelector } from 'react-redux';
import { DEV, UX, DESIGN } from './data';

import './Portfolio.scss';

export default function Portfolio() {
  const toggle = useSelector((state: any) => state.toggleState);

  return (
    <div className={`portfolio ${toggle ? "toggle" : ''}`}>
      
      { DEV.map((item) => (
        <div className="portfolio-item" key={item.class} id={item.class}>
          <div className={`portfolio-image ${item.class}`}>
          </div>
          <div className="text-container">
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <a href={item.cta.url} target="_blank">View the website</a>
          </div>
        </div>
      )) }

      <div className="ux-container" id="ux">
        { UX.map((item) => (
          <div key={item.class} className="portfolio-item">
            <div className={`portfolio-image ${item.class}`}>
            </div>
            <div className="text-container">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a href={item.cta.url} target="_blank">Learn More</a>
            </div>
          </div>
        )) }
      </div>

      <div className="design-item" id="design">
        <a href="https://www.instagram.com/savage.over.average/" target="_blank"></a>
        { DESIGN.map((image) => (
          <div key={image} id={image} className="portfolio-image" style={{backgroundImage: `url(/portfolio-images/${image}.jpg)`}}></div>
        ))}
      </div>
    </div>
  )
}
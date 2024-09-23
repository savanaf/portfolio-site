/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSelector } from 'react-redux';
import { PORTFOLIO } from './data';

import './Portfolio.scss';

export default function Portfolio() {
  const toggle = useSelector((state: any) => state.toggleState);
  

  return (
    <div className={`portfolio ${toggle ? "toggle" : ''}`}>
      { PORTFOLIO.map((item) => (
        <div className="portfolio-item" key={item.class} id={item.class}>
          <div className={`portfolio-image ${item.class}`}>
            {/* <a href={item.cta.url} target="_blank" className="arrow-container">
              <div className="arrow"></div>
            </a> */}
          </div>
          <div className="text-container">
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <a href={item.cta.url} target="_blank">{item.cta.title}</a>
          </div>
        </div>
      )) }
      <div className="design-item design" id="design">
          <a href="https://www.instagram.com/savage.over.average/" target="_blank"></a>
          <div className="portfolio-image pbc "></div>
          <div className="portfolio-image lipstick"></div>
          <div className="portfolio-image bake"></div>
          <div className="portfolio-image biggie"></div>
          <div className="portfolio-image step-out-line"></div>
          <div className="portfolio-image koda"></div>
      </div>
    </div>
  )
}
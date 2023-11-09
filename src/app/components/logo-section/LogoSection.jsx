'use client'

import './logo-section.scss'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo1 from '../../assets/companies/SLV.svg';
import Logo2 from '../../assets/companies/gira.svg';
import Logo3 from '../../assets/companies/Dynamic cable.svg';
import Logo4 from '../../assets/companies/ABL.svg';
import Logo5 from '../../assets/companies/Schneider electric.svg';

const logos = [
  { img: Logo1, title: "SLV" },
  { img: Logo2, title: "Gira" },
  { img: Logo3, title: "Dynamic cable" },
  { img: Logo4, title: "ABL" },
  { img: Logo5, title: "Schneider electric" },
];

export default function LogoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000); // Change the interval duration as needed (e.g., 2000ms for 2 seconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-logo">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="logo-section">
              <div className="row">
                <div className="logo-slider">
                  {logos.map((logo, index) => (
                    <div
                      key={index}
                      className={`logo-section-card ${
                        index === currentIndex ? 'active' : ''
                      }`}
                    >
                      <div className="logo-section-card-image">
                        <Image
                          src={logo.img}
                          alt={logo.title}
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="logo-slider2">
                  {logos.map((logo, index) => (
                    <div
                      key={index}
                      className={`logo-section-card ${
                        index === (currentIndex + logos.length / 2) % logos.length ? 'active' : ''
                      }`}
                    >
                      <div className="logo-section-card-image">
                        <Image
                          src={logo.img}
                          alt={logo.title}
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

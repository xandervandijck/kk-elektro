'use client'
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import BackgroundImage1 from '../../assets/images/kvistholt-photography-oZPwn40zCK4-unsplash.jpg';
import BackgroundImage2 from '../../assets/images/israel-palacio-ImcUkZ72oUs-unsplash.jpg';
import Image from 'next/image';
import './hero.scss'

export default function Hero() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const slides = [
    {
      img: BackgroundImage1,
      title: "De beste elektricien in de regio",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: BackgroundImage2,
      title: "De beste elektricien in de regio",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];

  return (
    <div ref={sliderRef} className="keen-slider bg-darker">
      {slides.map((slide) => (
        <div key={slide.title} className="keen-slider__slide number-slide">
          <div className="image-container">
            <Image
              src={slide.img}
              alt="Picture of the author"
              layout="responsive" // Set to "responsive"
              height={500} // You can adjust the height as needed
              width={800} // You can adjust the width as needed
            />
          </div>
          <div className="image-overlay">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="image-overlay-content">
                      <h2>{slide.title}</h2>
                      <p>{slide.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}

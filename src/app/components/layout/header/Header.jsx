'use client'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../assets/logo/Logo kk elektro.svg';
import OffCanvas from './OffCanvas';
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from 'react';

export default function Header() {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  // Function to update the state based on window width
  const updateWindowDimensions = () => {
    if (window.innerWidth < 992) {
      setShowOffCanvas(true);
    } else {
      setShowOffCanvas(false);
    }
  };

  useEffect(() => {
    // Call the function once to set the initial state
    updateWindowDimensions();

    // Attach the resize event listener
    window.addEventListener('resize', updateWindowDimensions);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  console.log(showOffCanvas);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-darker">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <Image
              src={Logo}
              alt="Picture of the author"
              width={75}
              height={75}
          /> 
        </Link>
        {showOffCanvas && (
          <>
            <span className="text-white fs-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
              <AiOutlineMenu />
            </span>
            <OffCanvas />
          </>
        )}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Diensten</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" href="#">Projecten</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Over ons</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

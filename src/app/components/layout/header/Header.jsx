import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../assets/logo/Logo kk elektro.svg';
import OffCanvas from './OffCanvas';
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
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
      <span className="text-white fs-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        <AiOutlineMenu />
      </span>
      <OffCanvas />
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

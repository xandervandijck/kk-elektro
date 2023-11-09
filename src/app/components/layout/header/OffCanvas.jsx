'./header.scss'
import Link from 'next/link'

export default function OffCanvas() {
  return (
<div className="offcanvas bg-darker text-white offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="staticBackdropLabel">Kk elektro</h5>
    <span type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></span>
  </div>
  <div className="offcanvas-body">
    <div className="nav-menu">
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
</div>  
)
}

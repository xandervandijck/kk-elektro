import React from 'react'
import './footer.scss'

export default function Credits() {
  return (
    <div className="credits bg-darker text-white pt-1 pb-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="credits-content">
                        <p>© 2023 kk-Elektro. All rights reserved.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="credits-content text-end">
                        <p>Website by <a href="https://www.commediant.nl">Commediant</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

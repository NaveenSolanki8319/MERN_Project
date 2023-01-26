import React from 'react'
import logo from '../img/scs_logo.png'

export default function Footer() {
  return (
    <div className="blockcode mt-5">
    <footer className="page-footer shadow">
      <div className="d-flex flex-column mx-auto py-5" style={{width: '80%'}}>
        <div className="d-flex flex-wrap justify-content-between">
          <div>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img src={logo} width="30px" />
              <span className="p-2 fw-bold">SCSIT</span>
            </a>
            <p className="my-3" style={{width: '250px'}}>
            "To achieve excellent standards of quality education by keeping pace with rapidly changing technologies & create computer professionals of global standards with capabilities of accepting new challenges."
            </p>
            
          </div>
          <div>
            <p className="h5 mb-4" style={{fontWeight: 600}}>Devwares</p>
            <ul className="p-0" style={{listStyle: 'none', cursor: 'pointer'}}>
              <li className="my-2">
                <a className="text-dark" href="/">Resources</a>
              </li>
              <li className="my-2">
                <a className="text-dark" href="/">About Us</a>
              </li>
              <li className="my-2">
                <a className="text-dark" href="/">Contact</a>
              </li>
              <li className="my-2">
                <a className="text-dark" href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="h5 mb-4" style={{fontWeight: 600}}>Help</p>
            <ul className="p-0" style={{listStyle: 'none', cursor: 'pointer'}}>
              <li className="my-2">
                <a className="text-dark" href="/">Support</a>
              </li>
              <li className="my-2">
                <a className="text-dark" href="/">Sign Up</a>
              </li>
              <li className="my-2">
                <a className="text-dark" href="/">Sign In</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="h5 mb-4" style={{fontWeight: 600}}>Help</p>
            <ul className="p-0" style={{listStyle: 'none', cursor: 'pointer'}}>
              <li className="my-2">
                <a className="text-dark" href="/">Support</a>
              </li>
              <li className="my-2">
                <a className="text-dark" href="/">Sign Up</a>
              </li>
              <li className="my-2">
                <a className="text-dark" href="/">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
        <small className="text-center mt-5">© Placement Portal, 2023. All rights reserved.</small>
      </div>
    </footer>
  </div>
  )
}

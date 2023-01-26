import React from 'react'

function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <a href="#" className="navbar-brand">
    //         <img src="/examples/images/logo.svg" height={28} alt="CoolBrand" />
    //       </a>
    //       <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    //         <span className="navbar-toggler-icon" />
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarCollapse">
    //         <div className="navbar-nav">
    //           <a href="#" className="nav-item nav-link active">Home</a>
    //           <a href="#" className="nav-item nav-link">Profile</a>
    //           <a href="#" className="nav-item nav-link">Messages</a>
    //           <a href="#" className="nav-item nav-link disabled" tabIndex={-1}>Reports</a>
    //         </div>
    //         <div className="navbar-nav ms-auto">
    //           <a href="#" className="nav-item nav-link">Login</a>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    
    <>    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder" href="#">SCSIT Placement Cell</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-2">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown px-2">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LogIn
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Student</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Placement Codinator</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown px-2">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Register
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Student</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Placement Codinator</a></li>
                </ul>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container-fluid mt-3">
        
      </div>
      </>
  )
}

export default Navbar
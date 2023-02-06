import React from 'react';
import Profile from '../../assets/images/profile.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Vendor Management Portal</a>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarScroll"> */}
        <div>

          <div className="navRight d-flex">
            <div className="navRight-text d-block" style={{textAlign:"right"}}>
              <h6 className="navRight-name">Anna Dey Taylor</h6>
              <p className="navRight-title">Admin</p>
            </div>
            <div className="nav-profile">
              <img className="img" src={Profile} style={{borderRadius:"50px"}}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
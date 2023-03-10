import React from 'react';
import Profile from '../../assets/images/profile.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Vendor Management Portal</a>

        <div>
          <div className="navRight d-flex">
            <div className="navRight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path d="M16 15.5V10.3C15.5 10.4 15 10.5 14.5 10.5H14V16.5H4V9.5C4 6.7 6.2 4.5 9 4.5C9.1 3.2 9.7 2.1 10.5 1.2C10.2 0.8 9.6 0.5 9 0.5C7.9 0.5 7 1.4 7 2.5V2.8C4 3.7 2 6.4 2 9.5V15.5L0 17.5V18.5H18V17.5L16 15.5ZM7 19.5C7 20.6 7.9 21.5 9 21.5C10.1 21.5 11 20.6 11 19.5H7ZM18 5C18 6.9 16.4 8.5 14.5 8.5C12.6 8.5 11 6.9 11 5C11 3.1 12.6 1.5 14.5 1.5C16.4 1.5 18 3.1 18 5Z" fill="#808080" />
              </svg>
            </div>
            <div className="navRight-text d-block">        
              <h6 className="navRight-name">Anna Dey Taylor</h6>
              <p className="navRight-title">Admin</p>
            </div>
            <div className="nav-profile">
              <img className="img" src={Profile} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
import React from 'react';


/**Header from bootstrap elements*/
function Header(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarResponsive" >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" >About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" >Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" >Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default Header;

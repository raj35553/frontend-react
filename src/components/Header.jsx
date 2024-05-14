import React from "react";
import logo from '../images/logo.png';

function Header() {
  return <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={logo} alt={"logo"}/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

    <div class="collapse navbar-collapse" id="navbarsExample07">
    <form class="form-inline my-2 my-md-0">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
      </form>
      <ul class="navbar-nav mr-auto nav-masthead">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-danger">Sign In</button>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>;
}

export default Header;

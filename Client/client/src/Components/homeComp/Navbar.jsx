import React from 'react'
import './gradient.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const onClick = (path)=> {
    navigate(path);
  }

  
  return (
   <div className='navbarContainer'>
    <div className="div navbar-container py-4">
    <nav class="navbar navbar-expand-lg bg-body-tertiary navBox">
  <div class="container-fluid">
    <button><a class="navbar-brand" href="#">HomeQuest.com</a></button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" onClick={()=> onClick("/")}>Buy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=> onClick("/homeQuest/propertyForRent")}>Rent</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Co-living/PG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#' aria-disabled="true">Plots</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    <div className="centered-text">
       <h5 className='greeting'>Step into comfort</h5>
    </div>
    <div className="nav-bottom">
      <a href="#" className='owner-link'>
      <h6 className='text-white'>Are you a property owner ?</h6>
      </a>
    </div>
   </div>
  )
}

export default Navbar; 

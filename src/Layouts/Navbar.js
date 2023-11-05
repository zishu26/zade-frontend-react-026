import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg my-component-navbar shadow">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Zade</a>
    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link id="AddStudent" className="btn btn-outline-dark button-color" to="/addStudent">Add Student</Link>
  </div>
</nav>
  );
}
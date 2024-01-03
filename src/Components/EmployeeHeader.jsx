import React from 'react'
import { Link } from 'react-router-dom';

const EmployeeHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            College App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Add Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewAll">
                  View All
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delete">
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default EmployeeHeader
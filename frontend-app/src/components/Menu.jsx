import React from "react";
import { Link } from "react-router-dom";

let navList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Product",
    link: "/product",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About Us",
    link: "/aboutus",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Sing Up",
    link: "/register",
  },
  {
    name: "Login",
    link: "/login",
  },
  
];

const Menu = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Tienda Virtual
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navList.map((item, i) => (
                <li key={i} className="nav-item">
                  <Link className="nav-link active" to={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;

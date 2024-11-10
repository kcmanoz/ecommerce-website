// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/Navbar.css";

// function Navbar() {
//   return (
//     <header>
//       <nav className="navbar">
//         <h3 className="navbar-brand">Fashion House</h3>
//         <ul className="navbar-list">
//           <li className="navbar-item">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/mens">Men's Clothing</Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/womens">Women's Clothing</Link>
//           </li>

//           <li className="navbar-item">
//             <Link to="/shoes">Shoes</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="EssenceWearLogo" className="navbar-logo" />
          <h3 className="brand-name">EssenceWear</h3>
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/mens">Men's Clothing</Link>
          </li>
          <li className="navbar-item">
            <Link to="/womens">Women's Clothing</Link>
          </li>
          <li className="navbar-item">
            <Link to="/shoes">Shoes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

import React from "react";
import Link from "next/link";
function Navbar(props) {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 2rem",
      height: "4rem",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      position: "fixed",
      width: "100%",
      top: 0,
    },
    ul: {
      display: "flex",
      listStyle: "none",
    },
    li: {
      marginRight: "1rem",
    },
    a: {
      color: "#333",
      textDecoration: "none",
      fontSize: "1.2rem",
    },
  };

  return (
    <div>
      <nav style={styles.nav}>
        <h1>Daily My Shopping</h1>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link style={styles.Link} href="/">
              Home
            </Link>
          </li>
          <li style={styles.li}>
            <Link style={styles.Link} href="/Autho/login">
              {props.btn1}
            </Link>
          </li>
          <li style={styles.li}>
            <Link style={styles.Link} href="/Autho/register">
              {props.btn2}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import { GitHub } from "react-feather";
import { NavLink } from "react-router-dom";

const links = [
  {
    text: "Products",
    url: "/products",
  },
  {
    text: "About",
    url: "/about",
  },
];

const Links: React.FC = () => {
  return (
    <>
      {links.map((link) => (
        <NavLink key={link.url} className="nav-link" to={link.url}>
          {link.text}
        </NavLink>
      ))}
      <a
        className="ml-auto self-center"
        href="https://github.com/alex-safian/mudah-assessment"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub size={24} />
      </a>
    </>
  );
};

export default Links;

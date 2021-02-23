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
      {/* @TODO: Update link */}
      <a
        className="ml-auto self-center"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub size={24} />
      </a>
    </>
  );
};

export default Links;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import features, { name_menus } from "../constants/features";
import Color from "../constants/color";
require("../style/NavBar.scss");

const NavBar = ({ route, dispatch, isSearching }) => {
  const currentFeature = route ? route.params.feature : null;

  return (
    <div
      className="NavBar"
      style={{
        backgroundColor: Color.navBarColor,
        borderColor: Color.colorSegundary,
      }}
    >
      <div className="NavBar-title">
        <a href="/" className="NavBar-link">
          oBoticário
        </a>
      </div>
      <div className="NavBar-links">
        {features.map((feature) => {
          let className = "NavBar-link";

          if (currentFeature === feature) {
            className = `${className} ${className}--selected`;
          }

          return (
            <Link
              key={feature}
              className={className}
              to={{
                pathname: `/${feature === "home" ? "" : feature}`,
              }}
            >
              {name_menus[feature]}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;

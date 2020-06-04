import React, { Component } from "react";
import megaMenuData from "../MegaMenu.json";
import "../Mainnav.css";

const Level2 = ({ sublevel }) => (
  <div>
    {sublevel && 
    sublevel.map((leveltwo, index) => 
        <div key={index}>
                <div>
                  <li className="py-1">
                    <a href={leveltwo.link}>{leveltwo.name}</a>
                  </li>
                </div>
        </div>
    )}
  </div>
);
export default Level2;

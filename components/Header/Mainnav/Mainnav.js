import React, { Component } from "react";
import megaMenuData from "./MegaMenu.json";
import MainMenuData from "./data/MainMenuData";
import Level2 from "./SubMenu/Level2";
import "./Mainnav.css";

class Mainnav extends Component {
  render() {
    console.log(megaMenuData.mainnav);
    return (
      <div className="d-sm-none d-lg-block container-fluid py-0  border-bottom">
        <ul className="main-menu nav pr-0">
          {megaMenuData.mainnav.map((megaMenuItem, index) => {
            return (
              <li className="nav-item">
                <a className="level-0 py-2 px-2" href={megaMenuItem.level0.mainmenu && megaMenuItem.level0.link}>
                  {megaMenuItem.level0.mainmenu && ( megaMenuItem.level0.name)}
                </a>
                <div className="container-fluid bg-white sub-menu px-0">
                  <div className="sub-menu-container py-5">
                    {megaMenuItem.level0.level1 &&
                      megaMenuItem.level0.level1.map(levelone => 
                          <div className="sub-menu-col mb-3 px-2">
                            <h4 className="py-2">
                              <a href={levelone.link}>{levelone.name}</a>
                            </h4>                            
                            {levelone.level2 && (
                              <ul className="col">
                                <Level2 sublevel={levelone.level2} />
                              </ul>
                            )}
                          </div>
                      )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Mainnav;

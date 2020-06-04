import React, { Component } from "react";
import megaMenuData from "./MegaMenu.json";
import MainMenuData from "./data/MainMenuData";
import "./Level1.css";

class Level1 extends Component {
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
                      megaMenuItem.level0.level1.map(levelone => {
                        return (
                          <div className="sub-menu-col mb-3 px-2">
                            <h4 className="py-2">
                              <a href={levelone.link}>{levelone.name}</a>
                            </h4>
                            <ul className="col">
                              {levelone.level2 &&
                                levelone.level2.map(leveltwo => {
                                  return (
                                    <li className="py-1">
                                      <a href={leveltwo.link}>
                                        {leveltwo.name}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        );
                      })}
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

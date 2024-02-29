import React from "react";
import SidebarContainer from "../containers/SidebarContainer";
import RandomMealsContainer from "../containers/RandomMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import TopBarComponent from "../components/TopBarComponent";

export const HomePage = () => {
  return (
    <>
      <TopBarComponent />
      <div className="d-flex container-fluid">
        <SidebarContainer />

        <div className="container">
          <div className="p-4">
            <RandomMealsContainer />
            <MealsContainer />
          </div>
        </div>
      </div>
    </>
  );
};

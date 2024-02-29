import React from "react";
import { SearchInputComponent } from "./SearchInputComponent";
import { LogoComponent } from "./LogoComponent";
import { ActionsContainer } from "../containers/ActionsContainer";

const TopBarComponent = () => {
  return (
    <div className="bg-light py-3">
      <div className="d-flex justify-content-around">
        <LogoComponent />
        {/* <SearchInputComponent /> */}
        <ActionsContainer />
      </div>
    </div>
  );
};

export default TopBarComponent;

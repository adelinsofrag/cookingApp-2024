import React from "react";
import { ListComponent } from "../components/ListComponent";

const SidebarContainer = () => {
  return (
    <div className="w-25 d-none d-md-block py-4">
      <p className="lead fw-bold">Category</p>
      <ListComponent items={"Category Item"} />

      <p className="lead fw-bold">Area</p>
      <ListComponent items={"Area Item"} />
    </div>
  );
};

export default SidebarContainer;
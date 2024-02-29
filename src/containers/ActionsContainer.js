import React from "react";
import { FavoritesIconComponent } from "../components/FavoritesIconComponent";
import { HomeIconComponent } from "../components/HomeIconComponent";

export const ActionsContainer = () => {
  return (
    <div className="text-primary justify-content-around gap-3 d-flex">
      <FavoritesIconComponent />
      <HomeIconComponent />
    </div>
  );
};

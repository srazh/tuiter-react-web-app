import React from "react";
// import TuitsList from "../tuits/tuit-list;"
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/tuits-list";
import PostSummaryList from "../post-summary-list";

const HomeComponent = () => {
  return(
      <>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitsList/>
      </>
  );
};
export default HomeComponent;
import React from "react";
import TuitItem
  from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuits = useSelector(state => state.tuits)

  return(
      <>
        {
          tuits.map(tuit => {
            return(
                <TuitItem tuits={tuit} key={tuit._id}/>
            );
          })
        }
      </>

  );
};
export default TuitsList;
import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import tuit from '../tuits/tuits.json'
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";



const TuitItem = ({tuits}) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
  //  dispatch(deleteTuit(id));
      dispatch(deleteTuitThunk(id));

  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
              <img width={70} className=" rounded-3" src={`/images/${tuits.image}`} alt=""/>
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}/>
          </div>

          <div className="col-10">
            <div className="fw-bolder">{tuits.topic}. {tuits.handle}. {tuits.time} </div>
            <div>{tuits.tuit}</div>

          </div>
          <TuitStats tuits={tuits}/>
        </div>
      </li>
  );
};
export default TuitItem;
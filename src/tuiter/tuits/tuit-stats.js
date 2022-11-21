import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import{useDispatch} from 'react-redux'

const TuitStats =    (
    {tuits}

)=> {const dispatch = useDispatch();

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm">
            <i className="bi bi-chat"></i>
            <div  >{tuits.replies}</div>
          </div>
          <div className="col-sm">
            <i className="bi bi-repeat"></i>
            <div>{tuits.retuits}</div>
          </div>

          <div className="col-sm">
              <i onClick={() => {
                if (!tuits.liked) {
                  dispatch(updateTuitThunk({
                    ...tuits,
                    liked: true,
                    likes: tuits.likes + 1 }))}
                else {
                  dispatch(updateTuitThunk({
                    ...tuits,
                    liked: false,
                    likes: tuits.likes - 1 }))
                }}} className={`bi bi-heart${tuits.liked ? '-fill text-danger' : ''}`}/>
              {' ' + tuits.likes}
          </div>


          <div className="col-sm">
            <i onClick={() => {
              if (!tuits.disliked) {
                dispatch(updateTuitThunk({
                  ...tuits,
                  disliked: true,
                  dislikes: tuits.dislikes + 1 }))}
              else {
                dispatch(updateTuitThunk({
                  ...tuits,
                  disliked: false,
                  dislikes: tuits.dislikes - 1 }))
              }}} className={`bi bi-hand-thumbs-down${tuits.disliked ? 'bi bi-hand-thumbs-down-fill' : ''}`}/>
            {' ' + tuits.dislikes}
          </div>


          <div className="col-sm">
            <i className="bi bi-reply"></i>
            <div  >{tuits.replies}</div>
          </div>


          <div className="col-sm">
            <i className="bi bi-share-fill"></i>
          </div>
        </div>
      </li>

  );
};
export default TuitStats;


import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import React from "react";
import tuitsArray from '../tuits/tuits.json'
import reply from '../images/reply.png'
import retweet from '../images/retweet.png'
import heart from '../images/heart.png'
import redHeart from '../images/redHeart.png'

import share from '../images/share.png'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const TuitStats = (
    {tuits}

) => {

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm">
            <img src = {reply}/>
            <div  >{tuits.replies}</div>
          </div>
          <div className="col-sm">
            <img  src={retweet}/>
            <div>{tuits.retuits}</div>
          </div>

          <div className="col-sm">
            <img  src={
              tuits.likes ? redHeart : heart
              }
            />
            <div>{tuits.likes}</div>


          </div>
          <div className="col-sm">
            <img src={share}/>
          </div>
        </div>
      </li>

  );
};
export default TuitStats;


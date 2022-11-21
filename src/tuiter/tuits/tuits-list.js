import React , {useEffect}from "react";
import TuitItem
  from "./tuit-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import {useDispatch,useSelector} from "react-redux";

const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return(

      <>
          {
              loading &&
              <li className="list-group-item">
                  Loading...
              </li>
          }

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
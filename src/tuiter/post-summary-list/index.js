import React from "react";
import PostSummaryItem
  from "./post-summary-item";
import postsArray from './posts.json';
import {useSelector} from "react-redux";

import posts from "./posts.json"

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuits)

  return(
      <ul className="list-group">
        {
          postsArray.map(post =>
              <PostSummaryItem
                  key={posts._id} post={post}/> )
        }
      </ul>
  );
};
export default PostSummaryList;
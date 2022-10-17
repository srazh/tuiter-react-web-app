import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js"
const PostSummaryList = () => {
  return (`
   <div class="table-responsive">
      <table class="table">
        <tbody>
        ${
      post.map(post => {
        return(PostSummaryItem(post));
      }).join('')
  }       
        </tbody>
        </table>
        </div>
        
       
        
`); }; export default PostSummaryList
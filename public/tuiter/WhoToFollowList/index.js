import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
  return (`
    <p class="wd-title-who-to-follow">Who to follow</p>
    <div class="table-responsive">
      <table class="table">
        <tbody>
            ${
      who.map(who => {
        return(WhoToFollowListItem(who));
      }).join('')
  }       
        </tbody>
        </table>
        </div>
        

        
`); }; export default WhoToFollowList
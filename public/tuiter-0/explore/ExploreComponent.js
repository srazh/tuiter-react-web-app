import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
  
   <div class="wd-input-and-gear">
      <input class="wd-search-twitter"  id="icon" type="text" value= "Search Twitter" >
    <a href="explore-settings.html"><img class="wd-gear-icon" src="gear.png"></a> </br>
    </div>
    
    <h2><a href="https://getbootstrap.com/docs/5.1/components/navs-tabs/"></a></h2>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
    <div class="wd-container">
      <img class="wd-explore-large-image" src="../../images/spaceX.jpg" ><div class="bottom-left">SpaceX's Starship</div>
    </div>
    
  
   
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = (
    {
      active = 'explore',
    }
) => {
  const {pathname} = useLocation()
  const paths = pathname.split('/')
  return (
      <div className="list-group">
        <a href="#0" className="list-group-item">Tuiter</a>


        <Link to="/tuiter/home" className={`list-group-item
                    ${paths[2] === 'home'?'active':''}`}>
          Home
        </Link>


        <Link to="/tuiter/explore" className={`list-group-item
                    ${paths[2] === 'explore'?'active':''}`}>
          Explore
        </Link>


        <a href="#0" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
          Notifications
        </a>
        <a href="#0" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
          Messages
        </a>
        <a href="#0" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          Bookmarks
        </a>
        <a href="#0" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          Lists
        </a>
        <a href="#0" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          Profile
        </a>
        <a href="#0" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          More
        </a>
      </div>


  );
};
export default NavigationSidebar;
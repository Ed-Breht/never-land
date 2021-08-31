import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {useLocation, useHistory} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@material-ui/icons/Face';
import ForumIcon from '@material-ui/icons/Forum';
import TodayIcon from '@material-ui/icons/Today';


export default function Navigation() {
  // const [value, setValue] = React.useState("recents");

  const history = useHistory();

  let location = useLocation();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue);
  };

  return (
    <BottomNavigation
      value={location.pathname}
      onChange={handleChange}
      style={{ display: "flex"}}
      className="navigation-bar"
    >
      <BottomNavigationAction
        value="/general"
        icon={<DashboardIcon />}
        className="navigation-action"
      />
      <BottomNavigationAction
        value="/calendar"
        icon={<TodayIcon />}
        className="navigation-action"
      />
      <BottomNavigationAction
        value="/chat"
        icon={<ForumIcon />}
        className="navigation-action"
      />
      <BottomNavigationAction
        value="/achievements"
        icon={<FaceIcon />}
        className="navigation-action"
      />

    </BottomNavigation>
  );
}

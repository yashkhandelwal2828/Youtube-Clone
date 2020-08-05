import React from 'react';
import './SideBar.css';
import SideBarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function SideBar() {
	return (
		<div className="sidebar">
			<SideBarRow selected Icon={HomeIcon} title="Home" />
			<SideBarRow Icon={WhatshotIcon} title="Trending" />
			<SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
			<hr />
			<SideBarRow Icon={VideoLibraryIcon} title="Library" />
			<SideBarRow Icon={HistoryIcon} title="History" />
			<SideBarRow Icon={OnDemandVideoIcon} title="Your Videos" />
			<SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
			<SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
			<SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
			<hr />
		</div>
	);
}

export default SideBar;

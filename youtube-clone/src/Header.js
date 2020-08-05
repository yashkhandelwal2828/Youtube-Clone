import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
	const [ inputSearch, setInputSearch ] = useState('');

	return (
		<div className="header">
			<div class="header__left">
				<MenuIcon className="header__leftIcon" />
				<Link to="/">
					<img className="header__logo" src="../yt.png" alt="" />
				</Link>
			</div>
			<div class="header__input">
				<input
					onChange={(e) => setInputSearch(e.target.value)}
					value={inputSearch}
					placeholder="Search"
					type="text"
				/>
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className="header__inputSearch" />
				</Link>
			</div>
			<div class="header__icons">
				<VideoCallIcon className="header__icon" />
				<AppsIcon className="header__icon" />
				<NotificationIcon className="header__icon" />
				<Avatar alt="Remy sharp" src="../me.PNG" />
			</div>
		</div>
	);
}

export default Header;

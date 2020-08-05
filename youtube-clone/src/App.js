import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import './App.js';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route path="/search">
						<div class="app__page">
							<SideBar />
							<SearchPage />
						</div>
					</Route>
					<Route path="/">
						<div class="app__page">
							<SideBar />
							<RecommendedVideos />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

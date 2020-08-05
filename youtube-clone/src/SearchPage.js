import React from 'react';
import './SearchPage.css';
import TunedOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
	return (
		<div className="searchPage">
			<div class="searchPage__filter">
				<TunedOutlinedIcon />
				<h2>Filter</h2>
			</div>
			<hr />
			<ChannelRow
				image="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
				channel="Clever Programmer"
				verified
				subs="660K Views"
				noOfVideos={382}
				description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...        "
			/>
			<hr />
			<VideoRow
				image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
				subs="659K"
				description="Do you want a FREE one hour training... check this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
				subs="659K"
				description="Do you want a FREE one hour training... check this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBhmjZZwsIJmDq23-rDBqfGMoiqIQ"
				subs="659K"
				description="Do you want a FREE one hour training... check this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALxLB6sGhlmjdjyUIGSIjaetlf4g"
				subs="659K"
				description="Do you want a FREE one hour training... check this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
				subs="659K"
				description="Do you want a FREE one hour training... check this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
				subs="659K"
				description="Do you want a FREE one hour training... check this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBhmjZZwsIJmDq23-rDBqfGMoiqIQ"
				subs="659K"
				description="Do you want a FREE one hour training... check this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALxLB6sGhlmjdjyUIGSIjaetlf4g"
				subs="659K"
				description="Do you want a FREE one hour training... check this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
			/>
		</div>
	);
}

export default SearchPage;

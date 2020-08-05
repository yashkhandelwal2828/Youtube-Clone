import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({ image, verified, subs, noOfVideos, channel, description }) {
	return (
		<div className="channelRow">
			<Avatar className="channelRow__logo" src={image} alt={channel} />
			<div class="channelRow__text">
				<h4>
					{channel} {verified && <CheckCircleOutlineOutlinedIcon />}
				</h4>
				<p>
					{subs} • {noOfVideos} videos
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ChannelRow;

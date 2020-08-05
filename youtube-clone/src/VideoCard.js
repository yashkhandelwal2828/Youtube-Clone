import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
	return (
		<div className="videoCard">
			<img className="videoCard__thumbnail" src={image} alt="" />
			<div class="videoCard__info">
				<Avatar src={channelImage} alt={channel} className="videoCard__Avatar" />
				<div class="videoCard__text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} • {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;

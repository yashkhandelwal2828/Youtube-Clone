import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
	return (
		<div className="recommendedVideos">
			<h2>Recommended</h2>
			<div class="recommendedVideos__video">
				<VideoCard
					image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBiSCrWOo4xSWC7PtRiqD5WKcGVpg"
					channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQolgbJM3mV3FEtYJF8OQxL28EG894GWkRW0A&usqp=CAU"
					channel="Sonny Sangha"
					title="Become a Web Developer in 10 minutes | 2019/2020"
					views="2.3M"
					timestamp="3 days Ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/5JGlr-FVKsk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpqEdKba2dusPvXa6kUZBc914M4Q"
					channelImage="https://yt3.ggpht.com/a-/AOh14GjNWIVnoFbGeEFPRPPfBGGAl6Whxl8dXXsmyA=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Christian Guzman"
					title="Whether we like it or not..."
					views="2M Views"
					timestamp="4 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/77XmRDtOL7c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIiXYbD6TYhgtfWFv2qvFQ8WgQLA"
					channelImage="https://yt3.ggpht.com/a-/AOh14Gg-7xgPV76_c0nFmsYJLGUTUkJCrPWcnyULag=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Firebase"
					title="5 Uses for cloud functions"
					views="850K Views"
					timestamp="1 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/Xzh8BdaaAvs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFVU97RnCsjtboTaR3TQzvoosgWg"
					channelImage="https://yt3.ggpht.com/a-/AOh14Ghl8U3OeJOtu1LRmTNuW7Aiq-iKaU5U6gYWoA=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Marques Brownlee"
					title="The Truth about OnePlus Nord!"
					views="5M Views"
					timestamp="58  minutes ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/ZMsDib3wfuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Wei5mn2iCrSIFFQCRfarGe6gBA"
					channelImage="https://i.ytimg.com/vi/ZMsDib3wfuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Wei5mn2iCrSIFFQCRfarGe6gBA"
					channel="Sonny Sangha"
					title="Elon Musk says Teslas are too expensive!"
					views="1.2M Views"
					timestamp="3 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBiSCrWOo4xSWC7PtRiqD5WKcGVpg"
					channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQolgbJM3mV3FEtYJF8OQxL28EG894GWkRW0A&usqp=CAU"
					channel="Sonny Sangha"
					title="Become a Web Developer in 10 minutes | 2019/2020"
					views="2.3M"
					timestamp="3 days Ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/5JGlr-FVKsk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpqEdKba2dusPvXa6kUZBc914M4Q"
					channelImage="https://yt3.ggpht.com/a-/AOh14GjNWIVnoFbGeEFPRPPfBGGAl6Whxl8dXXsmyA=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Christian Guzman"
					title="Whether we like it or not..."
					views="2M Views"
					timestamp="4 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/77XmRDtOL7c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIiXYbD6TYhgtfWFv2qvFQ8WgQLA"
					channelImage="https://yt3.ggpht.com/a-/AOh14Gg-7xgPV76_c0nFmsYJLGUTUkJCrPWcnyULag=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Firebase"
					title="5 Uses for cloud functions"
					views="850K Views"
					timestamp="1 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/Xzh8BdaaAvs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFVU97RnCsjtboTaR3TQzvoosgWg"
					channelImage="https://yt3.ggpht.com/a-/AOh14Ghl8U3OeJOtu1LRmTNuW7Aiq-iKaU5U6gYWoA=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Marques Brownlee"
					title="The Truth about OnePlus Nord!"
					views="5M Views"
					timestamp="58  minutes ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBiSCrWOo4xSWC7PtRiqD5WKcGVpg"
					channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQolgbJM3mV3FEtYJF8OQxL28EG894GWkRW0A&usqp=CAU"
					channel="Sonny Sangha"
					title="Become a Web Developer in 10 minutes | 2019/2020"
					views="2.3M"
					timestamp="3 days Ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/5JGlr-FVKsk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpqEdKba2dusPvXa6kUZBc914M4Q"
					channelImage="https://yt3.ggpht.com/a-/AOh14GjNWIVnoFbGeEFPRPPfBGGAl6Whxl8dXXsmyA=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Christian Guzman"
					title="Whether we like it or not..."
					views="2M Views"
					timestamp="4 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/77XmRDtOL7c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIiXYbD6TYhgtfWFv2qvFQ8WgQLA"
					channelImage="https://yt3.ggpht.com/a-/AOh14Gg-7xgPV76_c0nFmsYJLGUTUkJCrPWcnyULag=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Firebase"
					title="5 Uses for cloud functions"
					views="850K Views"
					timestamp="1 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/Xzh8BdaaAvs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFVU97RnCsjtboTaR3TQzvoosgWg"
					channelImage="https://yt3.ggpht.com/a-/AOh14Ghl8U3OeJOtu1LRmTNuW7Aiq-iKaU5U6gYWoA=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Marques Brownlee"
					title="The Truth about OnePlus Nord!"
					views="5M Views"
					timestamp="58  minutes ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/ZMsDib3wfuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Wei5mn2iCrSIFFQCRfarGe6gBA"
					channelImage="https://i.ytimg.com/vi/ZMsDib3wfuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Wei5mn2iCrSIFFQCRfarGe6gBA"
					channel="Sonny Sangha"
					title="Elon Musk says Teslas are too expensive!"
					views="1.2M Views"
					timestamp="3 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBiSCrWOo4xSWC7PtRiqD5WKcGVpg"
					channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQolgbJM3mV3FEtYJF8OQxL28EG894GWkRW0A&usqp=CAU"
					channel="Sonny Sangha"
					title="Become a Web Developer in 10 minutes | 2019/2020"
					views="2.3M"
					timestamp="3 days Ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/5JGlr-FVKsk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpqEdKba2dusPvXa6kUZBc914M4Q"
					channelImage="https://yt3.ggpht.com/a-/AOh14GjNWIVnoFbGeEFPRPPfBGGAl6Whxl8dXXsmyA=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Christian Guzman"
					title="Whether we like it or not..."
					views="2M Views"
					timestamp="4 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/77XmRDtOL7c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIiXYbD6TYhgtfWFv2qvFQ8WgQLA"
					channelImage="https://yt3.ggpht.com/a-/AOh14Gg-7xgPV76_c0nFmsYJLGUTUkJCrPWcnyULag=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Firebase"
					title="5 Uses for cloud functions"
					views="850K Views"
					timestamp="1 days ago"
				/>
				<VideoCard
					image="https://i.ytimg.com/vi/Xzh8BdaaAvs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFVU97RnCsjtboTaR3TQzvoosgWg"
					channelImage="https://yt3.ggpht.com/a-/AOh14Ghl8U3OeJOtu1LRmTNuW7Aiq-iKaU5U6gYWoA=s68-c-k-c0x00ffffff-no-rj-mo"
					channel="Marques Brownlee"
					title="The Truth about OnePlus Nord!"
					views="5M Views"
					timestamp="58  minutes ago"
				/>
			</div>
		</div>
	);
}

export default RecommendedVideos;

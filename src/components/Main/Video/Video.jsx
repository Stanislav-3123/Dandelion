import React from 'react';
import s from './style.module.scss'
import YouTube from 'react-youtube';
const Video = () => {
	return (
		<div className={s.container}>
			<span>– О ПРОДУКТЕ –</span>
			<YouTube videoId="lpVDh55xlTY"/>
		</div>
	);
};

export default Video;
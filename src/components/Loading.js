import loadingGif from "../images/gif/loading-arrow.gif";

const Loading = () => {
	return (
		<div className="loading">
			<h4>Rooms loading...</h4>
			<img src={loadingGif} alt="Data is loading" />
		</div>
	);
};
export default Loading;

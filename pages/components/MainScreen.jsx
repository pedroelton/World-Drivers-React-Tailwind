import React, {useState, useEffect} from "react";

function MainScreen() {
	const videos = [
		{city: "Vancouver", country: "Canada", id: "OvEXdjpZQpM"},
		{city: "Snoqualmie", country: "USA", id: "pIallVw48SY"},
		{city: "Beverly Hills", country: "USA", id: "25EgbhdVESE"},
		{city: "Lisbon", country: "Portugal", id: "syL1jBDxLZE"},
		{city: "Paris", country: "France", id: "FBjjYw-xcdg"},
		{city: "Rome", country: "Italy", id: "ytiM1nMv_xU"},
		{city: "Monaco", country: "Monaco", id: "ij6xccYYIuE"},
		{city: "Grindelwald", country: "Switzerland", id: "b-WViLMs_4c"},
		{city: "Cairo", country: "Egypt", id: "Esyp2P0uJu4"},
		{city: "Tehran", country: "Iran", id: "Wn5XjIzpRQ8"},
		{city: "Shanghai", country: "China", id: "7oolCCCgOJ4"},
		{city: "Tokyo", country: "Japan", id: "2N0lbv42h5Y"},
		{city: "Kyoto", country: "Japan", id: "XnCrVgFJeCg"},
		{city: "Fukuoka", country: "Japan", id: "gwAwRxOzEIQ"},
		{city: "Wanaka", country: "New Zealand", id: "19Fke5OXZ_g"},
	];

	const [videoId, setVideoId] = useState(
		"https://www.youtube.com/embed/2N0lbv42h5Y?autoplay=1&t=60&controls=0&mute=0&loop=1&modestbranding=0&showinfo=0&start=0&enablejsapi=1&&widgetid=3"
	);

	useEffect(() => {
		console.log("test");
	}, []);

	function selectCity(event) {
		setVideoId(
			`https://www.youtube.com/embed/${event.id}?autoplay=1&t=60&controls=0&mute=0&loop=1&modestbranding=1&showinfo=0&start=0&enablejsapi=1&&widgetid=3`
		);
	}

	return (
		<main className="flex w-screen h-screen background-provisorio">
			{/* <canvas /> */}
			<aside className="hover:bg-[rgba(0,0,0,0.5)] bg-[rgba(0,0,0,0.2)] h-screen hover:w-[300px] w-[40px] fixed top-0 right-0 p-4 z-50 ease-in-out duration-300">
				<h2 className="text-2xl text-white font-semibold flex">
					Sidebar
				</h2>
				<div className="overflow-y-scroll w-full max-h-[240px] bg-[rgba(0,0,0,0.5)] p-3 font-semibold text-white my-5 ease-in-out duration-300">
					<ul>
						{videos.map((video) => (
							<div key={video.id}>
								<li
									className="px-2 py-1 cursor-pointer"
									key={video.id}
									onClick={() => selectCity(video)}>
									{video.city}, {video.country}
								</li>
							</div>
						))}
					</ul>
				</div>
			</aside>
			<iframe
				width={"100%"}
				height={"100%"}
				loop
				src={videoId}
				frameborder="0"
				allow="autoplay;encrypted-media;"
				allowfullscreen
			/>
		</main>
	);
}

export default MainScreen;

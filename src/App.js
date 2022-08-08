import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/rooms" element={<Rooms />} />
				<Route exact path="/single-room/:slug" element={<SingleRoom />} />
				<Route exact path="*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;

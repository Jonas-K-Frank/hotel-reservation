import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Rooms = () => {
	return (
		<div>
			<Hero hero="roomsHero">
				<Banner title="our rooms">
					<Link to="/" className="btn-primary">
						Tilbage til forsiden
					</Link>
				</Banner>
			</Hero>
		</div>
	);
};

export default Rooms;

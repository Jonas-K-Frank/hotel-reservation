import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div>
			<Hero>
				<Banner title="Luxuriøse værelser" subtitle="Kun på vores hoteller">
					<Link to="/rooms" className="btn-primary">Se vores smukke værelser</Link>
				</Banner>
			</Hero>
			;
		</div>
	);
};

export default Home;

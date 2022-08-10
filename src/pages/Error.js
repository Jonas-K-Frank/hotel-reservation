import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Error = () => {
	return <div>
					<Hero>
				<Banner title="404" subtitle="Siden du leder efter kunne ikke findes">
					<Link to="/" className="btn-primary">Tilbage til forsiden</Link>
				</Banner>
			</Hero>
	</div>;
};

export default Error;

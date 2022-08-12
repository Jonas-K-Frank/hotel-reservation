
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
const Services = () => {
	
    const icons =[
            {
                icon: <FaCocktail />,
                title: "Free rum & gin Cocktails",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ut?"
            },
            {
                icon: <FaHiking />,
                title: "Great hiking trails",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ut?"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle service",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ut?"
            },
            {
                icon: <FaBeer />,
                title: "300 different beers on tap",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ut?"
            }
        ]

    return (
        <div>
		<section className="services">
			<Title title="Services" />
            <div className="services-center">
                {icons.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
		</section>
        </div>
	);
};


export default Services;

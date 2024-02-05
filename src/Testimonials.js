import { useNavigate } from "react-router-dom";
import Logo from "./components/Logo";
import Testimonial from "./components/Testimonial";
import "./Testimonials.css";

const mockData = [
  {
    review: "The finest dried urine anywhere!",
    reviewer: "Eric B",
    stars: 5,
  },
  {
    review:
      "It's big, it's yellow, it's a sulphur pile. Couldn't tick those boxes any better.",
    reviewer: "Hermione W",
    stars: 5,
  },
  {
    review:
      "I was disappointed to learn it wasn't a large pile of butter-flavoured popcorn seasoning",
    reviewer: "Phil M",
    stars: 5,
  },
  {
    review:
      "It truly is the biggest yellow sulphur pile you can find in the Vancouver harbour area.",
    reviewer: "Sylvain B",
    stars: 5,
  },
  {
    review:
      "Such a great big yellow Sulphur pile - just incredible! Not many words can describe the joy of finding out what the big yellow pile actually is!",
    reviewer: "Max B",
    stars: 5,
  },
  {
    review:
      "Standing before North Vancouver's Big Yellow Sulphur Pile, I touched its vibrant crystals, breathing in the sharp legacy of earth transformed. This moment, a delicate dance between human ambition and nature's bounty, whispered a profound connection, reminding me of our intertwined destinies with the planet's raw elements.",
    reviewer: "Peyman Z",
    stars: 4.9,
  },
];

export default function Testimonials() {
  const navigate = useNavigate();

  const navigateHome = () => {
    // navigate to /
    navigate("/");
  };

  const makeTestimonials = (data) => {
    return data.map((x) => (
      <Testimonial
        key={x.reviewer + x.stars}
        review={x.review}
        reviewer={x.reviewer}
        stars={x.stars}
      />
    ));
  };

  return (
    <div className="Page">
      <Logo text={"Testimonials"}></Logo>
      <div className="Testimonials">{makeTestimonials(mockData)}</div>
      <button onClick={navigateHome}>Return home</button>
    </div>
  );
}

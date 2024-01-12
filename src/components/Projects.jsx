/* eslint-disable react/prop-types */
import github from "../assets/images/github.png";
import www from "../assets/images/world-wide-web.png";
import { Bounce, Slide } from "react-awesome-reveal";

export default function Projects({
  heading,
  name,
  discription: { sentence: about },
  tech,
  image,
  classes,
}) {
  return (
    <Slide direction={classes ? "left" : "right"} duration={1000}>
      <article className={classes ? "reverse" : ""}>
        <div className="text">
          <h4>{heading}</h4>
          <h3>{name}</h3>
          <p className="blackbox">{`Description of the project. ${about}`}</p>
          <h4>Technologies used include:</h4>
          <Bounce cascade>
            <ul>
              {tech.map((technology, idx) => (
                <li key={idx}>{technology}</li>
              ))}
            </ul>
          </Bounce>
          <a
            href="https://github.com/pal-kamlesh"
            style={{ textDecoration: "none" }}
          >
            <img src={github} />
          </a>
          <a href="https://keeperapp.up.railway.app/">
            <img src={www} />
          </a>
        </div>
        <img
          className="projectImg"
          src={image}
          alt="Screenshot of the Wall of Wonder."
        />
      </article>
    </Slide>
  );
}

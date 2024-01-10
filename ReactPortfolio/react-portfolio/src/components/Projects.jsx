/* eslint-disable react/prop-types */
import github from "../assets/images/github.png";
import www from "../assets/images/world-wide-web.png";
export default function Projects({
  heading,
  name,
  discription,
  tech,
  image,
  classes,
}) {
  return (
    <article className={classes ? "reverse" : ""}>
      <div className="text">
        <h4>{heading}</h4>
        <h3>{name}</h3>
        <p className="blackbox">
          {`Description of the project. ${discription}`}
        </p>
        <h4>Technologies used include:</h4>
        <ul>
          {tech.map((technology, idx) => (
            <li key={idx}>{technology}</li>
          ))}
        </ul>
        <a
          href="https://github.com/discharging"
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
  );
}

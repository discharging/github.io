import "./App.css";
import Divider from "./components/Divider";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import data from "../data.json";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Divider />
      <Hero />
      <Divider />
      <div className="section-dkblue" style={{ overflow: "hidden" }}>
        <section id="projects">
          <h2>Projects I&rsquo;m proud of</h2>
          {data.map((projectInfo, idx) => (
            <Projects key={idx} {...projectInfo} />
          ))}
        </section>
      </div>
      <Divider />
      <div className="section-plum">
        <Contact />
      </div>
      <Divider />
      <Footer />
    </>
  );
}

export default App;

import CourseCard from "./CourseCard";
import { html, css, js, acc } from "../utils/constants";



const Home = () => {
  return (
    <section className="home">
      <div className="home__text">
        <h1 className="home__title-light">Welcome to the</h1>
        <h1 className="home__title-bold">Frontend Quiz!</h1>
        <p className="home__description">Pick a subject to get started.</p>
      </div>

     <div className="home__cards">
        <CourseCard icon={html} text="HTML" />
        <CourseCard icon={css} text="CSS" />
        <CourseCard icon={js} text="JavaScript" />
        <CourseCard icon={acc} text="Accessibility" />
     </div>
    </section>
  );
};

export default Home;

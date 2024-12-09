import CourseCard from "./CourseCard";
import { courseInfo } from "../utils/constants"


type HomeProp = {
  onSelectChange: (subject: string) => void 
  logo: string
}

const Home = ({onSelectChange}: HomeProp) => {
  return (
    <>
    <section className="home">
      <div className="home__text">
        <h1 className="home__title-light">Welcome to the</h1>
        <h1 className="home__title-bold">Frontend Quiz!</h1>
        <p className="home__description">Pick a subject to get started.</p>
      </div>

     <div className="home__cards">
        {
          courseInfo.map((course) => (
            <CourseCard icon={course.icon} text={course.text} onSelectChange={onSelectChange} key={course.text}/>
          ))
        }
     </div>
    </section>
    </>
  );
};

export default Home;

type CardProps = {
  icon: string;
  text: string;
};
const CourseCard = ({ icon, text }: CardProps) => {
  return (
    <div className="course-card">
      <img src={icon} alt={text + " icon"} />
      <p>{text}</p>
    </div>
  );
};

export default CourseCard;

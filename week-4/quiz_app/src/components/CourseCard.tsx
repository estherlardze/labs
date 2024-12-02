type CardProps = {
  icon: string;
  text: string;
  onSelectChange: (subject: string) => void 
};
const CourseCard = ({ icon, text, onSelectChange}: CardProps) => {
  return (
    <div className="course-card" onClick={() => onSelectChange(text)}>
      <img src={icon} alt={text + " icon"} />
      <p className="course-card__text">{text}</p>
    </div>
  );
};

export default CourseCard;

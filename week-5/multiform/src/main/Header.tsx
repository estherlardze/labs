type HeaderProps = {
  title: string;
  description: string;
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="header">
      <h1>{title}</h1> <p>{description}</p>
    </div>
  );
};

export default Header;

import { render, screen } from "@testing-library/react";
import CourseCard from "../components/CourseCard"; 
import "@testing-library/jest-dom";


const mockOnSelectChange = jest.fn();

const defaultProps = {
  icon: "https://example.com/icon.png",
  text: "Course 1",
  onSelectChange: mockOnSelectChange,
};

describe("CourseCard Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with an icon and text", () => {
    render(<CourseCard {...defaultProps} />);

    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", defaultProps.icon);
    expect(icon).toHaveAttribute("alt", `${defaultProps.text} icon`);

    const text = screen.getByText(defaultProps.text);
    expect(text).toBeInTheDocument();
  });

  it("calls onSelectChange when clicked", () => {
    render(<CourseCard {...defaultProps} />);

    const courseCard = screen.getByText(defaultProps.text);
    courseCard.click();

    expect(mockOnSelectChange).toHaveBeenCalled();
  });
});

import { useState } from "react";
import arrowleft from "../../../assets/icon-arrow-left.svg";
import arrowright from "../../../assets/icon-arrow-right.svg";
import Icon from "../../atom/Icon/Icon";
import Button from "../../atom/Button/Button";
import './Datepicker.css'

interface DatePickerProps {
  selectedDate: string;
  handleSelection: (value: string, field: string) => void;
}

const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Datepicker = ({ selectedDate, handleSelection }: DatePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate));

  const generateWeeks = (year: number, month: number) => {
    const weeks = [];
    const days = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    for (let i = firstDayOfMonth.getDay() - 1; i >= 0; i--) {
      const day = new Date(year, month - 1, prevMonthLastDay - i)
        .toISOString()
        .split("T")[0];
      days.push({ date: day, isCurrentMonth: false });
    }

    for (let date = 1; date <= lastDayOfMonth.getDate(); date++) {
      const day = new Date(year, month, date).toISOString().split("T")[0];
      days.push({ date: day, isCurrentMonth: true });
    }

    const remainingSlots = 7 - (days.length % 7);
    if (remainingSlots < 7) {
      for (let i = 1; i <= remainingSlots; i++) {
        const day = new Date(year, month + 1, i).toISOString().split("T")[0];
        days.push({ date: day, isCurrentMonth: false });
      }
    }

    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);
      weeks.push({ weekNumber: weeks.length + 1, days: week });
    }

    return weeks;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const weeks = generateWeeks(year, month);

  return (
    <section className="datepicker">
      <div className="datepicker--header">
        <Button variant="transparent" onClick={handlePrevMonth}>
          <Icon src={arrowleft} alt="arrow left" size="xs"/>
        </Button>

        <h2>
          {months[month]} {year}
        </h2>

        <Button variant="transparent" onClick={handleNextMonth}>
          <Icon src={arrowright} alt="arrow right" size="xs"/>
        </Button>
      </div>

      <div>
        {weeks.map(({ weekNumber, days }) => (
          <div key={weekNumber} className="datepicker--week">
            {days.map(({ date, isCurrentMonth }) => (
              <Button
                key={date}
                variant="transparent"
                className={`datepicker--day ${isCurrentMonth? "active" : ""}`}
                onClick={() => handleSelection(date, "dueDate")}
              >
                {Number(date.split("-")[2])}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Datepicker;

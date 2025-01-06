import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterInvoice } from "../../../store/features/invoiceSlice";
import { data } from "../../../utils/constants";
import "./FilterCard.css";

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleFilterChange = (invoiceType: string) => {
    const updatedFilters = selectedFilters.includes(invoiceType)
      ? selectedFilters.filter((type) => type !== invoiceType)
      : [...selectedFilters, invoiceType];
    setSelectedFilters(updatedFilters);
    dispatch(filterInvoice(updatedFilters));
  };

  return (
    <section className="filter__card">
      {data.map((item) => (
        <div className="filter__card-item" key={item.id}>
          <div className="input--checkbox ">
            <label htmlFor={item.invoiceType}>{item.text}</label>
            <input
              type="checkbox"
              className="custom-checkbox"
              id={item.invoiceType}
              checked={selectedFilters.includes(item.invoiceType)}
              onChange={() => handleFilterChange(item.invoiceType)}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default FilterCard;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterInvoice } from "../../store/features/invoiceSlice";

export const data = [
  {
    id: 1,
    invoiceType: "paid",
    text: "Paid",
  },
  {
    id: 2,
    invoiceType: "pending",
    text: "Pending",
  },
  {
    id: 3,
    invoiceType: "draft",
    text: "Draft",
  },
];

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();

  const handleFilterChange = (invoiceType: any) => {
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
          <input
            type="checkbox"
            id={item.invoiceType}
            checked={selectedFilters.includes(item.invoiceType)}
            onChange={() => handleFilterChange(item.invoiceType)}
          />
          <label htmlFor={item.invoiceType}></label>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default FilterCard;
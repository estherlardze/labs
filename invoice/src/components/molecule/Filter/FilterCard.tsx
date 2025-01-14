import { data } from "../../../utils/constants";
import "./FilterCard.css";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectStatusFilter, updateStatusFilter } from "../../../store/features/invoiceSlice";

const FilterCard = () => {
  const dispatch = useAppDispatch();
  const statusFilters = useAppSelector(selectStatusFilter)

  const handleFilterChange = (invoiceType: string) => {
    // const updatedFilters = selectedFilters.includes(invoiceType)
    //   ? selectedFilters.filter((type) => type !== invoiceType)
    //   : [...selectedFilters, invoiceType];
    // setSelectedFilters(updatedFilters);
    // dispatch(filterInvoice(updatedFilters));
    dispatch(updateStatusFilter(invoiceType));
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
              checked={statusFilters.includes(item.invoiceType)}
              onChange={() => handleFilterChange(item.invoiceType)}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default FilterCard;

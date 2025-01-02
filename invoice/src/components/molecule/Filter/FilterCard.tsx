import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterInvoice } from "../../../store/features/invoiceSlice";
import Input from "../../atom/Input/Input";
import {data} from '../../../utils/constants'
import '../../organism/Header/Header.css'

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();


  const handleFilterChange = (invoiceType: any) => {
    // @ts-ignore
    const updatedFilters = selectedFilters.includes(invoiceType)
      ? selectedFilters.filter((type) => type !== invoiceType)
      : [...selectedFilters, invoiceType];
    // @ts-ignore
    setSelectedFilters(updatedFilters);
    dispatch(filterInvoice(updatedFilters))
  };

 console.log(selectedFilters, "selectedFilters");

  return (
    <section className="filter__card">
      {data.map((item) => (
        <div className="filter__card-item" key={item.id}>
          <Input
            label={item.text}
            id={item.invoiceType}
            type="checkbox"
            className="input--checkbox"
            // @ts-ignore
            checked={selectedFilters.includes(item.invoiceType)}
            onChange={() => handleFilterChange(item.invoiceType)}
          />
        </div>
      ))}
    </section>
  );
};

export default FilterCard;

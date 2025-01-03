import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterInvoice } from "../../../store/features/invoiceSlice";
import Input from "../../atom/Input/Input";
import {data} from '../../../utils/constants'
import './FilterCard.css'

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
          <Input
            label={item.text}
            id={item.invoiceType}
            type="checkbox"
            className="input--checkbox custom-checkbox"
            color="text-gray"
            size="sm"
            checked={selectedFilters.includes(item.invoiceType)}
            onChange={() => handleFilterChange(item.invoiceType)}
          />


        </div>
      ))}
    </section>
  );
};

export default FilterCard;

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../../atom/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setOverlay } from "../../../store/features/overlaySlice";
import { Text } from "../../atom/Text/Text";
import { GoPlus } from "react-icons/go";
import '../../organism/Header/Header.css'
import FilterCard from "./FilterCard";
import { RootState } from "../../../store";


const HeaderRight = () => {
  const [isArrowDown, setIsArrowDown] = useState(false);
  const dispatch = useDispatch();
  const {invoices} = useSelector((state: RootState) => state.invoices);

  const handleArrowToggle = () => {
    setIsArrowDown(!isArrowDown);
  };

  const handleOverlayToggle = () => {
    dispatch(setOverlay(true));
  };

  return (
    <div className="header__filter">
      <article>
        <Button variant="transparent" onClick={handleArrowToggle}>
          Filter by status{" "}
          {isArrowDown ? (
            <IoIosArrowDown className="arrow" size={20} />
          ) : (
            <IoIosArrowUp className="arrow" size={20} />
          )}
        </Button>

        {isArrowDown && (
          // @ts-ignore
          <FilterCard invoices={invoices} />
        )}
      </article>
      <Button radius="rounded-full" onClick={handleOverlayToggle}>
        <GoPlus size={20} className="header__plus" />
        <Text className="header__button-text" variant="p">New Invoice</Text>
      </Button>
    </div>
  );
};

export default HeaderRight;

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../../atom/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setOverlay } from "../../../store/features/overlaySlice";
import { Text } from "../../atom/Text/Text";
import "../../organism/Header/Header.css";
import FilterCard from "../Filter/FilterCard";
import { RootState } from "../../../store";
import Icon from "../../atom/Icon/Icon";
import plusIcon from "../../../assets/icon-plus.svg";
import "./HeaderRight.css";

const HeaderRight = () => {
  const [isArrowDown, setIsArrowDown] = useState(false);
  const dispatch = useDispatch();
  const ismobile = useSelector((state: RootState) => state.screenSize.ismobile);

  const handleArrowToggle = () => {
    setIsArrowDown(!isArrowDown);
  };

  const handleOverlayToggle = () => {
    dispatch(setOverlay(true));
  };

  return (
    <section className="header__filter">
      <div>
        <Button variant="transparent" onClick={handleArrowToggle}>

          {ismobile ? "Filter": "Filter by status"}
          
          {isArrowDown ? (
            <IoIosArrowUp className="arrow" size={20} />
          ) : (
            <IoIosArrowDown className="arrow" size={20} />
          )}
        </Button>

        {isArrowDown && (
          <FilterCard/>
        )}
      </div>
      
      <Button radius="rounded-full" onClick={handleOverlayToggle}>
        <div className="plus-icon">
          <Icon src={plusIcon} alt="plus icon" size="xs" radius="rounded-full"/>
        </div>
        <Text className="header__button-text" variant="p">
          {ismobile ? "New" : "New Invoice"}
        </Text>
      </Button>
    </section>
  );
};

export default HeaderRight;

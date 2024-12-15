import './footer.css';
import {handleNextStep, handlePrevStep} from '../../features/formSlice'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {setConfirm} from '../../features/formSlice'
const Footer = () => {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(handleNextStep())
  }

  const handlePrev = () => {
    dispatch(handlePrevStep())
  }

  const ConFirm = () => {
    dispatch(setConfirm())
  }


const currentStepIndex = useSelector((state:RootState) => state.form.currentStepIndex);

  return (
    <footer className="main-footer">
      {currentStepIndex > 0 && (
        <button type="button" className="previous" onClick={handlePrev}>
          Goback
        </button>
      )}
      {currentStepIndex === 3 ? (
        <button type="button" className="next" onClick={() => ConFirm()}>
          Confirm
        </button>
      ) : (
        <button type="submit" className="next" onClick={handleNext}>
          Next Step
        </button>
      )}
    </footer>
  );
};


export default Footer;

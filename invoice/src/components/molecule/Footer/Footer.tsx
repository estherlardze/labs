import "./Footer.css";
import Button from "../../atom/Button/Button";
import { useFormContext } from "react-hook-form";
import { useAppSelector } from "../../../hooks";
import { selectLoading } from "../../../store/features/invoiceSlice";

interface FooterProps {
  handleInvoiceClose: () => void;
  handleSaveAsDraft: () => void;
}

const Footer = ({ handleInvoiceClose, handleSaveAsDraft }: FooterProps) => {
  const {
    getValues,
    formState: { isValid, isDirty },
  } = useFormContext();

  const loading = useAppSelector(selectLoading);

  return (
    <footer className="footer">
      <Button
        radius="rounded-lg"
        color="discard"
        variant="secondary"
        onClick={handleInvoiceClose}
      >
        Discard
      </Button>
      <div className="footer__right">
        <Button
          radius="rounded-lg"
          variant="primary"
          color="save"
          type="button"
          onClick={handleSaveAsDraft}
        >
          Save as draft
        </Button>
        <Button
          radius="rounded-lg"
          color="send"
          disabled={
            !isValid ||
            !isDirty ||
            !getValues("items").length ||
            loading === "pending"
          }
          type="submit"
        >
          Save & send
        </Button>
      </div>
    </footer>
  );
};

export default Footer;

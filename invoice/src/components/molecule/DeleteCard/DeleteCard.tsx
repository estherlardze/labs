import { Heading } from "../../atom/Heading/Heading";
import { Text } from "../../atom/Text/Text";
import Button from "../../atom/Button/Button";
import "./DeleteCard.css";
import { deleteInvoice } from "../../../store/features/invoiceSlice";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const DeleteCard = ({ id }: { id: string | undefined }) => {
  const invoices = useSelector((state: any) => state.invoices.invoices);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteInvoice(id));
    navigate(-1);
  };

  return (
    <section className="delete-card--overlay">
      <div className="delete-card">
        <Heading variant="h1">Confirm deletion</Heading>
        <Text variant="description">
          Are you sure you want to delete invoice #{id}? This action cannot be
          undone.
        </Text>

        <div className="delete-card__buttons">
          <Button variant="primary" radius="rounded-lg">
            Cancel
          </Button>
          <Button
            variant="danger"
            radius="rounded-lg"
            className="delete"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeleteCard;

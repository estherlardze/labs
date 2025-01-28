import { Heading } from "../../atom/Heading/Heading";
import { Text } from "../../atom/Text/Text";
import Button from "../../atom/Button/Button";
import "./DeleteCard.css";
import { deleteInvoice } from "../../../store/features/invoiceSlice";
import { useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const DeleteCard = ({handleModalClose}: {handleModalClose: () => void}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id: string | undefined) => {
    dispatch(deleteInvoice(id));
    navigate('/');
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
          <Button variant="primary" radius="rounded-lg" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            radius="rounded-lg"
            className="delete"
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeleteCard;

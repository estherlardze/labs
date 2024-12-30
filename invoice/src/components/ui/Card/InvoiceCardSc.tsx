import "./InvoiceCard.css";
import { InvoiceProps } from "../../../types/type";
import { Link } from "react-router-dom";

interface Props {
  item: InvoiceProps;
}

const InvoiceCardSc = ({ item }: Props) => {
  return (
    <Link to={`/${item.id}`} className="invoice__link">
      <button key={item.id} className="invoice__card">
        <div className="invoice__info">
          <p className="invoice__id">#{item.id}</p>
          <p className="invoice__client">{item.clientName}</p>
        </div>

        <div>
          <article>
            <p className="invoice__date">Due {item.createdAt}</p>
            <p className="invoice__total">{item.total.toFixed(2)}</p>
          </article>
          <span
            className={`invoice__status ${
              item.status === "paid"
                ? "status__paid"
                : item.status === "pending"
                ? "status__pending"
                : "status__draft"
            }`}
          >
            {item.status}
          </span>
        </div>
      </button>
    </Link>
  );
};

export default InvoiceCardSc;

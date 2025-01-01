import "./InvoiceDetail.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text } from "../../components/atom/Text/Text";
import Badge from "../../components/atom/Badge/Badge";
import Button from "../../components/atom/Button/Button";
import InvoiceInfo from "./InvoiceInfo";
import Address from "./Address";

const InvoiceDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const invoice = useSelector((state: any) => state.invoices.invoices);
  const item = invoice?.find((i: any) => i.id === id);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="invoice-detail">
      <Button variant="transparent" onClick={goBack}>
        <IoIosArrowBack className="goback" size={18} />
        <Text variant="caption">Go back</Text>
      </Button>

      <div className="invoice-header">
        <article className="invoice-detail__status">
          <Text variant="description" className="invoice-detail__status-text">
            Status
          </Text>
          <Badge color={item.status}>{item.status}</Badge>
        </article>

        <article className="invoice-detail__buttons">
          <Button variant="secondary" radius="rounded-lg">
            Edit
          </Button>
          <Button
            variant="danger"
            className="invoice-detail__delete"
            radius="rounded-lg"
          >
            Delete
          </Button>
          <Button
            variant="default"
            className="invoice-detail__mark"
            radius="rounded-lg"
            disabled={item.status === "draft"}
          >
            Mark as paid
          </Button>
          <button disabled={item.status === "draft"}>hello</button>
        </article>
      </div>

      <section className="invoice-container">
        <article className="invoice-detail__address">
          <div className="invoice-detail__title">
            <div className="invoice-detail__number">
              <Text variant="description">#</Text>{" "}
              <Text variant="caption">{item.id}</Text>
            </div>
            <Text variant="description" className="invoice-detail__date">
              {item.description}
            </Text>
          </div>
          <div className="invoice-detail__client">
            <Address item={item.senderAddress.street} />
            <Address item={item.senderAddress.city} />
            <Address item={item.senderAddress.postCode} />
            <Address item={item.senderAddress.country} />
          </div>
        </article>

        <section className="invoice-info">
          <InvoiceInfo text="Invoice Date" item={item.createdAt} />
          <InvoiceInfo text="Bill To" item={item.clientName} />
          <InvoiceInfo text="Sent To" item={item.clientEmail} />
          <InvoiceInfo text="Payment Due" item={item.paymentDue} />

          <div className="invoice-info__address">
            <Address item={item.clientAddress.street} />
            <Address item={item.clientAddress.city} />
            <Address item={item.clientAddress.postCode} />
            <Address item={item.clientAddress.country} />
          </div>
        </section>

        <div className="invoice-table">
          <table>
            <thead>
              <tr>
                <th>
                  <Text variant="description">Item Name</Text>
                </th>
                <th>
                  <Text variant="description">Qty</Text>
                </th>
                <th>
                  <Text variant="description">Price</Text>
                </th>
                <th>
                  <Text variant="description">Total</Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {item.items.map((item: any) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>£{item.price}</td>
                  <td>£{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="amount-due">
          <p>Amount Due:</p>
          <p>£{item.total.toFixed(2)}</p>
        </div>
      </section>
    </section>
  );
};

export default InvoiceDetail;

import "./InvoiceDetail.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text } from "../../components/atom/Text/Text";
import Badge from "../../components/atom/Badge/Badge";
import Button from "../../components/atom/Button/Button";
import InvoiceInfo from "./InvoiceInfo";
import Address from "./Address";
import { useState } from "react";
import DeleteCard from "../../components/molecule/DeleteCard/DeleteCard";
import { RootState } from "../../store";
import { TypesProps } from "../../types/type";

const InvoiceDetail = () => {
  const [openCard, setOpenCard] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const invoice = useSelector((state:RootState) => state.invoices.invoices)
  const detailedInvoice = invoice.filter((invoice) => invoice.id === id)[0];

 const handleModalClose = () => {
    setOpenCard(false);
 }

  return (
    <section className="invoice-detail">
      <Button variant="transparent" onClick={() => navigate(-1)}>
        <IoIosArrowBack className="goback" size={18} />
        <Text variant="caption">Go back</Text>
      </Button>

      <div className="invoice-header">
        <article className="invoice-detail__status">
          <Text variant="description" className="invoice-detail__status-text">
            Status
          </Text>
          <Badge color={detailedInvoice?.status}>{detailedInvoice.status}</Badge>
        </article>

        <article className="invoice-detail__buttons">
          <Button variant="secondary" radius="rounded-lg">
            Edit
          </Button>
          <Button
            variant="danger"
            className="invoice-detail__delete"
            radius="rounded-lg"
            onClick={() => setOpenCard(true)}
          >
            Delete
          </Button>
          <Button
            variant="default"
            className={`invoice-detail__mark ${detailedInvoice.status === "draft" ? "disabled" : ""}`}
            radius="rounded-lg"
            disabled={detailedInvoice.status === "draft"}
          >
            Mark as paid
          </Button>
        </article>
      </div>

      <section className="invoice-container">
        <article className="invoice-detail__address">
          <div className="invoice-detail__title">
            <div className="invoice-detail__number">
              <Text variant="description">#</Text>{" "}
              <Text variant="caption">{detailedInvoice.id}</Text>
            </div>
            <Text variant="description" className="invoice-detail__date">
              {detailedInvoice.description}
            </Text>
          </div>
          <div className="invoice-detail__client">
            <Address item={detailedInvoice.senderAddress.street} />
            <Address item={detailedInvoice.senderAddress.city} />
            <Address item={detailedInvoice.senderAddress.postCode} />
            <Address item={detailedInvoice.senderAddress.country} />
          </div>
        </article>

        <section className="invoice-info">
          <InvoiceInfo text="Invoice Date" item={detailedInvoice.createdAt} />
          <InvoiceInfo text="Bill To" item={detailedInvoice.clientName} />
          <InvoiceInfo text="Sent To" item={detailedInvoice.clientEmail} />
          <InvoiceInfo text="Payment Due" item={detailedInvoice.paymentDue} />

          <div className="invoice-info__address">
            <Address item={detailedInvoice.clientAddress.street} />
            <Address item={detailedInvoice.clientAddress.city} />
            <Address item={detailedInvoice.clientAddress.postCode} />
            <Address item={detailedInvoice.clientAddress.country} />
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
              {detailedInvoice.items.map((item: TypesProps, index: number) => (
                <tr key={index} >
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
          <p>£{detailedInvoice.total.toFixed(2)}</p>
        </div>
      </section>

    {openCard && <DeleteCard handleModalClose={handleModalClose} /> }
    </section>
  );
};

export default InvoiceDetail;

import "./InvoiceDetail.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text } from "../../components/atom/Text/Text";
import Badge from "../../components/atom/Badge/Badge";
import Button from "../../components/atom/Button/Button";
import InvoiceInfo from "../../components/molecule/InvoiceInfo/InvoiceInfo";
import Address from "../../components/atom/Address/Address";
import { useState } from "react";
import DeleteCard from "../../components/molecule/DeleteCard/DeleteCard";
import { RootState } from "../../store";
import { DetailTable } from "../../components/molecule/DetailTable/DetailTable";

const InvoiceDetail = () => {
  const [openCard, setOpenCard] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const invoice = useSelector((state: RootState) => state.invoices.invoices);
  const detailedInvoice = invoice.filter((invoice) => invoice.id === id)[0];

  const handleModalClose = () => {
    setOpenCard(false);
  };

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
          <Badge color={detailedInvoice?.status}>
            {detailedInvoice?.status}
          </Badge>
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
            className={`invoice-detail__mark ${
              detailedInvoice.status === "draft" ? "disabled" : ""
            }`}
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

        <DetailTable detailedInvoice={detailedInvoice} />
      </section>

      {openCard && <DeleteCard handleModalClose={handleModalClose} />}
    </section>
  );
};

export default InvoiceDetail;

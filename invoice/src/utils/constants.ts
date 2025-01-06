import { generateRandomId } from ".";

export const data = [
  {
    id: 1,
    invoiceType: "paid",
    text: "Paid",
  },
  {
    id: 2,
    invoiceType: "pending",
    text: "Pending",
  },
  {
    id: 3,
    invoiceType: "draft",
    text: "Draft",
  },
];

export const initialData = {
  id: generateRandomId(),
  createdAt: `${new Date().toISOString().split("T")[0]}`,
  paymentDue: "",
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [],
  total: 0,
};

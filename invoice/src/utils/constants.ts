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
  id: "",
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: null, 
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
  total: null, 
};


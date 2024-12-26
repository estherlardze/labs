import { InvoiceProps } from "../types/type";

export const filterDetailInvoice = (invoice: InvoiceProps[], status: string) => {
  const filterdInvoice = invoice.filter((detail) => detail.status === status);

 // console.log(filterdInvoice);

  return filterdInvoice;
};

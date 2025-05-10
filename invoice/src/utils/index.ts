import { InvoiceProps } from "../types/type";

export const filterDetailInvoice = (invoice: InvoiceProps[], status: string) => {
  const filterdInvoice = invoice.filter((detail) => detail.status === status);

 // console.log(filterdInvoice);

  return filterdInvoice;
};

export const deleteInvoice = (invoices: InvoiceProps[], id: string ) => {
 const DeletedInvoice = invoices.filter((invoice: InvoiceProps) => invoice.id !== id);

 return DeletedInvoice;
}

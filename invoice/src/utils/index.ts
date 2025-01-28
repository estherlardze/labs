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

export function generateRandomId() {
  // Generate two random uppercase letters
  const letters = String.fromCharCode(
    65 + Math.floor(Math.random() * 26), // First letter
    65 + Math.floor(Math.random() * 26), // Second letter
  );

  // Generate a random 4-digit number, padded with zeros if needed
  const numbers = String(Math.floor(Math.random() * 10000)).padStart(4, "0");

  // Combine letters and numbers
  return letters + numbers;
}



export function calculatePaymentDue(createdAt: string, paymentTerms: number) {
  const createdDate = new Date(createdAt);

  createdDate.setDate(createdDate.getDate() + paymentTerms);

  const year = createdDate.getFullYear();
  const month = String(createdDate.getMonth() + 1).padStart(2, "0");
  const day = String(createdDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

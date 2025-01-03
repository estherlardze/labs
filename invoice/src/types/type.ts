export type Address = {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  
  export type Item = {
    name: string;
    quantity: number;
    price: number;
    total: number;
  };

  
  export type InvoiceProps = {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number | null;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddress: Address;
    clientAddress: Address;
    items: Item[];
    total: number | null;
  };

  export type TypesProps = {
    name:  string, 
    quantity: number,
    price: number,
    total: number
   
  }
  
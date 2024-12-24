import data from '../../../data.json';
import { useState } from 'react';
import './Main.css';

const Main = () => {
  const [invoice, setInvoice] = useState(data.invoices);

  return (
    <div className="invoice__container">
      {invoice.map((item) => {
        return (
          <div key={item.id} className="invoice__card">
            <p className="invoice__id">#{item.id}</p>
            <p className="invoice__date">Due {item.createdAt}</p>
            <p className="invoice__client">{item.clientName}</p>
            <p className="invoice__total">£{item.total.toFixed(2)}</p>
            <span
              className={`invoice__status ${
                item.status === 'Paid' ? 'status__paid' : 'status__pending'
              }`}
            >
              {item.status}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Main;

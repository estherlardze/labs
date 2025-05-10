import { Text } from "../../atom/Text/Text";
import { TypesProps } from "../../../types/type";
import { InvoiceProps } from "../../../types/type";

const tableData = ["Item Name", "Qty", "Price", "Total"];

type DetailTableProps = {
  detailedInvoice: InvoiceProps;
};

export const DetailTable = ({ detailedInvoice }: DetailTableProps) => {
  return (
    <section>
      <div className="invoice-table">
        <table>
          <thead>
            <tr>
              {tableData.map((item: string, index: number) => (
                <th key={index}>
                  <Text variant="description">{item}</Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {detailedInvoice.items.map((item: TypesProps, index: number) => (
              <tr key={index}>
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
  );
};

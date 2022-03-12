import { useParams } from "react-router-dom";
import { getInvoice, InvoiceData } from "./data";

interface InvoiceRouteParams {
  userId: string;
  invoiceId: string
}

export const Invoice: React.FC<{}> = () => {
  let params = useParams() as InvoiceRouteParams;
  let invoice: InvoiceData = getInvoice(parseInt(params.invoiceId, 10))!!;
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        User: {params.userId}
      </p>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}



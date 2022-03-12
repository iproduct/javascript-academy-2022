import { NavLink, Outlet } from "react-router-dom";
import { getActiveClass } from "./App";
import { getInvoices } from "./data";
import './Invoices.css'

export default function Invoices() {
    let invoices = getInvoices();
    return (
      <div className="Invoice">
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {invoices.map(invoice => (
            <NavLink
              className={getActiveClass}
              to={`/invoices/user${invoice.number}/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
        </nav>
        <div className="invoice-container">
          <Outlet />
        </div>
      </div>
    );
  }
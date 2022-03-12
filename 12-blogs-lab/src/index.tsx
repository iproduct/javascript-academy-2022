import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Blogs } from './Blogs';
import { About } from './About';
import { Users } from './Users';
import Invoices from './Invoices';
import { Invoice } from './Invoice';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/about" element={<About />} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":userId/:invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={
              <div style={{ padding: "1rem" }}>
                <p>Page not found!</p>
                <Link to="/">Go to home page</Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

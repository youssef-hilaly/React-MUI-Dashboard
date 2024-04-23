import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Contacts from './components/pages/Contacts/Contacts';
import Team from './components/pages/Team/Team';
import Invoices from './components/pages/Invoices/Invoices';
import Form from './components/pages/Form/Form';
import Calendar from './components/pages/Calendar/Calendar';
import Faq from './components/pages/FAQ/FAQ';
import BarPage from './components/pages/Charts/Bar/BarPage';
import LinePage from './components/pages/Charts/Line/LinePage';
import PiePage from './components/pages/Charts/Pie/PiePage';
import GeoPage from './components/pages/Charts/Geography/GeoPage';
const router = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: '', element: <Dashboard /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'team', element: <Team /> },
      { path: 'invoices', element: <Invoices /> },
      { path: 'form', element: <Form /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'faq', element: <Faq /> },
      { path: 'bar', element: <BarPage /> },
      { path: 'line', element: <LinePage /> },
      { path: 'pie', element: <PiePage /> },
      { path: 'geo', element: <GeoPage /> },
    ]},
]);

export default function App() {

  return (
    <RouterProvider router={router} />
  );
}
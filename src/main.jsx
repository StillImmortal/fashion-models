import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Provider } from "react-redux"

// Styles
import "./index.scss";

//Pages and Components
import MainLayout from './jsx/components/MainLayout';
import Home from './jsx/pages/Home';

// Redux global state
import store from './redux';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}  >
    <Route index element={<Home />} />
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
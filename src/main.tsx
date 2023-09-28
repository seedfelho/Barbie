import React from 'react'
import './Main.css'
import * as ReactDOM from "react-dom/client";
import Header from './componentes/header/Header'
import Footer1 from './componentes/footer1/Footer1'
import Main from './componentes/main/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
      <Header/>
      <Main/>
      <Footer1/>
      </>,
  },
  {
    path: "/sobre",
    element: 
    <>
    <Header/>
    <div className="content-main">Pagina Sobre!</div>
    <Footer1/>
    </>,
  },
  {
    path: "/noticia",
    element: 
    <>
    <Header/>
    <div className="content-main">Pagina Noticias!</div>
    <Footer1/>
    </>,
  },
  {
    path: "/contato",
    element: 
    <>
    <Header/>
    <div className="content-main">Pagina Contato!</div>
    <Footer1/>
    </>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

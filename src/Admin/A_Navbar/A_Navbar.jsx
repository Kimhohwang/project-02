import { useState } from "react";
import OffcanvasMenu from "./OffcanvasMenu";
import Sidebar from "./Sidebar";

const A_Navbar = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <header className="d-flex align-items-center fixed-header justify-content-between">
        <div className="d-flex align-items-center justify-content-between">
          <a href="/관리자_대시보드">
            <h5 className="fw-bold text-dark">KOBOX MANAGER</h5>
          </a>
          <button
            className="btn toggle-sidebar-btn btn-sm"
            onClick={() => document.body.classList.toggle("toggle-sidebar")}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
        <button className="btn text-dark" onClick={() => setShow(true)}>
          Fodric
        </button>
      </header>

      <Sidebar />
      <main id="main" className="p-4">{children}</main>

      <OffcanvasMenu show={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default A_Navbar;

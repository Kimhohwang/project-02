import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import Announcements from "./Announcements";
import Memos from "./Memos";

const OffcanvasMenu = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Fodric</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="card mb-3">
          <div className="card-body d-flex justify-content-around">
            <button className="btn btn-outline-success btn-sm">정보수정</button>
            <button className="btn btn-outline-secondary btn-sm">로그아웃</button>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <p>알림</p>
          </div>
        </div>
        <Announcements />
      <Memos />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;

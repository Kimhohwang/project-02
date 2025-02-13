import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const savedAnnouncements =
      JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(savedAnnouncements);
  }, []);

  const handleAnnouncementClick = (announcement) => {
    setSelectedAnnouncement(announcement);
    setModalShow(true);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <p>매니저 공지사항</p>
        {announcements.length > 0 ? (
          <ul className="list-group">
            {announcements.map((announcement, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => handleAnnouncementClick(announcement)}
                style={{ cursor: "pointer" }}
              >
                {announcement.date} - {announcement.author}: {announcement.content}
              </li>
            ))}
          </ul>
        ) : (
          <p>공지사항이 없습니다.</p>
        )}
      </div>

      {/* 공지사항 모달 */}
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>공지사항</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedAnnouncement && (
            <>
              <p><strong>작성일:</strong> {selectedAnnouncement.date}</p>
              <p><strong>작성자:</strong> {selectedAnnouncement.author}</p>
              <p><strong>내용:</strong> {selectedAnnouncement.content}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setModalShow(false)}>닫기</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Announcements;

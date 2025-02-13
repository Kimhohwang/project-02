import { useState, useEffect } from "react";

const Memos = () => {
  const [memos, setMemos] = useState([]);
  const [newMemo, setNewMemo] = useState("");

  useEffect(() => {
    const savedMemos = JSON.parse(localStorage.getItem("memos")) || [];
    setMemos(savedMemos);
  }, []);

  const saveMemo = () => {
    if (newMemo.trim()) {
      const updatedMemos = [...memos, { text: newMemo, completed: false }];
      setMemos(updatedMemos);
      localStorage.setItem("memos", JSON.stringify(updatedMemos));
      setNewMemo("");
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <p>메모</p>
        <div className="mb-2 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="메모를 입력하세요"
            value={newMemo}
            onChange={(e) => setNewMemo(e.target.value)}
          />
          <button className="btn btn-outline-primary" onClick={saveMemo}>저장</button>
        </div>
      </div>
    </div>
  );
};

export default Memos;

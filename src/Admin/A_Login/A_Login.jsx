import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const A_Login = () => {
  const [아이디, set아이디] = useState("");
  const [비밀번호, set비밀번호] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedAdmins = JSON.parse(localStorage.getItem("관리자정보")) || [];

    // 입력한 아이디와 비밀번호가 관리자 목록에 있는지 확인
    const admin = storedAdmins.find(
      (관리자) => 관리자.아이디 === 아이디 && 관리자.비밀번호 === 비밀번호
    );

    if (admin) {
      // 로그인한 관리자 정보 저장
      localStorage.setItem("로그인관리자", JSON.stringify(admin));

      alert(`${admin.성함}님, 로그인 성공!`);
      navigate("/관리자_대시보드");
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <Container className="mt-5">
      <h2>관리자 로그인</h2>
      <Form>
        <Form.Group controlId="form아이디">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            value={아이디}
            onChange={(e) => set아이디(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </Form.Group>

        <Form.Group controlId="form비밀번호" className="mt-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            value={비밀번호}
            onChange={(e) => set비밀번호(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </Form.Group>

        <Button variant="primary" className="mt-3" onClick={handleLogin}>
          로그인
        </Button>
        <a href="/관리자_회원가입" className="btn btn-outline-primary mt-3">회원가입</a>
      </Form>
    </Container>
  );
};

export default A_Login;

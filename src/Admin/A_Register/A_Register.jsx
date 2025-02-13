import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const A_Register = () => {
  const [아이디, set아이디] = useState("");
  const [비밀번호, set비밀번호] = useState("");
  const [성함, set성함] = useState("");
  const [직책, set직책] = useState("일반");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!아이디 || !비밀번호 || !성함 || !직책) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    // 기존 저장된 관리자 리스트 불러오기
    const storedAdmins = JSON.parse(localStorage.getItem("관리자정보")) || [];

    // 새로운 관리자 정보 추가
    const newAdmin = { 아이디, 비밀번호, 성함, 직책 };
    const updatedAdmins = [...storedAdmins, newAdmin];

    // 로컬스토리지에 저장
    localStorage.setItem("관리자정보", JSON.stringify(updatedAdmins));

    alert("관리자 회원가입이 완료되었습니다.");

    // 입력 필드 초기화
    set아이디("");
    set비밀번호("");
    set성함("");
    set직책("일반");

    // 로그인 페이지로 이동
    navigate("/관리자_로그인");
  };

  return (
    <Container className="mt-5">
      <h2>관리자 회원가입</h2>
      <Form>
        <Form.Group controlId="form성함">
          <Form.Label>성함</Form.Label>
          <Form.Control
            type="text"
            value={성함}
            onChange={(e) => set성함(e.target.value)}
            placeholder="성함을 입력하세요"
          />
        </Form.Group>

        <Form.Group controlId="form아이디" className="mt-3">
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

        <Form.Group controlId="form직책" className="mt-3">
          <Form.Label>직책</Form.Label>
          <Form.Select value={직책} onChange={(e) => set직책(e.target.value)}>
            <option value="일반">일반</option>
            <option value="매니저">매니저</option>
            <option value="최고관리자">최고관리자</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" className="mt-3" onClick={handleRegister}>
          가입하기
        </Button>
      </Form>
    </Container>
  );
};

export default A_Register;

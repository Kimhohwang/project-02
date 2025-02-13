import React from "react";
import GenericModal from "./GenericModal";

const CancelDetailModal = ({ show, order, handleClose }) => {
  if (!order) return null;

  // 🔥 상품합계 계산: 존재하지 않을 경우 기본값 0 설정
  const totalAmount = order.상품상세정보
    ? order.상품상세정보.reduce((sum, item) => sum + (item.수량 * item.단가), 0)
    : 0;

  return (
    <GenericModal show={show} handleClose={handleClose} title="취소 상세 정보">
      <p><strong>주문번호:</strong> {order.주문번호}</p>
      <p><strong>주문일:</strong> {order.주문일}</p>
      <p><strong>현재 상태:</strong> 주문 취소됨</p>
      <p><strong>환불 예정 금액:</strong> {totalAmount.toLocaleString()} 원</p> {/* 🔥 수정됨 */}
    </GenericModal>
  );
};

export default CancelDetailModal;

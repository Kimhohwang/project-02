import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";
import A_Dashboard from "./Admin/A_Dashboard/A_Dashboard";
import A_Register from "./Admin/A_Register/A_Register";
import A_Login from "./Admin/A_Login/A_Login";
import A_CustomOrder from "./Admin/A_CustomOrder/A_CustomOrder";
import A_Setting from "./Admin/A_admin/A_Setting";
import A_Sales from "./Admin/A_admin/A_Sales";
import A_Member from "./Admin/A_admin/A_Member";
import A_CustomerList from "./Admin/A_Customer/A_CustomerList";
import A_Popup from "./Admin/A_Customer/A_Popup";
import A_Qna from "./Admin/A_Customer/A_Qna";
import A_Review from "./Admin/A_Customer/A_Review";
import A_Warehousing_Basic from "./Admin/A_Warehousing/A_Warehousing_Basic";
import A_Warehousing_CO from "./Admin/A_Warehousing/A_Warehousing_Co";
import A_Products from "./Admin/A_Warehouse/A_Products";
import A_CheckContents from "./Admin/A_Warehouse/A_CheckContents";
import A_Inclusion from "./Admin/A_Warehouse/A_Inclusion";
import A_Split from "./Admin/A_Warehouse/A_Split";
import A_LostProducts from "./Admin/A_Warehouse/A_LostProducts";
import A_Location from "./Admin/A_Warehouse/A_Location";
import A_Forwarded from "./Admin/A_Warehouse/A_Forwarded";
import A_StockCheck from "./Admin/A_Warehouse/A_StockCheck";
import A_ShippingRequest from "./Admin/A_Shipment/A_ShippingRequest";
import A_Repacking from "./Admin/A_Shipment/A_Repacking";
import A_Warehousing_Co from "./Admin/A_Warehousing/A_Warehousing_Co";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/관리자_대시보드" element={<A_Dashboard />} />
        <Route path="/관리자_회원가입" element={<A_Register />} />
        <Route path="/관리자_로그인" element={<A_Login />} />
        <Route path="/관리자_구매요청서" element={<A_CustomOrder />} />
        <Route path="/관리자_설정" element={<A_Setting />} />
        <Route path="/관리자_매출관리" element={<A_Sales />} />
        <Route path="/관리자_구성원관리" element={<A_Member />} />
        <Route path="/관리자_회원목록" element={<A_CustomerList />} />
        <Route path="/관리자_팝업관리" element={<A_Popup />} />
        <Route path="/관리자_문의답변" element={<A_Qna />} />
        <Route path="/관리자_리뷰관리" element={<A_Review />} />
        <Route path="/관리자_일반입고등록" element={<A_Warehousing_Basic />} />
        <Route path="/관리자_구매대행입고등록" element={<A_Warehousing_Co />} />
        <Route path="/관리자_전체상품관리" element={<A_Products />} />
        <Route path="/관리자_체크컨텐츠" element={<A_CheckContents />} />
        <Route path="/관리자_인클루전" element={<A_Inclusion />} />
        <Route path="/관리자_스플릿" element={<A_Split />} />
        <Route path="/관리자_분실신고" element={<A_LostProducts />} />
        <Route path="/관리자_저장위치" element={<A_Location />} />
        <Route path="/관리자_출고관리" element={<A_Forwarded />} />
        <Route path="/관리자_재고조사" element={<A_StockCheck />} />
        <Route path="/관리자_배송요청서" element={<A_ShippingRequest />} />
        <Route path="/관리자_상품포장중" element={<A_Repacking />} />
      </Routes>
    </Router>
  );
}

export default App;

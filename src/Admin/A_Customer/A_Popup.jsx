import React from "react";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_Popup = () => {
  return <A_Navbar><nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      고객
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      팝업관리
    </li>
  </ol>
</nav></A_Navbar>;
};

export default A_Popup;

const MENU_DATA = [
  {
    title: "MEMBER",
    items: [
      {
        label: "구매대행",
        href: "#customOrder",
        subItems: [{ label: "구매 요청서", href: "/관리자_구매요청서" }],
      },
      {
        label: "배송대행",
        href: "#shipment",
        subItems: [
          { label: "배송 요청서", href: "/관리자_배송요청서" },
          { label: "포장중", href: "/관리자_상품포장중" },
        ],
      },
      {
        label: "입고관리",
        href: "#warehousing",
        subItems: [
          { label: "입고등록(일반)", href: "/관리자_일반입고등록" },
          { label: "입고등록(구매대행)", href: "/관리자_구매대행입고등록" },
        ],
      },
      {
        label: "창고관리",
        href: "#warehouse",
        subItems: [
          { label: "전체상품관리", href: "/관리자_전체상품관리" },
          { label: "체크컨텐츠", href: "/관리자_체크컨텐츠" },
          { label: "인클루전", href: "/관리자_인클루전" },
          { label: "스플릿", href: "/관리자_스플릿" },
          { label: "분실물", href: "/관리자_분실신고" },
          { label: "저장위치", href: "/관리자_저장위치" },
          { label: "출고관리", href: "/관리자_출고관리" },
          { label: "재고조사", href: "/관리자_재고조사" },
        ],
      },
      {
        label: "고객",
        href: "#customer",
        subItems: [
          { label: "회원목록", href: "/관리자_회원목록" },
          { label: "리뷰", href: "/관리자_리뷰관리" },
          { label: "문의", href: "/관리자_문의답변" },
          { label: "팝업", href: "/관리자_팝업관리" },
        ],
      },
      {
        label: "스토어",
        href: "#store",
        subItems: [
          { label: "상품등록", href: "/상품등록" },
          { label: "상품목록", href: "/상품목록" },
          { label: "주문내역", href: "/주문내역" },
        ],
      },
      {
        label: "통계",
        href: "#statistics",
        subItems: [
          { label: "구매대행", href: "#" },
          { label: "배송대행", href: "#" },
          { label: "고객", href: "#" },
          { label: "스토어", href: "#" },
        ],
      },
      {
        label: "매니저",
        href: "#manager",
        subItems: [
          { label: "쿠폰", href: "/쿠폰" },
          { label: "포인트", href: "/포인트" },
          { label: "공지사항", href: "/관리자_공지사항" },
          { label: "폐기관리", href: "/폐기관리" },
          { label: "배송견적서", href: "/배송견적서" },
        ],
      },
      {
        label: "관리자",
        href: "#ceo",
        subItems: [
          { label: "설정", href: "/관리자_설정" },
          { label: "매출관리", href: "/관리자_매출관리" },
          { label: "구성원관리", href: "/관리자_구성원관리" },
        ],
      },
    ],
  },
];

export default MENU_DATA;

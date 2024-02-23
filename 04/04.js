
// document.addEventListener("DOMContentLoaded", ()=>{
//   //버튼을 가져오기
//   // const bt1 = document.querySelector("div > button") ;
//   // const bt1 = document.querySelector("button") ;
//   const bt1 = document.querySelector("#bt1") ;

//   //버튼 이벤트 달기
//   bt1.addEventListener("click", ()=>{
//     handleClick();
//   });
// }) ;

const handleClick = () => {
  const n = Math.floor(Math.random() * 6) + 1;

  const img = document.querySelector("#img") ;
  img.setAttribute("src", `./img/${n}.png`);
  console.log("click", n)
}
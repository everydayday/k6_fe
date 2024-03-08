document.addEventListener("DOMContentLoaded", ()=>{
  const bt = document.querySelector("button") ;
  const numDisp = document.querySelector("#numDisp") ;

  let nums = [] ;

  bt.addEventListener("click", ()=>{
    //배열 초기화
    // nums = [] ;
    nums.length = 0 ;

    // 1~45까지 랜덤수를 중복되지 않게 7개 만들기 
    while(nums.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1  ;
      if(!nums.includes(n)) nums.push(n);
    }
    
    nums =  nums.map( (v) => 
         `<span class="sp${parseInt(v/10)}">${v}</span>` 
    );
    nums.splice(6,0, '<span>+</span>') ;
    numDisp.innerHTML = nums.toString().replaceAll(',','') ;

    
    // let tags = '' ;
    // nums.map((v, i) => {
    //   tags = tags + `<span class="sp${parseInt(v/10)}">${v}</span>`;
    //   if (i === 5) 
    //     tags = tags + `<span> + </span>` ; 
    // });

    // numDisp.innerHTML = tags ;

  });

});
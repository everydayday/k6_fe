const handleClick = (n) => { 
    const img1 = document.querySelector("#img1") ;
    const img2 = document.querySelector("#img2") ;

    const nc = Math.floor(Math.random() * 6) + 1;

    img1.setAttribute("src", `./img/${nc}.png`);
    img2.setAttribute("src", `./img/${n}.png`);
  
    if (n == nc) {
      document.querySelector("#msg").innerHTML = "맞음" ;
    }
    else {
      document.querySelector("#msg").innerHTML = "틀림" ;
    }

}
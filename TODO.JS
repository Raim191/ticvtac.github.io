var put = document.querySelector(".put");

put.addEventListener("change",() => {
    var dvv = document.createElement("div");
    dvv.textContent = put.value ;
    dvv.classList.add("he");
    var tom = document.querySelector(".yo");
    tom.appendChild(dvv);
    dvv.addEventListener("click",() => {
        dvv.remove();
    })
    
})
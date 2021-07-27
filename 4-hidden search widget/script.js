const input = document.querySelector(".search");
const button = document.querySelector(".btn");

button.addEventListener("click",()=>{
    if(input.className === "search"){
        opening()
    }
    else{
        closing()
    }
})

function opening(){
   
    input.className = "searchopen";
}

function closing(){
    if(input.value.length !== 0){
        input.className = "searchopen"
        window.open("https://google.com",target = "blank");
        input.value = ""
    }
    else{
        input.className = "search";
    }
}


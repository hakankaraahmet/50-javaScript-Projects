const contents = document.querySelectorAll(".content");

window.addEventListener("scroll", animate);




function animate(){
    const triggerPoint = window.innerHeight / 5*4 ;
    
    contents.forEach(content => {
        const contentTop = content.getBoundingClientRect().top;
        
        if(contentTop < triggerPoint){
            content.classList.add("active")
        } 
        else{
            content.classList.remove("active")
        } 
    });
}

/*
window.innerheight is representing the full height of page
with using / 5 * 4 we divide page into 5 part and assign 4th part as triggerpoint
getBoundingClientRect() gives us the values of height and witdh of element
with .top we get the value of distance between top of element and top of page
*/ 



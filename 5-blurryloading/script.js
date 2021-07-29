const background = document.querySelector("main");
const percentage = document.querySelector(".loading")
let loading = 0;
page()

function page(){
let interval = setInterval(exceed, 20);

function exceed() {
    loading++  
    

    if(loading === 100){
        clearInterval(interval)
    }

    
    percentage.innerHTML = `${loading}%`;
    percentage.style.opacity = scale(loading,0,100,1,0)
    background.style.filter = `blur(${scale(loading,0,100,20,0)}px)`;

}
}

// we get this function from stackoverflow as ready
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }


 /* WHAT WE LEARN IN THIS PROJECT ARE LISTED BELOW...
  1) filter and blur arrange the blur of an element
  2) setinterval-clearinterval must used together
  3) `` using is important while we want to effect innertext
  4) counter using
  5) clearinterval must depend on a condition
  6) setinterval should assign to a variable */ 
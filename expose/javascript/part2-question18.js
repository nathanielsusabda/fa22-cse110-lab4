function dateFunc (){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(dateFunc, 1000);
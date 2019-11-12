var abc, xyz,a ,b, c,d;
document.getElementById("name1").style.backgroundcolor = "Blue";
abc = document.getElementById("name1").style.color = "black";
console.log(abc);
xyz = document.getElementsByClassName("btn-new");
console.log(xyz);
/*
<button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
    <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
    <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
    < h1 > First header < /h1> 
    < h2 id = "Title" > this is the title for first header < /h2> */
a = document.getElementsByTagName("p1");
console.log(a);
c = document.querySelector("h1");  
d = document.querySelector("#Title");
console.log(c);
console.log(d);



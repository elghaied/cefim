let size_Triangle =  parseInt(prompt("Put the size of triangle"));
let left_leaf = "<div class=\"leaf_left\"> <img src=\"/fir.png\" alt=\"\">\
</div>";
let right_leaf = "<div class=\"leaf_right\"> <img src=\"/fir.png\" alt=\"\">\
</div>";
let space = "&nbsp;";
let ea = 0;
let deco_right =  "<div class=\"deco\"> " +  "<img class=\"right\" src=\"/deco.png\" alt=\"\"\>" + "</div>" ;
let deco_left = "<div class=\"deco\"> " +  "<img class=\"left\" src=\"/deco.png\" alt=\"\"\>" + "</div>" ;
let trunk = "<div class=\"trunk\"> " + "<img class=\"trunk_img\" src=\"/trunk.png\" alt=\"\"\>" + "</div>";
let star = "<div class=\"star_container\"> " +"<img class=\"star\" src=\"/star.png\" alt=\"\"\>" + "</div>"; 
  document.write(trunk);
  document.write(star);
  
  for (i = size_Triangle; i > 0; i--) {
    if (ea%2==0){
        ea++
    }
    
    document.write( space.repeat(i*2) + "<div class=\"container\"> " + deco_left +left_leaf.repeat(Math.floor(ea/2)) + right_leaf.repeat(Math.ceil(ea/2)) + deco_right + "</div>" + "<br>");
    ea++
  }
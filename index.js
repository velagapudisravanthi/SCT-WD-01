let tablink = document .getElementsByClassName("tab-link");
let tabcontents = document .getElementByIdclassname("tab-contents");
function opentab(tabname){
for (tablink of tablinks){
tablink .classlist .remove("active-link");
}
for (tabcontent of tabcontents){
    tabcontent .classlist .remove("active-tab");
}
event .currentTarget .classlist .add("active-link");
document .getElementById(tsabname).classList .add("active-tab");
}
let sidemenu = document .getElementById("sidemenu");

function openmenu() {
    sidemenu . style.right = "0";
}
function closemenu() {
    sidemenu .style.right = "-200px";
    
}
    

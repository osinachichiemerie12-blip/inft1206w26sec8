console.log("Hey!")
document.querySelector('#name').addEventListener('mouseover',function(){
    this.style.color = "green";
} )

document.querySelector('#name').addEventListener('mouseout',function(){
    this.style.color = "black";
} )

document.querySelector('#name').onclick = function() {
    this.textContent = "Hello";
};
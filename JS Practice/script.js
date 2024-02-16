const rect = document.getElementById('center');

rect.addEventListener('mousemove',function(event){
    let rectangleArea = rect.getBoundingClientRect();
    console.log(event.clientX - rectangleArea.left)
})
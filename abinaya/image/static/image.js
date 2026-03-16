        var img = [
    {image:"sk1.jpg", caption:"Sivakarthikeyan"},
    {image:"virat.jpg", caption:"Virat"},
    {image:"dhruv.jpg", caption:"Dhruv Vikram"},
    {image:"dhoni.jpg", caption:"Dhoni"},
    {image:"arjun.jpg", caption:"Arjun Das"},
];
var index=0;
function next()
{
    index++;
    if(index >= img.length)
        index = 0;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerhtml= img[index].caption;
}

function prev()
{
    index--;
    if(index < 0)
        index = img.length - 1;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerhtml= img[index].caption;
}
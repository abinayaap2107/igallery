# Ex.07 Design of Interactive Image Gallery
## Date:16.3.2026

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
image.html
```
<html>
    <head>
        <title>Image Gallery</title>
        <link href="image.css" rel="stylesheet">
        <script src="image.js"></script>
    </head>
    <body>
        <div class="container1">
            <div class="box1">
                <img src="sk1.jpg" id="image" width="400">
                <p id="caption">Sivakarthikeyan</p>
            </div>

            <div class="button">
                <button onclick="prev()">Prev</input>
                <button onclick="next()">Next</input>
            </div>

        </div>
        <div class="footer">
            <p>Created By Abinaya(25014971)</p>
        </div>
    </body>

</html>
```
image.css
```

.container1
{
    display:flex;
    align-items: center;    
    background-color: lavender;
    margin-top: 100px; 
    flex-direction: column;
    border:5px solid pink;
    width:550;
    margin-left:600;
    height:600;
}
.box
{
    width:500px;
    height:500px;
}
.box p
{
    text-align:center;
    font-weight:bold;
}

.buttons
{
    padding: 15px;
    gap: 30px;             
}
button
{
    width: 130px;
    padding: 7px;
    font-weight: bold;
    margin-top:100px;
}

.footer 
{
    position:fixed;
    background-color: aquamarine;
    text-align: center;
    color:black;
    width:100%;
    bottom: 0%;
    left: 0%;
}


```
image.js
```

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

```
## OUTPUT:
![alt text](<Screenshot (71)-1.png>) 
![alt text](<Screenshot (69)-1.png>) 
![alt text](<Screenshot (68)-1.png>) 
![alt text](<Screenshot (70)-1.png>) 
![alt text](<Screenshot (67)-1.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.

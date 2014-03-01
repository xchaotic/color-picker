function InitColorPicker ()
{
 var canvas = document.createElement('canvas');
 var ctx = canvas.getContext('2');
 canvas.width = 256;
 canvas.height = 256;

document.body.appendChild(canvas);

ctx.fillRect(0,0, 255, 255);

 for (var x = 0; x < 256; x++)
 { 
    for (var  y = 0; y < 256; y++)
ctx.fillStyle = 'rgb(x, y, 255)';    
ctx.fillRect(x,y, x+1, y+1);
 }   
}

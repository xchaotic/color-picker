function InitColorPicker ()
{
 var canvas = document.createElement('canvas');
 var ctx = canvas.getContext('2');
 canvas.width = 256;
 canvas.height = 256;

document.body.appendChild(canvas);

ctx.fillRect(0,0, 100, 100);

 for (var i = 0; i < 256; i++)
 { 
ctx.fillStyle = 'rgb(i, 0, 255)';    
ctx.fillRect(0,0, 100, 100);
 }   
}

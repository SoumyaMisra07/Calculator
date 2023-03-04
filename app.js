function add()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    var z=parseInt(x)+parseInt(y)
    document.getElementById("output").value=z
    
}
function sub()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    var z=parseInt(x)-parseInt(y)
    document.getElementById("output").value=z
    
}
function div()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    var z=parseInt(x)/parseInt(y)
    document.getElementById("output").value=z
    
}
function mul()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    var z=parseInt(x)*parseInt(y)
    document.getElementById("output").value=z
    
}
function clr()
{
    document.getElementById("input1").value=null
    document.getElementById("input2").value=null
    
    document.getElementById("output").value=null
    
}
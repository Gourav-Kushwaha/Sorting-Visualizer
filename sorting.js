



document.getElementById("bubble").addEventListener("click", bubblesort);



//Generating new array on click
document.getElementById("gen-array").addEventListener("click",update_array_size);

//starting algo if a algo button is pressed
var algo_button=document.querySelectorAll(".xyz");





var cont=document.getElementById("mkc");

const arr = [];

function div_creater(){
  
    arr.length = 0;
    cont.innerHTML="";
   
    for(var i=0;i<100;i++)
    {
        
       var b = document.createElement('div');
       b.className = "skills";
        let temp = (Math.floor(Math.random() * 100)+1);
       b.style.height =temp +'%';
       arr.push(b);
       document.getElementById('mkc').appendChild(b);   
        
    }
}




function update_array_size()
{
    
    div_creater();
}



window.onload=update_array_size();



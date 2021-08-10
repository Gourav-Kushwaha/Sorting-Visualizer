

var baaa = [];

    
var cont=document.getElementById("mkc");
  

function r2s(arr, x, y){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
             arr[x].style.background = "blue";
    arr[y].style.background = "blue";
        }, 2000);
      });

}



async function swap(arr, x, y){


 r2s(arr, x, y);


const style1 = window.getComputedStyle(arr[x]);
const style2 = window.getComputedStyle(arr[y]);
const transform1 = style1.getPropertyValue("height");
const transform2 = style2.getPropertyValue("height");
arr[x].style.height = transform2;
arr[y].style.height = transform1;


    
}



function bubblesort(){
    var i,j;
  
   

    for(i =0 ; i<arr.length; i++){
        for(j=0;j+1<arr.length;j++){
           
            var temp1 = parseInt( arr[j].style.height) ;
            var temp2 = parseInt(arr[j+1].style.height);
            //console.log(temp1,temp2);
            

            if(temp1>temp2){
               
               
                swap(arr,j,j+1);
                arr[j].style.background = "red";
                arr[j+1].style.background = "red";
                
                
            }
        }
    }

 
  
   
  // update_bars();
  
}

/*
function update_bars(){
    cont.innerHTML="";
    for(let k=0;k<arr.length;k++){
        
        var b = document.createElement('div');
        b.className = "skills";
        
        b.style.height =arr[k].style.height;
        
        document.getElementById('mkc').appendChild(b); 

    }
}

*/
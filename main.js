document.addEventListener('DOMContentLoaded', () => {
	var valueXFirst=100;
	var valueYFirst=100;
	var valueXSecond=150;
	var valueYSecond=150;
    var rectWidth = 50;
    var rectHeight = 50;
   
	    document.querySelector("#x1-plus").addEventListener("click", () => { 
	    
		    if (valueXFirst>=10 && valueXFirst<=580 && rectWidth>10 )
		        {valueXFirst+=10;
				rectWidth=rectWidth-10;
				document.querySelector("#x1").textContent = valueXFirst;
				document.querySelector(".rect").style.left = valueXFirst;
				document.querySelector(".rect").style.width = rectWidth;
			}
			  
			});
		
		
	    document.querySelector("#x1-minus").addEventListener("click",() =>{
			if (valueXFirst> 10 && valueXFirst<=590 && rectWidth>=10 ){
				valueXFirst-=10;
				rectWidth=rectWidth+10;		
				document.querySelector("#x1").textContent = valueXFirst;       
				document.querySelector(".rect").style.left = valueXFirst;
				document.querySelector(".rect").style.width = rectWidth;}
			
		    });
		document.querySelector("#y1-plus").addEventListener("click",() =>{
			 if (valueYFirst>=10 && valueYFirst<=480 && rectHeight>10 ){
				valueYFirst+=10;
			    rectHeight=rectHeight-10;
			    document.querySelector('#y1').textContent = valueYFirst;
				document.querySelector('.rect').style.top = valueYFirst;
				document.querySelector('.rect').style.height = rectHeight;}
		});
	    document.querySelector("#y1-minus").addEventListener("click",() =>{
			if (valueYFirst>10 && valueYFirst<=490 && rectHeight>=10 ){
				valueYFirst-=10;
				rectHeight=rectHeight+10;
				document.querySelector('#y1').textContent = valueYFirst;
				document.querySelector('.rect').style.top = valueYFirst;
				document.querySelector('.rect').style.height = rectHeight;}
		});
		document.querySelector("#x2-plus").addEventListener("click",() =>{
			if (valueXSecond>=10 && valueXSecond<=580 && rectWidth>=10 ){
				valueXSecond+=10;
				rectWidth=rectWidth+10;
				document.querySelector('#x2').textContent = valueXSecond;
				document.querySelector('.rect').style.width = rectWidth;}
		});
	    document.querySelector("#x2-minus").addEventListener("click",() =>{
			if (valueXSecond>=10 && valueXSecond<=590 && rectWidth>10 ){
				valueXSecond-=10;
				rectWidth=rectWidth-10;
				document.querySelector('#x2').textContent = valueXSecond;
				document.querySelector('.rect').style.width = rectWidth;}
		});
		document.querySelector("#y2-plus").addEventListener("click",()=> {
			if (valueYSecond>=10 && valueYSecond<=480 && rectHeight>=10 ){
				valueYSecond+=10;
				rectHeight=rectHeight+10;
				document.querySelector('#y2').textContent = valueYSecond;
				document.querySelector('.rect').style.height = rectHeight;}
		});
	    document.querySelector("#y2-minus").addEventListener("click",()=>{
			if (valueYSecond>10 && valueYSecond<=490 && rectHeight>10 ){
				valueYSecond-=10;
				rectHeight=rectHeight-10;
				document.querySelector('#y2').textContent = valueYSecond;
				document.querySelector('.rect').style.height = rectHeight;}
	});
		
});
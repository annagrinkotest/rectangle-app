document.addEventListener('DOMContentLoaded', () => {
	var valueXFirst=100;
	var valueYFirst=100;
	var valueXSecond=150;
	var valueYSecond=150;
    var rectWidth = 50;
    var rectHeight = 50;
   
	  
	    $("#x1-plus").click(function(){
		    if (valueXFirst>=10 && valueXFirst<=580 && rectWidth>10 )
		        {valueXFirst+=10;
				rectWidth=rectWidth-10;
				$('#x1').text(valueXFirst);
				$('.rect').css("left",valueXFirst);			
				$('.rect').css("width",rectWidth);}
			  
			});
		
		
	    $("#x1-minus").click(function(){
			if (valueXFirst> 10 && valueXFirst<=580 && rectWidth>=10 ){
				valueXFirst-=10;
				rectWidth=rectWidth+10;		
				$('#x1').text(valueXFirst);        
				$('.rect').css("width",rectWidth);
				$('.rect').css("left",valueXFirst);}
			
		    });
		$("#y1-plus").click(function(){
			 if (valueYFirst>=10 && valueYFirst<=480 && rectHeight>10 ){
				valueYFirst+=10;
			    rectHeight=rectHeight-10;
			    $('#y1').text(valueYFirst);
				$('.rect').css("top", valueYFirst);
				$('.rect').css("height", rectHeight);}
		});
	    $("#y1-minus").click(function(){
			if (valueYFirst>10 && valueYFirst<=480 && rectHeight>=10 ){
				valueYFirst-=10;
				rectHeight=rectHeight+10;
				$('#y1').text(valueYFirst);
				$('.rect').css("top", valueYFirst);
				$('.rect').css("height", rectHeight);}
		});
		$("#x2-plus").click(function(){
			if (valueXSecond>=10 && valueXSecond<=580 && rectWidth>=10 ){
				valueXSecond+=10;
				rectWidth=rectWidth+10;
				$('#x2').text(valueXSecond);
				$('.rect').css("width", rectWidth);}
		});
	    $("#x2-minus").click(function(){
			if (valueXSecond>=10 && valueXSecond<=580 && rectWidth>10 ){
				valueXSecond-=10;
				rectWidth=rectWidth-10;
				$('#x2').text(valueXSecond);
				$('.rect').css("width", rectWidth);}
		});
		$("#y2-plus").click(function(){
			if (valueYSecond>=10 && valueYSecond<=480 && rectHeight>=10 ){
				valueYSecond+=10;
				rectHeight=rectHeight+10;
				$('#y2').text(valueYSecond);
				$('.rect').css("height", rectHeight);}
		});
	    $("#y2-minus").click(function(){
			if (valueYSecond>10 && valueYSecond<=480 && rectHeight>10 ){
				valueYSecond-=10;
				rectHeight=rectHeight-10;
				$('#y2').text(valueYSecond);
				$('.rect').css("height", rectHeight);}
	});
		
});
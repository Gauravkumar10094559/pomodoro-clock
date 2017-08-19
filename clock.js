$(document).ready(function(){
	
	var session=Number($("#session").text());
	var leisure=Number($("#break").text());
	var d,stop=true;
 	$("#timer").html("click to start");
 
		 $(".minus1").on("click",function(){
			if(leisure>1 && stop)
			{
				leisure--;
				$("#break").html(leisure);
			}
		});
		 $(".plus1").on("click",function(){
		 	if(stop)
		 	{
			leisure++;
			$("#break").html(leisure);			 		
		 	}
	
		});
		 $(".minus2").on("click",function(){
			if(session>1 && stop)
			{
				session--;
				$("#session").html(session);
			}
		});
		 $(".plus2").on("click",function(){
		 	if(stop)
		 	{
			session+=1;
			$("#session").html(session);				 		
		 	}
	
		});
				var done;
	function clock(){
				var min=session;
				var sec=0;
				var next=leisure;
				var val="Session";
				//console.log("val-"+val);
				done="something";
			    d=setInterval(function(){
				if(sec!=0)
					{
						sec--;
					}
				if(sec===0)
				{	
					sec=59;
					if(min===0)
						{    
							min=(next==leisure)?leisure:session;
							 if(next==leisure)
							 {
							 	next=session;
							 	val="Break!!!";
							 }
							 else{
							 	next=leisure;
							 	val="Session";
							 }
						}
					min--;
				}
				$("#timer").html(min+":"+sec);
				//console.log("val2-"+val);
				$("#text").html(val);
		 
				//console.log("time is"+min+"-"+sec);
				},1000);
	}
			 
				
			 
		
		$("#start-btn").on("click",function(){
			if(done===undefined)
			{
			 clock();
			}
			stop=false;
		});
		
		document.getElementById("stop-btn").addEventListener("click",function(){
			clearInterval(d);
			done=undefined;
			stop=true;
		});

		// var height=0;
		// var width=0;
		// var bar=setInterval(frame,100);
		// function frame()
		// {
		// 	if(height===280)
		// 	{
		// 		clearInterval(bar);
		// 	}
		// 	else{
		// 		height++; width++;
		// 		$("#clock-bar").css("height",height+"px");
		// 		$("#clock-bar").css("width",width+"px");
		// 	}
		// }
});
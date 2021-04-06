var hours = 0 ;
var minutes = 0 ;
var seconds = 0 ;
var milliseconds =0;
var color;

function uniCharCode(event) {
    var char = event.which || event.keyCode;
   
    if (char==82)
    {
     document.getElementById('color').innerText= "RED"; 
     setLaps();
     color= "red";
    
     
     
     
     }
     
  
   if (char==71){
       document.getElementById('color').innerText = "GREEN";
       color="green" ;
       setLaps();
       
      
      }
    }

var startTimer = function() {
   
    millisecInt = setInterval(function(){
        
        milliseconds = (milliseconds > 980) ? 1 : ( milliseconds + 111    ) ;
        setTimeToHTML(hours, minutes, seconds, milliseconds);
    },100);
    secondsInt = setInterval(function() {
        seconds = ( seconds > 59 ) ? 1 : ( seconds + 1 ) ;
    },1000);
    minutesInt = setInterval(function(){
        minutes = (minutes > 59 ) ? 1 : ( minutes + 1 ) ;
    }, 1000 * 60);
    hoursInt = setInterval(function(){
        hours = ( hours > 59 ) ? 1 : ( hours + 1 ) ;
    },1000 * 60 * 60);
   
    
   
        
    document.getElementById("start").disabled = true;
   
}

var stopTimer = function() {
    clearInterval(millisecInt); clearInterval(secondsInt); clearInterval(minutesInt); clearInterval(hoursInt);
    document.getElementById("start").disabled = false;
}

var resetTimer = function() {
    stopTimer();
    hours = 0 ; minutes = 0 ; seconds = 0 ; milliseconds = 0 ;
    setTimeToHTML(hours, minutes, seconds, milliseconds);
    document.getElementById("laps").innerHTML = "";
    document.getElementById("start").disabled = false;
}

var setTimeToHTML = function(hours, minutes, seconds, milliseconds,color) {
   
    document.getElementById("hours").innerText = (hours.toString().length == 1) ? ("0" + hours) : hours ;
    document.getElementById("minutes").innerText = (minutes.toString().length == 1) ? ("0" + minutes) : minutes ;
    document.getElementById("seconds").innerText = (seconds.toString().length == 1) ? ("0" + seconds) : seconds ;
    document.getElementById("milliseconds").innerText =  milliseconds ;
    document.getElementById("colors").innerText = color;
}

var setLaps = function() {
    var p = document.createElement("p") ;
    var timer = document.getElementById("hours").innerText + " : " + document.getElementById("minutes").innerText + " : " + document.getElementById("seconds").innerText + " : " + document.getElementById("milliseconds").innerText + " : " + document.getElementById("color").innerText;
    var ptext = document.createTextNode(timer);
    p.appendChild(ptext);
    var laps = document.getElementById("laps");
    laps.appendChild(p);
}

var oneSec= function(){
    
    document.getElementById('fun').innerText= "ONE SECOND TEST RESULTS";
    $("#div1").delay("fast").fadeIn();
    $("#div1").delay(1000).fadeOut();
    $("#div2").delay(2000).fadeIn();
    $("#div2").delay("fast").fadeOut();
    $("#div3").delay(3000).fadeIn();
    $("#div3").delay("fast").fadeOut();
    $("#div4").delay(4000).fadeIn();
    $("#div4").delay("fast").fadeOut();
    $("#div5").delay(5000).fadeIn();
    $("#div5").delay("fast").fadeOut();
    $("#div6").delay(6000).fadeIn();
    $("#div6").delay("fast").fadeOut();
    $("#div7").delay(7000).fadeIn();
    $("#div7").delay("fast").fadeOut();
    $("#div8").delay(8000).fadeIn();
    $("#div8").delay("fast").fadeOut();
    $("#div9").delay(9000).fadeIn();
    $("#div9").delay("fast").fadeOut();
    $("#div10").delay(10000).fadeIn();
    $("#div10").delay("fast").fadeOut();
    $("#div11").delay(11000).fadeIn();
    $("#div11").delay("fast").fadeOut();
    $("#div12").delay(12000).fadeIn();
    $("#div12").delay("fast").fadeOut();
    $("#div13").delay(13000).fadeIn();
    $("#div13").delay("fast").fadeOut();
    $("#div14").delay(14000).fadeIn();
    $("#div14").delay("fast").fadeOut();
    $("#div15").delay(15000).fadeIn();
    $("#div15").delay("fast").fadeOut();
    $("#div16").delay(16000).fadeIn();
    $("#div16").delay("fast").fadeOut();
    $("#div17").delay(17000).fadeIn();
    $("#div17").delay("fast").fadeOut();
    $("#div18").delay(18000).fadeIn();
    $("#div18").delay("fast").fadeOut();
    $("#div19").delay(19000).fadeIn();
    $("#div19").delay("fast").fadeOut();
    $("#div20").delay(20000).fadeIn();
    $("#div20").delay("fast").fadeOut();

    $("#div21").delay(21000).fadeIn();
    $("#div21").delay("fast").fadeOut();
    $("#div22").delay(22000).fadeIn();
    $("#div22").delay("fast").fadeOut();
    $("#div23").delay(23000).fadeIn();
    $("#div23").delay("fast").fadeOut();
    $("#div24").delay(24000).fadeIn();
    $("#div24").delay("fast").fadeOut();
    $("#div25").delay(25000).fadeIn();
    $("#div25").delay("fast").fadeOut();
    $("#div26").delay(26000).fadeIn();
    $("#div26").delay("fast").fadeOut();
    $("#div27").delay(27000).fadeIn();
    $("#div27").delay("fast").fadeOut();
    $("#div28").delay(28000).fadeIn();
    $("#div28").delay("fast").fadeOut();
    $("#div29").delay(29000).fadeIn();
    $("#div29").delay("fast").fadeOut();
    $("#div30").delay(30000).fadeIn();
    $("#div30").delay("fast").fadeOut();
    $("#div31").delay(31000).fadeIn();
    $("#div31").delay("fast").fadeOut();
    $("#div32").delay(32000).fadeIn();
    $("#div32").delay("fast").fadeOut();
    $("#div33").delay(33000).fadeIn();
    $("#div33").delay("fast").fadeOut();
    $("#div34").delay(34000).fadeIn();
    $("#div34").delay("fast").fadeOut();
    $("#div35").delay(35000).fadeIn();
    $("#div35").delay("fast").fadeOut();

    $("#div36").delay(36000).fadeIn();
    $("#div36").delay("fast").fadeOut();
    $("#div37").delay(37000).fadeIn();
    $("#div37").delay("fast").fadeOut();
    $("#div38").delay(38000).fadeIn();
    $("#div38").delay("fast").fadeOut();
    $("#div39").delay(39000).fadeIn();
    $("#div39").delay("fast").fadeOut();
    $("#div40").delay(40000).fadeIn();
    $("#div40").delay("fast").fadeOut();
    $("#div41").delay(41000).fadeIn();
    $("#div41").delay("fast").fadeOut();
    $("#div42").delay(42000).fadeIn();
    $("#div42").delay("fast").fadeOut();
    $("#div43").delay(43000).fadeIn();
    $("#div43").delay("fast").fadeOut();
    $("#div44").delay(44000).fadeIn();
    $("#div44").delay("fast").fadeOut();
    $("#div45").delay(45000).fadeIn();
    $("#div45").delay("fast").fadeOut();
    $("#div46").delay(46000).fadeIn();
    $("#div46").delay("fast").fadeOut();
    $("#div47").delay(47000).fadeIn();
    $("#div47").delay("fast").fadeOut();
    $("#div48").delay(48000).fadeIn();
    $("#div48").delay("fast").fadeOut();
    $("#div49").delay(49000).fadeIn();
    $("#div49").delay("fast").fadeOut();
    $("#div50").delay(50000).fadeIn();
    $("#div50").delay("fast").fadeOut();

    $("#div51").delay(51000).fadeIn();
    $("#div51").delay("fast").fadeOut();
    $("#div52").delay(52000).fadeIn();
    $("#div52").delay("fast").fadeOut();
    $("#div53").delay(53000).fadeIn();
    $("#div53").delay("fast").fadeOut();
    $("#div54").delay(54000).fadeIn();
    $("#div54").delay("fast").fadeOut();
    $("#div55").delay(55000).fadeIn();
    $("#div55").delay("fast").fadeOut();
    $("#div56").delay(56000).fadeIn();
    $("#div56").delay("fast").fadeOut();
    $("#div57").delay(57000).fadeIn();
    $("#div57").delay("fast").fadeOut();
    $("#div58").delay(58000).fadeIn();
    $("#div58").delay("fast").fadeOut();
    $("#div59").delay(59000).fadeIn();
    $("#div59").delay("fast").fadeOut();
    $("#div60").delay(60000).fadeIn();
    $("#div60").delay("fast").fadeOut();
   

    setTimeout(stopTimer,60000);
}

var twoSec= function(){
    
    document.getElementById('fun').innerText= "TWO SECOND TEST RESULTS";
    $("#div1").delay(2000).fadeIn();
    $("#div1").delay(1000).fadeOut();
    $("#div2").delay(4000).fadeIn();
    $("#div2").delay(1000).fadeOut();
    $("#div3").delay(6000).fadeIn();
    $("#div3").delay(1000).fadeOut();
    $("#div4").delay(8000).fadeIn();
    $("#div4").delay(1000).fadeOut();
    $("#div5").delay(10000).fadeIn();
    $("#div5").delay(1000).fadeOut();
    $("#div6").delay(12000).fadeIn();
    $("#div6").delay(1000).fadeOut();
    $("#div7").delay(14000).fadeIn();
    $("#div7").delay(1000).fadeOut();
    $("#div8").delay(16000).fadeIn();
    $("#div8").delay(1000).fadeOut();
    $("#div9").delay(18000).fadeIn();
    $("#div9").delay(1000).fadeOut();
    $("#div10").delay(20000).fadeIn();
    $("#div10").delay(1000).fadeOut();
    $("#div11").delay(22000).fadeIn();
    $("#div11").delay(1000).fadeOut();
    $("#div12").delay(24000).fadeIn();
    $("#div12").delay(1000).fadeOut();
    $("#div13").delay(26000).fadeIn();
    $("#div13").delay(1000).fadeOut();
    $("#div14").delay(28000).fadeIn();
    $("#div14").delay(1000).fadeOut();
    $("#div15").delay(30000).fadeIn();
    $("#div15").delay(1000).fadeOut();
    $("#div16").delay(32000).fadeIn();
    $("#div16").delay(1000).fadeOut();
    $("#div17").delay(34000).fadeIn();
    $("#div17").delay(1000).fadeOut();
    $("#div18").delay(36000).fadeIn();
    $("#div18").delay(1000).fadeOut();
    $("#div19").delay(38000).fadeIn();
    $("#div19").delay(1000).fadeOut();
    $("#div20").delay(40000).fadeIn();
    $("#div20").delay(1000).fadeOut();
    $("#div21").delay(42000).fadeIn();
    $("#div21").delay(1000).fadeOut();
    $("#div22").delay(44000).fadeIn();
    $("#div22").delay(1000).fadeOut();
    $("#div23").delay(46000).fadeIn();
    $("#div23").delay(1000).fadeOut();
    $("#div24").delay(48000).fadeIn();
    $("#div24").delay(1000).fadeOut();
    $("#div25").delay(50000).fadeIn();
    $("#div25").delay(1000).fadeOut();
    $("#div26").delay(52000).fadeIn();
    $("#div26").delay(1000).fadeOut();
    $("#div27").delay(54000).fadeIn();
    $("#div27").delay(1000).fadeOut();
    $("#div28").delay(56000).fadeIn();
    $("#div28").delay(1000).fadeOut();
    $("#div29").delay(58000).fadeIn();
    $("#div29").delay(1000).fadeOut();
    $("#div30").delay(60000).fadeIn();
    $("#div30").delay(1000).fadeOut();
   

    setTimeout(stopTimer,60000);
}

var threeSec= function(){
    
    document.getElementById('fun').innerText= "THREE SECOND TEST RESULTS";
    $("#div1").delay(3000).fadeIn();
    $("#div1").delay(2000).fadeOut();
    $("#div2").delay(6000).fadeIn();
    $("#div2").delay(2000).fadeOut();
    $("#div3").delay(9000).fadeIn();
    $("#div3").delay(2000).fadeOut();
    $("#div4").delay(12000).fadeIn();
    $("#div4").delay(2000).fadeOut();
    $("#div5").delay(15000).fadeIn();
    $("#div5").delay(2000).fadeOut();
    $("#div6").delay(18000).fadeIn();
    $("#div6").delay(2000).fadeOut();
    $("#div7").delay(21000).fadeIn();
    $("#div7").delay(2000).fadeOut();
    $("#div8").delay(24000).fadeIn();
    $("#div8").delay(2000).fadeOut();
    $("#div9").delay(27000).fadeIn();
    $("#div9").delay(2000).fadeOut();
    $("#div10").delay(30000).fadeIn();
    $("#div10").delay(2000).fadeOut();
    $("#div11").delay(33000).fadeIn();
    $("#div11").delay(2000).fadeOut();
    $("#div12").delay(36000).fadeIn();
    $("#div12").delay(2000).fadeOut();
    $("#div13").delay(39000).fadeIn();
    $("#div13").delay(2000).fadeOut();
    $("#div14").delay(42000).fadeIn();
    $("#div14").delay(2000).fadeOut();
    $("#div15").delay(45000).fadeIn();
    $("#div15").delay(2000).fadeOut();
    $("#div16").delay(48000).fadeIn();
    $("#div16").delay(2000).fadeOut();
    $("#div17").delay(51000).fadeIn();
    $("#div17").delay(2000).fadeOut();
    $("#div18").delay(54000).fadeIn();
    $("#div18").delay(2000).fadeOut();
    $("#div19").delay(57000).fadeIn();
    $("#div19").delay(2000).fadeOut();
    $("#div20").delay(60000).fadeIn();
    $("#div20").delay(2000).fadeOut();
   
    setTimeout(stopTimer,60000);
}
function renameButton() {
    location.reload(true);
  }


    








 
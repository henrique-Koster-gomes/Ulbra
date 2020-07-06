


var minutes = 25
var seconds = 00

button.addEventListener ("click", function myFunction(){
 interval = setInterval(setAlert, 1000);
 
    
    var minutes = 25
    var seconds = 00
    function setAlert() {
    
     console.log(minutes + "m " + seconds + "s " )

     if((seconds > 00) && (seconds <= 59) ){       

         seconds--;
         document.getElementById("showtime").innerHTML = ("tempo restante:" + minutes + "m " + seconds + "s " );
          
      }
     else if((seconds == 0) && (minutes > 00)) {
         seconds--;
         seconds = 59;
         minutes--;
        
         document.getElementById("showtime").innerHTML = ( "tempo restante:" + minutes + "m " + seconds + "s " );

    }
     else if((minutes == 00)  && (seconds == 00)){
         clearInterval(interval)
         console.log("the interval stoped")
         var audio = new Audio('alarm.mp3');
         audio.play();

    }
     else{
            clearInterval(interval)
            
    }
    
  }
    

})

function myStopFunction(){
    clearInterval(interval)
    minutes == 0
    seconds == 0
    document.getElementById("showtime").innerHTML = ( "sessão cancelada "  );
    }


function breakfunction(){

    breakinterval = setInterval(setAlert, 1000);
 
    
    var minutes = 05
    var seconds = 00
    function setAlert() {
    
     console.log(minutes + "m " + seconds + "s " )

     if((seconds > 00) && (seconds <= 59) ){       

         seconds--;
         document.getElementById("breaktime").innerHTML = ("tempo restante:" + minutes + "m " + seconds + "s " );
          
      }
     else if((seconds == 0) && (minutes > 00)) {
         seconds--;
         seconds = 59;
         minutes--;
        
         document.getElementById("breaktime").innerHTML = ("tempo restante:" + minutes + "m " + seconds + "s " );

    }
     else if((minutes == 00)  && (seconds == 00)){
         clearInterval(breakinterval)
         console.log("the interval stoped")
         var audio = new Audio('alarm.mp3');
         audio.play();

    }
     else{
            clearInterval(breakinterval)
            
    }
    
  }




}
function mybreakStopFunction(){
    clearInterval(breakinterval)
    minutes == 0
    seconds == 0
    document.getElementById("breaktime").innerHTML = ( "sessão cancelada "  );
    }

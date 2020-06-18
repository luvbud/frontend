
// 발음 음성파일 재생
function play() { 
    var audio = document.getElementById("audio_play"); 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
} 

function check(){
    var display = false;
    var con = document.getElementById("stars");
    var con2 = document.getElementById("circle");

    if(con.style.display=='inline' || con2.style.display=='none'){
        con.style.display="none";
        con2.style.display='inline';
    }
    else{
        con.style.display="none";
        con2.style.display='inline';
    }

    setTimeout(function() {
        if(con.style.display=='none' && con2.style.display=='inline'){
            con.style.display='inline';
            con2.style.display='none';
        }
        else{
            con.style.display='none';
            con2.style.display='none';
        }
      }, 2500);
}

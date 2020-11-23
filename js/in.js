function play(e) { 
    var audio = document.getElementById("word_play");
    if ((document.getElementById("word_play").src == "http://113.198.137.82/trendywords.html#") ||(document.getElementById("word_play").src == "http://113.198.137.82/#")){
        alert("준비중입니다.");
    }
    else{
        // console.log(document.getElementById("word_play").src);
        audio.play(); 
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



// // $(document).ready(function() {
//   // $('#transition_graph').on('shown.bs.modal', function(e){ 
//       var chart = c3.generate({
//       bindto: '#chart',
//       size: {
//           height: 320*0.7,
//           width: 466*0.7
//       },
//       data: {
//           x: 'x',
//           columns: [
//               ['x', "Nat'l/Politics", 'World', 'Economy', 'IT/Science', 'Sports', 'Life/Culture', 'Weather', 'Foreign Policy'],
//               ['frequency', 50, 100, 70, 120, 200]
//           ],
//           type: 'spline',
//           colors: {
//               'frequency': '#ff9500'
//            }
//       },
//   });
// // });

function searchWord(){
    var search_word = document.getElementById('searchform').value;
    console.log(search_word);
    // var result = document.getElementById('ALLAjax');
    let innerText = new String();

    $.ajax({
        crossOrigin: true,

        url : "http://113.198.137.82:10021/word_info/?word="+ search_word + "&collection=WordDictionary",
        dataType :"json",
        
        success : function(data) {
            document.getElementById("exampleModalLongTitle").textContent = "검색 결과";
            $( '.modal-body' ).show();
            $( '.modal-footer' ).show();
            $( '.buttons' ).hide();
            if (data['soundLink'] == 'None'){
                data['soundLink'] = "#";
            }
            document.getElementById("word").textContent = search_word;
            var obj = data['meaning'];
            for(var objVarName in obj) {
                objKey = objVarName.toLowerCase();
                objValue = obj[objVarName];
                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
            }
            document.getElementById("word_mean").textContent = innerText;
            document.getElementById("word_sentence").textContent = data['exampleText'];
            document.getElementById("word_Ksentence").textContent = data['exampleKoreanText'];
            document.getElementById("word_play").src = data['soundLink'];
            
        },
        error : function(e) {
            document.getElementById("exampleModalLongTitle").textContent = "검색 결과가 없습니다.";
            $( '.modal-body' ).hide();
            $( '.modal-footer' ).hide();
            console.log(e.responseText);

        }
    });
    // console.log(document.getElementsByClassName("btn btn-secondary")[3]);
    // var x = document.getElementsByClassName("btn btn-secondary")[4];
    // if (x != null){
    //     x.textContent = "닫기";
    // }
   
    
}
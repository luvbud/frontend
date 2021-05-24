function play(e) { 
    var audio = document.getElementById("word_play");
    if ((document.getElementById("word_play").src == "http://113.198.137.82/trendywords.html#") || (document.getElementById("word_play").src == "http://113.198.137.82/#")){
        alert("준비중입니다.");
    }
    else{
        // console.log(document.getElementById("word_play").src);
        audio.play(); 
    }
} 

function searchWord(){
    var search_word = document.getElementById('searchform').value;
    // console.log(search_word);
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
            // document.getElementById("word_mean").textContent = innerText;
            // document.getElementById("word_sentence").textContent = data['exampleText'];
            // document.getElementById("word_Ksentence").textContent = data['exampleKoreanText'];
            document.getElementsByClassName("arrow_box")[0].textContent = innerText;
            document.getElementsByClassName("arrow_box")[1].innerHTML = data['exampleText'] +'<br>' + data['exampleKoreanText'];
            document.getElementById("word_play").src = data['soundLink'];
            
        },
        error : function(e) {
            document.getElementById("exampleModalLongTitle").textContent = "검색 결과가 없습니다.";
            $( '.modal-body' ).hide();
            $( '.modal-footer' ).hide();
            console.log(e.responseText);

        }
    });
    $('#exampleModalCenter').on('shown.bs.modal', function(e){ 
    var graph_word = document.getElementById("word").textContent;
    $.ajax({
        crossOrigin: true,

        url : "http://113.198.137.82:10021/word_info/?word="+ graph_word + "&collection=WordCount",
        dataType :"json",
        
        success : function(data) {

                var arr = new Array();
                arr.push(data['bySubject']);
                // console.log(arr);
                bysubject_graph(arr);

                var obj = data['daily'];
                obj = JSON.stringify(obj);
                var arr = new Array();
                arr.push(data['daily']);
                // console.log(arr);
                bytime_graph(obj);

        },
        error : function(e) {
            // document.getElementById("chart").textContent = "정보가 없습니다.";
            console.log(e.responseText);
        }
    });
});
    
}



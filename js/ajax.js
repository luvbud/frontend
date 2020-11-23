var currentId = 0;
var currentName = new String();

function aupl(c, n){
    let innerText = new String();
    var getname = new String();
    getname = getname.concat(n);
    getname = getname.substr(0, 3);
    // currentName = getname;
    // console.log(getname);
    for(var i=0; i < c; i++){
        // if (document.getElementById(getname+"_au"+(i+1)).href == "http://113.198.137.82/trendywords.html#"){
        //     continue;
        // }
        // console.log(document.getElementById(getname+"_au"+(i+1)).href)
        innerText= innerText.concat("<audio id='"+getname+"_aupl"+(i+1)+"' src='"+document.getElementById(getname+"_au"+(i+1)).href+"'></audio>");
    }
    document.getElementById(getname+'_audiolist').innerHTML = innerText;
    // console.log(document.getElementById('audiolist'));
}

function auplay(e) { 
    var getid = new String();
    var getname = new String();
    getid = getid.concat(e.id);
    getid = getid.substr(7);
    // getid = parseInt(getid);
    getname = getname.concat(e.id);
    getname = getname.substr(0, 3);
    // console.log(getname, getid)
    // console.log(getid);
    // console.log(document.getElementById("aupl"+getid));
    var audio = document.getElementById(getname+"_aupl"+getid);
    // if (!audio){
    //     alert("준비중입니다.");
    // }
    if (document.getElementById(getname+"_aupl"+getid).src == "http://113.198.137.82/trendywords.html#"){
        alert("준비중입니다.");
    }
    else{
        audio.play(); 
    }
}

function nextButton(e) {
    var getid = currentId + 1;
    currentId = currentId + 1;
    // console.log(getid);
    var classname = new String();
    classname = classname.concat(currentName+"number");
    if (currentId > $("."+classname).length){
        currentId = ($("."+classname).length);
        alert("마지막 단어입니다.");
    }
    else {
        document.getElementById("word").textContent = document.getElementById(currentName+"_w"+getid).textContent;
        document.getElementById("word_mean").textContent = document.getElementById(currentName+"_w_m"+getid).textContent;
        document.getElementById("word_sentence").textContent = document.getElementById(currentName+"_w_s"+getid).textContent;
        document.getElementById("word_Ksentence").textContent = document.getElementById(currentName+"_w_k"+getid).textContent;
        document.getElementById("word_play").src = document.getElementById(currentName+"_au"+getid).href;
    }
}

function preButton(e) {
    var getid = currentId - 1;
    currentId = currentId - 1;
    // console.log(currentName);
    // console.log(getid);
    if (currentId < 1){
        currentId = 1;
        alert("처음 단어입니다.");
    }
    else {
        document.getElementById("word").textContent = document.getElementById(currentName+"_w"+getid).textContent;
        document.getElementById("word_mean").textContent = document.getElementById(currentName+"_w_m"+getid).textContent;
        document.getElementById("word_sentence").textContent = document.getElementById(currentName+"_w_s"+getid).textContent;
        document.getElementById("word_Ksentence").textContent = document.getElementById(currentName+"_w_k"+getid).textContent;
        document.getElementById("word_play").src = document.getElementById(currentName+"_au"+getid).href;
    }
}

function modal(e){
    document.getElementById("exampleModalLongTitle").textContent = "학습하기";

    $( '.modal-body' ).show();
    $( '.modal-footer' ).show();
    $( '.buttons' ).show();

    // document.getElementsByClassName("btn btn-secondary")[3].textContent = "이전";
    // document.getElementsByClassName("btn btn-secondary")[4].textContent = "다음";
    var getid = new String();
    var getname = new String();
    // var number = e.;
    if (e.id) {
        // console.log($('.number').length);
        getname = getname.concat(e.id);
        getname = getname.substr(0, 3);
        // console.log(getname);
        getid = getid.concat(e.id);
        getid = getid.substr(5);
        getid = parseInt(getid);
        // console.log(getid);
        currentId = getid;
        currentName = getname;
        // console.log(getid);
        // console.log(e.textContent);
        // var newline = "\r\n";
        // console.log(document.getElementsByClassName("btn btn-secondary")[4]);
        // console.log(e.textContent);
        
        document.getElementById("word").textContent = e.textContent;
        document.getElementById("word_mean").textContent = document.getElementById(getname+"_w_m"+getid).textContent;
        document.getElementById("word_sentence").textContent = document.getElementById(getname+"_w_s"+getid).textContent;
        document.getElementById("word_Ksentence").textContent = document.getElementById(getname+"_w_k"+getid).textContent;
        document.getElementById("word_play").src = document.getElementById(getname+"_au"+getid).href;
    }
}


$(window).on("load", GetAllWords);
function GetAllWords() {
    
    var result = document.getElementById('ALLAjax');
    let innerText = new String();
    var i = 0;
    $.ajax({
        crossOrigin: true,
        // url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=totalCount",

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=monthly&date=202011",
        dataType :"json",
        
        success : function(data) {
            let flag = 0;
            let except_word = [
                "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
                "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
                "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
                "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
                "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second"
            ];
            
            for (let index = 0; index < data.length; index++) {
                let word = data[index];
                
                for(let num = 0; num < except_word.length; num++){
                    if (word[0] == except_word[num]){
                        flag = 1;
                        // console.log(word[0]);
                        break;
                    }
                    else {
                        flag = 0;
                    }
                }
                if(flag == 0){
                    i = i + 1;
                    $.ajax({
                        crossOrigin: true,
                        url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                        dataType: "json",
                        
                        async: false,
                        success : function(data){
                            if (data['soundLink'] == 'None'){
                                data['soundLink'] = "#";
                            }
                            innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='allnumber'>" + i + "</h3></a>");
                            innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='all_au"+i+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='all_aup"+i+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='all_w_m"+i+"' style='font-size: 14px; margin-left: 10px;'>");
                            var obj = data['meaning'];
                            // <a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);'></a>
                            for(var objVarName in obj) {
                                objKey = objVarName.toLowerCase();
                                objValue = obj[objVarName];
                                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                                // JSON.stringify(obj)
                            }
                            innerText = innerText.concat("</span> </h2><p id='all_w_s"+i+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='all_w_k"+i+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                        },
                        error : function(e) {
                            console.log(e.responseText);
                        }

                    });
                }
                result.innerHTML = innerText;
            }
            var count = $('.allnumber').length;
            var name = new String();
            name = name.concat("all");
            aupl(count, name);
        },
        error : function(e) {
            console.log(e.responseText);
        }
    });
}

$(window).on("load", GetNatlPoliticsWords);
function GetNatlPoliticsWords() {
    var result = document.getElementById('NatlPoliticsAjax');
    let innerText = new String();
    var i = 0;
    $.ajax({
        crossOrigin: true,
        // url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=totalCount",

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=30&cycle=bySubject&subject=Nat%27l/Politics",
        dataType :"json",
        
        success : function(data) {
            let flag = 0;
            let except_word = [
                "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
                "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
                "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
                "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
                "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second"
            ];
            
            for (let index = 0; index < data.length; index++) {
                let word = data[index];
                
                for(let num = 0; num < except_word.length; num++){
                    if (word[0] == except_word[num]){
                        flag = 1;
                        // console.log(word[0]);
                        break;
                    }
                    else {
                        flag = 0;
                    }
                }
                if(flag == 0){
                    i = i + 1;
                    $.ajax({
                        crossOrigin: true,
                        url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                        dataType: "json",
                        
                        async: false,
                        success : function(data){
                            if (data['soundLink'] == 'None'){
                                data['soundLink'] = "#";
                            }
                            innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='natnumber'>" + i + "</h3></a>");
                            innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='nat_w"+i+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='nat_au"+i+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='nat_aup"+i+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='nat_w_m"+i+"' style='font-size: 14px; margin-left: 10px;'>");
                            var obj = data['meaning'];
                            // <a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);'></a>
                            for(var objVarName in obj) {
                                objKey = objVarName.toLowerCase();
                                objValue = obj[objVarName];
                                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                                // JSON.stringify(obj)
                            }
                            innerText = innerText.concat("</span> </h2><p id='nat_w_s"+i+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='nat_w_k"+i+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                        },
                        error : function(e) {
                            console.log(e.responseText);
                        }

                    });
                }
                result.innerHTML = innerText;
            }
            var count = $('.natnumber').length;
            var name = new String();
            name = name.concat("nat");
            aupl(count, name);
        },
        error : function(e) {
            console.log(e.responseText);
        }
    });

}


$(window).on("load", GetWorldWords);
function GetWorldWords() {
    var result = document.getElementById('WorldAjax');
    let innerText = new String();
    var i = 0;
    $.ajax({
        crossOrigin: true,
        // url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=totalCount",

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=30&cycle=bySubject&subject=World",
        dataType :"json",
        
        success : function(data) {
            let flag = 0;
            let except_word = [
                "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
                "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
                "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
                "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
                "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second"
            ];
            
            for (let index = 0; index < data.length; index++) {
                let word = data[index];
                
                for(let num = 0; num < except_word.length; num++){
                    if (word[0] == except_word[num]){
                        flag = 1;
                        // console.log(word[0]);
                        break;
                    }
                    else {
                        flag = 0;
                    }
                }
                if(flag == 0){
                    i = i + 1;
                    $.ajax({
                        crossOrigin: true,
                        url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                        dataType: "json",
                        
                        async: false,
                        success : function(data){
                            if (data['soundLink'] == 'None'){
                                data['soundLink'] = "#";
                            }
                            innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='wornumber'>" + i + "</h3></a>");
                            innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='wor_w"+i+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='wor_au"+i+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='wor_aup"+i+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='wor_w_m"+i+"' style='font-size: 14px; margin-left: 10px;'>");
                            var obj = data['meaning'];
                            // <a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);'></a>
                            for(var objVarName in obj) {
                                objKey = objVarName.toLowerCase();
                                objValue = obj[objVarName];
                                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                                // JSON.stringify(obj)
                            }
                            innerText = innerText.concat("</span> </h2><p id='wor_w_s"+i+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='wor_w_k"+i+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                        },
                        error : function(e) {
                            console.log(e.responseText);
                        }

                    });
                }
                result.innerHTML = innerText;
            }
            var count = $('.wornumber').length;
            var name = new String();
            name = name.concat("wor");
            aupl(count, name);
        },
        error : function(e) {
            console.log(e.responseText);
        }
    });
}

$(window).on("load", GetEconomyWords);
function GetEconomyWords() {
    var result = document.getElementById('EconomyAjax');
    let innerText = new String();
    var i = 0;
    $.ajax({
        crossOrigin: true,
        // url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=totalCount",

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=30&cycle=bySubject&subject=Economy",
        dataType :"json",
        
        success : function(data) {
            let flag = 0;
            let except_word = [
                "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
                "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
                "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
                "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
                "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second"
            ];
            
            for (let index = 0; index < data.length; index++) {
                let word = data[index];
                
                for(let num = 0; num < except_word.length; num++){
                    if (word[0] == except_word[num]){
                        flag = 1;
                        // console.log(word[0]);
                        break;
                    }
                    else {
                        flag = 0;
                    }
                }
                if(flag == 0){
                    i = i + 1;
                    $.ajax({
                        crossOrigin: true,
                        url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                        dataType: "json",
                        
                        async: false,
                        success : function(data){
                            if (data['soundLink'] == 'None'){
                                data['soundLink'] = "#";
                            }
                            innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='econumber'>" + i + "</h3></a>");
                            innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='eco_w"+i+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='eco_au"+i+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='eco_aup"+i+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='eco_w_m"+i+"' style='font-size: 14px; margin-left: 10px;'>");
                            var obj = data['meaning'];
                            // <a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);'></a>
                            for(var objVarName in obj) {
                                objKey = objVarName.toLowerCase();
                                objValue = obj[objVarName];
                                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                                // JSON.stringify(obj)
                            }
                            innerText = innerText.concat("</span> </h2><p id='eco_w_s"+i+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='eco_w_k"+i+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                        },
                        error : function(e) {
                            console.log(e.responseText);
                        }

                    });
                }
                result.innerHTML = innerText;
            }
            var count = $('.econumber').length;
            var name = new String();
            name = name.concat("eco");
            aupl(count, name);
        },
        error : function(e) {
            console.log(e.responseText);
        }
    });
}

$(window).on("load", GetITScienceWords);
function GetITScienceWords() {
    var result = document.getElementById('ITScienceAjax');
    let innerText = new String();
    var i = 0;
    $.ajax({
        crossOrigin: true,
        // url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=totalCount",

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=30&cycle=bySubject&subject=IT/Science",
        dataType :"json",
        
        success : function(data) {
            let flag = 0;
            let except_word = [
                "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
                "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
                "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
                "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
                "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second", "dr."
            ];
            
            for (let index = 0; index < data.length; index++) {
                let word = data[index];
                
                for(let num = 0; num < except_word.length; num++){
                    if (word[0] == except_word[num]){
                        flag = 1;
                        // console.log(word[0]);
                        break;
                    }
                    else {
                        flag = 0;
                    }
                }
                if(flag == 0){
                    i = i + 1;
                    $.ajax({
                        crossOrigin: true,
                        url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                        dataType: "json",
                        
                        async: false,
                        success : function(data){
                            if (data['soundLink'] == 'None'){
                                data['soundLink'] = "#";
                            }
                            innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='itsnumber'>" + i + "</h3></a>");
                            innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='its_w"+i+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='its_au"+i+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='its_aup"+i+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='its_w_m"+i+"' style='font-size: 14px; margin-left: 10px;'>");
                            var obj = data['meaning'];
                            // <a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);'></a>
                            for(var objVarName in obj) {
                                objKey = objVarName.toLowerCase();
                                objValue = obj[objVarName];
                                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                                // JSON.stringify(obj)
                            }
                            innerText = innerText.concat("</span> </h2><p id='its_w_s"+i+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='its_w_k"+i+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                        },
                        error : function(e) {
                            console.log(e.responseText);
                        }

                    });
                }
                result.innerHTML = innerText;
            }
            var count = $('.itsnumber').length;
            var name = new String();
            name = name.concat("its");
            aupl(count, name);
        },
        error : function(e) {
            console.log(e.responseText);
        }
    });
    
}

$(window).on("load", GetSportsWords);
function GetSportsWords() {
    var result = document.getElementById('SportsAjax');
    let innerText = new String();
    var i = 0;
    $.ajax({
        crossOrigin: true,
        // url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=totalCount",

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=30&cycle=bySubject&subject=Sports",
        dataType :"json",
        
        success : function(data) {
            let flag = 0;
            let except_word = [
                "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
                "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
                "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
                "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
                "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second"
            ];
            
            for (let index = 0; index < data.length; index++) {
                let word = data[index];
                
                for(let num = 0; num < except_word.length; num++){
                    if (word[0] == except_word[num]){
                        flag = 1;
                        // console.log(word[0]);
                        break;
                    }
                    else {
                        flag = 0;
                    }
                }
                if(flag == 0){
                    i = i + 1;
                    $.ajax({
                        crossOrigin: true,
                        url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                        dataType: "json",
                        
                        async: false,
                        success : function(data){
                            if (data['soundLink'] == 'None'){
                                data['soundLink'] = "#";
                            }
                            innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='sponumber'>" + i + "</h3></a>");
                            innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='spo_w"+i+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='spo_au"+i+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='spo_aup"+i+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='spo_w_m"+i+"' style='font-size: 14px; margin-left: 10px;'>");
                            var obj = data['meaning'];
                            // <a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);'></a>
                            for(var objVarName in obj) {
                                objKey = objVarName.toLowerCase();
                                objValue = obj[objVarName];
                                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                                // JSON.stringify(obj)
                            }
                            innerText = innerText.concat("</span> </h2><p id='spo_w_s"+i+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='spo_w_k"+i+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                        },
                        error : function(e) {
                            console.log(e.responseText);
                        }

                    });
                }
                result.innerHTML = innerText;
            }
            var count = $('.sponumber').length;
            var name = new String();
            name = name.concat("spo");
            aupl(count, name);
        },
        error : function(e) {
            console.log(e.responseText);
        }
    });
    
}

$(window).on("load", GetLifeCultureWords);
function GetLifeCultureWords() {
    var result = document.getElementById('LifeCultureAjax');
    let innerText = new String();
    var i = 0;
    $.ajax({
        crossOrigin: true,
        // url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=totalCount",

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=30&cycle=bySubject&subject=Life/Culture",
        dataType :"json",
        
        success : function(data) {
            let flag = 0;
            let except_word = [
                "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
                "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
                "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
                "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
                "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second"
            ];
            
            for (let index = 0; index < data.length; index++) {
                let word = data[index];
                
                for(let num = 0; num < except_word.length; num++){
                    if (word[0] == except_word[num]){
                        flag = 1;
                        // console.log(word[0]);
                        break;
                    }
                    else {
                        flag = 0;
                    }
                }
                if(flag == 0){
                    i = i + 1;
                    $.ajax({
                        crossOrigin: true,
                        url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                        dataType: "json",
                        
                        async: false,
                        success : function(data){
                            if (data['soundLink'] == 'None'){
                                data['soundLink'] = "#";
                            }
                            innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='lifnumber'>" + i + "</h3></a>");
                            innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='lif_w"+i+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='lif_au"+i+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='lif_aup"+i+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='lif_w_m"+i+"' style='font-size: 14px; margin-left: 10px;'>");
                            var obj = data['meaning'];
                            // <a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);'></a>
                            for(var objVarName in obj) {
                                objKey = objVarName.toLowerCase();
                                objValue = obj[objVarName];
                                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                                // JSON.stringify(obj)
                            }
                            innerText = innerText.concat("</span> </h2><p id='lif_w_s"+i+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='lif_w_k"+i+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                        },
                        error : function(e) {
                            console.log(e.responseText);
                        }

                    });
                }
                result.innerHTML = innerText;
            }
            var count = $('.lifnumber').length;
            var name = new String();
            name = name.concat("lif");
            aupl(count, name);
        },
        error : function(e) {
            console.log(e.responseText);
        }
    });
}

$(window).on("load", GetWeatherWords);
function GetWeatherWords() {
    var result = document.getElementById('WeatherAjax');
    let innerText = new String();
    var i = 0;
    $.ajax({
        crossOrigin: true,
        // url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=totalCount",

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=30&cycle=bySubject&subject=Weather",
        dataType :"json",
        
        success : function(data) {
            let flag = 0;
            let except_word = [
                "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
                "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
                "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
                "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
                "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second"
            ];
            
            for (let index = 0; index < data.length; index++) {
                let word = data[index];
                
                for(let num = 0; num < except_word.length; num++){
                    if (word[0] == except_word[num]){
                        flag = 1;
                        // console.log(word[0]);
                        break;
                    }
                    else {
                        flag = 0;
                    }
                }
                if(flag == 0){
                    i = i + 1;
                    $.ajax({
                        crossOrigin: true,
                        url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                        dataType: "json",
                        
                        async: false,
                        success : function(data){
                            if (data['soundLink'] == 'None'){
                                data['soundLink'] = "#";
                            }
                            innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='weanumber'>" + i + "</h3></a>");
                            innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='wea_w"+i+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='wea_au"+i+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='wea_aup"+i+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='wea_w_m"+i+"' style='font-size: 14px; margin-left: 10px;'>");
                            var obj = data['meaning'];
                            // <a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);'></a>
                            for(var objVarName in obj) {
                                objKey = objVarName.toLowerCase();
                                objValue = obj[objVarName];
                                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                                // JSON.stringify(obj)
                            }
                            innerText = innerText.concat("</span> </h2><p id='wea_w_s"+i+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='wea_w_k"+i+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                        },
                        error : function(e) {
                            console.log(e.responseText);
                        }

                    });
                }
                result.innerHTML = innerText;
            }
            var count = $('.weanumber').length;
            var name = new String();
            name = name.concat("wea");
            aupl(count, name);
        },
        error : function(e) {
            console.log(e.responseText);
        }
    });
    
}


$(window).on("load", GetForeignPolicyWords);
function GetForeignPolicyWords() {
    var result = document.getElementById('ForeignPolicyAjax');
    let innerText = new String();
    var i = 0;
    $.ajax({
        crossOrigin: true,
        // url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=totalCount",

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=30&cycle=bySubject&subject=Foreign%20Policy",
        dataType :"json",
        
        success : function(data) {
            let flag = 0;
            let except_word = [
                "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
                "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
                "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
                "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
                "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second"
            ];
            
            for (let index = 0; index < data.length; index++) {
                let word = data[index];
                
                for(let num = 0; num < except_word.length; num++){
                    if (word[0] == except_word[num]){
                        flag = 1;
                        // console.log(word[0]);
                        break;
                    }
                    else {
                        flag = 0;
                    }
                }
                if(flag == 0){
                    i = i + 1;
                    $.ajax({
                        crossOrigin: true,
                        url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                        dataType: "json",
                        
                        async: false,
                        success : function(data){
                            if (data['soundLink'] == 'None'){
                                data['soundLink'] = "#";
                            }
                            innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='fornumber'>" + i + "</h3></a>");
                            innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='for_w"+i+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='for_au"+i+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='for_aup"+i+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='for_w_m"+i+"' style='font-size: 14px; margin-left: 10px;'>");
                            var obj = data['meaning'];
                            // <a id='all_w"+i+"' href='javascript:void(0);' onclick='modal(this);'></a>
                            for(var objVarName in obj) {
                                objKey = objVarName.toLowerCase();
                                objValue = obj[objVarName];
                                innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                                // JSON.stringify(obj)
                            }
                            innerText = innerText.concat("</span> </h2><p id='for_w_s"+i+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='for_w_k"+i+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                        },
                        error : function(e) {
                            console.log(e.responseText);
                        }

                    });
                }
                result.innerHTML = innerText;
            }
            var count = $('.fornumber').length;
            var name = new String();
            name = name.concat("for");
            aupl(count, name);
        },
        error : function(e) {
            console.log(e.responseText);
        }
    });
    
}


// $("exampleModalLongTitle").click("load", WordStudyModal);
// function WordStudyModal() {
//     var result = document.getElementById('modal-body');
//     let innerText = new String();
//     $.ajax({
//         url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=bySubject&subject=Foreign%20Policy",
//         dataType :"json",
//         success : function(data) {
//             for (let index = 0; index < data.length; index++) {
//                 let word = data[index];

//                 $.ajax({
//                     url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
//                     dataType: "json",
//                     async: false,
//                     success : function(data){
//                         console.log(data['soundLink']);
//                         innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
//                         innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
//                         "</span> <a href='" + data['soundLink'] + "' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
//                     },
//                     error : function(e) {
//                         console.log(e.responseText);
//                     }
//                 });

//                 result.innerHTML = innerText;
//             }
//         },
//         error : function(e) {
//             console.log(e.responseText);
//         }
//     });
// }

// // Modal 단어 빈도수 그래프
// $(document).ready(function() {
//     $('#exampleModalCenter').on('shown.bs.modal', function(e){ 
//         var chart = c3.generate({
//         bindto: '#chart',
//         size: {
//             height: 320*0.7,
//             width: 466*0.7
//         },
//         data: {
//             x: 'x',
//             columns: [
//                 ['x', '2016', '2017', '2018', '2019', '2020'],
//                 ['frequency', 10, 80, 70, 20, 50]
//             ],
//             type: 'spline',
//             colors: {
//                 'frequency': '#ff9500'
//              }
//         },
//         axis: {
//               x: {
//                   type: 'category' // this needed to load string x value
//               }
//           }
//       });
//     //   setInterval(function () {
//     //     x = Math.random() % 100;
//     //     y = Math.random() % 50;
//     //     chart.load({
//     //         columns: [
//     //             ['frequency', x - y, 2*x + 2*y, x + y, x - 2*y, x + 2*y, 3*x - y]
//     //         ]
//     //     });
//     //   }, 100);
        
//     });
//   });



// $("exampleModalLongTitle").click("load", GetRecord);
// function GetRecord() {
//     var result = document.getElementById('record_div');

//     $.ajax({
//         crossOrigin: true,
//         url : "http://localhost:5000/",
//         dataType :"html",
        
//         success : function(data) {
//                 innerText = innerText.concat(data);
//                 result.innerHTML = innerText;
//         },
//         error : function(e) {
//             console.log(e.responseText);
//         }
//     });
// }

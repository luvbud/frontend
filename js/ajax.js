var currentId = 0;
var currentName = new String();
var allData;
var startIndex;
var pageNum = -1;

function aupl(c, n){
    let innerText = new String();
    var getname = new String();
    getname = getname.concat(n);
    getname = getname.substr(0, 3);

    for(var i=0; i < c; i++){
        innerText= innerText.concat("<audio id='"+getname+"_aupl"+(i+1)+"' src='"+document.getElementById(getname+"_au"+(i+1)).href+"'></audio>");
    }
    if (document.getElementById(getname+'_audiolist')){
        document.getElementById(getname+'_audiolist').innerHTML = innerText;
    }
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
    
    var audio = document.getElementById(getname+"_aupl"+getid);
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
        document.getElementsByClassName("arrow_box")[0].textContent = document.getElementById(currentName+"_w_m"+getid).textContent;
        document.getElementsByClassName("arrow_box")[1].innerHTML = document.getElementById(currentName+"_w_s"+getid).textContent +'<br>' + document.getElementById(currentName+"_w_k"+getid).textContent;
        document.getElementById("word_play").src = document.getElementById(currentName+"_au"+getid).href;

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
                document.getElementById("chart").textContent = "정보가 없습니다.";
                console.log(e.responseText);
            }
        });
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
        document.getElementsByClassName("arrow_box")[0].textContent = document.getElementById(currentName+"_w_m"+getid).textContent;
        document.getElementsByClassName("arrow_box")[1].innerHTML = document.getElementById(currentName+"_w_s"+getid).textContent +'<br>' + document.getElementById(currentName+"_w_k"+getid).textContent;
        document.getElementById("word_play").src = document.getElementById(currentName+"_au"+getid).href;

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
                document.getElementById("chart").textContent = "정보가 없습니다.";
                console.log(e.responseText);
            }
        });
    }
}

function modal(e){
    document.getElementById("exampleModalLongTitle").textContent = "학습하기";

    $( '.modal-body' ).show();
    $( '.modal-footer' ).show();
    $( '.buttons' ).show();

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
        
        document.getElementById("word").textContent = e.textContent;
        document.getElementsByClassName("arrow_box")[0].textContent = document.getElementById(getname+"_w_m"+getid).textContent;
        document.getElementsByClassName("arrow_box")[1].innerHTML = document.getElementById(getname+"_w_s"+getid).textContent +'<br>' + document.getElementById(getname+"_w_k"+getid).textContent;
        document.getElementById("word_play").src = document.getElementById(getname+"_au"+getid).href;

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
                    document.getElementById("chart").textContent = "정보가 없습니다.";
                    console.log(e.responseText);
                }
            });
            
        });
    }
}

function drawList(c, ct) {
    let flag = 0;

    var result = document.getElementById(ct);
    let innerText = new String();
    
    var count = 0;
    pageNum += 1;

    var index = startIndex;

    let except_word = [
        "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
        "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
        "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
        "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
        "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second", "weekend", "dr.", "kong", "k", "paul", "bo-kyoung", "want", "jeju", "daegu", "'ll", "seung-min",
        "gangwon-do", "busan", "gwangju", "conn-young", "daejeon", "chuncheon", "gyeongju", "kang", "pompeo", "suga", "biegun", "jung-min", "yoon", "abe"
    ];
 
    while (count != 10) {
        if(index == allData.length) break;

        let word = allData[index];

        flag = 0;
        for(let num = 0; num < except_word.length; num++){
            if (word[0] == except_word[num]){
                flag = 1;
                // console.log(word[0]);
                index += 1;
                break;
            }
        }

        if(flag == 0) {
            $.ajax({
                crossOrigin: true,
                url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                dataType: "json",
                
                async: false,
                success : function(data){
                    if (data['soundLink'] == 'None'){
                        data['soundLink'] = "#";
                    }
                    innerText = "";
                    innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3 class='"+c+"number'>" + ((count+1) + (pageNum*10)) + "</h3></a>");
                    innerText = innerText.concat("<div class='text'><h2 class='heading'><a id='"+c+"_w"+((count+1) + (pageNum*10))+"' href='javascript:void(0);' onclick='modal(this);' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><a id='"+c+"_au"+((count+1) + (pageNum*10))+"' href='" + data['soundLink'] + "'></a><a href='javascript:void(0);' onclick='auplay(this);' id='"+c+"_aup"+((count+1) + (pageNum*10))+"'><span class='icon-volume-up' style='margin-left: 10px;'></span></a><span id='"+c+"_w_m"+((count+1) + (pageNum*10))+"' style='font-size: 14px; margin-left: 10px;'>");
                    
                    var obj = data['meaning'];
                    for(var objVarName in obj) {
                        objKey = objVarName.toLowerCase();
                        objValue = obj[objVarName];
                        innerText = innerText.concat(objVarName + " : " + obj[objVarName] + " ");
                        // JSON.stringify(obj)
                    }
                    innerText = innerText.concat("</span> </h2><p id='"+c+"_w_s"+((count+1) + (pageNum*10))+"' style='margin-bottom: 5px;'>" + data['exampleText'] + "</p><p id='"+c+"_w_k"+((count+1) + (pageNum*10))+"'>" + data['exampleKoreanText'] + "</p></div></div>");
                    // $("#showmore").attr('style','display: block !important');
                    
                    var temp = result.innerHTML;
                    temp = temp.concat(innerText);

                    result.innerHTML = temp;
                    result.innerHTML;
                    count += 1;
                    index += 1;
                },
                error : function(e) {
                    console.log(e.responseText);
                }
            });
        }
    }

    startIndex = index;
}

$(window).on("load", GetAllWords);
function GetAllWords() { 
    var c = new String();
    c = c.concat("all")
    var ct = new String();
    ct = ct.concat("ALLAjax");

    startIndex = 0;
    pageNum = -1;

    $.ajax({
        crossOrigin: true,

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=monthly&date=202011",
        dataType :"json",
        
        success : function(data) {
            allData = data;
            drawList(c, ct);

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

// $(window).on("load", GetNatlPoliticsWords);
$("#pills-NatlPolitics-tab").click("load", GetNatlPoliticsWords);
function GetNatlPoliticsWords() {
    var c = new String();
    c = c.concat("nat")
    var ct = new String();
    ct = ct.concat("NatlPoliticsAjax");

    startIndex = 0;
    pageNum = -1;
    
    $.ajax({
        crossOrigin: true,

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=bySubject&subject=Nat%27l/Politics",
        dataType :"json",
        
        success : function(data) {
            allData = data;
            drawList(c, ct);

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


// $(window).on("load", GetWorldWords);
$("#pills-World-tab").click("load", GetWorldWords);
function GetWorldWords() {
    var c = new String();
    c = c.concat("wor")
    var ct = new String();
    ct = ct.concat("WorldAjax");
    
    startIndex = 0;
    pageNum = -1;
   
    $.ajax({
        crossOrigin: true,

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=bySubject&subject=World",
        dataType :"json",
        
        success : function(data) {
            allData = data;
            drawList(c, ct);
            
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

// $(window).on("load", GetEconomyWords);
$("#pills-Economy-tab").click("load", GetEconomyWords);
function GetEconomyWords() {
    var c = new String();
    c = c.concat("eco")
    var ct = new String();
    ct = ct.concat("EconomyAjax");
    
    startIndex = 0;
    pageNum = -1;

    $.ajax({
        crossOrigin: true,

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=bySubject&subject=Economy",
        dataType :"json",
        
        success : function(data) {
            allData = data;
            drawList(c, ct);

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

// $(window).on("load", GetITScienceWords);
$("#pills-ITScience-tab").click("load", GetITScienceWords);
function GetITScienceWords() {
    var c = new String();
    c = c.concat("its")
    var ct = new String();
    ct = ct.concat("ITScienceAjax");
    
    startIndex = 0;
    pageNum = -1;
    
    $.ajax({
        crossOrigin: true,

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=bySubject&subject=IT/Science",
        dataType :"json",
        
        success : function(data) {
            allData = data;
            drawList(c, ct);
            
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

// $(window).on("load", GetSportsWords);
$("#pills-Sports-tab").click("load", GetSportsWords);
function GetSportsWords() {
    var c = new String();
    c = c.concat("spo")
    var ct = new String();
    ct = ct.concat("SportsAjax");
    
    startIndex = 0;
    pageNum = -1;
    
    $.ajax({
        crossOrigin: true,
        
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=bySubject&subject=Sports",
        dataType :"json",
        
        success : function(data) {
            allData = data;
            drawList(c, ct);
            
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

// $(window).on("load", GetLifeCultureWords);
$("#pills-LifeCulture-tab").click("load", GetLifeCultureWords);
function GetLifeCultureWords() {

    var c = new String();
    c = c.concat("lif")
    var ct = new String();
    ct = ct.concat("LifeCultureAjax");
    
    startIndex = 0;
    pageNum = -1;
    
    $.ajax({
        crossOrigin: true,

        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=bySubject&subject=Life/Culture",
        dataType :"json",
        
        success : function(data) {
            allData = data;
            drawList(c, ct);
            
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

// $(window).on("load", GetWeatherWords);
$("#pills-Weather-tab").click("load", GetWeatherWords);
function GetWeatherWords() {
    var c = new String();
    c = c.concat("wea")
    var ct = new String();
    ct = ct.concat("WeatherAjax");
    
    startIndex = 0;
    pageNum = -1;
    
    $.ajax({
        crossOrigin: true,
        
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=bySubject&subject=Weather",
        dataType :"json",
        
        success : function(data) {
            allData = data;
            drawList(c, ct);
            
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


// $(window).on("load", GetForeignPolicyWords);
$("#pills-ForeignPolicy-tab").click("load", GetForeignPolicyWords);
function GetForeignPolicyWords() {
    var c = new String();
    c = c.concat("for")
    var ct = new String();
    ct = ct.concat("ForeignPolicyAjax");
    
    startIndex = 0;
    pageNum = -1;
    
    $.ajax({
        crossOrigin: true,
        
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=bySubject&subject=Foreign%20Policy",
        dataType :"json",
        
        success : function(data) {
            allData = data;
            drawList(c, ct);

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

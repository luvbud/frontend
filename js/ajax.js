$(window).on("load", GetAllWords);
function GetAllWords() {
    var result = document.getElementById('ALLAjax');
    let innerText = new String();

    $.ajax({
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=totalCount",
        dataType :"json",
        success : function(data) {
            for (let index = 0; index < data.length; index++) {
                let word = data[index];

                $.ajax({
                    url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                    dataType: "json",
                    async: false,
                    success : function(data){
                        console.log(data['soundLink']);
                        innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
                        innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
                        "</span> <a href='" + data['soundLink'] + "' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });

                result.innerHTML = innerText;
            }
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

    $.ajax({
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=bySubject&subject=Nat%27l/Politics",
        dataType :"json",
        success : function(data) {
            for (let index = 0; index < data.length; index++) {
                let word = data[index];

                $.ajax({
                    url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                    dataType: "json",
                    async: false,
                    success : function(data){
                        console.log(data['soundLink']);
                        innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
                        innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
                        "</span> <audio id='audio_play' src='" + data['soundLink'] + "'></audio> <a href='javascript:void(0);' onclick='play()' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });

                result.innerHTML = innerText;
            }
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

    $.ajax({
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=bySubject&subject=World",
        dataType :"json",
        success : function(data) {
            for (let index = 0; index < data.length; index++) {
                let word = data[index];

                $.ajax({
                    url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                    dataType: "json",
                    async: false,
                    success : function(data){
                        console.log(data['soundLink']);
                        innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
                        innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
                        "</span> <a href='" + data['soundLink'] + "' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });

                result.innerHTML = innerText;
            }
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
    $.ajax({
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=bySubject&subject=Economy",
        dataType :"json",
        success : function(data) {
            for (let index = 0; index < data.length; index++) {
                let word = data[index];

                $.ajax({
                    url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                    dataType: "json",
                    async: false,
                    success : function(data){
                        console.log(data['soundLink']);
                        innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
                        innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
                        "</span> <a href='" + data['soundLink'] + "' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });

                result.innerHTML = innerText;
            }
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
    $.ajax({
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=bySubject&subject=IT/Science",
        dataType :"json",
        success : function(data) {
            for (let index = 0; index < data.length; index++) {
                let word = data[index];

                $.ajax({
                    url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                    dataType: "json",
                    async: false,
                    success : function(data){
                        console.log(data['soundLink']);
                        innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
                        innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
                        "</span> <a href='" + data['soundLink'] + "' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });

                result.innerHTML = innerText;
            }
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
    $.ajax({
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=bySubject&subject=Sports",
        dataType :"json",
        success : function(data) {
            for (let index = 0; index < data.length; index++) {
                let word = data[index];

                $.ajax({
                    url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                    dataType: "json",
                    async: false,
                    success : function(data){
                        console.log(data['soundLink']);
                        innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
                        innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
                        "</span> <a href='" + data['soundLink'] + "' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });

                result.innerHTML = innerText;
            }
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
    $.ajax({
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=bySubject&subject=Life/Culture",
        dataType :"json",
        success : function(data) {
            for (let index = 0; index < data.length; index++) {
                let word = data[index];

                $.ajax({
                    url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                    dataType: "json",
                    async: false,
                    success : function(data){
                        console.log(data['soundLink']);
                        innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
                        innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
                        "</span> <a href='" + data['soundLink'] + "' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });

                result.innerHTML = innerText;
            }
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
    $.ajax({
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=bySubject&subject=Weather",
        dataType :"json",
        success : function(data) {
            for (let index = 0; index < data.length; index++) {
                let word = data[index];

                $.ajax({
                    url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                    dataType: "json",
                    async: false,
                    success : function(data){
                        console.log(data['soundLink']);
                        innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
                        innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
                        "</span> <a href='" + data['soundLink'] + "' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });

                result.innerHTML = innerText;
            }
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
    $.ajax({
        url : "http://113.198.137.82:10021/word_info/top_rank/?rank=10&cycle=bySubject&subject=Foreign%20Policy",
        dataType :"json",
        success : function(data) {
            for (let index = 0; index < data.length; index++) {
                let word = data[index];

                $.ajax({
                    url: "http://113.198.137.82:10021/word_info/?word="+ word[0] + "&collection=WordDictionary",
                    dataType: "json",
                    async: false,
                    success : function(data){
                        console.log(data['soundLink']);
                        innerText = innerText.concat("<div class='block-21 mb-4 d-flex'><a class='blog-img mr-4'><h3>" + (index+1) + '.' + "</h3></a>");
                        innerText = innerText.concat("<div class='text'><h2 class='heading'><a href='#' data-toggle='modal' data-target='#exampleModalCenter' style='font-size: 20px; font-weight: bold;'>" + word[0] + "</a><span style='font-size: 14px; margin-left: 10px;'>" + data['meaning']['Noun'] + 
                        "</span> <a href='" + data['soundLink'] + "' style='margin-left: 10px;'><span class='icon-volume-up'></span></a></h2><p style='margin-bottom: 5px;'>" + data['exampleText'] + "</p></div></div>");
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });

                result.innerHTML = innerText;
            }
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
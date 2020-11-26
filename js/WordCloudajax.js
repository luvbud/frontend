var wordss = new Array();
var jsonString;
$(window).on("load", word_select);
function word_select() {

  var word_select = new Array();
  var word_count = new String();

  $.ajax({
    crossOrigin: true,

    url: "http://113.198.137.82:10021/word_info/top_rank/?rank=150&cycle=daily&date=20201125",
    dataType: "json",

    success: function (data) {
      let flag = 0;
      let except_word = [
        "korea", "south", "covid-19", "'s", "say", "korean", "also", "u.s.", "seoul", "country", "new", "year", "people", "time", "day", "first", "see", "world", "case", "make", "news",
        "take", "go", "percent", "week", "come", "could", "start", "arirang", "s.", "last", "get", "number", "use", "high", "n't", "include", "part", "report", "month", "kim", "today", "look",
        "dollar", "next", "back", "due", "morning", "area", "well", "would", "plan", "many", "state", "good", "even", "city", "issue", "lee", "need", "north", "afternoon", "japan",
        "top", "season", "call", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "add", "moon", "washington", "china", "talk", "give", "think", "joe", "still",
        "hold", "result", "art", "become", "tomorrow", "keep", "weather", "’", "home", "game", "team", "event", "second", "however", "higher", "wang", "gangwon-do", "dr."
      ];

      for (let index = 0; index < data.length; index++) {
        let word = data[index];

        for (let num = 0; num < except_word.length; num++) {
          if (word[0] == except_word[num]) {
            flag = 1;
            // console.log(word[0]);
            break;
          }
          else {
            flag = 0;
          }

        }
        if (flag == 0) {
          // console.log(word[0], word[1]);
          // console.log(data[index]);
          word_select = word_select.concat(data[index][0]);
          // words = words.concat(data[index][0]+",");
          word_count = word_count.concat(data[index][1]);
          // console.log(word_select, word_count);
        }
      }
      wordCloud(word_select, word_count);
      wordss = wordss.concat(word_select);
      jsonString = JSON.stringify(wordss);
      // console.log(jsonString);
      // console.log(jsonString);

    },
    error: function (e) {
      console.log(e.responseText);
    }
  });
}

function wordCloud(s, c) {
  // console.log(s);
  // console.log(c);
  var jsonString = JSON.stringify(s);

  var jsonData = JSON.parse(jsonString);
  var layout = d3.layout
    .cloud()
    .size([500, 500])
    .words(
      jsonData.map(function (d) {
        return { text: d, size: 10 + Math.random() * 90, test: 'test' };
      })
    )
    .padding(5)
    .rotate(function () {
      return ~~(Math.random() * 2) * 90;
    })
    .font('Impact')
    .fontSize(function (d) {
      return d.size;
    })
    .on('end', draw);

  layout.start();

  function draw(words) {
    var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    // var color = d3.scaleOrdinal(d3.schemeCategory10);
    // console.log(words);
    // var ctx = document.getElementById('canvas').getContext('2d');
    d3.select('.WC')
      .append('svg')
      .attr('width', layout.size()[0])
      .attr('height', layout.size()[1])
      .append('g')
      .attr(
        'transform',
        'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')'
      )
      .selectAll('text')
      .data(words)
      .enter()
      .append('text')
      .style('font-size', function (d) {
        return d.size + 'px';
      })
      .style('font-family', 'Impact')


      .transition()
      .duration(600)
      .attr("transform", function (d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .style("fill-opacity", 1)

    //   .style('fill', function (d, i) {
    //     return fill(i);
    //   })
      .attr("fill", colorCode)
      // .style("background-image" ,"linear-gradient(#e66465, #9198e5)")

      // .createLinearGradient
      .attr('text-anchor', 'middle')
      .attr('transform', function (d) {
        return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
      })
      .text(function (d) {
        return d.text;
      });

  }
  // console.log(jsonData);


}



function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();
  
    if (n.length < digits) {
      for (var i = 0; i < digits - n.length; i++)
        zero += '0';
    }
    return zero + n;
  }
  
function bySubject_graph(e){
    var colorCode1  = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    var name = new Array();
    name = ["Economy","Foreign Policy","IT/Science","Life/Culture","Nat'l/Politics","Sports","Weather","World"]
    var frequency = new Array();
    frequency = ['Frequency'];
    frequency = frequency.concat(e[0]);
    // console.log(frequency);
    var chart = c3.generate({
        bindto: '#bysubChart',
        // size: {
        //     height: 320*0.5,
        //     width: 466*0.5
        // },
        data: {
            // x: 'x',
            columns: [
                // ['x', '2016', '2017', '2018', '2019', '2020'],
                // ['frequency', 50, 100, 70, 120, 200]
                frequency
            ],
            type: 'bar',
            colors: {
                'Frequency': colorCode1
            }
        },
        axis: {
            rotated: true,
            x: {
                type: 'category', // this needed to load string x value
                categories: name
            }
        }
    });
}

function byTime_graph(e){
    var colorCode2  = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    var month = new Array();
    month = ['x'];
    var day = new Array();
    day = ['Frequency'];

    var jsons = JSON.parse(e);
    
    var key = Object.keys(jsons);

    for (var i = 1; i < key.length; i++){
       day = day.concat(jsons[key[i]]);

    }

    // for (var j = 0; j < jsons["202005"].length; j++){
    //     month = month.concat("2020-05-"+leadingZeros(j+1, 2));
    // }
    for (var j = 0; j < jsons["202006"].length - 1; j++){
        month = month.concat("2020-06-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202007"].length; j++){
        month = month.concat("2020-07-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202008"].length; j++){
        month = month.concat("2020-08-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202009"].length - 1; j++){
        month = month.concat("2020-09-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202010"].length; j++){
        month = month.concat("2020-10-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202011"].length - 1; j++){
        month = month.concat("2020-11-"+leadingZeros(j+1, 2));
    }
    
    // console.log(month);
    
    var chart = c3.generate({
        bindto: '#bytimeChart',
        // size: {
        //     height: 320*0.5,
        //     width: 466*0.5
        // },
        data: {
            x: 'x',
            columns: [
                // ['x', '2016', '2017', '2018', '2019', '2020'],
                // ['frequency', 50, 100, 70, 120, 200]
                month,
                day
            ],
            type: 'spline',
            colors: {
                'Frequency': colorCode2
            }
        },
        axis: {
            x: {
                show: false,
                type: 'timeseries', // this needed to load string x value
                // categories: name
                tick: { 
                    format: '%Y-%m-%d' 
                } 
            }
        }
    });
}



 
function bysubject_graph(e){
    var colorCode3  = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    var name = new Array();
    name = ["Economy","Foreign Policy","IT/Science","Life/Culture","Nat'l/Politics","Sports","Weather","World"]
    var frequency = new Array();
    frequency = ['Frequency'];
    frequency = frequency.concat(e[0]);
    // console.log(frequency);
    var chart = c3.generate({
        bindto: '#bysubChart',
        // size: {
        //     height: 320*0.5,
        //     width: 466*0.5
        // },
        data: {
            // x: 'x',
            columns: [
                // ['x', '2016', '2017', '2018', '2019', '2020'],
                // ['frequency', 50, 100, 70, 120, 200]
                frequency
            ],
            type: 'bar',
            colors: {
                'Frequency': colorCode3
            }
        },
        axis: {
            rotated: true,
            x: {
                type: 'category', // this needed to load string x value
                categories: name
            }
        }
    });
}

function bytime_graph(e){
    var colorCode4  = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    var month = new Array();
    month = ['x'];
    var day = new Array();
    day = ['Frequency'];

    var jsons = JSON.parse(e);
    
    var key = Object.keys(jsons);

    for (var i = 1; i < key.length; i++){
       day = day.concat(jsons[key[i]]);

    }

    // for (var j = 0; j < jsons["202005"].length; j++){
    //     month = month.concat("2020-05-"+leadingZeros(j+1, 2));
    // }
    for (var j = 0; j < jsons["202006"].length - 1; j++){
        month = month.concat("2020-06-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202007"].length; j++){
        month = month.concat("2020-07-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202008"].length; j++){
        month = month.concat("2020-08-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202009"].length - 1; j++){
        month = month.concat("2020-09-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202010"].length; j++){
        month = month.concat("2020-10-"+leadingZeros(j+1, 2));
    }
    for (var j = 0; j < jsons["202011"].length - 1; j++){
        month = month.concat("2020-11-"+leadingZeros(j+1, 2));
    }
    
    // console.log(month);
    
    var chart = c3.generate({
        bindto: '#bytimeChart',
        // size: {
        //     height: 320*0.5,
        //     width: 466*0.5
        // },
        data: {
            x: 'x',
            columns: [
                // ['x', '2016', '2017', '2018', '2019', '2020'],
                // ['frequency', 50, 100, 70, 120, 200]
                month,
                day
            ],
            type: 'spline',
            colors: {
                'Frequency': colorCode4
            }
        },
        axis: {
            x: {
                show: false,
                type: 'timeseries', // this needed to load string x value
                // categories: name
                tick: { 
                    format: '%Y-%m-%d' 
                } 
            }
        }
    });
}


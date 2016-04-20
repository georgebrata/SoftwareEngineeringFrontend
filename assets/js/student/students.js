
$(document).ready( function() {
    $("#contracts").click(function () {
    var myURL = "http://172.30.114.118:8080/academicinfo/rest/students/disciplines?student_id=1";
    clearContent();
    makeGETRequest(myURL);
  });
    $("#listS").click(function () {
    var myURL = "http://172.30.114.118:8080/academicinfo/rest/students/";
    clearContent();
    makeGETRequest(myURL);
  });


  function makeGETRequest(myURL) {

  	$.ajax({url: myURL,
  		type: 'GET',
  		expect: 'json',

  		success: function(response, status) {
  			console.log("Status: " + status + " Response: " + response);
        fillData(response);
  		},

  		error: function(response, status) {
  			console.log("Status: " + status + " Response: " + response);
  		}
  	});
  }


});

function clearContent(){
  $("#mainContent").empty();
  }

function fillData(list) {
  var table = $('<table></table>');
  $('#mainContent').append(table);
  console.log ("filldata"+ list);
  buildHtmlTable(table,list);
  table.addClass("table");
  table.addClass("table-bordered");
  table.attr("id","mytable");
}



// Builds the HTML Table out of myList.
function buildHtmlTable(selector,list) {

  var columns = addAllColumnHeaders(list, selector);

  for (var i = 0 ; i < list.length ; i++) {
      var row$ = $('<tr/>');
      for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
          var cellValue = list[i][columns[colIndex]];

          if (cellValue == null) { cellValue = ""; }
          console.log(cellValue);
          row$.append($('<td/>').html(cellValue));
      }
      $(selector).append(row$);
  }
    }


// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0 ; i < myList.length ; i++) {
        var rowHash = myList[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1){
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $(selector).append(headerTr$);

    return columnSet;
}

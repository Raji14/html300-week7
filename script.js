console.log("let's build some charts!")

// Load the Visualization API and the corechart package.
google.charts.load('current', {
  'packages': ['corechart', 'bar', 'timeline']
});
//-only have to do this once
//for second chanrt:
//1.set a callback for it
//2. have the callback function for it (can be same as first, for example)
//3. be sure all callback functions have different names
//4. be sure all callback functions use different divs to draw in. Add a new div to HTML for each chart.

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDonationChart);
//google.charts.setOnLoadCallback(drawStudyTimeline);
google.charts.setOnLoadCallback(drawStudyBar);

//onclick for button
function showTimelineChart() {
  //get color from input and pass to draw chart function
  let color = document.getElementById("color").value
  drawStudyTimeline(color)
}


function drawStudyTimeline(color) {
  var container = document.getElementById('study-timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({
    type: 'string',
    id: 'Phase of Study'
  });
  dataTable.addColumn({
    type: 'date',
    id: 'Start'
  });
  dataTable.addColumn({
    type: 'date',
    id: 'End'
  });
  dataTable.addRows([
          ['General Ed', new Date(2018, 8, 1), new Date(2019, 4, 1)],
          ['Choose Major', new Date(2019, 5, 1), new Date(2019, 7, 1)],
          ['2 Major Class', new Date(2019, 8, 1), new Date(2020, 4, 1)],
          ['12 Major Class', new Date(2020, 8, 1), new Date(2022, 4, 1)],
  ]);
  var options = {
    timeline: {
      singleColor: color
    },
  };
  chart.draw(dataTable, options);
}



function drawStudyBar() {


}




function drawDonationChart() {
  console.log("Hello");
  //#donation-chart is the container
  var data = google.visualization.arrayToDataTable([
          ['Category', 'Expenditure'],
          ['Administrative Costs', 4],
          ['Fundraising', 16],
          ['Youth Programs', 36],
          ['Adult Program', 44]
        ]);

  var options = {
    title: 'Breakdown of Expenditure',
    pieHole: 0.4,
    slices: [
      {
        color: '#8ad1c2'
      },
      {
        color: '#9f8ad1'
      },
      {
        color: '#d18a99'
      },
      {
        color: '#bcd18a'
      }
  ],
    backgroundColor: '#cccccc',

  };

  var chart = new google.visualization.PieChart(document.getElementById('donation-chart'));

  chart.draw(data, options);
}

//google.charts.setOnLoadCallback(drawChart1);
//google.charts.setOnLoadCallback(drawChart2);
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart1() {

  // Create the data table.
  //  var data = new google.visualization.DataTable();
  //  data.addColumn('string', 'Topping');
  //  data.addColumn('number', 'Slices');
  //  data.addRows([
  //        ['Mushrooms', 3],
  //        ['Veggie Delight', 5],
  //        ['Hawaaian', 4],
  //        ['Pepperoni', 2]
  //      ]);


  var data = google.visualization.arrayToDataTable([
          ['Toppings', 'Slices'],
          ['Mushrooms', 3],
        ['Veggie Delight', 5],
        ['Hawaaian', 4],
        ['Pepperoni', 2]
        ]);

  // Set chart options
  var options = {
    chart: {
      title: 'Kinds of pizza I ate',

    },
    bars: 'horizontal' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div1'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

//second chart
function drawChart2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
        ['Copper', 3],
        ['Gold', 5],
        ['Silver', 4],
        ['Platinum', 2]
      ]);

  // Set chart options
  var options = {
    'title': 'Tye of metals',
    'width': 500,
    'height': 500,
    'legend': 'left',
    'is3D': true
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}

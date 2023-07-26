function charts(d3Output) {
//1. define the url
    d3.json(" https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json");

//get the data from the samples.json file
        let d3Output = d3.json(url).then((data) => {

//2. create a horizontal bar chart with a dropdown menu to display the top 10 OTYs found

//process the data to get the top 10
    let sortedsamples = data.sample_values[0].sort((a, b) => b.sample_values - a.sample_values);
    let slicedData = sortedsamples.slice(0, 10);
    let reversedData = slicedData.reverse();

    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

//Trace the data
    let trace1 = [{
    x: reversedData.map(object => object.sample_values),
    y: reversedData.map(object => 'OTU ${object.otu_ids}'),
    text: reversedData.map(object => object.otu_labels),
    name: "OTU",
    type: "bar",
    orientation: "h"
}];

    var traceData = [trace1];

    var layout = {
    title: "Top 10 OTU Bar Graph",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

Plotly.newPlot("bar", traceData, layout)

});

//3. Create a bubble chart that displays each sample.

//Trace the data
var trace2 = {
    x: reversedData.map(object => 'OTU ${object.otu_ids}'),
    y: reversedData.map(object => object.sample_values),
    text: ['otu_labels<br>size: 40', 'otu_labels<br>size: 60', 'otu_labels<br>size: 80', 'otu_labels<br>size: 100'],
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      size: [40, 60, 80, 100]
    }
  };
  
  var bubbledata = [trace2];
  
  var bubblelayout = {
    title: 'Bubble Chart Hover Text',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', bubbledata, bubblelayout);
}

init();
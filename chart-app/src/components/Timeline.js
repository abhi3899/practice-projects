import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Timeline() {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);

    var data1 = [{
      "date": new Date(2018, 0, 1),
      "value": 450,
      "value2": 362,
      "value3": 699
    }, {
      "date": new Date(2018, 0, 2),
      "value": 269,
      "value2": 450,
      "value3": 841
    }, {
      "date": new Date(2018, 0, 3),
      "value": 700,
      "value2": 358,
      "value3": 699
    }];
    
    var data2 = [{
      "date": new Date(2018, 0, 1),
      "value": 490,
      "value2": 367,
      "value3": 500
    }, {
      "date": new Date(2018, 0, 2),
      "value": 500,
      "value2": 485,
      "value3": 369
    }, {
      "date": new Date(2018, 0, 3),
      "value": 550,
      "value2": 354,
      "value3": 250
    }];
    
    var data3 = [{
      "date": new Date(2018, 0, 1),
      "value": 420,
      "value2": 350,
      "value3": 600
    }, {
      "date": new Date(2018, 0, 2),
      "value": 335,
      "value2": 300,
      "value3": 500
    }, {
      "date": new Date(2018, 0, 3),
      "value": 500,
      "value2": 450,
      "value3": 320
    }];
    
    function createChart(div, data) {
      // Create chart instance
      var chart = am4core.create(div, am4charts.XYChart);
      chart.data = data;
    
      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.minGridDistance = 30;
    
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
      // Create series
      function createSeries(field, name) {
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = field;
        series.dataFields.dateX = "date";
        series.name = name;
        series.tooltipText = "{dateX}: [b]{valueY}[/]";
        series.strokeWidth = 2;
    
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.stroke = am4core.color("#fff");
        bullet.circle.strokeWidth = 2;
      }
    
      createSeries("value", "Series #1");
      createSeries("value2", "Series #2");
      createSeries("value3", "Series #3");
    
      chart.cursor = new am4charts.XYCursor();
      
      return chart;
    }
    
    var chart1 = createChart("chart1", data1);
    var chart2 = createChart("chart2", data2);
    var chart3 = createChart("chart3", data3);
    
    chart3.legend = new am4charts.Legend();
    
    for(var i = 0; i < chart3.series.length; i++) {
      var series = chart3.series.getIndex(i);
      series.events.on("hidden", function(ev) {
        var index = chart3.series.indexOf(ev.target);
        chart1.series.getIndex(index).hide();
      });
    
      series.events.on("shown", function(ev) {
        var index = chart3.series.indexOf(ev.target);
        chart1.series.getIndex(index).show();
      });
    }
  }, []);
  return (
    <>
 
  <div id="chart1" class="chart"></div>
<div id="chart2" class="chart"></div>
<div id="chart3" class="chart"></div>
</>
)
}

export default Timeline;

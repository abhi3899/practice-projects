import React from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import data from "../data/data.json"



function ChartXY() {
    let chart = am4core.create("chartxydiv", am4charts.XYChart);
    chart.data = [{
        "country": "Lithuania",
        "litres": 501
      }, {
        "country": "Czechia",
        "litres": 301
      }, {
        "country": "Ireland",
        "litres": 201
      }, {
        "country": "Germany",
        "litres": 165
      }, {
        "country": "Australia",
        "litres": 139
      }, {
        "country": "Austria",
        "litres": 128
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }];
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.title.text = "Countries";

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Litres sold (M)";

let series = chart.series.push(new am4charts.ColumnSeries());
series.name = "Sales";
series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
series.columns.template.fill = am4core.color("#ff0000"); // fill
series.dataFields.valueY = "litres";
series.dataFields.categoryX = "country";
    
 return(
        <div id="chartxydiv"style={{width:"100%", height:"100%"}}>
            
        </div>
    )
}

export default ChartXY

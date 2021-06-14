import React, { useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


function TreeMap() {

    useEffect(()=>{
        am4core.useTheme(am4themes_animated);

/* Create chart */
var chart = am4core.create("tree", am4charts.TreeMap);
chart.data = [{
  "name": "First",
  "children": [
    { "name": "A1", "value": 100 },
    { "name": "A2", "value": 60 },
    { "name": "A3", "value": 30 }
  ]
}, {
  "name": "Second",
  "children": [
    { "name": "B1", "value": 135 },
    { "name": "B2", "value": 98 },
    { "name": "B3", "value": 56 }
  ]
}, {
  "name": "Third",
  "children": [
    { "name": "C1", "value": 335 },
    { "name": "C2", "value": 148 },
    { "name": "C3", "value": 126 },
    { "name": "C4", "value": 26 }
  ]
}, {
  "name": "Fourth",
  "children": [
    { "name": "D1", "value": 415 },
    { "name": "D2", "value": 148 },
    { "name": "D3", "value": 89 },
    { "name": "D4", "value": 64 },
    { "name": "D5", "value": 16 }
  ]
}, {
  "name": "Fifth",
  "children": [
    { "name": "E1", "value": 687 },
    { "name": "E2", "value": 148 }
  ]
}];


/* Set color step */
chart.colors.step = 2;

/* Define data fields */
chart.dataFields.value = "value";
chart.dataFields.name = "name";
chart.dataFields.children = "children";

/* Create top-level series */
var level1 = chart.seriesTemplates.create("0");
var level1_column = level1.columns.template;
level1_column.fillOpacity = 0;
level1_column.strokeOpacity = 0;

/* Create second-level series */
var level2 = chart.seriesTemplates.create("1");
var level2_column = level2.columns.template;
level2_column.column.cornerRadius(10, 10, 10, 10);
level2_column.fillOpacity = 0.8;
level2_column.stroke = am4core.color("#fff");
level2_column.strokeWidth = 5;
level2_column.strokeOpacity = 1;

var level2_bullet = level2.bullets.push(new am4charts.LabelBullet());
level2_bullet.locationY = 0.5;
level2_bullet.locationX = 0.5;
level2_bullet.label.text = "{name}";
level2_bullet.label.fill = am4core.color("#fff");

/* Add a navigation bar */
chart.navigationBar = new am4charts.NavigationBar();
    },[])
    return (
        <div id="tree" style={{ width: "90%", height: "500px" }}>
            
        </div>
    )
}

export default TreeMap

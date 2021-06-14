import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";


function Chord() {
  useEffect(() => {
    var chart = am4core.create("Chord", am4charts.ChordDiagram);

    chart.data = [
      { from: "A", to: "D", value: 10 },
      { from: "B", to: "D", value: 8 },
      { from: "B", to: "E", value: 4 },
      { from: "B", to: "C", value: 2 },
      { from: "C", to: "E", value: 14 },
      { from: "E", to: "D", value: 8 },
      { from: "C", to: "A", value: 4 },
      { from: "G", to: "A", value: 7 },
      { from: "D", to: "B", value: 1 },
    ];

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
  });
  return <div id="Chord" style={{ width: "100%", height: "500px" }}></div>;
}

export default Chord;

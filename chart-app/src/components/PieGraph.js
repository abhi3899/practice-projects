import React, { useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function PieGraph() {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4charts.PieChart3D);

    // Add data
    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
        color: am4core.color("#ff0000"),
      },
      {
        country: "Czechia",
        litres: 301.9,
        color: am4core.color("#00ff1a"),
      },
      {
        country: "Ireland",
        litres: 201.1,
        color: am4core.color("#ff6600"),
      },
      {
        country: "Germany",
        litres: 165.8,
        color: am4core.color("##f08080"),
      },
    ];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries3D());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.propertyFields.fill = "color";

    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries.slices.template.states.getKey("hover").properties.scale = 1.1;
    chart.innerRadius = am4core.percent(40);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#595959");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // Add a legend
    chart.legend = new am4charts.Legend();
  }, []);
  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}

export default PieGraph;

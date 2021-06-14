import React,{useEffect,useRef}from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {data} from "../data/population"

const CHART_ID = "population chart"

function Population({ chartId }) {
    const chartRef = useRef(null)

    useEffect(() => {
        if (!chartRef.current) {
          chartRef.current = am4core.create(CHART_ID, am4charts.XYChart);
          
          chartRef.current.data = data;
    
          // Add X Axis
          let xAxis = chartRef.current.xAxes.push(new am4charts.CategoryAxis());
          xAxis.dataFields.category = "year";
          xAxis.renderer.cellStartLocation = 0.1;
          xAxis.renderer.cellEndLocation = 0.9;
          xAxis.renderer.grid.template.strokeOpacity = 0;
          xAxis.renderer.labels.template.fill = am4core.color('f0f2fa');
          xAxis.renderer.labels.template.fontSize = 12;
    
          // Add Y Axis
          let yAxis = chartRef.current.yAxes.push(new am4charts.ValueAxis());
          yAxis.renderer.grid.template.stroke = am4core.color('#f0f2fa');
          yAxis.renderer.grid.template.strokeOpacity = 1;
          yAxis.renderer.labels.template.fill = am4core.color('f0f2fa');
          yAxis.renderer.labels.template.fontSize = 12;
          
          // Create series
          let series = chartRef.current.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueY = "population";
          series.dataFields.categoryX = "year";
          series.name = "Population";
          series.fillOpacity = 1;
          series.fill = am4core.color('#00eeff');
          series.strokeWidth = 0;
          series.columns.template.column.cornerRadiusTopLeft = 5;
          series.columns.template.column.cornerRadiusTopRight = 5;
          
          // Series tooltip
          series.tooltipText = '{categoryX}: [bold]{valueY}[/]';
          series.tooltip.pointerOrientation = 'down';
          series.tooltip.dy = -5;
          series.tooltip.background.filters.clear()
          series.tooltip.getFillFromObject = false;
          series.tooltip.background.fill = am4core.color('#2a2b2e');
          series.tooltip.background.stroke = am4core.color('#2a2b2e');
    
    
          // Add cursor
          chartRef.current.cursor = new am4charts.XYCursor();
    
          // Disable axis lines
          chartRef.current.cursor.lineX.disabled = true;
          chartRef.current.cursor.lineY.disabled = true;
    
          // Disable axis tooltips
          xAxis.cursorTooltipEnabled = false;
          yAxis.cursorTooltipEnabled = false;
    
          // Disable zoom
          chartRef.current.cursor.behavior = 'none';
        }
      }, []);
  return (

    <div
      id={chartId || CHART_ID}
      style={{
        width: "80%",
        height: "300px",
        margin: "50px 0",
      }}
    />
  );
}

export default Population

import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Topology() {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create(
      "forceDirected",
      am4plugins_forceDirected.ForceDirectedTree
    );
    chart.legend = new am4charts.Legend();

    var series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    series.data = [
      {
        name: "Flora",
        children: [
          {
            name: "Black Tea",
            value: 1,
          },
          {
            name: "Floral",
            children: [
              {
                name: "Chamomile",
                value: 1,
              },
              {
                name: "Rose",
                value: 1,
              },
              {
                name: "Jasmine",
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Fruity",
        children: [
          {
            name: "Berry",
            children: [
              {
                name: "Blackberry",
                value: 1,
              },
              {
                name: "Raspberry",
                value: 1,
              },
              {
                name: "Blueberry",
                value: 1,
              },
              {
                name: "Strawberry",
                value: 1,
              },
            ],
          },
          {
            name: "Dried Fruit",
            children: [
              {
                name: "Raisin",
                value: 1,
              },
              {
                name: "Prune",
                value: 1,
              },
            ],
          },
          {
            name: "Other Fruit",
            children: [
              {
                name: "Coconut",
                value: 1,
              },
              {
                name: "Cherry",
                value: 1,
              },
              {
                name: "Pomegranate",
                value: 1,
              },
              {
                name: "Pineapple",
                value: 1,
              },
              {
                name: "Grape",
                value: 1,
              },
              {
                name: "Apple",
                value: 1,
              },
              {
                name: "Peach",
                value: 1,
              },
              {
                name: "Pear",
                value: 1,
              },
            ],
          },
          {
            name: "Citrus Fruit",
            children: [
              {
                name: "Grapefruit",
                value: 1,
              },
              {
                name: "Orange",
                value: 1,
              },
              {
                name: "Lemon",
                value: 1,
              },
              {
                name: "Lime",
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Sour/Fermented",
        children: [
          {
            name: "Sour",
            children: [
              {
                name: "Sour Aromatics",
                value: 1,
              },
              {
                name: "Acetic Acid",
                value: 1,
              },
              {
                name: "Butyric Acid",
                value: 1,
              },
              {
                name: "Isovaleric Acid",
                value: 1,
              },
              {
                name: "Citric Acid",
                value: 1,
              },
              {
                name: "Malic Acid",
                value: 1,
              },
            ],
          },
          {
            name: "Alcohol/Fremented",
            children: [
              {
                name: "Winey",
                value: 1,
              },
              {
                name: "Whiskey",
                value: 1,
              },
              {
                name: "Fremented",
                value: 1,
              },
              {
                name: "Overripe",
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Green/Vegetative",
        children: [
          {
            name: "Olive Oil",
            value: 1,
          },
          {
            name: "Raw",
            value: 1,
          },
          {
            name: "Green/Vegetative",
            children: [
              {
                name: "Under-ripe",
                value: 1,
              },
              {
                name: "Peapod",
                value: 1,
              },
              {
                name: "Fresh",
                value: 1,
              },
              {
                name: "Dark Green",
                value: 1,
              },
              {
                name: "Vegetative",
                value: 1,
              },
              {
                name: "Hay-like",
                value: 1,
              },
              {
                name: "Herb-like",
                value: 1,
              },
            ],
          },
          {
            name: "Beany",
            value: 1,
          },
        ],
      },
      {
        name: "Other",
        children: [
          {
            name: "Papery/Musty",
            children: [
              {
                name: "Stale",
                value: 1,
              },
              {
                name: "Cardboard",
                value: 1,
              },
              {
                name: "Papery",
                value: 1,
              },
              {
                name: "Woody",
                value: 1,
              },
              {
                name: "Moldy/Damp",
                value: 1,
              },
              {
                name: "Musty/Dusty",
                value: 1,
              },
              {
                name: "Musty/Earthy",
                value: 1,
              },
              {
                name: "Animalic",
                value: 1,
              },
              {
                name: "Meaty Brothy",
                value: 1,
              },
              {
                name: "Phenolic",
                value: 1,
              },
            ],
          },
          {
            name: "Chemical",
            children: [
              {
                name: "Bitter",
                value: 1,
              },
              {
                name: "Salty",
                value: 1,
              },
              {
                name: "Medicinal",
                value: 1,
              },
              {
                name: "Petroleum",
                value: 1,
              },
              {
                name: "Skunky",
                value: 1,
              },
              {
                name: "Rubber",
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Roasted",
        children: [
          {
            name: "Pipe Tobacco",
            value: 1,
          },
          {
            name: "Tobacco",
            value: 1,
          },
          {
            name: "Burnt",
            children: [
              {
                name: "Acrid",
                value: 1,
              },
              {
                name: "Ashy",
                value: 1,
              },
              {
                name: "Smoky",
                value: 1,
              },
              {
                name: "Brown, Roast",
                value: 1,
              },
            ],
          },
          {
            name: "Cereal",
            children: [
              {
                name: "Grain",
                value: 1,
              },
              {
                name: "Malt",
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Spices",
        children: [
          {
            name: "Pungent",
            value: 1,
          },
          {
            name: "Pepper",
            value: 1,
          },
          {
            name: "Brown Spice",
            children: [
              {
                name: "Anise",
                value: 1,
              },
              {
                name: "Nutmeg",
                value: 1,
              },
              {
                name: "Cinnamon",
                value: 1,
              },
              {
                name: "Clove",
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Nutty/Cocoa",
        children: [
          {
            name: "Nutty",
            children: [
              {
                name: "Peanuts",
                value: 1,
              },
              {
                name: "Hazelnut",
                value: 1,
              },
              {
                name: "Almond",
                value: 1,
              },
            ],
          },
          {
            name: "Cocoa",
            children: [
              {
                name: "Chocolate",
                value: 1,
              },
              {
                name: "Dark Chocolate",
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Sweet",
        children: [
          {
            name: "Brown Sugar",
            children: [
              {
                name: "Molasses",
                value: 1,
              },
              {
                name: "Maple Syrup",
                value: 1,
              },
              {
                name: "Caramelized",
                value: 1,
              },
              {
                name: "Honey",
                value: 1,
              },
            ],
          },
          {
            name: "Vanilla",
            value: 1,
          },
          {
            name: "Vanillin",
            value: 1,
          },
          {
            name: "Overall Sweet",
            value: 1,
          },
          {
            name: "Sweet Aromatics",
            value: 1,
          },
        ],
      },
    ];

    series.colors.list = [
      am4core.color("#FF0000"),
      am4core.color("#00000"),
      am4core.color("#EC7505"),
      am4core.color("#E89005"),
    ];

    series.dataFields.linkWith = "linkWith";
    series.dataFields.name = "name";
    series.dataFields.id = "name";
    series.dataFields.value = "value";
    series.dataFields.children = "children";

    series.links.template.strength = 1;
    series.nodes.template.tooltipText = "{name}";
    series.nodes.template.fillOpacity = 1;
    series.links.template.strokeWidth = 5;

    series.nodes.template.label.text = "{name}";
    series.fontSize = 15;
    series.fontWeight = 800;
    series.minRadius = 25;
    series.maxLevels = 2;
    series.nodes.template.label.hideOversized = true;
    series.nodes.template.label.truncate = true;
  });
  return (
    <div id="forceDirected" style={{ width: "100%", height: "800px" }}></div>
  );
}

export default Topology;

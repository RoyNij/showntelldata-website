---
title: "SDG Tracker Dashboard"
date: 2020-03-28T20:35:55-05:00
draft: false
banner: "/images/projects/inec-banner.png"
year: 2018
design: ["PuntoAparte", "Show 'n Tell Data"]
technology: ["PHP", "MySQL", "D3.js"]
tags: ["organize", "visualize"]
link: "https://aplicaciones2.ecuadorencifras.gob.ec/ods/"
summary: "A custom dashboard visualizing official indicators showing the advancements with respect to the SDGs (Sustainable Development Goals) in Ecuador"
weight: 3
---

The [INEC](https://www.ecuadorencifras.gob.ec/institucional/home/) is the National Statistics Institute in Ecuador. They had the need to visualize their advancements in reaching the [Sustainable Development Goals (SDGs)](https://www.un.org/sustainabledevelopment/) using their own data for the indicators of their choosing.

## Requirements
* Visualizations of different indicators over time and separated by province
* The visualizations should adjust to the data that is available
* The possibility to add and edit data for the different indicators
* The possibility to link `pdf` documentation to the indcators

## Solutions
In collaboration with [Cepei](http://cepei.org) and [PuntoAparte](https://puntoaparte.com.co/) I developed a dashboard for the different indicators the INEC had with relationship to the SDGs. The main goal was to make sure that the visualizations could adjust to different datatypes as well as the different levels of availability of the data. In most cases indicators would have data over time and in some cases data was available separated by province.

For this a separate database was created, and the data is loaded through a custom PHP backend into the different visualizations. Those visualizations will adjust on the client side depending on the type of data (percentage, number, ratio or currency) and the data availability. The first image below shows a visualization of a percentage datatype for which data was available over time as well as separated by province.

|   |
| :----: |
|![Map Image Inec](/images/projects/inec-map.png)| 
| *A view of a percentage type indicator separated by province* | 

The second image is one where the data type is a ratio (deaths per 100,000) and the data was only available over time.

|   |
| :----: |
|![Map Image Inec](/images/projects/inec-ratio.png)| 
| *A view of a ratio type indicator over time* | 

Everything adjusts on the client side, meaning that depending on the SDG chosen, the color of the visualization changes, and depending on the datatype and data availability the data visualizations change. In addition to that, if additional data would become available in the future, the visualizations automatically adjust if new visualizations can be created from the new data.
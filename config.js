
let topTitleDiv = "<h4>Mapbox Storytelling</h4>";

let titleDiv =
  "<h1>Trade, Supply and Hunger <br> Exploring the Position of Russia and Ukraine in the International Grain Trade</h1>";

let bylineDiv = "<p>By Zicheng Fan</p>";

let descriptionDiv =
  '<p> </p>' +

  '<p>Taking the potential impact of the Russia - Ukraine conflict on global food supply as a starting point, this project first explores the position of two countries in the global food market. Then there is an attempt to map the dependency of different countries on primary crops of wheat and maise from Russia and Ukraine. Finally, the project links the countries with high dependence on Russia and Ukraine to their current risk of food shortages and undernourishment. By exploring the issue of food supply security in a global context and connecting it to our daily life, this project calls for peace and the common good of humanity.</p>' +

  '<p>Technically, this project draws heavily from the <a href="https://docs.mapbox.com/">Mapbox Document</a> and the story-telling map tutorial from <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2021/07/20/11A_MapboxStorytelling.html">Points Unknown</a>. The analysis and visualisation within the project are mainly based on the <a href="https://www.fao.org/faostat/en/#data/TM/visualize">Food Trade Matrix dataset</a> from Food and Agriculture Organization of the United Nations(FAO). Other sources are refered in chapters.</p>' +

  '<p style="text-align:center">Scroll to continue<br>▼</p>';


let footerDiv =
  '<p>This story is based on data <a href="https://www.fao.org/faostat/en/#data/TM">Food Trade Matrix</a>, <a href="https://www.fao.org/faostat/en/#data/FS">Food Security Indicators</a> from Food and Agriculture Organization (FAO)  and <a href="https://fews.net/fews-data/333">Food Security Classification Data</a> from the Famine Early Warning Systems Network(FEWS NET).</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="https://www.ucl.ac.uk/bartlett/casa/">Centre for Advanced Spatial Analysis, UCL</a></p>';


let divChapter1 =
  "<h3>Subway Ridership Plummets</h3>" +
  '<img src="images/Ukraine_Russia_Conflict.jpg">' +
  '<p class="imageCredit"><a href="https://www.e-ir.info/2020/06/27/causes-and-potential-solutions-to-the-ukraine-and-russia-conflict/">Parilov/Shutterstock</a></p>' +
  "<p>According to FAO statistics, the war in Ukraine has left 15.7 million people in need of humanitarian aid and forced large numbers of people to be displaced.</p>" +
  "<p>The destruction of agricultural infrastructure and markets, as well as the disruption of food supply chains, are threatening the livelihoods of some 12.6 million agricultural workers in Ukraine.</p>" +
  "<p>Considering that Ukraine ranks 4th in global maize export quantity and 5th in wheat export, and the months since the start of the war have been a critical period for food production, the impact of the Russia-Ukrainian conflict could have implications for food security in the wider region of the world.</p>";

let divChapter1_1 =
  "<h3 style='max-width:100%; text-align:center'>Roles and Connections for Different Countries in Global grain Marktet</h3>" +
  "<p style='max-width:85%; text-align:center; margin-left:auto; margin-right:auto'>In the first analysis, a directed weighted graph is created based on the trade matrix to analyse the centrality of countries in the global grain market and reveal potential country groups closely tied in grain trade. Import proportion, the quantity of specific grain exported by country A to country B,  accounting for the proportion of the total imports of this grain in country B, is used as a weight to characterize the strength of the relationship between country A and country B in the network. For wheat trade, Russia occupy a prominent position in the global market. While for maize there are relatively more countries relying on the export from Ukraine. Besides, the US in North America, Argentina and Brazil in south America and France and German in Europe are also important players in the food market. These centered countries and the corresponding trade groups are highly geographically related. </p>" +
  '<div style="max-width:100%; margin-left:auto; margin-right:auto"><iframe title="network_svg" src="insert_html/trade_network.html" width="1800" height="850" frameborder="0" allowfullscreen></iframe></div>';

let divChapter2 =
  "<h3>Global Dependence on Wheat Supply from Russia</h3>" +
  '<img src="images/wheat_Russia.jpg">' +
  '<p class="imageCredit"><a href="https://www.rbth.com/business/332948-russia-leading-wheat-exporter">Ilya Naimushin/Sputnik</a></p>' +
  "<p>Let's look closely to see the dependence of different countries on Russia and Ukraines' grains. As the world's most important wheat exporter, Russia has an great influence across Asia, Europe and Africa.</p>";

let divChapter2_1 =
  "<h3>Global Dependence on Wheat Supply from Russia</h3>" +
  '<div style="max-width:100%; margin-left:0; margin-top:0 align=left"><iframe title="chart_russia" src="insert_html/single_chart_russia.html" width="420" height="320" frameborder="0" allowfullscreen></iframe></div>' +
  "<p>The bar chart above has listed the top 15 countris with highest wheat import proportion from Russia in 2020. Many African countries, as well as some western and Eastern European countries, have shown a high dependence on Russian wheat (more than 70%)</p>";

//+'<i class="fa  fa-circle" style="font-size:21px; color:#F2F12D"></i> <i class="fa  fa-circle" style="font-size:21px; color:#EED322"></i> <i class="fa  fa-circle" style="font-size:21px; color:#E6B71E"></i> <i class="fa  fa-circle" style="font-size:21px; color:#DA9C20"></i> <i class="fa  fa-circle" style="font-size:21px; color:#CA8323"></i> <i class="fa  fa-circle" style="font-size:21px; color:#B86B25"></i> <i class="fa  fa-circle" style="font-size:21px; color:#A25626"></i> <i class="fa  fa-circle" style="font-size:21px; color:#8B4225"></i>' +"<p>0 0.1 0.2 0.3 0.4 0.5 0.6 0.7+</p>"

let divChapter3 =
  "<h3>Global Dependence on Maize Supply from Ukraine</h3>" +
  '<img src="images/corn_Ukraine.jpg">' +
  '<p class="imageCredit"><a href="https://www.world-grain.com/articles/13602-ukraine-may-limit-corn-exports">Adobe stock</a></p>' +
  "<p>In terms of maize supply, Ukraine plays an more important role than Russia. In 2020, most European, North African, West Asian countries and China in East Asia are major importers of Ukrainian maize. Over 30% maize of the UK and Spain comes from Ukraine. </p>";


let divChapter3_1 =
  "<h3>Global Dependence on Maize Supply from Ukraine</h3>" +
  '<div style="max-width:100%; margin-left:0; margin-top:0; align=left"><iframe title="chart_ukraine" src="insert_html/single_chart_ukraine.html" width="420" height="320" frameborder="0" allowfullscreen></iframe></div>' +
  "<p> The bar chart above has listed the top 15 countris with highest maize import proportion from Ukraine. Compared to the Russia's chart, only Madagascar has a import proportion over 70%, while more countries has other main suppliers besides Ukraine. </p>";

let divChapter3_2 =
  "<h3 style='max-width:100%; text-align:center'>Ukraine-Russia Comparison and the Detailed Data</h3>" +
  "<p style='max-width:85%; text-align:center; margin-left:auto; margin-right:auto'>Below is a detailed map to compare Russia and Ukraine's positon in wheat and maize export. Both import quantity and import proportion are provided for comparision. <br>According to the map, some typical countries are found to have both high dependence on Ukrain and Russia, such as Somalia, Egypt, Pakistan for wheat and Lithuania, Belarus and Libya for maize. For Somalia, Egypt and most other countries in Africa, they also face a high risk of food shortages and undernutrition.</p>" +
  '<div style="max-width:100%; margin-left:auto; margin-right:auto; align=center "><iframe title="compare_map" src="Compare_map_zicheng.html" width="1800" height="850" frameborder="0" allowfullscreen></iframe></div>';

let divChapter4 =
  "<h3 style='max-width:100%; text-align:center'>Proportion of Population Suffering Undernourishment</h3>" +
  "<p style='max-width:85%; text-align:center; margin-left:auto; margin-right:auto'>The dynamic chart below ranks top 10 countries with highest proportion of population suffering undernourishment from 2002 to 2020. Countries' continents are labelled with different colors. According to the chart, in many African countries frequently there were more than 30% of the population suffering undernourished. For Haiti and Somalia, the indicators were once as high as 60%.  </p>" +
  '<div style="max-width:100%; margin-left:auto; margin-right:auto"><iframe title="race_bar" src="insert_html/bar-race-country_true.html" width="1800" height="800" frameborder="0" allowfullscreen></iframe></div>'

let divChapter5 =
  "<h3>Hunger Map in Africa and Asia</h3>" +
  '<img src="images/hunger_UN.png">' +
  '<p class="imageCredit"><a href="https://www.un.org/development/desa/publications/graphic/sustainable-development-goals-report-2018-goal-2-world-hunger">UNStats</a></p>' +
  "<p>The last map illustrates the food insecurity situation in Africa and part of Asia in June 2021. For Yemen, Somalia and Sudan who have suffered emergency food insecurity, disruption of food supply in Ukrain could lead to a worse famine in coming months. The only good thing is that Russia and Ukraine are not the only main suppliers in the international grain market. Effective cooperation of international organizations and the aids from other major food exporters, may hopefully save more lives from hunger in the future.</p>";

var config = {
  style: 'mapbox://styles/zicheng00/cl2p79yes000n14mfz38ie22z',
  accessToken: 'pk.eyJ1IjoiemljaGVuZzAwIiwiYSI6ImNreWtycjk2eDJ6M2Yydm4wY2hxOHhjejUifQ.6PFLUSHIxVP-nemrlLlFSA',
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [

    {
      id: "overallMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [27, 51],
        zoom: 5,
        zoomSmall: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Ukraine_label",
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'russia_circle',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'ukraine_circle',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'Capital_labels',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'boundary_map',
          opacity: 0.75,
          duration: 300,
        }, {
          layer: "Ru_proportion_Wheat",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "Uk_proportion_Maize",
          opacity: 0,
          duration: 300,
        },],
      onChapterExit: [
        {
          layer: 'russia_circle',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'ukraine_circle',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'Capital_labels',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'boundary_map',
          opacity: 0,
          duration: 300,
        },
      ],
    },


    {
      id: "crop_network",
      alignment: "full",
      hidden: false,
      chapterDiv: divChapter1_1,
      location: {
        center: [27, 51],
        zoom: 5,
        zoomSmall: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{
        layer: "Ru_proportion_Wheat",
        opacity: 0,
        duration: 300,
      },
      {
        layer: "Uk_proportion_Maize",
        opacity: 0,
        duration: 300,
      },],
      onChapterExit: [
        {
          layer: 'russia_circle',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'ukraine_circle',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'Capital_labels',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'boundary_map',
          opacity: 0,
          duration: 300,
        },
      ],
    },



    {
      id: "Russia_Wheat_proportion",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [5, 23],
        zoom: 2,
        zoomSmall: 1,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "hunger_legend_label",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "dependency_legend_label",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "Russia_label",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "Ukraine_label",
          opacity: 0,
          duration: 300,
        },

        {
          layer: "Ru_proportion_Wheat",
          opacity: 0.8,
          duration: 300,
        },
        {
          layer: "Uk_proportion_Maize",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "Ru_proportion_Wheat",
          opacity: 0.8,
          duration: 300,
        },
        {
          layer: "Uk_proportion_Maize",
          opacity: 0,
          duration: 300,
        },
      ],
    },


    {
      id: "Russia_Wheat_proportion_zoom",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2_1,
      location: {
        center: [0, 0],
        zoom: 3,
        zoomSmall: 2,
        pitch: 30,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Ukraine_label",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "Russia_label",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "Ru_proportion_Wheat",
          opacity: 0.8,
          duration: 1000,
        },
        {
          layer: "Uk_proportion_Maize",
          opacity: 0,
          duration: 1000,
        },
      ],
      onChapterExit: [
        {
          layer: "Russia_label",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "Ru_proportion_Wheat",
          opacity: 0,
          duration: 300,
        },
      ],
    },


    {
      id: "Ukraine_Maize_proportion",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [5, 23],
        zoom: 2,
        zoomSmall: 1,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Ukraine_label",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "Uk_proportion_Maize",
          opacity: 0.8,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "Uk_proportion_Maize",
          opacity: 0.8,
          duration: 300,
        },
      ],
    },


    {
      id: "Ukraine_Maize_proportion_zoom",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3_1,
      location: {
        center: [20, 35],
        zoom: 3,
        zoomSmall: 2,
        pitch: 30,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Uk_proportion_Maize",
          opacity: 0.8,
          duration: 1000,
        },
      ],
      onChapterExit: [
        {
          layer: "Uk_proportion_Maize",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "Ukraine_label",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "Overall_proportion",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3_2,
      location: {
        center: [20, 35],
        zoom: 3,
        zoomSmall: 2,
        pitch: 30,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Uk_proportion_Maize",
          opacity: 0,
          duration: 1000,
        }, {
          layer: "Ukraine_label",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "Uk_proportion_Maize",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "Ukraine_label",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "bar_race",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-41.93, 36],
        zoom: 8,
        zoomSmall: 7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "hunger_legend_label",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "Hunger_map",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [55, 7],
        zoom: 3,
        zoomSmall: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "hunger_legend_label",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "hunger_map",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "hunger_map",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};
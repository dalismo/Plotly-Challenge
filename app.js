function init() {
    d3.json("samples.json").then(function (jsonData) {
        let data = jsonData;
        // console.log(data);

        //Getting the name ID
        let dataNames = data.names;
        let dropDown = d3.select("#selDataset");

        dataNames.forEach(function (name) {
            dropDown.append("option").text(name).property("value", name);
        });
        // First ID variable
        let sampleID = "940";

        retrieve(sampleID);
    });
}

function retrieve(sampleID) {
    d3.json("samples.json").then(function (jsonData) {
        console.log("1. retrieve data");
        let data = jsonData;

        let testSample = data.samples.filter((val) => val.id == sampleID);
        //console.log(testSample;

        let testSampleObj = testSample[0];
        //console.log(testSampleObj);

        let otu_ids = testSampleObj.otu_ids;
        //console.log(otu_ids);

        let otu_idList = [];
        for (let i = 0; i < otu_ids.length; i++) {
            otu_idList.push(`OTU# ${otu_ids[i]}`);
        }

        let sample_values = testSampleObj.sample_values;
        //console.log(sample_values);

        let otu_labels = testSampleObj.otu_labels;
        //console.log(otu_labels);

        let testTable = data.metadata.filter((val) => val.id == sampleID);
        testTable = testTable[0];
        console.log(testTable);

        let gauge = Object.values(testTable)[6];
        console.log(gauge);

        let results = {
            idStr: otu_idList,
            ids: otu_ids,
            values: sample_values,
            labels: otu_labels,
        };

        horizbarChart(results);
        bubbleChart(results);
        gaugeChart(gauge);
        generateTable(testTable);
    });
}

// Working on horizontal bar chart
function horizbarChart(results) {
    console.log("bar chart");
    // console.log(results);
    let otu_ids = results.idStr.slice(0, 10);
    let sample_values = results.values.slice(0, 10);
    let otu_labels = results.labels.slice(0, 10);
    let otuNumID = results.ids.slice(0, 10);
    let colors = [];
    for (let i = 0; i < sample_values.length; i++) {
      colors.push("rgb(0,0," + (1 - sample_values[i] / 180) + ")");
    }

// console.log(sample_values)

//assigning values to bar charts
let trace = {
    x: sample_values,
    y: otu_ids,
    mode: "markers",
    markers: {
        color: colors,
        line: {
            width: 1,
        },
    },
    orientation: "h",
    type:"bar",
};

let plotting = [trace];

let layout = {
    hoverinfo: otu_labels
    title:{
        text:"Belly Button Top Ten Microbials"
        font: {
            size: 16,
            xanchor: "left",
            yanchor: "top",
        },
    },

    }

}




   

init();
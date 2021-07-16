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
        // console.log(testTable);

        let results = {
            idStr: otu_idList,
            ids: otu_ids,
            values: sample_values,
            labels: otu_labels,
        };

        horizbarChart(results);
        bubbleChart(results);
        demoTable(testTable);
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
        type: "bar",
    };

    let plotting = [trace];

    let layout = {
        hoverinfo: otu_labels,
        title: {
            text: "BELLY BUTTON TOP 10 MICROBIALS",
            font: {
                family: "Overpass, Open Sans, Raleway",
                size: 16,
                xanchor: "left",
                yanchor: "top",
            },
        },
        autosize: false,
        width: 375,
        height: 550,
        margin: {
            l: 50,
            r: 50,
            b: 100,
            t: 100,
            pad: 4,
        },
        yaxis: {
            autorange: "reversed",
            automargin: true,
        },
    };

    let config = {
        responsive: true,
    };

    Plotly.newPlot("bar", plotting, layout, config);
}

// Working on bubble chart
function bubbleChart(results) {
    let otu_ids = results.ids;
    let sample_values = results.values;
    let otu_labels = results.labels;

    var trace1 = {
        x: otu_ids,
        y: sample_values,
        mode: "markers",
        text: otu_labels,
        marker: {
            size: sample_values,
            color: otu_ids,
        },
    };

    let data = [trace1];

    let layout = {
        title: "OTU ID vs SAMPLE VALUE",
        font: {
            family: "Overpass, Open Sans, Raleway",
            size: 16,
        },
        showlegend: false,
        height: 600,
        width: 1200,

        xaxis: {
            title: {
                text: "OTU ID",
                font: {
                    family: "Overpass, Open Sans, Raleway",
                    size: 16,
                }
            }
        }
    };

    let configuration = {
        responsive: true,
    };
    Plotly.newPlot("bubble", data, layout, configuration);
}

// Starting to work on demographic pulling of data
function demoTable(testTable) {
    let panel = document.getElementsByClassName("panel-body")[0];
    let table = document.createElement("table");
    table.setAttribute("id", "table");

    // console.log(table);

    let tableStats = document.createElement('tbody');

    Object.entries(testTable).forEach(function ([key, value]) {
        // console.log(key, value);

        let row = document.createElement("tr");

        let key_cell = document.createElement("td");
        key_cell.style.fontWeight = "bold";
        key_cell.style.padding = "10px";
        key_cell.style.fontSize = "16";

        let key_text = document.createTextNode(`${key}:`);
        key_cell.appendChild(key_text);
        row.appendChild(key_cell);

        let value_cell = document.createElement("td");
        value_cell.style.padding = "10px";
        value_cell.style.fontSize = "16";
        let value_text = document.createTextNode(`${value}`);
        value_cell.appendChild(value_text);
        row.appendChild(value_cell);

        tableStats.append(row);

    });

    table.appendChild(tableStats);
    panel.appendChild(table);
}

init();

d3.selectAll("#selDataset").on("change", idChanged);

function idChanged() {
    let sampleID = d3.select("#selDataset").node().value;

    d3.selectAll("#table").remove();

    retrieve(sampleID);
}
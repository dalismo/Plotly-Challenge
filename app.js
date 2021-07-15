function init() {
    d3.json("samples.json").then(function (jsonData) {
        let data = jsonData;
        console.log(data);

        //Getting the name ID
        let dataNames = data.names;
        let dropDown = d3.select("#selDataset");

        dataNames.forEach(function (name) {
            dropDown.append("option").text(name).property("value", name);
        });
        // First ID variable
        let sampleID = "940";

        datapull(sampleID);
    });
}


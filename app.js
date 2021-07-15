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
  


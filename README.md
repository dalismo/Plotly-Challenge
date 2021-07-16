https://dalismo.github.io/Plotly-Challenge/

# Plot.ly Homework - Belly Button Biodiversity

![image](https://user-images.githubusercontent.com/78628287/125804355-9f4da7ed-67af-4ca8-8a1d-34054751f98a.png)

In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. Populate a dropdown menu with all of the Sample ID's. When an option is selected, this will update all of the charts.

  * **Note:** If you look in your index.html, the event function `optionChanged()` is already included. This function takes the `value` of each dropdown `option`. You need to define this function in your javascript. 


2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

	* Use `sample_values` as the values for the bar chart.

		* **Note:** For each sample, the OTU's are listed in descending order.
	
	* Use `otu_ids` as the labels for the bar chart.

		* HINT: Labels should be strings, not numbers.
	
	* Use `otu_labels` as the hovertext for the chart.

![image](https://user-images.githubusercontent.com/78628287/125804416-2b2ec17b-6efc-4fe7-8f39-1a1d1b8bdddf.png)

3. Create a bubble chart that displays each sample.

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![image](https://user-images.githubusercontent.com/78628287/125804466-432e1ca3-32ac-4dbc-894e-91f83966022c.png)

4. Display sample metadata, i.e., an individual's demographic information.

	* Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://user-images.githubusercontent.com/78628287/125804510-83f20dfa-84fe-4b50-bea3-5b4eaae77ac7.png)

5. Update all of the plots any time that a new sample is selected.

Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

* **Note** The sample `index.html` was created using an older version of Bootstrap.


![image](https://user-images.githubusercontent.com/78628287/125804582-b47a1070-48f4-41e8-907f-8c01f94972f7.png)

## Deployment

* Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.

* Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file

## Hints

* Use `console.log` inside of your JavaScript code to see what your data looks like at each step.

* Refer to the [Plotly.js documentation](https://plot.ly/javascript/) when building the plots.

## Rubric

[Unit 14 Rubric - Plot.ly Homework - Belly Button Biodiversity](https://docs.google.com/document/d/1wD_hOEJELD2hifTaECfx66xlpEdJeYm3mL8q2Zoq1vo/edit?usp=sharing)

- - -

## References

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

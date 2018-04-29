# TSA Claim Data

This is a simple project designed to display TSA Claim data between the years of 2010 and 2013.

### Getting Started

In order to run locally, the assumption is made that your local machine already has Node installed globally. If this is not the case, head over to https://nodejs.org/en/ in order to do so.

Once Node is installed, clone the repository to your working directory. Open a new terminal / console and enter the following command:
`npm install`

This will install all necessary dependencies in order to view the data. Once installation of required dependencies has completed, run the following command:
`npm start`

At this point, open a web browser and navigate to:
`http://localhost:8000`

### ToDo

* Refactor code:
	* Create functions for repeated code
	* Move event listeners out of index.html
	* Angular-ize app
* Fix **Airline.yr** arrays to length of 12
	* Put month data into the correct index so that graphs properly display when a month had claims totaling $0.00
* Truncate / round sum and avg values of MonthlyClaim objects
* Include STD-DEV and mean for each MonthlyClaim avg
* Calculate average monthly loss across all airlines
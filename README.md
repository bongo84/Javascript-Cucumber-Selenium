<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bongo84/Javascript-Cucumber-Selenium">
    <img src="/images/jsautomation.jpg" alt="Logo" width="400" height="220">
  </a>

  <h3 align="center">JS & Cucumber Test Framework</h3>

</div>


<!-- ABOUT THE PROJECT -->
## About The Project

Ok so welcome to my JS & Selenium Test Framework. The purpose of this framework was for myself to get some valuable learning of using Javascript and selenium together. When I got a new role this was the core languages and tools of the framework and
I wanted to get to grips with things a bit further so decided to make this framework for my own learnings and understanding.

What to know:
* The Framework ustilises a BDD approach and using cucumber, selenium and superTest allows for the testing of 2 layers of the test pyramid that many QA focus on in there day to day.
* The test application is a free online site that lets test proffessionals practice there skills - https://demoqa.com/
* There is also a work in progress in the repo for GITHUB actions and CI.
* This is still a working framework that is being added to and branched quite often. There are many areas of improvement.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

Below is a list of the following tools used in the framework

* Cucumber.js
* SuperTest.js
* Node.js
* Selenium Webdriver
* Chai


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Ok to get started you will need to have node.js installed on your system, the framework uses v20.8.0. Go to https://nodejs.org/en/download/package-manager/current for further instructions.
You will also need a chrome browser at version 119 or greater for the framework to run successfuly.

### Installation and Running

Once you have these installed. In your IDE terminal execute the following to get all dependacies needed
* Npm install
  ```sh
  npm install
  ```
To actually run the tests we use tags from cucumber. As we develop our tests we add the tag in the format @test-ui or @test-api.
To run them we execute the following.
* UI tests
  ```sh
  npm test-ui
  ```
* API tests
  ```sh
  npm test-api
  ```
Any test marked with that tag is then executed and a test result is displayed in the terminal.

Other tags are used for CI running and can be found in the scripts section of the package.json

<!-- USAGE EXAMPLES -->
## How the Framework has been used

As mentioned the framework has been used as a learning expirence however that doesnt mean it was a free for all of code changes and the wild wild west. I planned the work using Trello and
running with agile methodologies. Each ticket was auto numbered and branches are made on these tickets as single items of work. Following best practices these are reviewed (yes by me being a 1 man band but in an ideal world PR by someone else) and merged into master. The below image is a representation of the workflow

<div align="center">
  <a href="https://github.com/bongo84/Javascript-Cucumber-Selenium">
    <img src="/images/trello.png" alt="Logo" width="1200" height="800">
  </a>

  <h3 align="center">Framework Agile Board</h3>

  <p align="center">
    Javascript Test Automation Framework
  </p>
</div>



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Complete Base Framework for UI tests and cucumber
- [x] Add supertest to allow api testing in the framework
- [x] Start adding GITHUB actions runners
- [ ] Add reporting to framework with HTML output
- [ ] Cross browser support and parrel running

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ben Waters - https://www.linkedin.com/in/ben-waters-62b691b7/ - ben.waters@mhtwebsolutions.co.uk

<p align="right">(<a href="#readme-top">back to top</a>)</p>


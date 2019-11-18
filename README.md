# evx-transportation-protocol

## Electric Vehicle Experience - *EVX* Project Details 

* Dynamically calculate the best electric charging station from current location
* Display maps view, including map markers overlays with 10 km radius

### Electric Vehicle Experience Score - *EVXS*

#### What is EVXS?

* EVXS provides a system of scoring search results from HERE location services based upon the following
   * Search results sorted by distance proximity from current location to routed locations 
   * Result returns list of *electric charging stations* by order of proximity to current location
   * Generate route between two locations & plotting coordinate markers on the map from current location within 10km.
     * Parse JSON request from HERE Places API by proximity, from current location.
     * Parse data from IoT enabled vehicles to get battery life percentage.
   
#### What is the Transportation Protocol?

  * Advanced location based services from current GPS location
  * Enable electric vehicles & autonomous vehicles to plan efficient routes.
  * Improving user experience by recommending routes & destinations for electric vehicles.

### LA Auto Mobility Hackathon - Transportation Protocol
- HERE - [*Location Services*](#vuejs-dashboard---here-maps--statitics)
- Amazon - [*Alexa Skills Kit (ASK)*](#amazon-alexa-skills-kit)
- Amazon - [*AWS Lambda & IoT*](##amazon-aws-lambda)
- Vue.js - [*Vue.js Dashboard & HERE Maps*](#vuejs---here-maps--statitics-dashboard)
- React Native - [*Automobility LA Hackathon*](#react-native---here-api-location-provider)
- EVXS - [*Electric Vehicle Experience Score*](#electric-vehicle-experience-score-evxs)

## Technical Frameworks 

### React Native - HERE API Location Provider 
* [Automobility LA Hackathon - React Native / EXPO](https://github.com/DarrenRF/automobility-hackathon)

### Vue.js - HERE Maps & Statitics Dashboard
* Vue.js Dashboard - HERE Maps & Location Services
  * [Github Project in Vue.js using HERE Maps, Routing & Geocoder](https://github.com/devfilipesales/Front-End-Test-for-Zetta)
  * [HERE Maps API for Javascript Examples](https://github.com/heremaps/maps-api-for-javascript-examples)
  * [Showing a HERE map with Vue.js](https://developer.here.com/blog/showing-a-here-map-with-the-vue.js-javascript-framework)

### HERE - Location Services Documentation
* Maps - https://developer.here.com/documentation/maps/dev_guide/topics/quick-start.html
* Geocoder - https://developer.here.com/documentation/geocoder/dev_guide/topics/quick-start-geocode.html
* Places - https://developer.here.com/documentation/places/dev_guide/topics/quick-start-find-text-string.html

#### HERE - API Developer Documentation
* [HERE Javascript to API Development Documentation](https://developer.here.com/develop/javascript-api) 
* [HERE Maps API for Javascript Examples -  Github](https://github.com/heremaps/maps-api-for-javascript-examples)

### HERE Location Services

* Here Products - (geocoding/search, fleet telematics, map data, navigation, routing)
    * https://www.here.com/products/automotive
    * https://www.here.com/products/location-based-services
    * https://www.here.com/products/mapping
    * https://www.here.com/products/tracking-positioning-solutions
    * https://www.here.com/products/traffic-solutions
    * https://www.here.com/products/mobility-solutions

#### HERE Maps API for Javascript
These application credentials can be used to develop using the HERE Maps API for JavaScript (version 3.1 and higher) . You can generate up to two ApiKeys for authentication purposes and rotate them as required. Usage will be reported as one application.

* Develop Javascript - https://developer.here.com/develop/javascript-api
    * APP ID - VGg2uxMCZWd48RGowt7f

#### REST & XYZ HUB API/CLI
These application credentials can be used with HERE Location Services REST APIs , HERE XYZ Hub API and HERE CLI. These credentials also work with older versions of the HERE Maps API for JavaScript.

### HERE REST APIs
Integrate powerful location features with a flexible and lightweight REST architecture

### What is the Geocoder API?
The Geocoder REST API enables developers to convert street addresses to geo-coordinates and vice-versa with forward geocoding, including landmarks, and reverse geocoding.

##### The HERE Geocoder API is a REST API that allows you to:

* Obtain coordinates for addresses
* Obtain addresses or administrative areas for locations
* Obtain coordinates for known landmarks.

### What is the Places API?
The Places (Search) API is a REST API that allows you to build applications where users can search for places and receive detailed information about selected places.

* a HERE Developer account from the AWS Marketplace for leveraging location APIs
* an Amazon Web Services account to host your project code
* an Amazon Alexa Developer account to configure your Alexa Skill

### Amazon Alexa - Resources
* [Amazon Alexa Skills Kit](https://developer.amazon.com/en-US/alexa/alexa-skills-kit)
* [Amazon Alexa - Developer ASK CLI Intro](https://developer.amazon.com/docs/smapi/ask-cli-intro.html) 
* [Amazon - Alexa Skills Kit CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)
* [Amazon - Alexa Skills Kit SDK for NodeJS](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)

### Amazon Alexa Skills Kit 
* Alexa Skills ID
- amzn1.ask.skill.74b4a3c1-eb8e-4558-9035-771fef754c2e

### Amazon AWS Lambda
* AWS Lambda Execution Role ARN
- arn:aws:iam::599877411882:role/AlexaHostedSkillLambdaRole

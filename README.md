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

#### Focus: In-Car Experience, Holistic Efficiency, Retail, Driver Time Saved

#### The Problem: “Range Anxiety” “Time Saved” “Reduced Carbon Footprint”
* For each hour of charging current EVs get approx 20-30 miles of range
  * Battery Range, Fuel Costs / Charge Cost, Duration of Charge Time
  * Routing your journey is key to enjoying the EV experience
  * EV Charging may take many hours - long distance trips require multiple charges.
  
#### Our Solution: EVX SCORE 
* Select the best EV Charger - charging takes hours - plan accordingly with EVX score.
* Scenario: EV operator is traveling I-5 “Electric Highway” for an 1,121 Mile Trip from LA to Portland.
  * “Alexa - What is the most efficient place (EVX score) to charge & park”
  * “Alexa - Show me a map of EV Chargers within a 10 km radius”
    * EVX Score is based on the following criteria:
     * Distance from location to routed destination 
     * Distance from charger to charger
   
#### What is the Transportation Protocol?
  * Advanced location based services from current GPS location
  * Enable electric vehicles & autonomous vehicles to plan efficient routes.
  * Improving user experience by recommending routes & destinations for electric vehicles.

### LA Auto Mobility Hackathon - Transportation Protocol
- HERE - [*Location Services*](#vuejs-dashboard---here-maps--statitics)
- Amazon - [*Alexa Skills Kit (ASK)*](#amazon-alexa-skills-kit)
- Amazon - [*AWS Lambda*](#amazon-aws-lambda)
- Vue.js - [*Vue.js Dashboard & HERE Maps*](#vuejs---here-maps--statitics-dashboard)
- React Native - [*Automobility LA Hackathon*](#react-native---here-api-location-provider)
- EVXS - [*Electric Vehicle Experience Score*](#electric-vehicle-experience-score-evxs)

## Technical Frameworks 

### React Native - HERE API Location Provider 
* [Automobility LA Hackathon - React Native / EXPO](https://github.com/DarrenRF/automobility-hackathon)

### Vue.js - HERE Maps
* Vue.js Dashboard - HERE Maps & Location Services
  * [Github Project in Vue.js using HERE Maps, Routing & Geocoder](https://github.com/devfilipesales/Front-End-Test-for-Zetta)
  * [HERE Maps API for Javascript Examples](https://github.com/heremaps/maps-api-for-javascript-examples)
  * [Showing a HERE map with Vue.js](https://developer.here.com/blog/showing-a-here-map-with-the-vue.js-javascript-framework)

### Vue.js - Material Dashboard
* [Vue Material Dashboard Github](https://github.com/creativetimofficial/vue-material-dashboard)
* [Vue Material Dashboard Documentation](https://demos.creative-tim.com/vue-material-dashboard/documentation/)

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

* Use Android phone as tracking device
  * Develop Javascript - https://developer.here.com/develop/javascript-api

* Here are your device credentials:
    * APP ID:
         * VGg2uxMCZWd48RGowt7f
    * Device ID:
        * 950d5ed5-5c66-472f-8ef2-50b6e72a9806
    * Device secret:
        * vHz2bB3mQPC4owWsmNnMZVZCm-39PVykanwE5oDEqpQ

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

### Testing Custom Alexa Skills
* [Alexa Developer Console - ASK Test](https://developer.amazon.com/alexa/console/ask/test/amzn1.ask.skill.74b4a3c1-eb8e-4558-9035-771fef754c2e/development/en_US/)
- JSON schema definition for Alexa ASK interaction models
```javascript
{
    "interactionModel": {
        "languageModel": {
            "invocationName": "search for locations",
            "intents": [
                {
                    "name": "ShowPlace",
                    "slots": [
                        {
                            "name": "Show",
                            "type": "ShowType"
                        },
                        {
                            "name": "Place",
                            "type": "AMAZON.US_CITY"
                        },
                        {
                            "name": "Region",
                            "type": "AMAZON.US_STATE"
                        }
                    ],
                    "samples": [
                        "{Show} {Place}",
                        "{Show} me {Place}",
                        "{Show} us {Place}",
                        "{Show} {Place} {Region}",
                        "{Show} me {Place} {Region}",
                        "{Show} us {Place} {Region}"
                    ]
                },
                {
                    "name": "Zoom",
                    "slots": [
                        {
                            "name": "ZoomBehavior",
                            "type": "ZoomType"
                        }
                    ],
                    "samples": [
                        "Zoom {ZoomBehavior}"
                    ]
                },
                {
                    "name": "SearchIntent",
                    "slots": [
                        {
                            "name": "Item",
                            "type": "AMAZON.LocalBusiness"
                        },
                        {
                            "name": "Location",
                            "type": "AMAZON.AdministrativeArea"
                        }
                    ],
                    "samples": [
                        "show me nearby {Item} in {Location}",
                        "show me {Item} in {Location}",
                        "where is {Item} in {Location}",
                        "find me {Item} near {Location}"
                    ]
                },
                {
                    "name": "AMAZON.RepeatIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.PauseIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ResumeIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.MoreIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateSettingsIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NextIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.PageUpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.PageDownIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.PreviousIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ScrollRightIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ScrollDownIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ScrollLeftIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ScrollUpIntent",
                    "samples": []
                }
            ],
            "types": [
                {
                    "name": "ShowType",
                    "values": [
                        {
                            "name": {
                                "value": "Show",
                                "synonyms": [
                                    "display",
                                    "navigate to",
                                    "bring up",
                                    "go to",
                                    "reveal",
                                    "move to",
                                    "go over to",
                                    "move over to"
                                ]
                            }
                        }
                    ]
                },
                {
                    "name": "ZoomType",
                    "values": [
                        {
                            "id": "PLUS",
                            "name": {
                                "value": "In",
                                "synonyms": [
                                    "down",
                                    "closer",
                                    "near"
                                ]
                            }
                        },
                        {
                            "id": "MINUS",
                            "name": {
                                "value": "Out",
                                "synonyms": [
                                    "away",
                                    "up",
                                    "farther"
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
}
```

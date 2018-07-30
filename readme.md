# soundcheck

## [Live Site](https://soundcheckmvp.firebaseapp.com/#/)

## Project Description: Think "Elevator Pitch". Succinctly, but completely describe what you'll be building

Touring musicians have historically gathered into a questionably safe/reliable van to travel across the country with their music gear (which is usually more valuable than the van) in order to play their music in front of an audience. The risk of traveling with that much gear and the burden of having to haul it with you across thousands of miles is large. This app would provide a network for musicians to help each other out, with benefit to themselves when they hit the road.


## Problem Statement: What problem is your app solving? Who has it?

Touring is hard overall, but risking your own gear in a van overnight and the need to drive a huge and dangerous vehicle with that gear in it is a target for thieves and a risk for musicians. Building a network of other musicians in order to lower the amount of gear you need to bring with you could help alleviate this risk.


## How will your project solve the problem?

By building a network of (hopefully) reliable, responsible, and generous musicians with a decent amount of gear, musicians in the network can rely on each other to share the burden of gear.


## Map the user experience. When the user opens your app, what happens? What information does your app need from your user? What does it output in return?

The user will see a page explaining what the app does, options for signup and login. On registration the user will need to pay a small fee to join, and in addition provide a deposit/store credit card info with the system in order to cover potential accidents. In addition the user will need to provide contact info (name, address, phone number of responsible party). Musicians are historically often flaky and irresponsible, in order to keep everyone happy a deposit must be made on both sides of the equation to compensate users if necessary. There will also be a need for a community rating system so both sides can decide if they want to work with each other. There will be a section to enter a ZIP code to find requests in a particular area, the user can review those requests and claim them by offering up their gear and services.

At its core the main function is a way for touring artists to post requests for particular gear and the location and time they would need the gear. Other users can search for their area to find these requests and respond by claiming the request, listing what they will provide. Eventual stretch goals would be proper authorization implementation for both users and admins to charge stored credit cards in the case of damaged/failure to deliver on a promise, as well as user rating systems for both lending and borrowing.


## List the technologies you plan to use. This should be a complete list, including APIs. Be prepared to defend the items on this list. This means you should research the technologies/APIs, and know why you're planning to use each.

Vue, MongoDB, Strapi, Stripe, Oauth, Leaflet/Google Maps to proximity search

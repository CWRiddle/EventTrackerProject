# Event Tracker Project
### Full-Stack Spring/REST/JPA Project for Skill Distillery
---
![Pic of Plants](https://www.gardeningknowhow.com/wp-content/uploads/2013/10/greenhouse-1024x680.jpg)

## Overview

### Description

The aim of this app is to use a database of different plants and their growing conditions to calculate the optimal blueprint for a greenhouse to meet the user's needs.

In addition to basic plant CRUD operations, the user will be able to select the type and number of plants they would like to have in their greenhouse. The app will then return the optimal layout for the greenhouse based on each plant's dimensions, temperature, soil PH, etc.

The user will have the ability to save generated greenhouse blueprints for later review.



## REST Endpoints

| Method | URI                | Request Body | Response Body |
|--------|--------------------|--------------|---------------|
| GET    | `/api/plants`      |              | Collection of representations of all _plant_ resources
|GET | `/api/plants/{id}` | Plant id | Single plant entity
|POST | `/api/plants` | Plant |Plant that was just added
|PUT | `/api/plants` | Plant | Plant that was updated
|DELETE | `/api/plants/{id}` | |Boolean (True if deleted)

## Database Schema
![Pic of DB Schema](https://i.imgur.com/FKU2QwQ.png)

---
## Progress Notes:
This project is a work in progress.
* Greenhouse table addition to the DB schema is pending
* Greenhouse blueprint generation in progress
* Additional CRUD operations may be added

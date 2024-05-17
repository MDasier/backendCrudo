# Backend for CRUDO app

This repository is a [json-server](https://github.com/typicode/json-server) created to feed data into the React Application below.

#### [Client Repo here]([www.your-github-url-here.com](https://github.com/lamardemuela/crudo))

# Server Structure

## Collections

### Food plannings

```javascript
{
  "foodPlanning": [
    {
      "id": "fp1",
      "title": "Food Planning example",
      "description": "This Food Planning is an example for web DEMO",
      "image": "url",
      "isFav": true,
      "breakFastDishId": "d1",
      "lunchDishId": "d2",
      "dinnerDishId": "d3",
      "tags": [
        "gluten-free",
        "low-carb",
        "high-protein",
        "lactose-free"
      ]
    }
```

### Dishes

```javascript
 {
      "id": "d1",
      "title": "Dish TEST1",
      "description": "Description for dish TEST1",
      "image": "url",
      "isFav": false,
      "tags": [
        "gluten-free",
        "low-carb"
      ],
      "preparation": [
        "step1:",
        "step2:"
      ]
    }
```

## Used API Endpoints in the App

| HTTP Method | URL                                | Request Body                        | Description                               |
| ----------- | ---------------------------------- | ----------------------------------- | ----------------------------------------- |
| GET         | `/food-planning-list`              |                                     | Sends all food plannings                  |
| POST        | `/foodPlanning`                    | {title, description...}             | Creates a food planning                   |
| GET         | `/foodPlanning/:foodPlanningId`    |                                     | Sends all details of a food planning      |
| DELETE      | `/foodPlanning/:foodPlanningId`    |                                     | Deletes a food planning                   |
| GET         | `/dishes`                          |                                     | Sends all dishes                          |
| POST        | `/dishes`                          | {title,description,preparation... } | Creates a new dish                        |
| PATCH       | `/foodPlanning/:foodPlanningId`    | {isFav}                             | Adds food planning to favourite           |
| PATCH       | `/dishes/:dishId`                  | {isFav}                             | Adds dish to favourite                    |
| PATCH       | `/foodPlanning/:foodPlanningId`    | {key param}                         | Edit food planning param                  |
| PATCH       | `/dishes/:dishId`                  | {key param}                         | Edit dish param                           |
 
## Links

### Collaborators

[Águeda Muela]((https://github.com/lamardemuela))

[Asier Mimbrero]([https://github.com/MDasier])

### Project

[Repository Link Client](www.your-github-url-here.com)

[Repository Link Server](https://github.com/MDasier/backendCrudo)

[Deploy Link]([https://crudo-app.netlify.app])

### Slides

[Slides Link](www.your-slides-url-here.com)

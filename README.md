# hi

## to run:

have mongodb running at 27017

yarn

yarn start

http://localhost:3000/

see /cars

## to add cars:
Post request to http://localhost:3000/cars

with body:

{
    "car": [
        "toyota carolla"
    ]
}

## to reserve car:
Post re to http://localhost:3000/reserve

{
    "car":"grey sedan",
    "status":"unavailable"
}

## check availability
GET /search?availability=available

or

GET /search?availability=unavailable

### implementing
hook,
map, 
reduce,
filter 

TODO TESTING

in my fastify project
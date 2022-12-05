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

## TODO

implement
hook
map, reduce, and filter in my fastify project
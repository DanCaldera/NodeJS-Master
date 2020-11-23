# bio-wolf-js

## Math Example

`var app = {}`

`app.config = {`
`timeBetweenJokes: 1000,`
`}`

`app.printJoke = function () {`
`var allJokes = jokesLib.allJokes()`

`var numberOfJokes = allJokes.length`

`var randomNumber = mathLib.getRandomNumber(1, numberOfJokes)`

`var selectedJoke = allJokes[randomNumber - 1]`

`console.log(selectedJoke)`
`}`

`app.indefiniteLoop = function () {`
`setInterval(app.printJoke, app.config.timeBetweenJokes)`
`}`

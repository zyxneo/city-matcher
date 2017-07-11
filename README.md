# Notice

## About the task

I moved the original task to "task.md". Unfortunately I have not understand what the task is about...

1. There are two APIs with Cities, and they need to match somehow...The IDs are different, there is "admin_area" common, but it is too general, so only "name" is left to match. (Even the names are not equals, but they can be match e.g. with Regex)
1. "The interface should be made up of two columns - the cities listed." - What cities? There are thousands of cities in API "all"... So I searched on Github, and I found a solution from "rcbat73". He made 3 lines, one for each mock data. But in my opinion one input should display all possible data, because in real life there is no "a", "ab" and "ac" API.

I used [Autocomplete](https://kununu.github.io/nukleus/#/autocomplete) from [nukleus](https://kununu.github.io/nukleus), I hope I have configured it well.

I planned to use [CSSNext](http://cssnext.io/), but for compatibility with Kununu scss I stick to bootatrap naming conventions and scss files.

## Solutions

I picked [Reflex](http://leejordan.github.io/reflex/docs/) grid for building the interface using flexbox. The hyphens are replaced to underscores in classNames in order to easily use them with css-modules. The class names seems to be a bit hazard for complex cases, but it was interesting as an experiment. I already [experimented with flexbox](https://zyxneo.github.io/flexbox/try-flexbox), and used it on [win2day](https://www.win2day.at/).

## Todos

* [x] display the countries from API Endpoint “/v1/cities” in the first column
* [x] display only 10 row, use a pagination
* [ ] clean Component Composition
* [ ] result should be a combined object in console

### Nice to have

* [ ] display result as notification
* [ ] Application state should remember on pagination state
* [ ] responsive css for list

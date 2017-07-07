# Notice

## About the task

I moved the original task to "task.md". Unfortunately I have not understand what the task is about...

1. There are two APIs with Cities, and they need to match somehow...The IDs are different, there is "admin_area" common, but it is too general, so only "name" is left to match. (Even the names are not equals, but they can be match e.g. with Regex)
1. "The interface should be made up of two columns - the cities listed." - What cities? There are thousands of cities in API "all"... So I searched on Github, and I found a solution from "rcbat73". He made 3 lines, one for each mock data. But in my opinion one input should display all possible data, because in real life there is no "a", "ab" and "ac" API.

I used [Autocomplete](https://kununu.github.io/nukleus/#/autocomplete) from [nukleus](https://kununu.github.io/nukleus), but I can't formatted it, I don't find the way how to add classes or styling... I also checked [react-autowhatever](https://github.com/moroshko/react-autowhatever), still no effort. I assume that it should happen via props, like CSS modules...I hacked it for now.

I planned to use [CSSNext](http://cssnext.io/), but for compatibility with Kununu scss I stick to bootatrap naming conventions and scss files.

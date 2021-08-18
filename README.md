# Relief
Communicating with testers can be difficult. Let Relief update the testers on what should be tested.

## What is Relief?
Relief is a tool that lets you to create a connection between code and tests. When you change the code and push it to your repository, Relief will take care of understanding what is the impact of the changes on your app, and and notify the testers what should be tested.

**What is wrong with automated tests?**
Automation tests is an essential part of a software product. However, it's very hard to cover the entire app with automation tests, and it can create more pain than benefit for some parts of the application that change frequently. And let's not start talking about tests that are impacted by human cognition, where manual testing shines over automation.

### What is `relief-client`?
Relief client is an user interface to the Relief tool. It allows users to create and manage projects and tests.

### Features
* Create and manage projects
* Create and manage tests
* Connect your project to the repository
* Each time there is a commit to the target repository, Relief will analyze the changes and invalidate the tests that were impacted

## Tech
Relief client is created using `create-react-app`.

### Language
Javascript, JSX

### State managment
There is no external state manager (like Redux), instead it relies on `React.Context` for some shared data, and [react-query](https://react-query.tanstack.com/) to fetch, cache and update data.

### Styling
It uses CSS-in-JS [styled components](https://styled-components.com/) library

### Build and deploy
[Netlify](https://www.netlify.com/)

## Notes
This project is currently abbandoned.

**See also**: [relief-api](https://github.com/OleksandrDemian/relief-api)

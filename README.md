# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the
"[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)"related to the term "react", using the GitHub GraphQL API.
The application should display how many
"[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic,
and how many stargazers they have. And so forth.
To interact with the Github GraphQL API you'll need to have

- a [Github API
  key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application
- You may use whatever React framework or library you find useful.
- URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your
  application
- Your first goal is to have a working app, but feel free to improve the application however you
  see fit
- We hope that you can complete the assignment within 2 hours but don't set any time
  constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you
  Best of luck

## Dev Notes

- Leave any technical notes on any libraries or tools you chose to use, the more detail the
  better.

This project uses the following technologies:

- Package manager: Yarn
- Language: Typescript
- Development framework: Next js
- Component library: Chakra UI
- Testing framework: Jest && React testing library
- Code quality assunrace: Eslint, Prettier, Husky.

I also managed to make the app responsive, and added some features, for example, a message
appears when no topics are found. I also deployed the site, you can visit it [here](https://github-topics.vercel.app/react):

How to run app & test

- Leave instruction on how to run and test your app here

### To run this project, please:

- In the terminal, run:

  ```
  yarn install
  yarn start
  ```

### Avalable scripts

- Run test

```
yarn test
```

- Test driven development mode:

```
yarn test:watch
```

- Code coverage: log the code coverage to the console

```
yarn test:coverage
```

## Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring: I feel very comfortable in the way I structured the code.
  I'd like to move type interfaces to their own folder tho.
- Refactoring: I configured the testing libraries and created the scripts,
  but in the end I did not add test because it was taking me longer time
  than expected, In the next refactor i will add the tests.
- Additional Features: Manage the error when the API token expires. Add color theme support.


## Contact me!

- Site: [adrio.now.sh](https://adrio.now.sh/)
- [LinkedIn](https://www.linkedin.com/in/adrio1992/)

# Developed in 🇲🇽🇲🇽🇲🇽 by Armando del Río (SPECTER-B)

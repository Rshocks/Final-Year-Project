# About this repository
This is the repository which contains my application project in the module, Applied Project And Minor Dissertation undertaken in my final year of BSc (Hons) in Software Development at Atlantic Technological University (ATU) Galway.

## About the application
Echo is a social media sharing full stack system that was created to complement end-to-end testing utilizing Cypress to automate tests written in Gherkin syntax.

### Features of the application
- A full sign up / sign in system, alongside a welcome email for confirmation.
- A search system can be used to filter posts by title, or by their tagline.
- Users can upload posts in which they can include images, tags, a title, and a message.
- A user can delete their post after it has been created.
- Users can like posts which have been uploaded.
- Users can leave comments on posts and view other people's comments.
- After seeing a specific post, users can view related posts.
- Pagination is used to navigate through all of the application's posts.

### Test features of the application
- Implemented fully automated test scenarios, which cover most of the applications scenarios.
- Cypress was used to achieve the automation of the scenarios.
- Test were written using easy to understand gherkin syntax.
- If changes were made to the application, automated tests were run to assert the systems functionality.
- Coding of gherkin features done in TypeScript, and cypress assertions.

### Technology stack of the application
- Languages: JavaScript, TypesScript, CSS(Material-UI), HTML
- FrontEnd: React, Node
- BackEnd: Express, Node
- Database: Cloud MongoDB
- Testing: Cypress.io, Gherkin, Cucumber
- Task Tracking: Jira Software

## Interaction
Prerequisites: [Node.js](https://nodejs.org/en/download) and [Visual Studio Code](https://code.visualstudio.com/download) will have to be installed for interaction, the deployed application can be interacted online at https://echoatu.com/ , the testing suite must be used locally.

### Local Interaction with the test suite
If a tests fails first time re run said test feature should fix the issue:
- Clone this repository to your local environment.
- Go to the QAautomation folder, go to the terminal in the folder.
- Run npm install in the terminal.
- After the above is finished, run npm run cypress:open, a localhost window will open, then click E2E Testing and choose a browser.
- Click any feature you wish to test while in Spec.

### Local Interaction with the system
If npm install fails, run npm install --legacy-peer-deps
- Clone this repository to your local environment.
- Go to the client and server folders, and run a terminal environment in both.
- Run npm install in both terminals.
- In each terminal run npm start, at which point the application will launch on your local environment.
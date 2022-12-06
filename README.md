## <b> Local Surf Project </b><em>&nbsp;(lsp)</em>

---

### <u> Overview</u>

<br>

Local Surf Project is a responsive web app that is aimed at helping surfers find information on the surfbreaks around Christchurch. <br>

The web page will include different features that are aimed at helping out a surfer of any skill level in the region. I want to create a platform that groups together some of the most desired information a surfer might be looking for into a single web application.

<br>

Some of the features this app will include are ...

<br>

- Display information about the local surf breaks.
- Display information about the local surf forecasts.
- Include a Contact Page that has a submit form.
- Include an About Me page.
- Display content on choosing the right surfboard for different conditions.
- Include a Maps feature that shows six surf breaks around Christchurch.
- Aims to follow and build upon the designed wireframes.
- Includes a sign in account feature using Auth0 Authentication that will change how the page is displayed depending on the user.
- Include a Forum feature where a user can post to the database (if they have the correct permissions) and let others know if the surf is good.

<br>

---

### <u> Developer Environment </u>

<br>

The goal is to make it easy to quickly create branches to work on tickets from the Kanban board, then merge them into my dev-branch. Once enough tickets have been completed I can do a pull request to the deployed branch (main) and resolve any merge conflicts.

<br>

I wanted to create an easy to run working development environment that is different to the deployed environment. The developer environment uses some different environment variables, a locally hosted database and is built entirely within a Docker environment with hot reloading so it is easy to make changes.

<br>

### <u> Docker </u>

<br>

A `docker-compose.yml` file is made so all you need to build the app and install all the dependencies is for `Docker` to be installed and to run a single command. This makes it easy to quickly build the whole application on a common system so we can avoid versions not matching up or windows / mac / linux issues.

<br>

In the root directory type the following ...

<br>

```shell
docker-compose up --build
```

<br>

This will locally ...

<br>

- Create a <u> `React Application`</u> [(Port 3001)](http://localhost:3001/) and launch the `Client`.<br>

- Create a <u>`Node/Express API`</u> ([Port 5001](http://localhost:5001/)) to communicate with the `Database` and `Client`. <br>

- Create a <u>`MongoDB Database`</u> that communicates with the `API`, and populate it with data. <br>

- Create a <u>`MongoDB Express Server`</u> ([Port 8111](http://localhost:8111/)) that allows viewing of the database in the browser.

<br>

---

### <u>Deployed Environment </u>

<br>

The application is currently deployed using `Render` to host the `Client` and `API`, and `Mongo Atlas` is used to host the `Database`. The deployed main branch has some changes to the development branch. It uses different environment variables, does not use nodemon and is set up to access the cloud database and not a locally hosted database.

<br>

When a pull request is made to the main branch and changes are merged, Render will redeploy the site with those changes included.

<br>

---

### <u>`Deployed App`</u> - https://lsp-client.onrender.com/

##### _When viewing the deplyed page, it can take a minute to retrieve the data from the Mongo Atlas database due to using a free plan._

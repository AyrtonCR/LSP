## <b> Local Surf Project </b><em>&nbsp;(lsp)</em>

---

My goal for this project is to build from scratch a responsive website that will ...

- Display information about local surf breaks.
- Display information about local surf forecasts.
- Include a Contact Page & About Page.
- Display some content on choosing the right surfboard for the conditions.
- Include a Maps feature that shows the six breaks around Christchurch.
- Work to and build upon the designed wireframes.
- Have account functionality using Auth0 Authentication that will change how the page is displayed depending on the user.
- Include a Forum feature where a user can post to the database (if they have the correct permissions) and let others know if the surf is good.

---

## Docker

---

A `docker-compose.yml` file is made so all you need to run the app and install the dependencies is `Docker`. <br>
In the root directory type the following command ...

<br>

```shell
docker-compose up
```

<br>

This will locally ...

- Create the [React Application](http://localhost:3001/) and launch the `Client` which uses some external API's.
- Create an [Express API](http://localhost:5001/) to communicate with `Database` and `Client`.
- Create and populate a `MongoDB Database`.
- Create a [MongoDB Express](http://localhost:8111/) server that allows viewing of the `MongoDB Database` in the browser.

---

<br>

##### _Further down the track the project will be deployed online via Render._

<br>

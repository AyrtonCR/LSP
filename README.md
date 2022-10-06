## Local Surf Project (lsp)

#### This is a project I am building in my spare time that incorporates something I love doing with what I have learnt so far in my web development diploma.

<br>

#### The goal is to build from scratch a responsive website that will ...

<br>

- Display information about local surf breaks.
- Display information about surf forecasts.
- Include a Contact Page & About Page.
- Display some content on choosing the right surfboard.
- Include a Forum feature where a user can post to the database (if they have the correct permissions).
- Include a Maps feature that shows the six breaks around Christchurch.
- Have Auth0 Authentication that will change how the page is displayed depending on the user.

I have created json files with data that needs to be imported from the MongoDB database to be displayed on the page. I want to get this working with a docker-compose file but currently the data must be imported by doing the following.

     - Open MongoDB Compass
     - Select the lsp Database
     - Click on each Collection and select import data
     - Locate the corresponding json file in lsp/db

Once the data has been imported all content on the site will display properly.

#### (Further down the track the project will be hosted online via Render).

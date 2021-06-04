# Chatbot


### Description
This full stack application allows a user to make either a student or alumni profile and interact with a career prep chatbot.


### Methods
The postgres DB contains tables for users, user details, and multiple tables for different data to be shown to the user in the chatbot. Spring boot was used to to build the server which consumes weather, job, and quotes APIs and serves all of that info as well as data from our database. Finally the server was deployed on Heroku. 
<br />


Vue was used to build the site. A user can register a new student, or login if they have an account. They are then brough to the home page where they can interact with the chatbot. The chatbot provides help with soft skills, interview prep, job postings, and motivational picture. Inspirational quotes and current weather based on the ZIP code are presented when the page loads. Finally this was uploaded to Netlify to allow others to test the app.

<br />


### Next Steps 

The chatbot itself searches every message and assigns a topic and then performs logic based on that. I'd like to eventally ditch that method and instead integrate AI in python to give the bot more flexibility. 

# Chatbot


### Description
This full stack application allows a user to make either a student or alumni profile and interact with a career prep chatbot.


### Methods
The postgres DB contains tables for users, user details, and multiple tables for different data to be shown to the user in the chatbot. Spring boot was used to to build the server which consumes weather, job, and quotes APIs and serves all of that info as well as data from the postgreSQL database. Finally the server was deployed on Heroku. 
<br />


Vue was used to build the site. A user can register a new student, or login if they have an account. They are then brough to the home page where they can interact with the chatbot. The chatbot provides help with soft skills, interview prep, job postings, and motivational pictures. Inspirational quotes and current weather based on the ZIP code are presented when the page loads. Finally this was uploaded to Netlify to allow others to test the app.

<br />

### Visuals
##### Login Page
![image](https://user-images.githubusercontent.com/65408615/120839547-11f3de00-c537-11eb-92c1-016641cd7665.png)

##### Home Page
![image](https://user-images.githubusercontent.com/65408615/120839154-97c35980-c536-11eb-89ee-10c783f0b22e.png)

##### Chatbot
![image](https://user-images.githubusercontent.com/65408615/120839762-55e6e300-c537-11eb-8fc4-1b19e454b790.png)


### Next Steps 

The chatbot itself searches every message and assigns a topic and then performs logic based on that. I'd like to eventally ditch that method and instead integrate AI in python to give the bot more flexibility. 

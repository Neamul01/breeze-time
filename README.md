# Getting Started with Breeze Time application

This site is live on [Breeze Time](https://breeze-time.netlify.app).
This site is server side code link [Breeze Time server](https://github.com/Neamul01/breeze-time-server).

# Breeze Time 

The name of this project is Breeze Time. This project is used to maintain a schedule. Users can use this site to set any schedule for the event. They can maintain their events and can invite anyone to their event. The total overview of this project is given below:

## Header: 
From this part, the user can know about all page info. In the navbar, we have a Home page, Teams page, Pricing page, About page, Contact page, and user Sign In page.

## Home: 
From the home page users can get the details of our site. Event creation, our features info, all clients whom we work with, and reviews of our valuable clients are showcased here.

## Teams page: 
From this page, a user can directly go to the event creation page for their teams.

## Pricing: 
From this page, the user can take any package for the schedule management system. Currently, we have three different packages. 

## About page: 
Users can get info about the Breeze Time management and also the Breeze Time Developers from this page.

## Contact Page: 
If users have any queries they can share them with our support unit via the contact form. They need to fill up the form and write any queries with details.

## Sign In page: 
Users can create an account from this page or sign in with their Google account. After Sign In with their account, they will get access to creating an event and will get dashboard access to manage their events.

## Footer: 
Footer is a short overview of the site. Any short link to the site is shown here. Breeze Time info and its social media information will show there.

## Features:
* Authentication System: Users have to create an account to get premium access. To make this feature we have used firebase authentication and react firebase authentication. Users' login access will secure with a secret key. After a sudden period, their key will expire, and they have to log in again to access their account.

* Payment System: We have some attractive packages for our premium clients. They can take any of them and make a payment with their bank card, or master card. In this feature, we used a stripe payment system and after a successful payment, users will get a notification via email.

* Notification System: User will get their active event info or event starting reminder notification in the right nav bar. To manage this part we used moment.js and node-schedule.

* ChatBot: Users can make contact with a real-time chatbot. If need any further info this bot will trigger a conversation with a support person. In this feature, we used Dialogflow and communicate.

* Reviews: Any registered user can give a review about our project. Every review will show on the home page. This section is restricted to admin. An admin can only preview the reviews but can not provide reviews.

* Admin Dashboard: It is a protected route only for the admin. In this admin will show his/her basic info and they can modify their info from the editing part. Admin can manage all users and give someone admin access. All packages will show in the packages menu bar. Admin can update or delete any package info or add any new package. In the menu, we have a professional menu that our premium client will show. Admin can also manage the premium clients.

* Professionals Dashboard: The users who will take a package plan from us will get a protected route for them. In this field, they will get their basic info and they can manage their info also. They can renew their package plan and can also cancel their plan.

* Users Dashboard: Users who create an account will get a dashboard for themself. This is a protected route. Users can manage their created events from here and can update their basic info.

* One-to-One meeting: On the site, we have four types of event creation categories. For example one-to-one, Group, Collective, and Roundrobin. Currently, we activate only One-to-one meetings and Group meetings. The rest of the features will come soon.

* Email System: After completing a successful payment clients will get a successful email in their mail account. After creating events the target person with whom they want to connect with will get an invitational email.

* Video Chat: This is the main feature of our site. All events will show in the dashboard and users can start the meeting by clicking the start meeting button. To create the video chat we have used video SDK documentation to implement this video chat system, and also used some of the technology like material-UI, compressors, emoji-mart, fabric, hls.js, not stack, react-color, react-device-detect, react-emoji-render, react-lines-ellipsis, react-linkify, react-Lottie, react-motion, react-player, react-responsive, react-router-dom, react-use-clipboard, react-virtualized, react-visibility-sensor.

## Technologies: 
To give the users a good experience there used some libraries. These are:- React, React-Router-Dom, EmailJs, Reduxjs, React-Redux, Stripe, React-Query, Aos, Axios, Daisy UI, DayJs, Firebase, React, React-Datetime-Picker, React-Fast-Marquee, React-Firebase-Hooks, React-Rook-Form, React-Icons, React-Loader-Spinner, React-Timezone-Select, React-Toastify, Socket.io, Node, Express, MongoDB, Heroku, etc.

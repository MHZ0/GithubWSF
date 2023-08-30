
!! Project description !!

 This project is a github alike react app that is based on dispalying the users 
 infos and repos with the ability to insert any github username by passing
 it as a parameter in the url or with the user github token allowing to
 filter the displayed reposiotries by using a functional searchbar.


!! How to run !!

You can pass the username as a parameter in the url like this:
http://localhost:3000/ReposRespage?user=yourusername
or You can get your authentication token from the official github website
and put in the .env exactly modifying the REACT_APP_GHTOKEN environment variable
with your given token or even making a default user to be display when page 
laods (you can do that by adding || "username" in front of the retrieve 
of the user in the url params).


!! Future adjustments & improvements !!

- completing and linking the overview and project page with the user to be built up and displayed.
- Adding more functionalities and features for the users with tokens to be
 able to add, edit and delete their reposiotries.
- Bringing Real-time Notifications to the users.
- adding a dark mode.
- adding a loading spinner.


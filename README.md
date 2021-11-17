![](https://github.com/Lylio/image-repo/blob/master/logos/quarkus.png?raw=true)
![](https://github.com/Lylio/image-repo/blob/master/logos/react.png?raw=true)
![](https://github.com/Lylio/image-repo/blob/master/logos/mongodb.png?raw=true)
![](https://github.com/Lylio/image-repo/blob/master/logos/auth0.png?raw=true)

# Quarkus Contacts

### Description
A contact management app.

### Tech Stack
- Quarkus (JDK 11)
- React
- MongoDB
- Auth0

### Setup & Launch

#### Database
Create a MongoDB database called 'quarkus-contacts' using the Mongo shell:
`use quarkus-contacts`

The database won't be visible with the command `show dbs` until some data has been inserted
into the User table:

POST http://localhost:8080/api/users
```
{
   "firstName":"Sarah",
   "lastName": "Piddle",
   "emailId": "spiddy@gmail.com"
}
```

GET http://localhost:8080/api/users
```
 {
     "emailId": "spiddy@gmail.com",
     "firstName": "Sarah",
     "id": "61953f30f0527210d131cc82",
     "lastName": "Piddle"
 }
```

#### Quarkus Backend Launch
1. Navigate to the root backend directory (where pom.xml is)
2. Run `mvn quarkus:dev`

#### React Frontend Launch
1. In a second terminal tab, navigate to the root frontend directory (where package.json is)
2. Run `npm install`
3. Run `npm start`
4. Navigate to http://localhost:3000





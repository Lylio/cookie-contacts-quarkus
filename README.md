![](https://github.com/Lylio/image-repo/blob/master/logos/quarkus.png?raw=true)
![](https://github.com/Lylio/image-repo/blob/master/logos/react.png?raw=true)
![](https://github.com/Lylio/image-repo/blob/master/logos/mongodb.png?raw=true)

# Laldy Contacts

### Description
A contact management app for users to store name, address, email and phone number data.

### Tech Stack
- Quarkus (JDK 11)
- React
- MongoDB

### Setup & Launch

#### Database
Create a MongoDB database called 'laldy-contacts' using the Mongo shell:
`use laldy-contacts`

The database won't be visible with the command `show dbs` until some data has been inserted
into the Contact table:

POST http://localhost:8080/api/contacts
```
{
    "firstName": "Artie",
    "lastName": "Foodle",
    "emailAddress": "a.foodle@horizon.com",
    "phoneNumber": "+44 0768763387676",
    "jobTitle": "Tech Lead",
    "company": "Horizon"
}
```

GET http://localhost:8080/api/contacts
```
 {
        "company": "Horizon",
        "emailAddress": "a.foodle@horizon.com",
        "firstName": "Artie",
        "id": "61958dac403658344c7c2847",
        "jobTitle": "Tech Lead",
        "lastName": "Foodle",
        "phoneNumber": "+44 0768763387676"
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





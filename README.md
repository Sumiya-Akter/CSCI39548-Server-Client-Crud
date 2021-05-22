# starter-server

Starter code for the backend of our final CRUD app

To start:

`npm run dev`

Download Postgres and Postman. 

All Campuses and Students

Backend (Sequelize)
- [ ] Write a `campuses` model with the following information:
  - [x] name - not empty or null
  - [x] imageUrl - with a default value
  - [ ] address - not empty or null
  - [x] description - extremely large text

- [ ] Write a `students` model with the following information:
  - [x] firstName - not empty or null
  - [x] lastName - not empty or null
  - [ ] email - not empty or null; must be a valid email
  - [x] imageUrl - with a default value
  - [x] gpa - decimal between 0.0 and 4.0

- [x] Students may be associated with at most one campus
- [x] Campuses may be associated with many students


(Express and Sequelize)
- [x] Write a route to serve up all students
- [x] Write a route to serve up all campuses

Single Student and Single Campus 

Backend (Express and Sequelize)
- [x] Write a route to serve up a single campus (based on its id), _including that campuses' students_
- [x] Write a route to serve up a single student (based on their id), _including that student's campus_

Adding a Campus and Adding a Student 

Backend (Express and Sequelize)
- [x] Write a route to add a new campus
- [x] Write a route to add a new student

Removing a Campus and Removing a Student 

Backend (Express and Sequelize)
- [x] Write a route to remove a campus (based on its id)
- [x] Write a route to remove a student (based on their id)



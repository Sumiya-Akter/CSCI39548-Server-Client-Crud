# starter-server

Starter code for the backend of our final CRUD app

To start:

`npm run dev`

Download Postgres and Postman. 

All Campuses and Students (21/57)

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

Frontend (React-Redux, React, and React Router)
- [ ] Write a campuses sub-reducer to manage campuses in your Redux store
- [ ] Write a students sub-reducer to manage students in your Redux store

- [ ] Write a component to display a list of all campuses (just their names and images)
- [ ] Write a component to display a list of all students (just their names)
- [ ] Display the all-campuses component when the url matches `/campuses`
- [ ] Display the all-students component when the url matches `/students`
- [ ] Add links to the navbar that can be used to navigate to the all-campuses view and the all-students view

Single Student and Single Campus (14/57)

Backend (Express and Sequelize)
- [x] Write a route to serve up a single campus (based on its id), _including that campuses' students_
- [x] Write a route to serve up a single student (based on their id), _including that student's campus_

Frontend (React and React Router)
- [ ] Write a component to display a single campus with the following information:
  - [ ] The campus's name, image, address and description
  - [ ] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [ ] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [ ] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view

- [ ] Write a component to display a single student with the following information:
  - [ ] The student's full name, email, image, and gpa
  - [ ] The name of their campus (or a helpful message if they don't have one)
- [ ] Display the appropriate student when the url matches `/students/:studentId`
- [ ] Clicking on a student from the all-students view should navigate to show that student in the single-student view

- [ ] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [ ] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

Adding a Campus and Adding a Student (12/57)

Backend (Express and Sequelize)
- [x] Write a route to add a new campus
- [x] Write a route to add a new student

Frontend (React and React Router)
- [ ] Write a component to display a form for adding a new campus that contains inputs for _at least_ the name and address.
- [ ] Display this component EITHER as part of the all-campuses view, or as its own view
- [ ] Submitting the form with a valid name/address should:
  - [ ] Make an AJAX request that causes the new campus to be persisted in the database
  - [ ] Add the new campus to the list of campuses without needing to refresh the page

- [ ] Write a component to display a form for adding a new student that contains inputs for _at least_ first name, last name and email
- [ ] Display this component EITHER as part of the all-students view, or as its own view
- [ ] Submitting the form with a valid first name/last name/email should:
  - [ ] Make an AJAX request that causes the new student to be persisted in the database
  - [ ] Add the new student to the list of students without needing to refresh the page

Removing a Campus and Removing a Student (10/57)

Backend (Express and Sequelize)
- [x] Write a route to remove a campus (based on its id)
- [x] Write a route to remove a student (based on their id)

Frontend (React and Axios/Fetch)
- [ ] In the all-campuses view, include an `X` button next to each campus
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that campus to be removed from database
  - [ ] Remove the campus from the list of campuses without needing to refresh the page

- [ ] In the all-students view, include an `X` button next to each student
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that student to be removed from database
  - [ ] Remove the student from the list of students without needing to refresh the page


Total: - / 57

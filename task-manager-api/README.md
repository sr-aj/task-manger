# 🧰 Task Management API

This project is a simple RESTful API for a Task Management Application, built as part of a Backend Development Intern Assignment. It provides functionality similar to basic versions of Trello or Todoist, with user and task management features.

---

## 📌 Objective

Build and expose RESTful endpoints to manage users and their tasks, including features like task assignment, filtering, and basic CRUD operations.

---

## 🛠️ Tech Stack

- **Node.js + Express + MongoDB**

---

## 🔧 Features

### 👤 User APIs

- `POST api/users` – Create a new user with name and email.
- ![image](https://github.com/user-attachments/assets/0b7da73b-e35e-4b8b-a3f9-ff35efa2cf0d) -
-  `GET api/users` – List all users.
- ![image](https://github.com/user-attachments/assets/52ff735c-fcad-48d0-b03a-519dbfa330f5)
- - `GET api/users/:id` – Fetch a specific user by ID.
- ![image](https://github.com/user-attachments/assets/ffe60ca1-f832-4fb9-a038-605cb4c3f4f5)

- ### ✅ Task APIs
- `POST api/tasks` – Create a task (title, description, due date, status, assignedUserId).
- ![image](https://github.com/user-attachments/assets/77702eb1-6632-460c-97ff-b8522b506932)

- - `GET api/tasks/:id` – Fetch a specific task by ID.
- ![image](https://github.com/user-attachments/assets/eae89cea-e93d-46ea-94be-eb8a95a9d077)
  - `GET api/tasks` – List all tasks. Supports optional filters:
  - `status`
  - `assignedUserId`
- ![image](https://github.com/user-attachments/assets/5333a89e-f14f-45de-ad82-ac7213c77d07)

- `PUT api/tasks/:id` – Update a task.
- ![image](https://github.com/user-attachments/assets/6bf53e4f-33d3-4e64-9d50-69a096450735)

- - `DELETE api/tasks/:id` – Delete a task.
- ![image](https://github.com/user-attachments/assets/e87f752c-da08-4399-a6ae-266d38becf83)







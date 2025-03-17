# react-task-organizer

Built to organize your tasks according to what needs to be done first.

## json-server

The app is using json-server in order to mimic a backend.
To start the json-server:

### `json-server -w data/db.json -p 3500`

## Brief Introduction

The app uses **Drag & Drop API** from HTML 5. You can drag & drop a task from one status to another. The app is built using **Vite**. **Redux Toolkit** is being used for state management. API calls are made using **RTK Query**. Used **react-router-dom** for easy routing.

All the **CRUD operations** along with Drag and Drop updates are being handled inside `tasksSlice.js`.
Also the tasks are now sorted on the basis of their **priority** (low, medium, high & extreme). Each tasks can be viewed separately in the `SingleTaskPage.jsx` , which gives the details about that specific task. There you can **Edit or Delete** that task.

A progress bar is shown below the task in the TaskCard component (right now the progress bar depends on the task’s status e.g. if a task’s status is “To Do”, the progress bar would show 25% and if the task’s status is “In Review”, the progress bar would show 75%).

UI updates also applied along with media queries to make it work on all screen sizes (hopefully).

![Screenshot 2025-03-17 at 1 25 29 PM](https://github.com/user-attachments/assets/e288ab63-9a6b-4059-8880-2fbd22c05eb0)

![Screenshot 2025-03-17 at 1 25 42 PM](https://github.com/user-attachments/assets/39a23da7-c65d-4c37-b5df-ac6b72f9cb12)

![Screenshot 2025-03-17 at 1 26 06 PM](https://github.com/user-attachments/assets/d8f7b79a-9f59-4468-acaa-2b23acfb9f90)

![Screenshot 2025-03-17 at 1 26 55 PM](https://github.com/user-attachments/assets/8aaa886c-d896-49e5-b802-12ae1bd11513)

![Screenshot 2025-03-17 at 1 27 09 PM](https://github.com/user-attachments/assets/e0825f2a-5cf6-4c20-af21-87646e69901a)


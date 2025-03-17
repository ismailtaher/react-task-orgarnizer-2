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

# 🎓 StudyNotion – An EdTech Platform (MERN Stack)

StudyNotion is a full-stack EdTech platform built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It enables users to learn, teach, and manage courses efficiently with features like authentication, dashboards, progress tracking, and payment integration.

LIVE DEMO:[https://e-commerce-2-t22u.onrender.com]
---

## ✅ Features

### 👥 User Authentication
- Secure login and signup using **JWT (JSON Web Tokens)**.
- Supports **Student, Instructor, and Admin roles**.
- Profile management for all users.

### 📚 Courses & Content Management
- Instructors can **create, edit, and manage courses and lectures**.
- Students can **enroll in courses and access learning content**.
- Admin must **create course categories** before instructors upload courses.

### 📊 Progress Tracking
- Tracks **completed lessons, quiz scores, and overall progress** for each enrolled course.

### 💳 Payment Integration
- Integrated with **Razorpay** for secure course purchases.

### 🔍 Search Functionality
- Search courses, lessons, or topics easily.

### 📈 Instructor Dashboard
- Instructors can view **total students, course performance, and income reports** with clear visualizations.

---

## ⚠ Important Instructions

- The **backend is located in the `server/` folder**.
- Before adding courses, **create categories** from the Admin Panel.
- To make an account an Admin:
  1. Sign up as a Student or Instructor.
  2. Go to your database → `users` collection.
  3. Change `accountType` to `"Admin"` manually.

----

***
## Screenshots

![Screenshot 1](https://github.com/AJKakarot/E-Commerce/blob/main/screenshots/Screenshot%202025-10-27%20at%205.56.07%E2%80%AFAM.png?raw=true)
![Screenshot 2](https://github.com/AJKakarot/E-Commerce/blob/d54b9279a2c8b7d454e685d94c6c210db3ea03ed/screenshots/Screenshot%202025-10-27%20at%205.55.16%E2%80%AFAM.png?raw=true)
![Screenshot 3](https://github.com/AJKakarot/E-Commerce/blob/main/screenshots/Screenshot%202025-10-27%20at%205.55.20%E2%80%AFAM.png?raw=true)

<details>
<summary>More screenshots</summary>

![Screenshot 4](https://github.com/AJKakarot/E-Commerce/blob/main/screenshots/Screenshot%202025-10-27%20at%205.55.35%E2%80%AFAM.png?raw=true)
![Screenshot 5](https://github.com/AJKakarot/E-Commerce/blob/main/screenshots/Screenshot%202025-10-27%20at%205.56.20%E2%80%AFAM.png?raw=true)
![Screenshot 6](https://github.com/AJKakarot/E-Commerce/blob/main/screenshots/Screenshot%202025-10-27%20at%205.56.25%E2%80%AFAM.png?raw=true)

</details>


***


## Important
* Backend is  in the server folder.
* Before uploading courses and anything create the categories e.g. web dev, Python, etc. (without categories courses cannot be added). To create categories create an Admin account and go to dashboard then admin panel.
* To create an Admin account first sign up with a student or instructor account then go to your Database under the users model and change that 'accountType' to 'Admin'.


## Installation

## 📦 Installation Guide
```sh

### 1️⃣1.Clone the Repository
```sh
git clone https://github.com/AJKakarot/E-Commerce.git
cd E-Commerce
2. Install the required packages.
    npm install
    
    cd server
    npm install
    ```

3. Set up the environment variables:

   Create a .env file in the root directory and /server
   Add the required environment variables, such as database connection details, JWT secret, and any other necessary configurations check .env.example files for more info.


4. Start the development server.
    ```sh
    npm run dev
    ```

5. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.
# E-Commerce

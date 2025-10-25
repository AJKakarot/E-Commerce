# 🎓 StudyNotion – An EdTech Platform (MERN Stack)

StudyNotion is a full-stack EdTech platform built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It enables users to learn, teach, and manage courses efficiently with features like authentication, dashboards, progress tracking, and payment integration.

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

---

## 📦 Installation Guide

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/himanshu8443/Study-Notion-master.git
cd Study-Notion-master

***
## Screenshots
![Screenshot 2023-07-25 210844](https://github.com/himanshu8443/Study-Notion-master/assets/99420590/0cba8d5b-6a47-4721-ac9f-4279107c257e)
![Screenshot 2023-07-25 211309](https://github.com/himanshu8443/Study-Notion-master/assets/99420590/62c33b56-0bd5-4330-b1db-d41b80d9f69f)
<details>
  <summary>More screenshots</summary>
  
![Screenshot 2023-07-25 211451](https://github.com/himanshu8443/Study-Notion-master/assets/99420590/63f7163d-a74a-4e78-bc78-6b96b06073f9)
![image](https://github.com/himanshu8443/Study-Notion-master/assets/99420590/59d1d8c2-2824-45bb-a2f7-6f5dc234895c)
</details>

***

## Important
* Backend is  in the server folder.
* Before uploading courses and anything create the categories e.g. web dev, Python, etc. (without categories courses cannot be added). To create categories create an Admin account and go to dashboard then admin panel.
* To create an Admin account first sign up with a student or instructor account then go to your Database under the users model and change that 'accountType' to 'Admin'.


## Installation

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/himanshu8443/Study-Notion-master.git
    ```

2. Install the required packages.
    ```sh
    cd Study-Notion-master
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

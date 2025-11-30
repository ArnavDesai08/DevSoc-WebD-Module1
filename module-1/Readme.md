# Module 1: Basic Calculator

## **Objective:**

In this module, you'll be creating a simple calculator using **HTML**, **CSS**, and **JavaScript**.

## **Assignment Details:**

You are required to build a simple calculator that can perform basic arithmetic operations: addition, subtraction, multiplication, and division. However, feel free to be as creative as you like with the design and functionality! While the core functionality must include the basic operations, the look and feel of your calculator is entirely up to you.

## **Tasks:**

### 1. HTML:

HTML is the **skeleton** of your calculator. It defines the elements users will interact with.

- **Display Area:** This is typically a single input field or a `<div>` element where the numbers, operators, and final result are shown. It's crucial for user feedback.
    - *Suggestion:* Use an `id` like `display` on this element to easily target it with JavaScript.
- **Buttons:** You'll need a set of buttons for all numbers (0-9) and operations.
    - *Core Requirement:* Buttons for **0-9**, **+**, , , **/**, and **=** (equals).
    - *Common Additions:* A **Clear** button (C or AC) to reset the calculator, and perhaps a **Decimal Point** (.).
    - *Suggestion:* Group your buttons logically using `<div>` elements (e.g., a `container` for the whole calculator, and a `keypad` for all the buttons) and use **classes** to style them easily with CSS (e.g., `class="number-button"`, `class="operator-button"`).

### 2. CSS:

CSS is the **appearance** and **layout** of your calculator.

### **Visual Appeal**

- Use CSS to define **colors**, **fonts**, **padding**, and **margins**.
- Experiment with `box-shadow` for a tactile, 3D effect on the buttons, making them look like they can be pressed.
- Use the `:hover` pseudo-class to change a button's appearance when the mouse is over it, and the `:active` pseudo-class for when it's being pressed—this provides excellent user feedback.
- Style the calculator to make it visually appealing.
- Responsive Design: Make sure your calculator works well on different screen sizes, including mobile devices. The layout should adapt and remain usable whether viewed on a phone, tablet, or desktop screen. Use media queries to adjust the button sizes, layout, and display area for smaller screens.

### **3. JavaScript**:

- Implement the functionality of the calculator using JavaScript.
- Implement the logic to evaluate the expression when the `=` button is clicked.

---

## The Git & GitHub Submission Process

---

**Git** is a **Version Control System** that tracks changes to your code. **GitHub** is a cloud-based hosting service for Git repositories. You will use both to complete and submit the assignment.

### 1. Forking the Repository (GitHub)

The **Fork** button creates a **personal copy** of the original repository under your own GitHub account. This copy is where you will do your work.

- **Action:** Click the "Fork" button on the top-right of the original repository page.
- **Result:** You now have a repository at `https://github.com/YOUR_USERNAME/module-webd-25-26.git`.

### 2. Cloning the Repository (Local Machine)

The **Clone** command downloads your personal copy of the repository from GitHub to your computer.

- **Command:** `git clone https://github.com/YOUR_USERNAME/module-webd-25-26.git`
- **Action:** Open your terminal/command prompt, navigate to where you want to save the project, and run the command.
- **Result:** A new folder named`module-webd-25-26` is created on your local machine.

### 3. Start Working (Local Machine)

- **Navigate:** Change into the newly created folder: `cd module-webd-25-26`
- **Implementation:** Create all your calculator code (`index.html`, `style.css`, `script.js`) inside the **`module-1`** folder within the repository.

### 4. Committing Your Changes (Local Machine & Git)

Committing is like creating a **snapshot** of your code at a certain point in time. It saves your work to your local Git history.

- **Stage Changes (`git add`):** Tells Git which files you want to include in the snapshot.
    - `git add .` (Adds **all** changed files in the current directory and subdirectories.)
- **Commit Snapshot (`git commit`):** Records the staged changes locally with a descriptive message.
    - `git commit -m "Completed Basic Calculator for Module 1"`
    - *(Your commit message should describe the work you've done.)*

### 5. Pushing Your Changes (Local Machine to GitHub)

**Pushing** uploads your local commits to your personal repository on GitHub, making your work visible online.

- **Command:** `git push origin main` (or `git push origin master`, depending on the branch name)
- **Result:** Your updated code is now on GitHub at `https://github.com/YOUR_USERNAME/module-webd-25-26.git`. This is the link you will submit.

---

## ✅ Submission Instructions

You need to submit the **URL** to your final, pushed-to-GitHub repository.

1. **Ensure you have pushed all your latest code** to your forked repository on GitHub (Step 5 above).
2. **Copy the URL** of your forked repository. It should look like this:
`https://github.com/YOUR_USERNAME/webd-modules`
3. **Go to the Google Form link:** `https://forms.gle/JQSYZTpwwYFW384MA`
4. **Paste the URL** into the required field and complete any other necessary fields.

Good luck! This project will teach you fundamental web development skills.
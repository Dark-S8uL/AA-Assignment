# AA-Assignment

This repository contains an automated test suite built using **Cypress** with the **Page Object Model (POM)** design pattern. It includes reusable components and organized test flows for two use cases.

---

## 📌 Project Structure
```
cypress/
├── e2e/ # Test specifications
│ ├── login.cy.js
│ ├── usecase1.cy.js # Use Case 1 – Create message box task
│ └── usecase2.cy.js # Use Case 2 – Create Learning Instance
│
├── fixtures/ # Test data
│ ├── example.json
│ └── testData.json
│
├── pages/ # Page Object files
│ ├── BotPage.js
│ ├── LearningInstancePage.js
│ ├── LoginPage.js
│ └── messageBoxPage.js
│
├── support/ # Custom commands and setup
| ├── commands.js
| └── e2e.js
|
├── .cypress.env.json # Secret credentials (gitignored)
|
├── .cypress.config.js # Cypress configuration
|
├── .gitignore
|
├── package.json
|
└── README.md
```
---

## ✅ Use Cases Covered

### 1. **Use Case 1 – Create Message Box Task**

- Automates creation of a message box task.
- Uses assertions to validate successful bot creation.

### 2. **Use Case 2 – Create a Learning Instance**

- Automates creating a Learning Instance with **User-defined** fields.
- Uses assertions to verify instance creation and field values.

---

## ⚙️ Features

- 🧱 **Page Object Model (POM)** for reusable, maintainable test code
- 📁 **Test Data via Fixtures** (`testData.json`, `cypress.env.json`)
- ✅ **Assertions** using Cypress’ built-in `should()` and `contains()`
- 🔁 **Reusable Steps** for login, field interactions, and modal handling
- 📊 **Mocha-based Reporting** (default in Cypress)

---

## 🧪 Tech Stack

- [Cypress](https://www.cypress.io/) – JavaScript-based E2E testing
- Mocha (test runner used by Cypress)
- Node.js and NPM

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Dark-S8uL/AA-Assignment.git
cd AA-Assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a cypress.env.json file in the root directory:

```bash
{
  "username": "your-username",
  "password": "your-password"
}
```

⚠️ This file is already ignored in .gitignore to protect sensitive data.

### 4. Run Cypress with GUI

```bash
npx cypress open
```

### 5. Run Cypress in Headless Mode

```bash
npx cypress run
```

---

### Good Practices Followed

1. ✅ Secrets are not committed (thanks to .gitignore)

2. ✅ Modular and Maintainable tests via POM

3. ✅ Reusable logic (e.g., login, field creation)

4. ✅ Fixtures used for dynamic test input

5. ✅ Assertions used wherever required

# Swift Translator Test Automation Suite

## Course & Student Details

* **Degree**: BSc (Hons) in Information Technology – Year 3
* **Module**: IT3040 – IT Project Management (ITPM)
* **Assignment**: Assignment 1 (Semester 2)
* **Registration Number**: IT23175952

---

## Project Overview

This project implements an **automated testing suite** for **Swift Translator**, a web-based application that converts **Singlish to Sinhala** text.
The automation is developed using **Playwright** to validate functional correctness, error handling, and UI behavior.

**Test Coverage**

* 24 Positive Functional Test Cases
* 10 Negative Functional Test Cases
* 1 UI Test Case

---

## Technologies Used

* Playwright
* JavaScript
* Node.js
* Chromium Browser

---

## Prerequisites

* Node.js (v14 or higher)
* npm (Node Package Manager)

---

## Installation

```bash
git clone https://github.com/ChamaraJK/ITPM_Assignment_01_swift_translator_automation
cd ITPM_Assignment_01_swift_translator_automation
npm install
npx playwright install chromium
```

---

## Project Structure

```
IT22918888/
├── tests/
│   ├── swift-translator.spec.js
│   └── test-data.json
├── playwright.config.js
├── package.json
├── test-results/
├── playwright-report/
└── README.md
```

---

## Running Tests

```bash
npx playwright test
npx playwright test --headed
npx playwright test --debug
```

View HTML Report:

```bash
npx playwright show-report
```

---

## Test Validation Strategy

* **Positive Tests**: Keyword-based validation (≥60% match)
* **Negative Tests**: Invalid and edge-case input handling
* **UI Test**: Real-time translation and responsiveness

---

## Notes

* Tests interact with the **live Swift Translator website**
* Unicode Sinhala characters are used (UTF-8 encoding)
* Screenshots and videos are captured only on failures

---

## License

Created for **academic purposes only** as part of **IT3040 – ITPM** at SLIIT.

---

## Author

**IT23175952**


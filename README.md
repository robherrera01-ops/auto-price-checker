# 🚗 Local Auto Price Checker

A simple, mobile-first web application designed to simulate checking the real-time prices of used vehicles within a local 100-mile radius of a given ZIP code.

This project is built entirely with **HTML, CSS, and vanilla JavaScript** and serves as an excellent example of a responsive front-end application with form handling and dynamic results rendering.

## ✨ Features

* **Responsive Design:** Clean, mobile-first CSS ensures the app looks great on any screen size.
* **Form Validation:** Uses HTML5 validation (`required`, `pattern`) and basic JavaScript logic to ensure valid input (e.g., correct ZIP code format, reasonable year range).
* **Dynamic Data Simulation:** Simulates an API call delay (1.5 seconds) to mimic real-world network latency.
* **Dynamic Results:** Fetches and displays simulated local listings, including seller/dealer distance, mileage, and price.
* **Price Sorting:** Automatically sorts listings to show the lowest prices first, helping users quickly find the best deals.
* **Year Defaulting:** Automatically sets the input year to the current year upon page load for convenience.

## 🛠️ Technology Stack

* **HTML5:** Structure
* **CSS3:** Styling (Mobile-First approach)
* **Vanilla JavaScript (ES6+):** Form handling, data simulation, DOM manipulation, and results rendering.

## 🚀 How to Run Locally

You don't need a server to run this project—it's a static HTML file!

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YourUsername/your-repo-name.git](https://github.com/YourUsername/your-repo-name.git)
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Open the File:** Locate the `index.html` file in your file explorer and open it directly in your web browser (e.g., Chrome, Firefox).

## 💡 How the Simulation Works

Since this is a front-end-only project, the price checking mechanism is simulated:

1.  The JavaScript function attached to the form's `submit` event prevents the default submission.
2.  It displays a **"Searching..."** loading message.
3.  A `setTimeout` function introduces a 1.5-second pause to mimic network latency.
4.  After the pause, a hardcoded JavaScript array (`const listings = [...]`) containing simulated vehicle data is used to dynamically build and display the results list on the page.

## 📝 Future Improvements

* Integrate with a real automotive pricing API (e.g., MarketCheck, Edmunds).
* Add filtering options (max mileage, seller type).
* Implement client-side routing for multi-page applications.

***

*Replace `YourUsername/your-repo-name.git` with your actual GitHub username and repository name.*

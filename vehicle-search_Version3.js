// --- JavaScript Functionality ---
    
// Function to dynamically populate the 'Year' input
function populateYearInput() {
    const yearInput = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    
    // 1. Set max attribute to current year (HTML validation helper)
    yearInput.setAttribute('max', currentYear);

    // 2. Set the placeholder and value to the current year by default
    yearInput.value = currentYear;
    yearInput.placeholder = `e.g., ${currentYear}`;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', populateYearInput);

document.getElementById('price-search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const year = document.getElementById('year').value;
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const zipcode = document.getElementById('zipcode').value;
    const resultsDiv = document.getElementById('results');
    const statusMessage = document.getElementById('status-message');

    // BASIC INPUT VALIDATION: Ensure year is within a reasonable range (optional but good practice)
    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
        statusMessage.textContent = 'Please enter a valid vehicle year (e.g., 1990 - ' + currentYear + ').';
        statusMessage.classList.add('error-message'); // You would need to define this style
        return; 
    } else {
         statusMessage.classList.remove('error-message');
    }

    // 1. Display Loading State
    resultsDiv.innerHTML = '<h2>Search Results (100-Mile Radius)</h2>';
    statusMessage.textContent = 'Searching local market for ' + year + ' ' + make + ' ' + model + '...';
    
    // Ensure the status message is styled as loading and is visible
    if (!document.getElementById('status-message')) {
        resultsDiv.appendChild(statusMessage);
    }

    // 2. Simulate API Call (Replaced with actual API call in a real app)
    // A real app would use 'fetch()' here to query a service like MarketCheck/KBB
    setTimeout(() => {
        
        // Simulated Data representing listings found within 100 miles
        const listings = [
            { dealer: "Dealer A (5 mi)", mileage: 35000, price: 23500 },
            { dealer: "Dealer B (45 mi)", mileage: 41000, price: 22900 },
            { dealer: "Private Seller (12 mi)", mileage: 32000, price: 21950 },
            { dealer: "Dealer C (90 mi)", mileage: 55000, price: 20500 },
            { dealer: "Dealer D (20 mi)", mileage: 33000, price: 24200 }
        ];

        if (listings.length === 0) {
            statusMessage.textContent = `No listings for ${make} ${model} found within 100 miles of ${zipcode}.`;
        } else {
            // 3. Clear the loading message and build the results list
            statusMessage.textContent = `Found ${listings.length} listings for ${year} ${make} ${model} near ${zipcode}.`;
            
            const list = document.createElement('div');
            
            listings.sort((a, b) => a.price - b.price); // Sort by price (lowest first)

            listings.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'result-item';
                
                // Format the price and mileage for better readability
                const formattedPrice = item.price.toLocaleString();
                const formattedMileage = item.mileage.toLocaleString();

                const infoHtml = `
                    <div class="vehicle-info">
                        <strong>${year} ${make} ${model}</strong><br>
                        <small>${formattedMileage} miles | ${item.dealer}</small>
                    </div>
                    <div class="price">$${formattedPrice}</div>
                `;
                itemDiv.innerHTML = infoHtml;
                list.appendChild(itemDiv);
            });

            resultsDiv.appendChild(list);
        }

    }, 1500); // Simulate network delay (1.5 seconds)
});
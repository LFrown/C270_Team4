describe('Inventory Manager Tests', () => {
    let display;
  
    // Setup the DOM and get the display table before each test
    beforeEach(() => {
      document.body.innerHTML = `
        <div class="container">
          <h1>Inventory Manager</h1>
          <form id="itemForm">
              <input type="text" id="itemName" placeholder="Item Name" required>
              <input type="number" id="itemQuantity" placeholder="Quantity" required>
              <button type="submit">Add Item</button>
          </form>
          <table id="inventoryTable">
              <thead>
                  <tr>
                      <th>Item Name</th> <!-- Column for item name -->
                      <th>Quantity</th> <!-- Column for item quantity -->
                      <th>Action</th> <!-- Column for action buttons -->
                  </tr>
              </thead>
              <tbody></tbody> <!-- Table body where items will be dynamically added -->
          </table>
        </div>
      `;
      display = document.getElementById('inventoryTable'); // Store reference to inventory table
    });
  
    // Function to add an item to the table (from scripts.js)
    function addItemToTable(name, quantity) {
      let table = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0]; // Get table body
      let row = table.insertRow(); // Insert a new row into the table
  
      let cell1 = row.insertCell(0); // Create first cell for item name
      let cell2 = row.insertCell(1); // Create second cell for item quantity
      let cell3 = row.insertCell(2); // Create third cell for action buttons
  
      cell1.textContent = name; // Set text content for item name cell
      cell2.textContent = quantity; // Set text content for item quantity cell
  
      let removeButton = document.createElement('button'); // Create remove button element
      removeButton.textContent = 'Remove'; // Set button text to 'Remove'
      removeButton.classList.add('remove'); // Add 'remove' class for styling
      removeButton.onclick = function () {
        row.remove(); // Remove the row when button is clicked
      };
      cell3.appendChild(removeButton); // Append remove button to the third cell
    }
  
    // Test case: Adding an inventory item
    test('Test adding an inventory item', () => {
      addItemToTable('Apple', 10); // Add an item named 'Apple' with quantity 10
      expect(display.querySelector('tbody').rows.length).toBe(1); // Verify that one row is added
      expect(display.querySelector('tbody tr td').textContent).toBe('Apple'); // Verify first cell contains 'Apple'
    });
  
    // Test case: Removing an inventory item
    test('Test removing an inventory item', () => {
      addItemToTable('Apple', 10); // Add an item named 'Apple' with quantity 10
      const row = display.querySelector('tbody tr'); // Get the first row in the table
      row.querySelector('button').click(); // Simulate clicking the remove button
      expect(display.querySelector('tbody').rows.length).toBe(0); // Verify that the table is empty after removal
    });
  });

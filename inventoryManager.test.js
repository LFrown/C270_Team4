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
                  <input type="text" id="itemCategory" placeholder="Category" required>
                  <button type="submit">Add Item</button>
              </form>
              <table id="inventoryTable">
                  <thead>
                      <tr>
                          <th>Item Name</th> <!-- Table header for item name -->
                          <th>Quantity</th> <!-- Table header for quantity -->
                          <th>Category</th> <!-- Table header for category -->
                          <th>Action</th> <!-- Table header for action buttons -->
                      </tr>
                  </thead>
                  <tbody></tbody> <!-- Table body where items will be dynamically added -->
              </table>
          </div>
      `;
      display = document.getElementById('inventoryTable'); // Store reference to inventory table
  });

  // Function to add an item to the table
  function addItemToTable(name, quantity, category) {
      let table = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0]; // Get table body
      let row = table.insertRow(); // Insert a new row into the table

      let cell1 = row.insertCell(0); // Create first cell for item name
      let cell2 = row.insertCell(1); // Create second cell for item quantity
      let cell3 = row.insertCell(2); // Create third cell for item category
      let cell4 = row.insertCell(3); // Create fourth cell for action buttons

      cell1.textContent = name; // Set text content for item name cell
      cell2.textContent = quantity; // Set text content for item quantity cell
      cell3.textContent = category; // Set text content for item category cell

      let removeButton = document.createElement('button'); // Create remove button element
      removeButton.textContent = 'Remove'; // Set button text to 'Remove'
      removeButton.classList.add('remove'); // Add 'remove' class for styling
      removeButton.onclick = function () {
          row.remove(); // Remove the row when button is clicked
      };
      cell4.appendChild(removeButton); // Append remove button to the fourth cell
  }

  // Test case: Adding an inventory item
  test('Test adding an inventory item', () => {
      addItemToTable('Apple', 10, 'Fruit'); // Add an item named 'Apple' with quantity 10 and category 'Fruit'

      const rows = display.querySelector('tbody').rows; // Get all rows in the table body
      expect(rows.length).toBe(1); // Ensure one row is added

      const cells = rows[0].cells; // Get all cells of the first row
      expect(cells[0].textContent).toBe('Apple');  // Verify the item name is 'Apple'
      expect(cells[1].textContent).toBe('10');     // Verify the quantity is '10'
      expect(cells[2].textContent).toBe('Fruit');  // Verify the category is 'Fruit'
  });

  // Test case: Removing an inventory item
  test('Test removing an inventory item', () => {
      addItemToTable('Apple', 10, 'Fruit'); // Add an item named 'Apple' with quantity 10 and category 'Fruit'

      const row = display.querySelector('tbody tr'); // Get the first row in the table
      row.querySelector('button').click(); // Simulate clicking the remove button

      expect(display.querySelector('tbody').rows.length).toBe(0); // Verify that the table is empty after removal
  });
});

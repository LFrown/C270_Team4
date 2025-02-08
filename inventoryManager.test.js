describe('Inventory Manager Tests', () => {
    let display;
  
    // Setup the DOM and get the display table
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
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody></tbody>
          </table>
        </div>
      `;
      display = document.getElementById('inventoryTable');
    });
  
    // Function to add an item to the table (from scripts.js)
    function addItemToTable(name, quantity) {
      let table = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];
      let row = table.insertRow();
  
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
  
      cell1.textContent = name;
      cell2.textContent = quantity;
  
      let removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove');
      removeButton.onclick = function () {
        row.remove();
      };
      cell3.appendChild(removeButton);
    }
  
    test('Test adding an inventory item', () => {
      addItemToTable('Apple', 10);
      expect(display.querySelector('tbody').rows.length).toBe(1);
      expect(display.querySelector('tbody tr td').textContent).toBe('Apple');
    });
  
    test('Test removing an inventory item', () => {
      addItemToTable('Apple', 10);
      const row = display.querySelector('tbody tr');
      row.querySelector('button').click();
      expect(display.querySelector('tbody').rows.length).toBe(0);
    });
  });
  
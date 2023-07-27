let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filterItem = document.getElementById('filter');

// Form Submit event
form.addEventListener('submit', addItem);

// Delete Item
itemList.addEventListener('click', removeItem);

// Search Item
filterItem.addEventListener('keyup', filter);

// Add Item
function addItem(e) {
    e.preventDefault();
    
    // value of textfield store in li
    let l1 = document.getElementById('item1').value;
    let l2 = document.getElementById('item2').value;

    let li = l1 + " " + l2;

    if(li === '')
        alert("Write something!");
    else {
        // create element
        let item = document.createElement('li');

        // add class name
        item.className = "list-group-item";

        // append child
        item.appendChild(document.createTextNode(li));

        // Edit button in every task
        let editBtn = document.createElement('button');

        // Adding class to edit button
        editBtn.className = "btn btn-secondary btn-sm float-right edit";

        // Add text 'Edit' to the edit button
        editBtn.appendChild(document.createTextNode('Edit'));

        // Append edit button to the item created newly
        item.appendChild(editBtn);

        // delete button in every task
        var deleteBtn = document.createElement('button');

        // add class name to delete button
        deleteBtn.className = "btn btn-danger btn-sm float-right delete";

        // add text node i.e. C written in it
        deleteBtn.appendChild(document.createTextNode('X'));

        // append delete button in list
        item.appendChild(deleteBtn);

        itemList.appendChild(item);
    }
}

// Delete Item
function removeItem(e) {
    e.preventDefault();

    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Search or filter item
function filter(e) {
    // Search value stored in text variable
    let text = e.target.value.toLowerCase();
    // Get lists
    let items = itemList.getElementsByTagName('li');

    // Checking if the search value is not empty
    if(text != '') {
        // Convert the HTML Collection into Array
        Array.from(items).forEach(function(item) {
            
            // Items in the lists of item i.e the actual text
            let itemName = item.firstChild.textContent;

            // Checking if text is present in itemName or not
            if(itemName.toLowerCase().indexOf(text) != -1) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    } else {
        Array.from(items).forEach(function(item) {
            item.style.display = 'block';
        })
    }
}
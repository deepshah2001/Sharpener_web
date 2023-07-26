let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form Submit event
form.addEventListener('submit', addItem);

// Delete Item
itemList.addEventListener('click', removeItem);

// Add Item
function addItem(e) {
    e.preventDefault();
    
    // value of textfield store in li
    let li = document.getElementById('item').value;

    if(li === '')
        alert("Write something!");
    else {
        // create element
        let item = document.createElement('li');

        // add class name
        item.className = "list-group-item";

        // append child
        item.appendChild(document.createTextNode(li));

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
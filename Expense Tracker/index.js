var count = 0;
let submit = document.getElementById('submit');
let items = document.getElementById('items');

// Adding event listener to add expense into list and local storage
submit.addEventListener('click', addExpense);

function addExpense(e) {
    e.preventDefault();

    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;

    if(amount === '' || description === '' || category === '') {
        alert("Fill Fields!");
    } else {
        count++;
        var myExp = {
            'id': count,
            'amount': amount,
            'description' : description,
            'category': category
        };
        
        // Array for storing all local storage values
        let expenses = JSON.parse(localStorage.getItem(count)) || [];
        expenses.push(myExp);

        // Adding elements into local storage
        localStorage.setItem(count, JSON.stringify(expenses));

        // Creating 'li' element
        let li = document.createElement('li');
        let textNode = amount + " - " + description + " - " + category + " ";

        // Adding text to the 'li' element
        li.appendChild(document.createTextNode(textNode));

        // Delete Button
        let deleteBtn = document.createElement('button');
        deleteBtn.id = "delete";

        deleteBtn.appendChild(document.createTextNode("Delete Expense"));

        // Appending delete button to each expense
        li.appendChild(deleteBtn);

        // Edit Button
        let editBtn = document.createElement('button');
        editBtn.id = "edit";

        editBtn.appendChild(document.createTextNode("Edit Expense"));

        // Appending edit button to each expense
        li.appendChild(editBtn);

        // Adding list item into ordered list
        items.appendChild(li);

        // Event listener to delete any expense from local storage and list
        deleteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            deleteExpense(myExp.id, li)
        });

        // Event listener for editing any expense and before that deleting the expense from list and local storage
        editBtn.addEventListener('click', function(e) {
            e.preventDefault();
            editExpense(myExp.id, li, myExp)
        });
    }
}

function deleteExpense(count, li) {
    localStorage.removeItem(count);
    count--;
    items.removeChild(li);
}

function editExpense(count, li, myExp) {
    amount.value = myExp.amount;
    description.value = myExp.description;
    category.value = myExp.category;

    deleteExpense(count, li);
}
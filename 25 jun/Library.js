let arr = [
    { id: 1, BookName: "javascript basics", Author: "Raj Patel", Category: "programming", quantity: 5 },
    { id: 2, BookName: "AIML basics", Author: "Smit Patel", Category: "programming basics", quantity: 6 },
    { id: 3, BookName: "Desiging book", Author: "Nirmal Patel", Category: "Desig book", quantity: 9 }
];


document.querySelector('.display').onclick = function () {
    document.querySelector('table').classList.add('show');
    document.querySelector('tbody').innerHTML = '';
    for (const Library of arr) {
        document.querySelector('tbody').innerHTML += `
        <tr>
            <td>${Library.id}</td>
            <td>${Library.BookName}</td>
            <td>${Library.Author}</td>
            <td>${Library.Category}</td>
            <td>${Library.quantity}</td>
        </tr>`;

    }
}



document.querySelector('.Add').onclick = function () {

    var Library = {
        id: Number(prompt("Enter Your Id No : ")),
        name: prompt("Enter Your Book Name : "),
        Author: prompt("Enter Your Author : "),
        Category: prompt("Enter Your Category : "),
        quantity: Number(prompt("Enter Your Quantity : "))
    };

    arr.push(Library);

    console.log(arr);
}


document.querySelector('.delete').onclick = function () {
    var IDno = Number(prompt("Enter Your ID No : "));

    arr = arr.filter((Library) => {
        return Library.id != IDno;
    });
}


document.querySelector('.issue').onclick = function () {

    var id = Number(prompt("Enter Book ID : "));

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].id == id) {
            arr[i].quantity = arr[i].quantity - 1;
            alert("Book Issue Successfully");

            return;
        }
    }
    alert("Book Not Found");
}



document.querySelector('.return').onclick = function () {

    var id = Number(prompt("Enter Book ID : "));

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].id == id) {
            arr[i].quantity = arr[i].quantity + 1;
            alert("Book Return Successfully ");

            return;
        }
    }
    alert("Book Not Found");
}


document.querySelector('.available').onclick = function () {

    let id = Number(prompt("Enter Book ID : "));
    let found = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].id == id) {

            found = true;

            if (arr[i].quantity > 0) {
                alert("Book Available");
            } else {
                alert("Book Not Available");
            }

            break;
        }
    }

    if (!found) {
        alert("Book Not Found");
    }
}

document.querySelector('main').innerHTML += arr.length;
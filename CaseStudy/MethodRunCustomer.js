let arrListCustomers2 = [];
let  arrListCustomers1 = [];
function displayMainMenu() {
    let menu = prompt("1. Add New Customer" + "\n2.Display Information Customer." + "\n3.Edit Information Customer" + "\n4.Delete Customer" + "\n5.Exit.");

    switch (menu) {
        case "1":

            addNewCustomer();
            break;
        case "2":

            displayCustomer();
            break;
        case "3":
            editInformationCustomer();
            break;
        case "4":
            deletedCustomer();
            break;

        default:
            displayMainMenu();
    }

}
function addNewCustomer() {
    let customer = new CusTomer();

    customer.setName(prompt("1.Name").value);
    customer.setAddress(prompt("2.Address").value);
    customer.setBirthday(prompt("3.Birthday").value);
    customer.setIdcard(prompt("4.Id card").value);
    customer.setEmail(prompt("5.Email").value);
    customer.setTypeCustomer(prompt("6.Type Customer").value);
    customer.setRentDay(prompt("7.Rent Day").value);
    arrListCustomers1.push(customer);
    arrListCustomers2.push(arrListCustomers1);
    displayMainMenu();
}

function edit(edit) {
    let choose = prompt("1.Name" + arrListCustomers2[edit].getName()
        + "\n2.Address" + arrListCustomers2[edit].getAddress()
        + "\n3.Birthday" + arrListCustomers2[edit].getBirthday()
        + "\n4.Id card" + arrListCustomers2[edit].getIdcard()
        + "\n5.Email" + arrListCustomers2[edit].getEmail()
        + "\n6.Type Customer" + arrListCustomers2[edit].getTypeCustomer()
        + "\n7.Rent Day" + arrListCustomers2[edit].getRentDay());
    switch (choose) {
        case "1":
            arrListCustomers2[edit].getName(prompt("Name you want exchange is : "));
            break;
        case "2":
            arrListCustomers2[edit].getAddress(prompt("Address you want exchange is : "));
            break;
        case "3":
            arrListCustomers2[edit].getBirthday(prompt("Birthday you want exchange is : "));
            break;
        case "4":
            arrListCustomers2[edit].getIdcard(prompt("Id card you want exchange is : "));
            break;
        case "5":
            arrListCustomers2[edit].getTypeCustomer(prompt("Type Customer you want exchange is : "));
            break;
        case "6":
            arrListCustomers2[edit].getRentDay(prompt("Rent Day you want exchange is : "));
            break;


        default:
            editInformationCustomer();
            alert("fail!!");
    }
    editInformationCustomer();
}

function DisplayInformationCustomer(index) {
    alert("1.Name" + arrListCustomers2[index].getName()
        + "\n2.Address" + arrListCustomers2[index].getAddress()
        + "\n3.Birthday" + arrListCustomers2[index].getBirthday()
        + "\n4.Id card" + arrListCustomers2[index].getIdcard()
        + "\n5.Email" + arrListCustomers2[index].getEmail()
        + "\n6.Type Customer" + arrListCustomers2[index].getTypeCustomer()
        + "\n7.Rent Day" + arrListCustomers2[index].getRentDay());
    displayMainMenu();
}

function editInformationCustomer() {
    let result = "";
    for (let i = 0; i < arrListCustomers2.length; i++) {
        result += "Customer." + (i + 1) + "\n" + "1.Name" + arrListCustomers2[i].getName()
            + "  2.Id card" + arrListCustomers2[i].getIdcard() + "\n";
    }
    let option1 = parseInt(prompt(result));

    if (1 <= option1 && option1 <= arrListCustomers2.length) {
        edit(option1 - 1);
    } else {
        displayMainMenu();
    }
}

function displayCustomer() {
    let result = "";
    for (let i = 0; i < arrListCustomers2.length; i++) {
        result += "Customer." + (i + 1) + "\n" + "1.Name" + arrListCustomers2[i].getName()
            + "  2.Id card" + arrListCustomers2[i].getIdcard()+ "\n";
    }

    let option = parseInt(prompt(result));

    if (1 <= option && option <= arrListCustomers2.length) {
        DisplayInformationCustomer(option - 1);
    } else

        displayMainMenu();
}


function deletedCustomer() {
    let result = "";
    for (let i = 0; i < arrListCustomers2.length; i++) {
        result += "Customer." + (i + 1) + "\n" + "1.Name" + arrListCustomers2[i].getName()
            + "  2.Id card" + arrListCustomers2[i].getIdcard() + "\n";
    }
    let deleted = parseInt(prompt(result));
    for (let j = 0; j < arrListCustomers2.length; j++) {
        if (deleted === (j + 1)) {
            let answer = prompt("Are you sure deleted?"+
                "\n1. Yes"+"\n2. No");
            if(answer==="1") {
                arrListCustomers2.splice(j, 1);
                deletedCustomer();

            }
            else
                deletedCustomer();
        } else displayMainMenu();
    }
    displayMainMenu();
}



displayMainMenu();
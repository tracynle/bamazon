var mysql = require("mysql");
var inquirer = require("inquirer");

var chosenProduct; 

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Ngoc513*",
  database: "bamazonCustomer_db"
});

// connect to the mysql server and sql database
connection.connect(function(err){
    if(err) throw err;   
    displayProducts();
});

function displayProducts() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.log("\n     |     Bamazon Luxury Handbags     |    ");
        console.log("\nExisting Products:\n");
        for(var i = 0; i < results.length; i++) {
            var product = results[i];
            console.log("Item ID: " + product.item_id + " -" + " Product Name: " + 
            product.product_name + " // " + " Department Name: " + product.department_name + " // " + 
            " Price: $" + product.price + " // " + " Stock Quantity: " + product.stock_quantity + "\n");
        }
        start();
    });
}

// This function prompts the user what item id they would like to purchase. Then it receives the items from the DB 
function start() {
    inquirer
    .prompt(
        {
        name: "item_id",
        type: "input",
        message: "Thank you for choosing Bamazon!\n\nWhat item would you like to purchase? Please enter the Item ID number.\n"
    })
    .then(function(answer) {
        connection.query(
                
            // SELECTS all products from: user's id input
            "SELECT * FROM products WHERE ?",
            {
                item_id: answer.item_id
            },
            processResults
        );
    });
}

// Function processes the user's item id. If no item id no. was found, it would print an error
function processResults(err, results) { 
    if (err) throw err;

    if (results.length === 0) {
        console.log("\n***Opps!***\nNo product was found by this ID. Please enter another Item ID number.\n");
        start();
        return;
    }
    
    chosenProduct = results[0]; 

    var product_name = chosenProduct.product_name;
    
    if (chosenProduct.stock_quantity > 0) {
        console.log("\nYou chose the " + product_name + ". It is available for purchase.\n");
        console.log("There are " + chosenProduct.stock_quantity + " available in stock.\n");
        askForQuantity();
        
    }
    else {
        console.log("Item is out of stock! :( Please enter another Item ID number.\n");
        start();
    }
}

function askForQuantity() {
    inquirer
    .prompt (
    {
        // The second message should ask how many units of the product they would like to buy.
        name: "stock_quantity",
        type: "input",
        message: "Please enter the number of items you would like to purchase."
    })
    .then(placeOrder);
}

// Once item_id and quantities are specified, this function will process the order
function placeOrder(answer) {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;

        var itemConfirm =  answer.confirm_item;
        console.log(answer);

        if (itemConfirm === false) {
            displayProducts();
            return;
        }

        if (answer.stock_quantity <= chosenProduct.stock_quantity) {
            connection.query(
                // UPDATE SQL products table, SET changes in stock_quantity column, WHERE product id/name are located
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        // Stock_quantity column name: the item's quantity customer chose  - customer's desired quantity deducted. 
                        // ex: stock_quantity: 100 - 5 = 95
                        stock_quantity: chosenProduct.stock_quantity - answer.stock_quantity
                    },
                    {
                        // parameter of item_id matches with the chosen product the customer desired
                        item_id: chosenProduct.item_id
                    }
                ],
                function(error) {
                    if (error) throw err;
                    console.log("\nYour order has been placed: \nYour total is: " + chosenProduct.price * answer.stock_quantity);
                    console.log("Thank you for shopping at Bamazon!\n");

                    inquirer.prompt(
                        {
                            name: "continueShopping",
                            type:"confirm",
                            message: "Do you wish to continue shopping?"
                        }
                        
                    ).then(function(answer){
                        if (answer.continueShopping === true) {
                            start();
                        } else {
                            connection.end();
                        }
                    });
                }
            );
        
        } else {
            console.log("Sorry, there's not enough product in stock. Your order cannot be placed.");
            console.log("Please modify your order.");
            processResults();
        }
    })
};

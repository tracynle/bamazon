var mysql = require("mysql");
var inquirer = require("inquirer");

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
    // run the start function after the connection is made to prompt the user
    start();
});

// This function should then prompt users with two messages.
function start() {
    inquirer
        .prompt(
            {
            // The first question should ask them the ID of the product they would like to buy.      
            name: "item_id",
            type: "input",
            message: "Welcome to Bamazon!\n\nWhat is the ID of the product you would like to buy?"
        })
       
        .then(function(answer) {
            connection.query(
                 
                // SELECTS all products from: user's id input
                "SELECT * FROM products WHERE ?",
                {
                    item_id: answer.item_id  
                },
                // if ID is not found, this message will show
                function(err, results) { 
                    if (err) throw err;

                    if (results.length === 0) {
                        console.log("No product found by this ID.");
                        return;
                    }
                    
                    var chosenProduct = results[0];

                    // String = to number may cause a bug
                    var product_name = chosenProduct.product_name;
                    console.log("Product: " + product_name + " is available for purchase.\n");

                    if(product_name = chosenProduct.stock_quantity) {
                        console.log("Quantity of " + results[0].stock_quantity + " is available in stock.\n");
                    }
                    else {
                        console.log("Insufficient quantity!")
                    }
                    
                }
            )
        });
}
// if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.


// This function asks how many units of the item they would like to buy
// It receives the input that would then update the SQL database quantity
function purchaseItem() {
    inquirer
    .prompt() (
    {
        // The second message should ask how many units of the product they would like to buy.
        name: "stock_quanity",
        type: "input",
        message: "How many units would you like to buy of this product?"
    })
    .then(function(answer) {
        if (answer.item_id === answer.chosenProduct) {
            connection.query(
                "UPDATE stock_quantity FROM products",
                [
                    {

                    }
                ]
            )

        }
    })

}
// Once the customer has placed the order, 
// your application should check if your store has enough 
// of the product to meet the customer's request.


// If not, the app should log a phrase like 'Insufficient quantity!', 
// and then prevent the order from going through.
# bamazon

## Welcome to Bamazon
Bamazon is a CLI node application that is an Amazon-like storefront that uses Inquirer and MySQL. It will take in customer's orders and inventory will be depleted from the store's inventory. This application implements simple commands and completes your orders by showing your item, department name of the product, price, quantity, and your total.

Follow the instructions and happy shopping!

### Instructions:
1. Before you start shopping, be sure to copy and paste this into your terminal: `git clone git@github.com:tracynle/bamazon.git`
2. Next, install all the dependencies you need in order to run Bamazon in the terminal by typing in: `npm install`

3. After the npm is installed, type in `node bamazonCustomer.js` in CLI to initate your shopping experience. 

![Screenshot](/screenshots/screenshot1.png)

4. You will be prompted a few questions.

5. After selecting an item, Bamazon will calculate your quantity of items and the database is updates your cart by showing your total.

![Screenshot](/screenshots/screenshot2.png)

### Built With
* MySQL
* Node.JS
* JavaScript
* npm packages:
    * mysql
    * prompt
    * cli-table
    * inquirer
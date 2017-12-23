var mysql = require('mysql');
var prompt = require('prompt');
var Table = require('cli-table');
var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'bamazon',
});

var productPurchased = [];

connection.connect();

connection.query('SELECT ID, Product, Price, Stock FROM Products', function(err, result) {
	if (err) {
		console.log(err);
	}
	var table = new Table({
		head: ['ID #', 'Product Name', 'Price', 'Stock'],
		style: {
			head: ['blue'],
			compact: false,
			colAligns: ['center'],
		}
	});

	for (var i = 0; i < result.length; i++) {
		table.push([result[i].ID, result[i].Product, result[i].Price, result[i].Stock]);
	}
	console.log(table.toString());

	purchase();
});

var purchase = function() {

	var productInfo = {
		properties: {
			itemID:{description: 'Please enter the ID # of the item you wish to purchase!'},
			Quantity:{description: 'How many items would you like to purchase?'}
		},
	};

	prompt.start();

	prompt.get(productInfo, function(err, result) {

		var custPurchase = {
			itemID: result.itemID,
			Quantity: result.Quantity
		};

		productPurchased.push(custPurchase);

		connection.query('SELECT DISTINCT * FROM Products WHERE ID=', productPurchased[0].itemID, function(err, result) {
			if (err) {
				console.log(err);
			}
			if(result.Stock < productPurchased[0].Quantity) {

				console.log("We're sorry, that item appears to be out of stock.");
				connection.end();
			
			} else if (result.Stock >= productPurchased[0].Quantity) {
				
				console.log(productPurchased[0].Quantity + ' items purchased');
				console.log(result[0].Product + ' ' + result[0].Price);
			}

			var saleTotal = result.Price * productPurchased[0].Quantity;
			console.log('Total: ' + saleTotal);
		})

			var newQuantity = result.Stock - productPurchased[0].Quantity;

			connection.query("UPDATE Products SET Stock = " + newQuantity + "WHERE ID=" + productPurchased[0].itemID, function(err, res) {
				if (err) {
					throw (err);
				}
				console.log('Your order has been processed.  Thank you for shopping.');
				connection.end();
			})
	})
};
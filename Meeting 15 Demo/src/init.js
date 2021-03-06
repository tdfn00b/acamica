const {User} = require('./demo')
const {Product} = require('./demo')
const {Order} = require('./demo')
const {PaymentMethod} = require('./demo')
let {userList, productList, orderList, paymentMethodList} = require('./demo');

//Creo usuarios
let admin = new User("admin","admin", null, null, "superadmin@supermail.com", null);
let user1 = new User("tdfn00b","pokemon","David Maximiliano Guerrero","+5492964609475","guerrerodavidm@gmail.com", "Calle falsa 123")
let user2 = new User("felipemoralesquerol","felpi1234","Felipe Morales","12345678","felipe.morales.querol@gmail.com", "Calle verdadera 123")
let user3 = new User("juancit0","contraseña","Juancito Perez","123213214","juancitoperez@gmail.com", "Mi casa 321")

//Cambio los privilegios 
user2.setPrivileges(2)
admin.setPrivileges(3)

//Agrego usuario a la lista de usuarios
userList.push(admin);
userList.push(user1);
userList.push(user2);
userList.push(user3);

//Creo y agrego productos a la lista de productos
productList.push(new Product("Panqueque de manzana", "Panqueques de manzana verde con caramelo", 100, true))
productList.push(new Product("Hamburguesa clásica", "Hamburguesa con queso, lechuga y tomate", 200, true))
productList.push(new Product("Ensalada Veggie", "Hamburguesa con lechuga, tomate y sin hamburguesa", 300))
productList.push(new Product("Coca-Cola 1L", "Coca-Cola sabor original de 1 litro", 120, true))

//Creo y agrego métodos de pago

let efectivo = new PaymentMethod("EF", "Efectivo")
let debito = new PaymentMethod("TD", "Tarjeta Debito")

paymentMethodList.push(efectivo)
paymentMethodList.push(debito)

//Creo ordenes
let order1 = new Order(user1, efectivo, user1.address);
let order2 = new Order(user2, efectivo, user2.address);
let order3 = new Order(user3, debito, user3.address);

//Agrego productos a las ordenes
order1.addProduct(1, 3)
order2.addProduct(2, 2)
order2.addProduct(4, 2)
order3.addProduct(3, 1)

//Agrego ordenes a la lista de ordenes
orderList.push(order1)
orderList.push(order2)
orderList.push(order3)

module.exports = {userList, productList, orderList, paymentMethodList}
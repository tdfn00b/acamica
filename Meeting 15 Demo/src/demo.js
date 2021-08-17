//TODO: preparar para modulación

//Creación de lista de datos
let userList = []
let productList = []
let orderList = []
let paymentMethodList = []
let logList = []

//Creación de objetos a utilizar: Usuarios, productos, ordenes
class User {
    constructor(username, pass, full_name, phone_number, email, address) {
        this.username = username;
        this.pass = pass;
        this.full_name = full_name;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
        this.deleted = false;
    }
    //privilegios 1 = usuario, 2 = manager, 3 = admin
    privilege = 1
    //Cambiar privilegios del usuario
    setPrivileges(id) {
        this.privilege = id;
    }

    getPrivileges(){
        return this.privilege;
    }
}

class Product {
    constructor(name, desc, price, stock) {
        this.productNumber = productList.length + 1;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.stock = stock === undefined ? false : stock; //Booleano
        this.deleted = false
    }

    getStock(){
        return this.stock
    }

    getProductNumber(){
        return this.productNumber;
    }

    setStock(newStock){
        this.stock = newStock;
    }

    getPrice(){
        return this.price;
    }

}

class Order {
    constructor(user, paymentMethod, address) {
        this.user = user,
        this.paymentMethod = paymentMethod;
        this.orderNumber = orderList.length + 1;
        this.orderDate = new Date(); //Verificar como dar dd/mm/aa + mm:hh
        this.orderProducts = [];
        this.orderPrice = 0;
        this.orderDeliveryAddress = address
        this.status = 1; //1 = Pendiente, 2 = Confirmado, 3 = En preparación, 4 = Enviado, 5 = Entregado, 100 = Rechazado
        this.deleted = false
    }
    //Obtener precio de la orden
    setPrice() {
        let newPrice = 0;
        
        if (this.orderProducts.length > 0) {
            this.orderProducts.forEach(element => (product => {newPrice += product.getPrice()}))};
        this.orderPrice = newPrice;
    }

    setStatus(user, newStatus){
        if (this.status != newStatus){
            if (user.getPrivileges() >= 2 || (user.getPrivileges() == 1 && newStatus < 2)) {
                this.status = newStatus;
            } else if (user.getPrivileges() == 1 && newStatus > 2) {
                console.log('El usuario no tiene permisos para acceder a esta propiedad')
            } 
        } else {
            console.log('El estado del pedido es idéntico al estado propuesto.')
        }
    }
    /*
    addProduct(productNumber, qty){
        let product = productList.find(products => products.productNumber == productNumber);

        if (qty != 0){
            for (let i = 1; i <= qty; i++){
                this.orderProducts.push(product)
            }
        }
        this.setPrice()
    }
    */

    addProduct(productNumber, qty){
        let product = productList.find(products => products.productNumber == productNumber);
        let productArray = [product, qty]
        this.orderProducts.push(productArray)
        this.setPrice()
        }

    removeProduct(productNumber, qty){
        productIndex = this.orderProducts.findIndex(productInList => productInList[0].getProductNumber() == productNumber)
        this.orderProducts.splice(productIndex, 1)
        this.setPrice()
    }

    getUserId(){
        return this.user;
    }

    getOrdersByStatus(user){
        let userOrderList = []
        orderList.filter(function(order) {
            if (order.getUserId() == user && order.status == 5) {
                userOrderList += order;
            }});
        return userOrderList
    }
}

class PaymentMethod {
    constructor(code,name){
        this.code = code;
        this.name = name;
    }
}

module.exports = {User, Product, Order, PaymentMethod, userList, productList, orderList, logList, paymentMethodList};
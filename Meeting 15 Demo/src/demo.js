//Creación de lista de datos
let userList = []
let productList = []
let orderList = []
let logList = []

//Creación de objetos a utilizar: Usuarios, productos, ordenes
class User {
    //privilegios 1 = usuario, 2 = manager, 3 = admin
    #privilege = 1
    constructor(nickname, pass, full_name, phone_number, email, address) {
        this.nickname = nickname;
        this.pass = pass;
        this.full_name = full_name;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
    }
    //Cambiar privilegios del usuario
    setPrivileges(id) {
        this.#privilege = id;
    }

    getPrivileges(){
        return this.#privilege;
    }
}

class Product {
    constructor(name, desc, price, stock) {
        this.productNumber = productList.length + 1;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.stock = stock === undefined ? false : stock; //Booleano
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
    constructor(user, payment_method) {
        this.user = user,
        this.payment_method = payment_method;
        this.orderNumber = orderList.length + 1;
        this.orderDate = new Date(); //Verificar como dar dd/mm/aa + mm:hh
        this.orderProducts = [];
        this.orderPrice = 0;
        this.status = 1; //1 = Pendiente, 2 = Confirmado, 3 = En preparación, 4 = Enviado, 5 = Entregado, 100 = Rechazado
    }
    //Obtener precio de la orden
    setPrice() {
        let price = 0;
        if (this.orderProducts.length > 0) {
            this.orderProducts.forEach(product => {
                price += product.getPrice()
            });
        };
        this.orderPrice = price;
    }

    setStatus(user, newStatus){
        if (user.getPrivileges() >= 2 || (user.getPrivileges() == 1 && newStatus <= 2)) {
            this.status = newStatus;
        } else if (user.getPrivileges() == 1 && newStatus > 2) {
            console.log('El usuario no tiene permisos para acceder a esta propiedad')
        } 
            console.log('Algo salio mal xD')
    }

    addProduct(productNumber, qty){
        let product = productList.find(products => products.productNumber == productNumber);

        if (qty != 0){
            for (let i = 1; i <= qty; i++){
                this.orderProducts.push(product)
            }
        }
        this.setPrice()
    }

    removeProduct(product){
        productIndex = this.orderProducts.findIndex(productInList => productInList.getProductNumber() == product.getProductNumber())
        this.orderProducts.splice(productIndex, 1)
        this.setPrice()
    }
}

module.exports = {User, Product, Order, userList, productList, orderList, logList};
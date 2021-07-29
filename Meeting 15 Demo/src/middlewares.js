const {userList, productList, orderList, logList} = require('./demo');

const isLoggedIn = (req,res,next) => {
    let user_id = req.params.user_id;

    if (logList[0] == undefined) {
        res.send('Por favor, inicia sesión')
    }
    
    if (logList[0].nickname != user_id){
        res.send('No tiene autorización para ver esta página')
    } else {
        index = userList.findIndex(user => user.nickname == user_id);
        req.user = userList[index];
        req.user_index = index;
        next();
    }
    
}

const orderStatus = (req,res,next) => {
    let orderNumber = req.params.order_number;
    index = orderList.findIndex(order => order.orderNumber == orderNumber);
    if (index == -1){
        res.send('No es un pedido válido')
    }
        req.order_index = index
        req.order = orderList[index]
        req.status = orderList[index].status;
        next();
}

module.exports = {isLoggedIn, orderStatus};
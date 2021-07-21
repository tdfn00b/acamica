function middle(req, res, next) {
    console.log("Pedido desde " + req.url);
    next();
}
module.exports = {
    middle
};
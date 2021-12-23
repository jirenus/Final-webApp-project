const orderServices=require("./orderService")
const Cart = require("../cart/cartModel")
const Order=require("./orderModel");

module.exports.list=async (req,res)=>{
    const userId=req.user._id
    const cart=await orderServices.getCart(userId)
    var temp = ""
    if(cart.totalPrice == 0){
        temp = "hidden"
    }
    res.render("order/views/checkout",{cart:cart,btnType : temp})
}

module.exports.showHistory=async (req,res)=>{
    const userId=req.user._id
    const order=await orderServices.getOrder(userId)
    // var temp = ""
    // if(cart.totalPrice == 0){
    //     temp = "hidden"
    // }
    res.render("order/views/history",{order:order})
}

module.exports.createOrder = async (req,res) => {
    const userId = req.user._id;
    
    const cart = await orderServices.getCart(userId)
   
    const order = await orderServices.getOrder(userId)

    const temp = {
      cart : cart,
      address : req.body.address,
      phoneNumber : req.body.phone,
      date : req.body.date,
      status : "preparing"
    }

    const newvalues = { $set: {items: [], totalQty: 0,totalPrice: 0, userId :userId }}
    await orderServices.updateCart(userId,newvalues)

    if(order == null){
      const newOrder = new Order()
      
      newOrder.items.push(temp)
      newOrder.userId =  userId
    
     
      newOrder.save((err,doc)=>{
        if(!err)
        res.redirect('/order/history')
        
        else{
          console.log('Error during record inserted: '+ err)
        }
  
      });
    }
    else{ 
      await orderServices.updateOrder(userId,temp) 
      res.redirect('/order/history')

    }
}
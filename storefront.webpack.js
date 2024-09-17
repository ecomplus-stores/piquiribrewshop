const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
       './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.html'),   
       './html/ShippingLine.html': path.resolve(__dirname, 'template/js/custom-js/html/ShippingLine.html'),  
       './js/ShippingLine.js': path.resolve(__dirname, 'template/js/custom-js/html/ShippingLine.js'),    
       './js/ShippingCalculator.js': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.js'),  
       './html/TheCart.html': path.resolve(__dirname, 'template/js/custom-js/html/TheCart.html'),   
      './html/EcCheckout.html': path.resolve(__dirname, 'template/js/custom-js/html/EcCheckout.html'),   
      './js/EcCheckout.js': path.resolve(__dirname, 'template/js/custom-js/html/EcCheckout.js'),   
      './html/PaymentMethods.html': path.resolve(__dirname, 'template/js/custom-js/html/PaymentMethods.html'),   
      './App.vue': path.resolve(__dirname, 'template/js/custom-js/html/App.vue'), 
    }
  }
})

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
       './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.html'),   
       './js/ShippingCalculator.js': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.js'),  
    }
  }
})

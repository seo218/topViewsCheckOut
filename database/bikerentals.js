const maleBike = require('../database/maleBike.jpg')

const femaleBike = require('../database/femaleBike.jpg')

const kidBike = require('../database/kidBike.jpg')

const adultHelmet = require('../database/adultHelmet.jpg')

const kidHelmet = require('../database/kidsHelmet.jpg')

const insurance = require('../database/insurance.jpg')

let storage = ["http://drive.google.com/uc?export=view&id=1KmwZUDDZ7GMiQRmdyzo5vG-pqb_2HkCb", 
"http://drive.google.com/uc?export=view&id=1oQBK_DsfTa6TXJL9OtMnDxs3R1VfpT7h", 
"http://drive.google.com/uc?export=view&id=1aJNHeIzaWyt6zTdZYhVev4oDv_qg7C-c", 
"http://drive.google.com/uc?export=view&id=1ZDzyHbMXoBegiF2_YZqZRg6HrqQwMWGh",
"http://drive.google.com/uc?export=view&id=16DAt2ZOXN3Rjq2HlaoX-d-GJ5xT6Avq4",
"http://drive.google.com/uc?export=view&id=1Jnw1d59DgofpaW8JIAzhyaZ96tv_rXqB",
];

const products =  [
      {
        "id": 1,
        "name": "Adult Male Bike",
        "price": 20.50,
        "image": maleBike,
        "product_type": "bike"
      },
      {
        "id": 2,
        "name": "Adult Female Bike",
        "price": 20.50,
        "image": femaleBike,
        "product_type": "bike"
      },
      {
        "id": 3,
        "name": "Kids Unisex Bike",
        "price": 12.75,
        "image": kidBike,
        "product_type": "bike"
      },
      {
        "id": 4,
        "name": "Adult Unisex Helmet",
        "price": 4.00,
        "image": adultHelmet,
        "product_type": "accessory"
      },
      {
        "id": 5,
        "name": "Kids Unisex Helmet",
        "price": 3.50,
        "image": kidHelmet,
        "product_type": "accessory"
      },
      {
        "id": 6,
        "name": "Insurance",
        "price": 9.99,
        "image": insurance,
        "product_type": "addon"
      },

    ]

module.exports = {
    products: products
}
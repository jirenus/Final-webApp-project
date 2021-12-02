const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        "productType": "",
        "name": "",
        "brand":"",
        "price": "",
        "isSale": {
            "status": "",
            "percent": ""
        },
        "stock": "",
        "screenSize":"",
        "color": "",
        "features":"",
        "thumbnail":"",
        "images": ["", "", "", ""],
        "description": [
            "",
            "",
            "",
            "",
            ""
        ],
        "detail": {
            "itemDimensions":"",
            "itemWeight":"",
            "modelName":"",
            "processor":"",
            "os":"",
            "ram":"",
            "capacity":"",
            "mainCamera":"",
            "frontCamera":"",
            "battery":"",
            "powerAdapter": "",
            "manufacturer":"",
            "releaseDate":""
        },
        "buyCounts": "",
        "viewCounts": "",
        "comment": {
            "total": "",
            "items": [
                {
                    "name":"",
                    "content":"",
                    "date":"",
                    "rate":""
                }
            ]
        }
    }
);

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
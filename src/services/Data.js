import {imageProduct, imageTable} from "./Images"

export const nameItemMenu = {
    cup1:"Copaz",
    cupCoffee1:"Tazas",
    cutlery1:"Cubiertos",
    dish1:"Platos",
    glass1:"Vasos",
};

export const productCatalog = [
    {
        category:"platos",
        name:"Platos",
        products:[
            {
                id:1,
                name:"Plato 1",
                image:imageProduct.dish1,
                imageToTable:imageProduct.dish1,
                price:"10"
            },
            {
                id:2,
                name:"Plato 2",
                image:imageProduct.dish2,
                imageToTable:imageProduct.dish2,
                price:"20"
            },
            {
                id:3,
                name:"Plato 3",
                image:imageProduct.dish3,
                imageToTable:imageProduct.dish3,
                price:"30"
            },
            {
                id:4,
                name:"Plato 4",
                image:imageProduct.dish5,
                imageToTable:imageProduct.dish5,
                price:"35"
            },
            {
                id:5,
                name:"Plato 5",
                image:imageProduct.dish6,
                imageToTable:imageProduct.dish6,
                price:"36"
            },
            {
                id:6,
                name:"Plato 6",
                image:imageProduct.dish7,
                imageToTable:imageProduct.dish7,
                price:"40"
            },
        ]
    },
    {
        category:"copaz",
        name:"Copaz",
        products:[
            {
                id:7,
                name:"Copa 1",
                image:imageProduct.cup1,
                imageToTable:imageProduct.cup1,
                price:"11"
            },
            {
                id:8,
                name:"Copa 2",
                image:imageProduct.cup2,
                imageToTable:imageProduct.cup2,
                price:"22"
            },
            {
                id:9,
                name:"Copa 3",
                image:imageProduct.cup3,
                imageToTable:imageProduct.cup3,
                price:"33"
            },
            {
                id:10,
                name:"Copa 4",
                image:imageProduct.cup4,
                imageToTable:imageProduct.cup4,
                price:"44"
            },
            {
                id:11,
                name:"Copa 5",
                image:imageProduct.cup5,
                imageToTable:imageProduct.cup5,
                price:"45"
            },
        ]
    },
    {
        category:"tazas",
        name:"Tazas",
        products:[
            {
                id:12,
                name:"Taza 1",
                image:imageProduct.cupCoffee1,
                imageToTable:imageProduct.cupCoffee2,
                price:"12"
            },
            {
                id:13,
                name:"Taza 2",
                image:imageProduct.cupCoffee2,
                imageToTable:imageProduct.cupCoffee2,
                price:"23"
            },
        ]
    },
    {
        category:"cubiertos",
        name:"Cubiertos",
        products:[
            {
                id:14,
                name:"Cubierto 1",
                image:imageProduct.cutlery1,
                imageToTable:imageProduct.cutlery1,
                price:"9"
            }
        ]
    },
    {
        category:"vasos",
        name:"Vasos",
        products:[
            {
                id:15,
                name:"Vaso 1",
                image:imageProduct.glass1,
                imageToTable:imageProduct.glass1,
                price:"8"
            },
            {
                id:16,
                name:"Vaso 2",
                image:imageProduct.glass2,
                imageToTable:imageProduct.glass2,
                price:"9"
            },
            {
                id:17,
                name:"Vaso 3",
                image:imageProduct.glass3,
                imageToTable:imageProduct.glass3,
                price:"10"
            },
            {
                id:18,
                name:"Vaso 4",
                image:imageProduct.glass4,
                imageToTable:imageProduct.glass4,
                price:"11"
            },
            {
                id:19,
                name:"Vaso 5",
                image:imageProduct.glass5,
                imageToTable:imageProduct.glass5,
                price:"12"
            },
            {
                id:20,
                name:"Vaso 6",
                image:imageProduct.glass6,
                imageToTable:imageProduct.glass6,
                price:"13"
            },
        ]
    },
]

export const tableCatalog =[
    {
        id:1,
        name:"table1",
        title:"Mesa Formal",
        image:imageTable.table1
    },
    {
        id:2,
        name:"table2",
        title:"Mesa Casual",
        image:imageTable.table2
    },
    {
        id:3,
        name:"table3",
        title:"Mesa Bohemia",
        image:imageTable.table3
    },
]
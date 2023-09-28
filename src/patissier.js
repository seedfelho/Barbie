use("db_patissier");
db.dropDatabase();
db.createCollection("cake");

db.cake.insertMany([
    {
        _id:ObjectId("111111111111"),
        nome:"Bolo de Cenoura",
        peso:"2kg",
        preco:80,
        ingredientes:[
            {
                nome:"Cenoura",
                quantidade:"6"
            },
            {
                nome:"Trigo",
                quantidade:"650g"
            },
            {
                nome:"manteiga",
                quantidade:"150g"
            },
            {
                nome:"Ovo",
                quantidade:"4"
            },
            {
                nome:"Fermento em pó",
                quantidade:"10g"
            },
            {
                nome:"açucar",
                quantidade:"350g"
            },
            {
                nome:"leite",
                quantidade:"300ml"
            },
            {
                nome:"Cobertura de Brigadeiro",
                quantidade:"900g"
            },
        ]
    },
    {
        _id:ObjectId("222222222222"),
        nome:"Bolo de Morango",
        peso:"3kg",
        preco:110,
        ingredientes:[
            {
                nome:"Morango",
                quantidade:"1kg"
            },
            {
                nome:"Trigo",
                quantidade:"850g"
            },
            {
                nome:"manteiga",
                quantidade:"300g"
            },
            {
                nome:"Fermento em pó",
                quantidade:"30g"
            },
            {
                nome:"açucar",
                quantidade:"550g"
            },
            {
                nome:"Ovo",
                quantidade:"6"
            },
            {
                nome:"leite",
                quantidade:"500ml"
            },
            {
                nome:"Cobertura de morango",
                quantidade:"1kg"
            },
        ]
    },
    {
        _id:ObjectId("333333333333"),
        nome:"Bolo de Chocolate",
        peso:"2kg",
        preco:130,
        ingredientes:[
            {
                nome:"Achocolatado",
                quantidade:"300g"
            },
            {
                nome:"Trigo",
                quantidade:"850g"
            },
            {
                nome:"Fermento em pó",
                quantidade:"20g"
            },
            {
                nome:"manteiga",
                quantidade:"200g"
            },
            {
                nome:"açucar",
                quantidade:"500g"
            },
            {
                nome:"leite",
                quantidade:"350ml"
            },
            {
                nome:"Ovo",
                quantidade:"4"
            },
            {
                nome:"Cobertura de Chocolate",
                quantidade:"800g"
            },
        ]
    },
    {
        _id:ObjectId("444444444444"),
        nome:"Bolo de Fuba",
        peso:"1,5kg",
        preco:60,
        ingredientes:[
            {
                nome:"Fuba",
                quantidade:"300g"
            },
            {
                nome:"Trigo",
                quantidade:"850g"
            },
            {
                nome:"Fermento em pó",
                quantidade:"20g"
            },
            {
                nome:"Ovo",
                quantidade:"1"
            },
            {
                nome:"oleo",
                quantidade:"100ml"
            },
            {
                nome:"açucar",
                quantidade:"400g"
            },
            {
                nome:"leite",
                quantidade:"350ml"
            },
            {
                nome:"Cobertura de Chocolate",
                quantidade:"800g"
            },
        ]
    }
]);

use("db_patissier");
db.cake.find({_id:ObjectId("333333333333")});

//questao 3
use("db_patissier");
db.cake.deleteOne({_id:ObjectId("111111111111")});
//questao 4
use("db_patissier");
db.cake.find({},{nome:true, preco:true});
//questao 5
use("db_patissier");
db.cake.find({preco: {$lte:100.00}}, {nome:true, preco:true});
//questao 6
use("db_patissier");
db.cake.updateOne(
    {_id:ObjectId("222222222222")},
    {
        $set:{
            nome:"Torta de Morango",
            peso:"3,5kg"
        },
        $push:{
            ingredientes:{nome:"chantilli", quantidade:"400ml"}
        }
    }
);
//questao 7
use("db_patissier");
db.cake.updateOne({_id:ObjectId("333333333333"), "ingredientes.nome":"Ovo"},
    {
        $set:{
            "ingredientes.$.nome":"Ovos", 
            "ingredientes.$.quantidade":"3"
        }
    }    
);
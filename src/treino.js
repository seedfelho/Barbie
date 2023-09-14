use("sergiotreino");
db.dropDatabase();
db.createCollection("treino");

db.treino.insertOne({
    nome:"Peito e Tricps",
    diaSemana:"seg",
    exercicos:[
        {
            nome:"Supino",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Supino enclinado",
            serie:4,
            repeticoes:15
        },
        {
            nome:"crucifixo",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Tricos frances",
            serie:4,
            repeticoes:15
        }
    ]
})
db.treino.insertOne({
    nome:"Costas e Biceps",
    diaSemana:"Qua",
    exercicos:[
        {
            nome:"Remada",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Puxada alta",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Serrote",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Barra fixa",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Alternado",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Barra scot",
            serie:4,
            repeticoes:15
        }
    ]
})
db.treino.insertOne({
    nome:"Quadricps e panturrilha",
    diaSemana:"ter",
    exercicos:[
        {
            nome:"leg 45",
            serie:4,
            repeticoes:15
        },
        {
            nome:"extensora",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Hack squat",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Bulgaro",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Panturilha no banco",
            serie:4,
            repeticoes:15
        },
        {
            nome:"Panturinha em pé",
            serie:4,
            repeticoes:15
        }
    ]
})


use("sergiotreino");
db.treino.find({_id:ObjectId("64f743abb42b7e734b919320")});

db.treino.updateOne(
    {_id:ObjectId("64f743abb42b7e734b919320"), "exercicos.nome":"Barra scot"},
    {
        $set:{
            "exercicos.$.serie":5,
            "exercicos.$.repeticoes":12
        }
    }
);
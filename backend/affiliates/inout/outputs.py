from flask_restful import fields

affiliate_OUTPUT = {
    "id": fields.String,
    "RG": fields.String,
    "CPF": fields.String,
    "nome": fields.String,
    "sexo": fields.String,
    "email": fields.String,
    "endereco": fields.String,
    "telefone": fields.String,
    "profissao": fields.String,
    "dependentes": fields.List(fields.Nested({
        "nome": fields.String,
        "parentesco": fields.String,
        "data_nascimento": fields.String
    })),
    "estado_civil": fields.String,
    "grau_instrucao": fields.String,
    "data_admissao": fields.String,
    "data_nascimento": fields.String,
}

affiliateS_OUTPUT = {
    "affiliates": fields.List(fields.Nested(affiliate_OUTPUT))
}
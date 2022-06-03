from flask.testing import FlaskClient
from faker import Faker

from models import VALID_SEXO, VALID_GRAU_INSTRUCAO, VALID_ESTADO_CIVIL

faker = Faker()

def test_get_afiliados(client_app: FlaskClient):
    """
    Should call GET to /v1/afiliados and get all afiliados
    """
    response = client_app.get("/v1/afiliados/")
    response_json = response.get_json() or []
    assert (response.status_code == 200 and 
            type(response_json) == list)

def test_post_afiliados(client_app: FlaskClient):
    """
    Should call POST to /v1/afiliados and create a new afiliado
    """
    cpf = str(faker.random_number(digits = 11))
    cpf = cpf[:3] + "." + cpf[3:6] + "." + cpf[6:9] + "-" + cpf[9:]
    new_afiliado = {
        "CPF": cpf,
        "RG": faker.name(),
        "nome": faker.name(),
        "email": faker.email(),
        "profissao": faker.job(),
        "endereco": faker.address(),
        "data_nascimento": faker.date(),
        "telefone": faker.phone_number(),
        "sexo": faker.random_element(elements = VALID_SEXO),
        "estado_civil": faker.random_element(
            elements = VALID_ESTADO_CIVIL),
        "grau_instrucao": faker.random_element(
            elements = VALID_GRAU_INSTRUCAO),
    }

    response = client_app.post("/v1/afiliados/", json = new_afiliado)
    response_json = response.get_json() or {}
    assert response.status_code == 201, str(response_json)
    assert response_json["afiliado"]["CPF"] == new_afiliado["CPF"]

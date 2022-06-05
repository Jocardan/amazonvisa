from flask.testing import FlaskClient
from common import afiliado_ref
from faker import Faker
import pytest

from models import (VALID_SEXO, VALID_GRAU_INSTRUCAO, 
    VALID_ESTADO_CIVIL)

faker = Faker()

@pytest.fixture
def first_afiliado():
    afiliados_list = afiliado_ref.order_by('id').limit(1).get()
    return afiliados_list[0].to_dict()

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

def test_show_afiliado(client_app: FlaskClient, 
                       first_afiliado: str):
    """
    Should call GET to /v1/afiliado/:id and get one afiliado
    """
    afiliado_id = first_afiliado["id"]
    response = client_app.get(f"/v1/afiliado/{afiliado_id}/")
    response_json = response.get_json() or []
    assert (response.status_code == 200 and 
            first_afiliado == response_json)

def test_update_afiliado(client_app: FlaskClient, 
                         first_afiliado: str):
    """
    Should call PUT to /v1/afiliado/:id and update one afiliado
    """
    afiliado_id = first_afiliado["id"]
    update_info = { "nome": faker.name() }

    response = client_app.put(f"/v1/afiliado/{afiliado_id}/", 
                              json = update_info )
    
    afiliado_doc = afiliado_ref.document(afiliado_id)
    afiliado_updated = afiliado_doc.get().to_dict()
    
    assert (response.status_code == 204 and 
            first_afiliado["id"] == afiliado_updated["id"] and
            first_afiliado["nome"] != afiliado_updated["nome"])

def test_delete_afiliado(client_app: FlaskClient, 
                         first_afiliado: str):
    """
    Should call DELETE to /v1/afiliado/:id and get one afiliado
    """
    afiliado_id = first_afiliado["id"]
    response = client_app.delete(f"/v1/afiliado/{afiliado_id}/")
    response_json = response.get_json() or []
    assert (response.status_code == 200 and 
            "success" in response_json)

def test_get_afiliados(client_app: FlaskClient):
    """
    Should call GET to /v1/afiliados and get all afiliados
    """
    response = client_app.get("/v1/afiliados/")
    response_json = response.get_json() or {}
    assert (response.status_code == 200 and 
        type(response_json.get("afiliados")) == list)

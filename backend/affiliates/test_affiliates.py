from flask.testing import FlaskClient
from common import affiliate_ref
from faker import Faker
import pytest

from models import (VALID_SEXO, VALID_GRAU_INSTRUCAO, 
    VALID_ESTADO_CIVIL)

faker = Faker()

@pytest.fixture
def first_affiliate():
    affiliates_list = affiliate_ref.order_by('id').limit(1).get()
    return affiliates_list[0].to_dict()

@pytest.fixture
def new_affiliate():
    cpf = str(faker.random_number(digits = 11))
    cpf = cpf[:3] + "." + cpf[3:6] + "." + cpf[6:9] + "-" + cpf[9:]
    return {
        "CPF": cpf,
        "RG": faker.name(),
        "nome": faker.name(),
        "email": faker.email(),
        "profissao": faker.job(),
        "endereco": faker.address(),
        "data_nascimento": faker.date(),
        "telefone": f"+1{faker.random_number(14)}",
        "sexo": faker.random_element(elements = VALID_SEXO),
        "estado_civil": faker.random_element(
            elements = VALID_ESTADO_CIVIL),
        "grau_instrucao": faker.random_element(
            elements = VALID_GRAU_INSTRUCAO),
    }

def test_post_affiliates(client_app: FlaskClient, new_affiliate: dict):
    """
    Should call POST to /v1/affiliates and create a new affiliate
    """
    response = client_app.post("/v1/affiliates/", json = new_affiliate)
    response_json = response.get_json() or {}
    assert response.status_code == 201, str(response_json)
    assert response_json["affiliate"]["CPF"] == new_affiliate["CPF"]

def test_post_affiliates_with_duplicated_cpf(client_app: FlaskClient, 
                                            first_affiliate: dict):
    """
    Should call POST to /v1/affiliates and fails to create a new affiliate
    """
    response = client_app.post("/v1/affiliates/", json = first_affiliate)
    response_json = response.get_json() or {}
    assert response.status_code == 400, str(response_json)

def test_post_affiliates_with_wrong_cpf(client_app: FlaskClient, 
                                       new_affiliate: dict):
    """
    Should call POST to /v1/affiliates and fails to create a new affiliate
    """
    new_affiliate["CPF"] = "12345678901"
    response = client_app.post("/v1/affiliates/", json = new_affiliate)
    response_json = response.get_json() or {}
    assert response.status_code == 400, str(response_json)

def test_show_affiliate(client_app: FlaskClient, 
                       first_affiliate: dict):
    """
    Should call GET to /v1/affiliate/:id and get one affiliate
    """
    affiliate_id = first_affiliate["id"]
    response = client_app.get(f"/v1/affiliate/{affiliate_id}/")
    response_json = response.get_json() or []
    assert (response.status_code == 200 and 
            first_affiliate == response_json)

def test_update_affiliate(client_app: FlaskClient, 
                         first_affiliate: dict):
    """
    Should call PUT to /v1/affiliate/:id and update one affiliate
    """
    affiliate_id = first_affiliate["id"]
    update_info = { "nome": faker.name() }

    response = client_app.put(f"/v1/affiliate/{affiliate_id}/", 
                              json = update_info )
    
    affiliate_doc = affiliate_ref.document(affiliate_id)
    affiliate_updated = affiliate_doc.get().to_dict()
    
    assert (response.status_code == 204 and 
            first_affiliate["id"] == affiliate_updated["id"] and
            first_affiliate["nome"] != affiliate_updated["nome"])

def test_delete_affiliate(client_app: FlaskClient, 
                         first_affiliate: dict):
    """
    Should call DELETE to /v1/affiliate/:id and get one affiliate
    """
    affiliate_id = first_affiliate["id"]
    response = client_app.delete(f"/v1/affiliate/{affiliate_id}/")
    response_json = response.get_json() or []
    assert (response.status_code == 200 and 
            "success" in response_json)

def test_get_affiliates(client_app: FlaskClient):
    """
    Should call GET to /v1/affiliates and get all affiliates
    """
    response = client_app.get("/v1/affiliates/")
    response_json = response.get_json() or {}
    assert (response.status_code == 200 and 
        type(response_json.get("affiliates")) == list)

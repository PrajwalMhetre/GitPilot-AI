from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_register_and_login_flow():
    payload = {
        "full_name": "Test User",
        "username": "testuser",
        "email": "test@example.com",
        "password": "StrongPass123!",
    }

    response = client.post("/api/v1/auth/register", json=payload)
    assert response.status_code == 201
    body = response.json()
    assert body["user"]["email"] == payload["email"]

    login_response = client.post(
        "/api/v1/auth/login",
        json={"email": payload["email"], "password": payload["password"]},
    )
    assert login_response.status_code == 200
    token_body = login_response.json()
    assert "access_token" in token_body

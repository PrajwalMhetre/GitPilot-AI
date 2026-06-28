from pydantic import BaseModel, Field


class UserCreate(BaseModel):
    full_name: str = Field(min_length=2)
    username: str = Field(min_length=3)
    email: str
    password: str = Field(min_length=8)


class LoginRequest(BaseModel):
    email: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserResponse(BaseModel):
    id: int
    full_name: str
    username: str
    email: str
    is_active: bool
    is_verified: bool

    model_config = {"from_attributes": True}


class UserWithToken(TokenResponse):
    user: UserResponse

from fastapi import APIRouter

router = APIRouter(prefix="/oauth", tags=["oauth"])


@router.get("/providers")
async def oauth_providers():
    return {
        "providers": [
            {"name": "google", "enabled": True},
            {"name": "github", "enabled": True},
        ]
    }

from fastapi import APIRouter

router = APIRouter(prefix="/github", tags=["github"])


@router.get("/connect")
async def github_connect():
    return {"status": "connected", "provider": "github"}

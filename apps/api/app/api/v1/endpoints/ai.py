from fastapi import APIRouter

router = APIRouter(prefix="/ai", tags=["ai"])


@router.get("/chat")
async def chat_preview():
    return {
        "message": "AI chat is ready",
        "capabilities": ["code review", "explanations", "task planning"],
    }

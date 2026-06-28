from fastapi import APIRouter

from app.api.v1.endpoints.ai import router as ai_router
from app.api.v1.endpoints.auth import router as auth_router
from app.api.v1.endpoints.github import router as github_router
from app.api.v1.endpoints.health import router as health_router
from app.api.v1.endpoints.oauth import router as oauth_router
from app.api.v1.endpoints.profile import router as profile_router

router = APIRouter()
router.include_router(health_router)
router.include_router(auth_router)
router.include_router(ai_router)
router.include_router(github_router)
router.include_router(oauth_router)
router.include_router(profile_router)
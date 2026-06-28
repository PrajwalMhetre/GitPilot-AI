from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.api.v1.router import router
from app.core.logging import logger
from app.db.init_db import init_db

init_db()

app = FastAPI(
    title="GitPilot AI API",
    description="Production-ready backend for GitPilot AI",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api/v1", tags=["v1"])


@app.on_event("startup")
def startup_event() -> None:
    init_db()
    logger.info("API startup complete")


@app.get("/", tags=["Root"])
async def root():
    return {
        "message": "Welcome to GitPilot AI API 🚀",
        "version": "1.0.0",
    }


@app.get("/health", tags=["Health"])
async def health():
    return JSONResponse(
        status_code=200,
        content={
            "status": "healthy",
            "service": "GitPilot AI API",
            "version": "1.0.0",
        },
    )
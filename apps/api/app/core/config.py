from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "GitPilot AI"
    APP_ENV: str = "development"
    APP_VERSION: str = "1.0.0"

    DATABASE_URL: str = ""
    REDIS_URL: str = "redis://localhost:6379"

    JWT_SECRET: str = "dev-secret"
    JWT_REFRESH_SECRET: str = "dev-refresh-secret"

    model_config = SettingsConfigDict(
        env_file=(".env", ".env.example"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    def get_database_url(self) -> str:
        if self.DATABASE_URL:
            return self.DATABASE_URL
        if self.APP_ENV == "test":
            return "sqlite+pysqlite:///./test.db"
        return "sqlite+pysqlite:///./gitpilot.db"


settings = Settings()

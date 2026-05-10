from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8', extra='ignore')

    app_name: str = 'Traveloop API'
    debug: bool = True
    api_base_url: str = 'http://localhost:8000'
    cors_origins: list[str] = ['http://localhost:3000']


settings = Settings()

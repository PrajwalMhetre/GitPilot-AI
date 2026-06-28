from loguru import logger

logger.remove()
logger.add("stdout", format="{time} | {level} | {message}", level="INFO")

import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT || 7500,

    MYSQL_DATABASE_NAME: process.env.MYSQL_DATABASE_NAME,

    USER_SALT_ROUNDS: 10
}
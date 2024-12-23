import { ConfigService } from '@nestjs/config';


const configService = new ConfigService();

export const FROM_EMAIL = configService.get('FROM_EMAIL');
const MAIL_SERVER = configService.get('MAIL_SERVER');
const MAIL_TOKEN = configService.get('MAIL_TOKEN');
const MAIL_PORT = configService.get('MAIL_PORT');
export const SETTINGS = {
  host: MAIL_SERVER,
  port: MAIL_PORT,
  secure: true,
  logger: true,
  auth: {
    user: FROM_EMAIL,
    pass: MAIL_TOKEN,
  },
};

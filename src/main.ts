import { NestFactory } from '@nestjs/core';
import { ClientModule } from './infraestructure/modules/client.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

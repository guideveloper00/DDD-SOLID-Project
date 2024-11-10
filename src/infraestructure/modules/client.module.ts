import { Module } from '@nestjs/common';
import { ClientController } from '../../interfaces/controllers/client.controller';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { ClientRepositoryImpl } from '../persistence/client.repository.impl';
import { CreateClientService } from '../../application/services/create-client.service';

@Module({
  controllers: [ClientController],
  providers: [
    { provide: ClientRepository, useClass: ClientRepositoryImpl },
    CreateClientService,
  ],
})
export class ClientModule {}

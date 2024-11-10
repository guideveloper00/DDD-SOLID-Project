import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { Client } from '../../domain/entities/client.entity';
import { CreateClientDto } from '../dtos/create-client.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(createClientDto: CreateClientDto): Promise<Client> {
    const client = new Client(uuidv4(), createClientDto.name, createClientDto.email);
    await this.clientRepository.save(client);
    return client;
  }
}

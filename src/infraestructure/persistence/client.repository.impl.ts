import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { Client } from '../../domain/entities/client.entity';

@Injectable()
export class ClientRepositoryImpl implements ClientRepository {
  private clients: Client[] = [];

  async findAll(): Promise<Client[]> {
    return this.clients;
  }

  async findById(id: string): Promise<Client | null> {
    return this.clients.find(client => client.id === id) || null;
  }

  async save(client: Client): Promise<void> {
    this.clients.push(client);
  }
}

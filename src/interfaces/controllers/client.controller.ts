import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateClientService } from '../../application/services/create-client.service';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { CreateClientDto } from '../../application/dtos/create-client.dto';

@Controller('clients')
export class ClientController {
  constructor(
    private readonly createClientService: CreateClientService,
    private readonly clientRepository: ClientRepository,
  ) {}

  @Post()
  async createClient(@Body() createClientDto: CreateClientDto) {
    return await this.createClientService.execute(createClientDto);
  }

  @Get()
  async findAll() {
    return await this.clientRepository.findAll();
  }
}

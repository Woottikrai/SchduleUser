import { GroupNameEntity } from './entities/group-name.entity';
import { Injectable } from '@nestjs/common';
import { CreateGroupNameDto } from './dto/create-group-name.dto';
import { UpdateGroupNameDto } from './dto/update-group-name.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class GroupNameService {
  constructor(private readonly dataSources: DataSource) {}

  async create(body: CreateGroupNameDto) {
    const { token } = body;
    const groupNameEntity = this.dataSources
      .getRepository(GroupNameEntity)
      .create({ token: token });
    return await this.dataSources.getRepository(GroupNameEntity).save(body);
  }

  async findAll() {
    return await this.dataSources.getRepository(GroupNameEntity).find();
  }

  async findOne(id: number) {
    return await this.dataSources
      .getRepository(GroupNameEntity)
      .find({ where: { id } });
  }

  async update(id: number, body: UpdateGroupNameDto) {
    return await this.dataSources
      .getRepository(GroupNameEntity)
      .update(id, body);
  }

  async delete(id: number) {
    await this.dataSources.getRepository(GroupNameEntity).delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor( @InjectRepository(User) private readonly userRepository: Repository<User>){}

  // Registrar un nuevo usuario en el sistema
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto)
    // const password = await bcrypt.hash(user.password, 10);
    // user.password = password
    return this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

 async findOneByEmail(email:string){
    const user = await this.userRepository.findBy({email})
    return user[0]
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id,updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

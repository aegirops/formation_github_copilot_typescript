import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async create(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  async findAll() {
    return this.usersService.findAll();
  }

  async findOne(id: number) {
    return this.usersService.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.usersService.remove(id);
  }
}

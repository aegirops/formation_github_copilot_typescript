import { CreateUserDto } from "./dto/create-user.dto";

export interface IUser {
  [key: string]: any;
}

export class UsersService {
  private users: IUser[] = [];

  create(user: CreateUserDto) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updatedUser: any) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    const existingUser = this.users[userIndex];
    if (
      typeof existingUser === "object" &&
      existingUser !== null &&
      typeof updatedUser === "object" &&
      updatedUser !== null
    ) {
      const mergedUser: IUser = {
        ...existingUser,
        ...updatedUser,
        id: existingUser.id, // Ensure 'id' is always present and not overwritten
      };
      this.users[userIndex] = mergedUser;
      return mergedUser;
    }
    return null;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      return this.users.splice(userIndex, 1);
    }
    return null;
  }
}

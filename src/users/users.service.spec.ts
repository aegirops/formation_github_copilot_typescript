import { UsersService } from "./users.service";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  it("should create a user", () => {
    const user = {
      id: 1,
      username: "john",
      email: "john@example.com",
      password: "secret",
    };
    const result = service.create(user);
    expect(result).toEqual(user);
    expect(service.findAll()).toContain(user);
  });

  it("should find all users", () => {
    const user1 = {
      id: 1,
      username: "john",
      email: "john@example.com",
      password: "secret",
    };
    const user2 = {
      id: 2,
      username: "jane",
      email: "jane@example.com",
      password: "secret",
    };
    service.create(user1);
    service.create(user2);
    const result = service.findAll();
    expect(result).toEqual([user1, user2]);
  });

  it("should find one user by id", () => {
    const user = {
      id: 1,
      username: "john",
      email: "john@example.com",
      password: "secret",
    };
    service.create(user);
    const result = service.findOne(1);
    expect(result).toEqual(user);
  });

  it("should update a user", () => {
    const user = {
      id: 1,
      username: "john",
      email: "john@example.com",
      password: "secret",
    };
    service.create(user);
    const updatedUser = { name: "John Doe" };
    const result = service.update(1, updatedUser);
    expect(result).toEqual({ ...user, ...updatedUser });
  });

  it("should remove a user", () => {
    const user = {
      id: 1,
      username: "john",
      email: "john@example.com",
      password: "secret",
    };
    service.create(user);
    service.remove(1);
    expect(service.findOne(1)).toBeUndefined();
  });
});

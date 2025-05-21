# Copilot Instructions – NestJS / TypeScript

- Always generate code in TypeScript, compatible with NestJS version 9 or later.
- Follow official NestJS conventions using decorators like `@Controller`, `@Injectable`, `@Module`, etc.
- Maintain modular project structure: each main feature belongs to its own module.
- Use dependency injection through constructors.
- Place controllers in the `controllers/` folder, services in `services/`, and DTOs in `dto/`.
- Prefer Data Transfer Objects (DTOs) with the `class-validator` library for data validation.
- Use `async/await` for all asynchronous operations.
- For database operations, use `TypeORM` or `Prisma` as configured in the project.
- Write unit tests using `@nestjs/testing` and `jest` for all services and controllers.
- Apply ESLint rules recommended for TypeScript and NestJS, and format code with Prettier.
- Document endpoints with JSDoc comments and use `@nestjs/swagger` decorators (`@Api*`) where appropriate.
- Add comments to explain any complex logic.

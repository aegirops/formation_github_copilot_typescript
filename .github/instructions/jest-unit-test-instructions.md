---
applyTo: "*.spec.ts"
---

# Writing Unit Tests (.spec.ts) with Jest in NestJS

## File Naming Convention

- Test files should be named `[name].spec.ts`
- Place test files next to the files they test

## Basic Structure

```typescript
import { Test, TestingModule } from "@nestjs/testing";

describe("YourClass", () => {
  let service: YourService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YourService],
    }).compile();

    service = module.get<YourService>(YourService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
```

## Common Jest Matchers

- `expect(value).toBe(other)` - Exact equality
- `expect(value).toEqual(other)` - Deep equality
- `expect(fn).toThrow(error)` - Exception testing
- `expect(spy).toHaveBeenCalled()` - Spy verification
- `expect(value).toBeDefined()` - Defined check

## Mocking

```typescript
jest.mock("./path/to/module");
jest.spyOn(object, "method").mockImplementation(() => mockValue);
```

## Async Testing

```typescript
it("should do something async", async () => {
  const result = await service.asyncMethod();
  expect(result).toBeDefined();
});
```

## Test Coverage

Run tests with coverage:

```bash
npm test -- --coverage
```

## Best Practices

1. Test one thing per test case
2. Use descriptive test names
3. Follow AAA pattern (Arrange-Act-Assert)
4. Mock external dependencies
5. Keep tests independent
6. Write both positive and negative test cases

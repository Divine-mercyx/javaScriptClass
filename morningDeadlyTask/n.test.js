beforeAll(() => {
  console.log('Runs once before all tests');
});

beforeEach(() => {
  console.log('Runs before each test');
});

test('first test', () => {
  console.log('Test 1');
});

test('second test', () => {
  console.log('Test 2');
});


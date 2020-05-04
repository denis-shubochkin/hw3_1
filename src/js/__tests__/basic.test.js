import health from '../basic';

test('healthy > 50', () => {
  const result = health({name: 'Маг', health: 90});
  expect(result).toBe('healthy');
});

test('wounded < 50 && > 15', () => {
  const result = health({name: 'Маг', health: 40});
  expect(result).toBe('wounded');
});

test('critical <= 15', () => {
  const result = health({name: 'Маг', health: 10});
  expect(result).toBe('critical');
});

test('health is not number', () => {
  const result = health({name: 'Маг', health: 'ww'});
  expect(result).toBe('error in player');
});
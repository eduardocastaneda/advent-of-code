import { run } from './day3.part2';
import { input } from './input';

describe('useEngagement', () => {
  test('example input part 2', () => {
    const input = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];

    const result = run(input);

    expect(result).toEqual(230);
  });

  test('real input', () => {
    const result = run(input);

    expect(result).toEqual(4474944);
  });
});

import { describe, expect, test } from '@jest/globals';
import { id } from '..';

describe('id', () => {
	test('should return the same number', () => {
		expect(id(1)).toBe(1);
	});
});

import { expectAssignable, expectNotAssignable } from 'tsd-lite';
import { JsonObject } from '../jsonObject';
import { id } from '..';

expectAssignable<JsonObject>({
	caption: 'test',
	count: 100,
	isTest: true,
	location: { name: 'test', start: [1, 2], valid: false, x: 10, y: 20 },
	values: [0, 10, 20, { x: 1, y: 2 }, true, 'test', ['a', 'b']],
});

expectNotAssignable<JsonObject>({
	filter: () => {},
});

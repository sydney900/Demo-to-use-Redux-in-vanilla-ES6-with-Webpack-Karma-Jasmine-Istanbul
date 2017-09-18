import { increment, decrement } from '../../src/redux/actions';

describe('MyAction', function() {	
	
	beforeEach(function(){
		
	});
	
	it('Increment action should be the increment', function() {
		var actualValue = increment();
		expect(actualValue.type).toEqual('INCREMENT');
	});

	it('Decrement action should be the increment', function() {
		var actualValue = decrement();
		expect(actualValue.type).toEqual('DECREMENT');
	});
});
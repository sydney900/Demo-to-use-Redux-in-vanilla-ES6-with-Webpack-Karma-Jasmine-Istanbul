import { increment, decrement } from '../../src/redux/actions';
import { defaultState, countReducer } from '../../src/redux/reducers';

describe('My Reducers', function() {	
	
	beforeEach(function(){
		
	});
	
	it("counterReducer should work with increment action", function() {
		let state = defaultState;
		var reducer = countReducer;
		state = reducer(state, increment());
		expect(state.count).toBe(1);
	});

	it("counterReducer should work with decrement action", function() {
		let state = defaultState;
		var reducer = countReducer;
		state = reducer(state, decrement());
		expect(state.count).toBe(-1);
	});

});
/*
test('expected failure', () => {
   expect(true).toBe(false);
}_;
*/

test('freebie', () => {
	return Promise.resolve(true);
});

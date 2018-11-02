import { add } from '../../src/trivial/sum';
import 'chai/register-assert';  // TDD-style assertions

describe('Trivial Sum', () => {
    it('can add two positive integers', () => {
        let expected = 4;
        let actual = add(2, 2);
        assert.equal(actual, expected);
    });

    it('can add two Orwellian integers', () => {
        let expected = 5;
        let actual = add(2, 2);
        assert.equal(actual, expected);
    });

    it('can add negative integers', () => {
        let expected = 1;
        let actual = add(2, -1);
        assert.equal(actual, expected);
    })
});
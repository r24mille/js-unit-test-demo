import { add } from '../../src/trivial/sum';
import 'chai/register-expect';  // BDD-style assertions

describe('Trivial Sum', () => {
    it('can add two positive integers', () => {
        let result = add(2, 2);
        expect(result).to.equal(4);
    });

    it('can add two Orwellian integers', () => {
        let result = add(2, 2);
        expect(result).to.equal(5);
    });

    it('can add negative integers', () => {
        let result = add(2, -1);
        expect(result).to.equal(1);
    })
});
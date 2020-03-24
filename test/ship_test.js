const expect = require('chai').expect;

//Test Suite
describe('CheckForShip', () => {
    let checkForShip = require('../game_logic/ship_methods').checkForShip;

    let player = {
        ships: [
            {
                locations: [[0,0]]
            }
        ]
    }

    it('should correctly report no ship at a given player coordinates', () => {
        expect(checkForShip(player, [9,9])).to.be.false;
    });
})
const expect = require('chai').expect;

//Test Suite
describe('CheckForShip', () => {
    let checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('should correctly report no ship at a given player coordinates', () => {
        let player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [9,9])).to.be.false;
    });

    it('should correctly report ship located at a given coordinates', () => {
        let player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [0,0])).to.be.true;
    });

    it('should handle ships located at different coordinates', () => {
        let player = {
            ships: [
                {
                    locations: [[0,0], [0,1]]
                }
            ]
        }
        expect(checkForShip(player, [0,0])).to.be.true;
        expect(checkForShip(player, [0,1])).to.be.true;
        expect(checkForShip(player, [9,9])).to.be.false;
    });

    it('should handle checking multiple ships', () => {
        let player = {
            ships: [
                {
                    locations: [[0,0], [0,1]]
                },
                {
                    locations: [[1,0], [1,1]]
                }
            ]
        }
        expect(checkForShip(player, [0,0])).to.be.true;
        expect(checkForShip(player, [0,1])).to.be.true;
        expect(checkForShip(player, [1,0])).to.be.true;
        expect(checkForShip(player, [1,1])).to.be.true;
        expect(checkForShip(player, [9,9])).to.be.false;
    });

    describe("DamagedShip", () =>{
        const damagedShip = require('../game_logic/ship_methods').damagedShip;

        it('should register damage on a given ship at a given location', () => {
            let ship = {
                locations: [[0, 0]],
                damage: []
            };

            damagedShip(ship, [0, 0]);

            expect(ship.damage).to.not.be.empty;
            expect(ship.damage[0]).to.deep.equal([0, 0]);
        })
    })
})
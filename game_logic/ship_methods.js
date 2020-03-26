const checkForShip = (player, coordinates) => {
    let shipPresent, ship;

    for(let i = 0; i < player.ships.length; i++){
        ship = player.ships[i];

        shipPresent = ship.locations.filter((actualCoordinate) => {
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
        })[0];

        if(shipPresent){
            return ship;
        }
    }

    return false;

};

const damagedShip = (ship, coordinates) => {
    ship.damage.push(coordinates);
};

const fireShip = (player, coordinates) => {
    let ship = checkForShip(player, coordinates);

    if(ship){
        damagedShip(ship, coordinates);
    }
};

module.exports.checkForShip = checkForShip;
module.exports.damagedShip = damagedShip;
module.exports.fireShip = fireShip;



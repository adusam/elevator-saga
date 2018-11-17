{
    init: function(elevators, floors) {
        var elevator0 = elevators[0];
        //elevator.on("idle", function() { elevator.goToFloor(0); });
        floors.forEach(function(floor) {
            // console.log(floor.floorNum());
            floor.on("up_button_pressed", function() {
                elevator0.goToFloor(floor.floorNum());
                elevator0.on("floor_button_pressed", function(floorNum) {
                    elevator0.goToFloor(floorNum);
                    // console.log(floorNum);
                })
            } );
        } );
        
        var elevator1 = elevators[1];
        //elevator.on("idle", function() { elevator.goToFloor(0); });
        floors.forEach(function(floor) {
            floor.on("down_button_pressed", function() {
                elevator1.goToFloor(floor.floorNum());
                elevator1.on("floor_button_pressed", function(floorNum) {
                    elevator1.goToFloor(floorNum);
                })
            } );
        } );
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
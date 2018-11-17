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
        
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
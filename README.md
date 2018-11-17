# elevator-saga
play.elevatorsaga.com
に挑戦するメモ

# default code
```
{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
            elevator.goToFloor(1);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
```

# Level 1
0,1,2を順に回るだけでクリア

# Level 2
複数フロアのイベント取り出しを入れてみた  
いまいちJSのイベントの処理の順番がわからない。。。


# Level 3
2のままでいけた

# Level4
上ボタン用、下ボタン用で分けてみたが、すでに回収された階に別のエレベーターが止まってしまう。  
押された階をキューに入れる仕組みが必要そう？



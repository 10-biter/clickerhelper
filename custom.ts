
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/




/**
 * Custom blocks
 */
//% weight=100 color=#961759 icon="\uf3a5"
namespace Clicker {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function create_clicker_sprite(): void {
        let mySprite = sprites.create(img`
            . . . . . . . 6 . . . . . . . .
            . . . . . . 8 6 6 . . . 6 8 . .
            . . . e e e 8 8 6 6 . 6 7 8 . .
            . . e 2 2 2 2 e 8 6 6 7 6 . . .
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
            e 2 2 2 2 2 2 2 4 e 2 e e c . .
            e e 2 e 2 2 4 2 2 e e e c . . .
            e e e e 2 e 2 2 e e e c . . . .
            e e e 2 e e c e c c c . . . . .
            . c c c c c c c . . . . . . . .
        `, SpriteKind.Player)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
    controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        info.changeScoreBy(1)
    })
}

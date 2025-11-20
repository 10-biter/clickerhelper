
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
    export function clickerModeOn(): void {
        let make = "yes"
    }






    /**
 * TODO: describe your function here
 * @param n describe parameter here, eg: 5
 * @param s describe parameter here, eg: "Hello"
 * @param e describe parameter here
 */
    //% block
    export function clickerModeOff(): void {
        let make = "no"

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
        if (Math.percentChance(50)) {
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            info.changeScoreBy(1)
        }    
    })



        
}

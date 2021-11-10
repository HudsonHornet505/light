basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("It's Sunny")
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . # # .
            . # # . .
            # # . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . # # .
            . # # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            . . # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            . # # . .
            # # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # .
            . # # . .
            # # . . .
            `)
    }
})

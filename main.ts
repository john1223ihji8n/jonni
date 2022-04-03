namespace SpriteKind {
    export const puanm = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`ters`, join, 0, -120)
})
sprites.onOverlap(SpriteKind.puanm, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-3)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-3)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fountain, 90)
    sprite.destroy()
    info.changeScoreBy(18)
    if (info.score() == 200) {
        game.over(true)
    }
})
let puanm: Sprite = null
let mi_tio: Sprite = null
let projectile: Sprite = null
let join: Sprite = null
effects.smiles.startScreenEffect()
join = sprites.create(assets.image`pum`, SpriteKind.Player)
controller.moveSprite(join)
join.setStayInScreen(true)
info.setLife(6)
info.setScore(0)
game.onUpdateInterval(1500, function () {
    mi_tio = sprites.createProjectileFromSide(assets.image`josh`, 0, 42)
    mi_tio.x = randint(0, 160)
    mi_tio.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(3000, function () {
    puanm = sprites.createProjectileFromSide(assets.image`pom`, 0, 35)
    puanm.x = randint(10, 160)
    puanm.setKind(SpriteKind.puanm)
})

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }
  preload() {  
    this.load.image('fondo','./Imagenes/Background/colored_grass.png');
    this.load.image('platform','./Imagenes/Background/grass.png')
    this.load.image('player','./Imagenes/Personaje/CerdoVerde.jpg');
    this.load.image('base','./Imagenes/Background/sand.png')
  }

  create() {
    this.scene.start('scene');
  }
}

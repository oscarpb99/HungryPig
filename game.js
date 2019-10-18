export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }
  preload() {  
    this.load.image('fondo','./Imagenes/Background/colored_grass.png');
    this.load.image('suelo','./Imagenes/Background/grass.png')
    this.load.image('playerGreen','./Imagenes/Personaje/CerdoVerde.jpg');
  }

  create() {
    this.scene.start('scene');
  }
}

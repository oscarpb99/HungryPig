export default class Boot extends Phaser.Scene {
    constructor() {
      super({ key: 'boot' });
    }
    preload() {

      this.load.image('base', 'Imagenes\Background\grass.png');
      this.load.image('fondo0','Imagenes\Background\colored_grass')
    }
  
    create() {
      this.scene.start('scene');
    }
  }
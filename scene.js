import Player from './player.js'
import Platform from './platform.js'

export default class Scene extends Phaser.Scene {

    constructor(){
        super({key: 'scene'});
    }

    create(){
        this.stars= 10;
        this.player= new Player(this,200,300);
        this.base = this.add.group ();

        new Platform(this, this.player, this.bases, 150, 350);
        new Platform(this, this.player, this.bases, 850, 350);
        new Platform(this, this.player, this.bases, 500, 200);
        new Platform(this, this.player, this.bases, 150, 100);
        new Platform(this, this.player, this.bases, 850, 100);
        
        
    }


}
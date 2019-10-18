import Player from './player.js'
import Base from './base.js'

export default class Scene extends Phaser.Scene {

    constructor(){
        super({key: 'scene'});
    }

    create(){
        this.stars= 10;
        this.playerGreen= new Player(this,200,300);
        this.suelo = this.add.group ();
        
        
    }


}
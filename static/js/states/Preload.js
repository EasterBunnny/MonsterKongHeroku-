var Match3 = Match3 || {};

//loading the game assets
Match3.PreloadState = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(100, 1);
    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.image('block1', 'static/images/bean_blue.png');
    this.load.image('block2', 'static/images/bean_green.png');
    this.load.image('block3', 'static/images/bean_orange.png');
    this.load.image('block4', 'static/images/bean_pink.png');
    this.load.image('block5', 'static/images/bean_purple.png');
    this.load.image('block6', 'static/images/bean_yellow.png');
    this.load.image('block7', 'static/images/bean_white.png');
    this.load.image('deadBlock', 'static/images/bean_dead.png');
    

  },
  create: function() {
    this.state.start('Game');
  }
};

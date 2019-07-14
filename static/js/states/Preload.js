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
    this.load.image('block1', 'js/images/bean_blue.png');
    this.load.image('block2', 'js/images/bean_green.png');
    this.load.image('block3', 'js/images/bean_orange.png');
    this.load.image('block4', 'js/images/bean_pink.png');
    this.load.image('block5', 'js/images/bean_purple.png');
    this.load.image('block6', 'js/images/bean_yellow.png');
    this.load.image('block7', 'js/images/bean_white.png');
    this.load.image('deadBlock', 'js/images/bean_dead.png');
    this.load.image('background', 'js/images/backyard2.png');

  },
  create: function() {
    this.state.start('Game');
  }
};

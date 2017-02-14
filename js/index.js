$(document).ready(function() {
    var game = new Phaser.Game(960, 639, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var player, fire, cursors, fireshot;

    function preload() {
        game.load.image('bg', '../images/volcan.jpg');
        game.load.image('house', '../images/House.png');
        game.load.spritesheet('fire', '../images/Soreyuke Fire.png', 130, 130, 30);
        game.load.spritesheet('megaman', '../images/Mega Man.png', 65, 65, 20);
        game.load.spritesheet('fireshot', '../images/Boktai Solar.png', 170, 100, 90);
        game.load.spritesheet('house', '../images/House.png', 190, 210, 4);

    }

    function create() {
        game.add.image(0, 0, 'bg');
        game.add.image(0, 0, 'house');

        fire = game.add.sprite(170, 290, 'fire');
        fire.animations.add('center', [0, 1, 2, 3], 10, true);
        game.physics.arcade.enable(fire);

        fireshot = game.add.sprite(190, 350, 'fireshot');
        fireshot.animations.add('right', [8, 9, 10, 11], 10, true);
        game.physics.arcade.enable(fireshot);


        player = game.add.sprite(800, 500, 'megaman');
        player.animations.add('left', [0, 1, 2], 5, true);
        player.animations.add('right', [4, 5, 6], 5, true);
        player.animations.add('up', [8, 9, 10], 5, true);
        player.animations.add('down', [2, 6], 5, true);
        game.physics.arcade.enable(player);

        cursors = game.input.keyboard.createCursorKeys();

        player.body.collideWorldBounds = true;
        fireshot.body.collideWorldBounds = true;

    }

    function update() {
        fire.animations.play('center');
        fireshot.animations.play('right');

        //  Reset the players velocity (movement)
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        fireshot.body.velocity.x = 0;
        fireshot.body.velocity.y = 0;
        fireshot.body.velocity.x = 150;

        if (cursors.left.isDown) {
            //  Move to the left
            player.body.velocity.x = -150;

            player.animations.play('left');
        } else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 150;

            player.animations.play('right');
        } else if (cursors.up.isDown) {
            //  Move to the right
            player.body.velocity.y = -150;

            player.animations.play('up');
        } else if (cursors.down.isDown) {
            //  Move to the right
            player.body.velocity.y = 150;

            player.animations.play('down');
        } else {
            //  Stand still
            player.animations.stop();
            player.frame = 4;
        }
    }






});
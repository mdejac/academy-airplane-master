const _MISSLE_SPEED_ = 5, _ENEMY_SPEED_ = 1, _GAME_SPEED_ = 10, _MAX_LIVES_ = 20, _MAX_ROUNDS_ = 4, _MAX_PLAYER_SPEED_ = 25;
		const _MISSLE_LEFT_ = 5, _MISSLE_TOP_ = 20, _ENEMY_LEFT_ = 70, _ENEMY_TOP_ = 70, _PLAYER_LEFT_ = 80, _PLAYER_TOP_ = 100, _PLAYER_TOP_LIMIT_ = 570;
		
		const _WAVE_ = [
			//WAVE 1
			[{left: 10, top: 85},
			 {left: 100, top: 85},
			 {left: 45, top: 10},
			 {left: 720, top: 85},
			 {left: 650, top: 85},
			 {left: 685, top: 10},
			 {left: 280, top: 10},
			 {left: 420, top: 10}],
			//WAVE 2
			[{left: 10, top: 160},
			 {left: 100, top: 160},
			 {left: 45, top: 85},
			 {left: 720, top: 160},
			 {left: 650, top: 160},
			 {left: 685, top: 85},
			 {left: 280, top: 85},
			 {left: 420, top: 85}],
			//WAVE 3
			[{left: 10, top: 235},
			 {left: 100, top: 235},
			 {left: 45, top: 160},
			 {left: 720, top: 235},
			 {left: 650, top: 235},
			 {left: 685, top: 160},
			 {left: 280, top: 160},
			 {left: 420, top: 160}],
			//WAVE 4
			[{left: 10, top: 310},
			 {left: 100, top: 310},
			 {left: 45, top: 235},
			 {left: 720, top: 310},
			 {left: 650, top: 310},
			 {left: 685, top: 235},
			 {left: 280, top: 235},
			 {left: 420, top: 235}],
			//WAVE 5
			[{left: 10, top: 385},
			 {left: 100, top: 385},
			 {left: 45, top: 235},
			 {left: 720, top: 385},
			 {left: 650, top: 385},
			 {left: 685, top: 235},
			 {left: 280, top: 235},
			 {left: 420, top: 235}],
			//WAVE 6
			[{left: 10, top: 460},
			 {left: 100, top: 460},
			 {left: 45, top: 385},
			 {left: 720, top: 460},
			 {left: 650, top: 460},
			 {left: 685, top: 385},
			 {left: 280, top: 385},
			 {left: 420, top: 385}],
			//WAVE 7
			[{left: 10, top: 535},
			 {left: 100, top: 535},
			 {left: 45, top: 460},
			 {left: 720, top: 535},
			 {left: 650, top: 535},
			 {left: 685, top: 460},
			 {left: 280, top: 460},
			 {left: 420, top: 460}],
			//WAVE 8
			 [{left: 10, top: 85},
			 {left: 100, top: 85},
			 {left: 45, top: 10},
			 {left: 720, top: 85},
			 {left: 650, top: 85},
			 {left: 685, top: 10},
			 {left: 280, top: 10},
			 {left: 420, top: 10},
			 {left: 120, top: 10},
			 {left: 610, top: 10}],
			//WAVE 9
			[{left: 10, top: 160},
			 {left: 100, top: 160},
			 {left: 45, top: 85},
			 {left: 720, top: 160},
			 {left: 650, top: 160},
			 {left: 685, top: 85},
			 {left: 280, top: 85},
			 {left: 420, top: 85},
			 {left: 120, top: 85},
			 {left: 610, top: 85}],
			//WAVE 10
			[{left: 10, top: 235},
			 {left: 100, top: 235},
			 {left: 45, top: 160},
			 {left: 720, top: 235},
			 {left: 650, top: 235},
			 {left: 685, top: 160},
			 {left: 280, top: 160},
			 {left: 420, top: 160},
			 {left: 120, top: 160},
			 {left: 610, top: 160}],
			//WAVE 11
			[{left: 10, top: 310},
			 {left: 100, top: 310},
			 {left: 45, top: 235},
			 {left: 720, top: 310},
			 {left: 650, top: 310},
			 {left: 685, top: 235},
			 {left: 280, top: 235},
			 {left: 420, top: 235},
			 {left: 120, top: 235},
			 {left: 610, top: 235}],
			//WAVE 12
			[{left: 10, top: 385},
			 {left: 100, top: 385},
			 {left: 45, top: 310},
			 {left: 720, top: 385},
			 {left: 650, top: 385},
			 {left: 685, top: 310},
			 {left: 280, top: 310},
			 {left: 420, top: 310},
			 {left: 120, top: 310},
			 {left: 610, top: 310}],
			//WAVE 13
			[{left: 10, top: 460},
			 {left: 100, top: 460},
			 {left: 45, top: 385},
			 {left: 720, top: 460},
			 {left: 650, top: 460},
			 {left: 685, top: 385},
			 {left: 280, top: 385},
			 {left: 420, top: 385},
			 {left: 120, top: 385},
			 {left: 610, top: 385}],
			//WAVE 14
			[{left: 10, top: 535},
			 {left: 100, top: 535},
			 {left: 45, top: 460},
			 {left: 720, top: 535},
			 {left: 650, top: 535},
			 {left: 685, top: 460},
			 {left: 280, top: 460},
			 {left: 420, top: 460},
			 {left: 120, top: 460},
			 {left: 610, top: 460}],
			//WAVE 15
			[{left: 10, top: 85},
			 {left: 100, top: 85},
			 {left: 45, top: 10},
			 {left: 720, top: 85},
			 {left: 650, top: 85},
			 {left: 685, top: 10},
			 {left: 280, top: 10},
			 {left: 420, top: 10},
			 {left: 10, top: 235},
			 {left: 100, top: 235},
			 {left: 45, top: 160},
			 {left: 720, top: 235},
			 {left: 650, top: 235},
			 {left: 685, top: 160},
			 {left: 280, top: 160},
			 {left: 420, top: 160},
			 {left: 10, top: 385},
			 {left: 100, top: 385},
			 {left: 45, top: 235},
			 {left: 720, top: 385},
			 {left: 650, top: 385},
			 {left: 685, top: 235},
			 {left: 280, top: 235},
			 {left: 420, top: 235},
			 {left: 10, top: 535},
			 {left: 100, top: 535},
			 {left: 45, top: 460},
			 {left: 720, top: 535},
			 {left: 650, top: 535},
			 {left: 685, top: 460},
			 {left: 280, top: 460},
			 {left: 420, top: 460},
			 {left: 120, top: 460},
			 {left: 610, top: 460},
			 {left: 190, top: 535},
			 {left: 260, top: 535}]	
		];
		
		let player = {
			left: 350,
			top: 800,
			image: 'rocket.png'
		}

		let wave = 0, round = 0;

		let enemies = _WAVE_[wave].map(enemy => ({...enemy}));

		let missles = [];

		let lives = _MAX_LIVES_, playerTopLimit = _PLAYER_TOP_LIMIT_;

		let playerAlive = false, rightPressed = false, leftPressed = false, upPressed = false, downPressed = false;

		function drawPlayer(){
		//Create DIV tag to drawplayer
			content = "<div class='player' style='left:"+player.left+"px; top: "+player.top+"px; background-image: url(img/"+player.image+")'></div>";
			document.getElementById("player").innerHTML = content;
		}
		drawPlayer();

		function drawEnemies(){
		//Create DIV tags to draw enemies
			content = "";
			for (let i = 0; i < enemies.length; i++){
				content += "<div class='enemy' style='left:"+enemies[i].left+"px; top: "+enemies[i].top+"px'></div>";
			}
			document.getElementById("enemies").innerHTML = content;
		}
		drawEnemies();

		function moveEnemies(){
		//Move enemies fdown the screen
			for (let i = 0; i < enemies.length; i++){
				enemies[i].top += _ENEMY_SPEED_;

				//Test for collision with player
				if (playerCollision(enemies[i])){
					lives = 0;
				}
				
				//If enemies reach the bottom of the screen move them back to the top
				if (enemies[i].top > 830){
					//Reduce lives by one without letting it go below 0
					lives = lives == 0 ? 0 : lives-1;
					if (lives > 0){
						enemies[i].top -= 820;
					}
				}
			}
		}

		function drawMissles(){
		//Create DIV tags to draw missles
			content = "";
			for (let i = 0; i < missles.length; i++){
				content += "<div class='missle' style='left:"+missles[i].left+"px; top: "+missles[i].top+"px'></div>";
			}
			document.getElementById("missles").innerHTML = content;
		}

		function moveMissles(){
		//Move missles towards top of screen
			for (let i = 0; i < missles.length; i++){
				missles[i].top -= _MISSLE_SPEED_;

				//Test for collision with enemies
				for (let x = 0; x < enemies.length; x++){
					//Call missleCollision to test bounding box collision
					if (missleCollision(missles[i], enemies[x])){
						
						//Remove enemy from array on collision
						enemies.splice(x,1);
						
						//Remove missle from array on collision
						missles.splice(i,1);
						
						//Reduce i to accomodate for missle array size change
						i == 0 ? i = 0 : i--;
						
						//Stop checking for missle collision with more enemies
						break;
					}
				}

				//Remove missle when top of screen is reached
				if (missles.length && missles[i].top <= 10){
					missles.splice(i, 1);
				}
			}
		}

		function missleCollision(missle, enemy){
		//Create bounding box for missle and enemy and test for collision
			const missleBoundingBox = {
				left: missle.left,
				right: missle.left + _MISSLE_LEFT_,
				top: missle.top,
				bottom: missle.top + _MISSLE_TOP_
			}
			const enemyBoundingBox = {
				left: enemy.left,
				right: enemy.left + _ENEMY_LEFT_,
				top: enemy.top,
				bottom: enemy.top + _ENEMY_TOP_
			}

			// Test for collison
			if (missleBoundingBox.left < enemyBoundingBox.right &&
				missleBoundingBox.right > enemyBoundingBox.left &&
				missleBoundingBox.top < enemyBoundingBox.bottom &&
				missleBoundingBox.bottom > enemyBoundingBox.top) {
					return true;
			}
			return false;			
		}

		function playerCollision(enemy){
		//Create bounding box for player and enemy and test for collision
			const playerBoundingBox = {
				left: player.left,
				right: player.left + _PLAYER_LEFT_,
				top: player.top,
				bottom: player.top + _PLAYER_TOP_
			}
			const enemyBoundingBox = {
				left: enemy.left,
				right: enemy.left + _ENEMY_LEFT_,
				top: enemy.top,
				bottom: enemy.top + _ENEMY_TOP_
			}

			// Test for collison
			if (playerBoundingBox.left < enemyBoundingBox.right &&
				playerBoundingBox.right > enemyBoundingBox.left &&
				playerBoundingBox.top < enemyBoundingBox.bottom &&
				playerBoundingBox.bottom > enemyBoundingBox.top) {
					return true;
			}
			return false;			
		}

		document.onkeydown = function(e) {
		//Test for keyboard input and move player accordingly
			//Press enter to begin game
			if (!playerAlive && e.keyCode == 13){
				start();
			}
			if (playerAlive){
				//Move left with arrow or a
				if (e.keyCode == 37 || e.keyCode == 65 && player.left > 10){
					leftPressed = true;
					player.left -= 10;
				}
				//Move right with arrow or d
				if (e.keyCode == 39 || e.keyCode == 68 && player.left < 730){
					rightPressed = true;
					player.left += 10;
				}
				//Move up with arrow or w
				if (e.keyCode == 38 || e.keyCode == 87 && player.top > playerTopLimit){
					upPressed = true;
					player.top -= 10;
				}
				//Move down with arrow or s
				if (e.keyCode == 40 || e.keyCode == 83 && player.top < 830){
					downPressed = true;
					player.top += 10;
				}
				//Fire missle with space
				if (e.keyCode == 32){
					//Add missle to array every time space is pressed
					missles.push({left: player.left+37, top: player.top});
					//Draw missles as soon as they are fired
					drawMissles();
				}
				//Update player position
				drawPlayer();
			}
		}

		document.onkeyup = function(e) {
		//Reset key pressed to false on release
			if (e.keyCode == 37 || e.keyCode == 65) {
				leftPressed = false;
			}
			if (e.keyCode == 39 || e.keyCode == 68) {
				rightPressed = false;
			}
			if (e.keyCode == 38 || e.keyCode == 87) {
				upPressed = false;
			}
			if (e.keyCode == 40 || e.keyCode == 83) {
				downPressed = false;
			}
		}

		setInterval(function() {
		//Continuously move player while key is pressed
			if (playerAlive) {
				if (leftPressed && player.left > 10) {
					player.left -= 10;
				}
				if (rightPressed && player.left < 730) {
					player.left += 10;
				}
				if (upPressed && player.top > playerTopLimit) {
					player.top -= 10;
				}
				if (downPressed && player.top < 830) {
					player.top += 10;
				}
				drawPlayer();
			}
		}, _MAX_PLAYER_SPEED_);

		function gameLoop(){
			//Repeat function calls while player ship is intact
			if (player.image == 'rocket.png'){		
				moveMissles();
				drawMissles();
			
				//move and draw enemies as long as there is one left or lives is not 0 and player is alive
				if (enemies.length && lives > 0  && playerAlive){
					moveEnemies();
					drawEnemies();
				//Send next wave until in game wave 15 has been defeated 3 times.
				} else if (round < _MAX_ROUNDS_) {
					if (wave == 14){
						wave = 13;
						round++;
					}
					wave++;
					enemies = _WAVE_[wave].map(enemy => ({...enemy}));
				}

				//If the game is over with win condition draw enemies one last time to remove destroyed ship and allow player to pass invisible barrier
				if (!enemies.length){
					drawEnemies();
					playerTopLimit = 10;
				}

				//Remove movement if player failed and set player image to explosion
				if (lives == 0){
					playerAlive = false;
					player.image = 'explosion.png';
					const gameOverScreen = document.querySelector('#space');
					gameOverScreen.style.backgroundImage = 'url(img/gameOver.jpg';
					drawPlayer();
				}

				//Call game loop
				setTimeout(gameLoop, _GAME_SPEED_);
			}
		}

		function setGame(){
			wave = 0;
			round = 0;
			missles = [];
			enemies = [];
			enemies = _WAVE_[wave].map(enemy => ({...enemy}));
			playerAlive = true;
			player.image = 'rocket.png';
			player.left = 350;
			player.top = 800;
			playerTopLimit = _PLAYER_TOP_LIMIT_;
			lives = _MAX_LIVES_;
			rightPressed = false, leftPressed = false, upPressed = false, downPressed = false;
			const gameScreen = document.querySelector('#space');
			gameScreen.style.backgroundImage = 'url(img/space.jpg';
		}

		function start(){
		//Start game
			setGame();
			drawPlayer();
			gameLoop();
		}
		//start();

		const showValueOf = value => console.log(value); //debug function to see variable values
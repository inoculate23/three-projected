controls = new THREE.OrbitControls( camera, renderer.domElement );
var floorTexture = new THREE.ImageUtils.loadTexture( 'imageURL.jpg' );
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
	floorTexture.repeat.set( 10, 10 );
	var floorMaterial = new THREE.MeshBasicMaterial({map: floorTexture, side: THREE.DoubleSide});
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -0.5;
	floor.rotation.x = Math.PI / 2;
	scene.add(floor)

    	
scene.fog = new THREE.FogExp2( 0x9999ff, 0.00025 );
video = document.getElementById( 'monitor' );
videoImage = document.getElementById( 'videoImage' );
videoImageContext = videoImage.getContext( '2d' );
videoImageContext.fillStyle = '#000000';
videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );
videoTexture = new THREE.Texture( videoImage );
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;
var movieMaterial=new THREE.MeshBasicMaterial({map:videoTexture,overdraw:true,side:THREE.DoubleSide});
var movieGeometry = new THREE.PlaneGeometry( 100, 100, 1, 1 );
var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
movieScreen.position.set(0,50,0);
scene.add(movieScreen);

camera.position.set(0,150,300);
camera.lookAt(movieScreen.position);
videoImageContext.drawImage( video, 0, 0, videoImage.width, videoImage.height );
renderer.render( scene, camera );

requestAnimationFrame( animate );
render();
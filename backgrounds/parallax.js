<script type="text/javascript">
	var clouds_x = 0;
	var grass_x = 0;
	var tree_x = 0;
	function ani_loop() {
		clouds_x = clouds_x - .2;
		tree_x = tree_x - .7;
		grass_x = grass_x - 1;
		document.getElementById('animatedback').style.backgroundPosition = grass_x + 'px 0, 30px ' + tree_x + 'px 0, ' + clouds_x + 'px 0, 0 0';
		t = setTimeout('ani_loop()',10);
	}
	ani_loop();
</script> 
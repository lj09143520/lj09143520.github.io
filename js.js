<script>
var imgnum= 1;
setInterval(
	function (){
		document.getElementById("changeimgs").src="picture/lm"+imgnum+".jpg";
		if(imgnum<2){
			imgnum++;
		}else{
			imgnum=1;
		}
		
		
	},1000
			);
</script>
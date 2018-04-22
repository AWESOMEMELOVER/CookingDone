var tag = document.createElement('script');
var rightPannel = document.getElementById('right')

var firststop = false;
var secondStop = false;

var timeFroFirstStop = 12000;
var timeForSecStop = 18000;

var ingrediets='<ol class="circle-list"><div>'+
		    '<li>'+
		        '<h4>4 білки кімнатної температури</h4>'+
		    '</li>'+
		    '<li>'+
		        '<h4>Щупта солі</h4>'+
		    '</li>'+
		    '<li>'+
		        '<h4>1 чашка (220 г) цукру</h4>'+
		    '</li>'+
		    '<li>'+
		        '<h4>1 ст. л. лимонного соку</h4>'+
		    '</li>'+
		    '<li>'+
		        '<h4>½ ч. л. магдалевої есенції</h4>'+
		    '</li>'+
        '<li>'+
           '<h4>Харчові барвники</h4>'+
       '</li></div>'+
		'</ol>';




var task2 =   '<li>'+
    '<h4>Відділити білок 5 яєць.'+
  'Поступово додавати цукор, не припиняючи збивання. </h4>'+
  '</li>';


  var task3 = '<li>'+
    '<h4>Розбити тісто на рівні частини.'+
      'Додати барвник.</h4>'+
      '</li>';

  var task4 = '<li>'+
    '<h4>Підготувати 2 дека устелених пекарським пергаментом.'+
    'Використовуючи кухарський мішок нещільно розкласти тісто.'+
'Готувати в духовці протягом 80 хв.Дати півгодини на охолодження.</h4>'+
  '</li>'+
  '</ol>';

	var task4 = '<li>'+
    '<h4>Підготувати 2 дека устелених пекарським пергаментом.'+
    'Використовуючи кухарський мішок нещільно розкласти тісто.'+
'Готувати в духовці протягом 80 хв.Дати півгодини на охолодження.</h4>'+
  '</li>'+
  '</ol>';
	var task5 = '<li>'+
		'<h4>Підготувати 2 дека устелених пекарським пергаментом.'+
		'Використовуючи кухарський мішок нещільно розкласти тісто.'+
	'Готувати в духовці протягом 80 хв.Дати півгодини на охолодження.</h4>'+
	'</li>'+
	'</ol>';



tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var ytplayer = document.getElementById("player");
function onYouTubeIframeAPIReady(){

	player = new YT.Player('player',{
		height: '50%',
          width: '100%',
          videoId: 'fudsUhWAG_o',
		position:'fixed',
		overflow:'hidden',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
	});
}



var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          firststop = true;
          $(ingrediets).appendTo(".right");
          document.getElementById("player").style.width="100%";
          if(firststop){
            setTimeout(stopVideo, 6000);
          }
          done = true;


        }
      }




      timer.on('end', function () {
          console.log('timer ended');
          this.start(4).off('end');
          player.playVideo();
      });

      timer.on('stop',function(){
        player.seekTo(20,true);
        player.playVideo();
      });

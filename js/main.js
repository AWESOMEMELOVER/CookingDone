var count = 0;
var TaskHandler = {
	player: {},
	activeTask: {},
	
	tasks: [{
		period: {start: 16, end: 30},
		content: `<li id="firstTask">
					<h4>Відділити білки пяти яєць.</h4>
				  </li>`
	}, {
		period: {start: 30, end: 35},
		content: `<li id="secondTask">
					<h4>Взбити білки до однорідної піни.</h4>
				  </li>`
	}, {
		period: {start: 35, end: 45},
		content: `<li id="thirdTask">
					<h4>Не припиняючи взбивання поступово додавати цукор у білки.</h4>
				  </li>`
	},{
		period:{start:40,end:45},
		content:`<li id="fourthTask">
					<h4>Додати сік одного лимона, взбити;Додати мигдалеву та ванільну есенцію, взбити.</h4>
				  </li>`
	},{
		period:{start:45,end: 50},
		content:`<li id="fifthTask">
					<h4>Розділити отриману масу на декілька частин;
					В кожну частину додати барвники.</h4>
				  </li>`
	},{
		period:{start:50, end:57},
		content:`<li id="sixTask">
					<h4>За допомогою кондитерського мішка викласти отриману масу
					на пергаментний папір, який помістити на деко;</h4>
				  </li>`
	},{
		period:{start:57,end:70},
		content:`<li id="seventhTask">
					<h4>Поставити деко в попередньо розігріту піч та випікати рівно 60 хвилин;</h4>
				  </li>`
	}
		   ],
	
	mainLoop: function (currentTime) {
		var currentTime = player.getCurrentTime(),
			newTask = this.tasks.find( task => task.period.start < currentTime && task.period.end >= currentTime);
		
		if (newTask && this.activeTask !== newTask) {
			count++;
			this.activeTask = newTask;
			this.player.pauseVideo();
			this.renderMenu(newTask);
		}
		if(count===7){
			$("#player").css({'width': '100%'});
			$("#timerDiv").css({'visibility': 'visible'});
			$("#player").css({'height': '75%'});
		}
		
	},
	renderMenu: function(task) {
		count=0;
		$('.circle-list').empty();
		for (i = 0; i < this.tasks.length; i++) { 
			let item = this.tasks[i];
			
			$(item.content).on('click', () => {
				this.activeTask = item;
				this.player.seekTo(item.period.start+0.1, true);
				this.player.playVideo();
				cout+i;
			}).appendTo('.circle-list');
			
			if (item === task) {
				break;
			}
		}
		$("#player").css({'width': '80%'});
	}, 
	
	run: function (player) {
		this.player = player;
		
		player.playVideo();
		setInterval(this.mainLoop.bind(this), 500)
	}
	
};




var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady(){

	player = new YT.Player('player',{
		height: '70%',
			width: '100%',
			videoId: 'IT3Zs-iNnME',
		position:'fixed',
		overflow:'hidden',
		events: {
			'onReady': function (event) {
			  TaskHandler.run(player)
			}
		}
	});
}
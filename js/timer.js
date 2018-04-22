(function($) {
    $(function() {
        var $play  = $('.play'),
            $pause = $('.pause'),
            $stop  = $('.stop'),
            $timer = $('.timer');

        var timer = new Timer({
            onstart : function(millisec) {
                var sec = Math.round(millisec / 1000);
                $timer.text(sec);
            },
            ontick  : function(millisec) {
                var sec = Math.round(millisec / 1000);
                $timer.text(sec);
            },
            onpause : function() {
                $timer.text('pause');
            },
            onstop  : function() {
                $timer.text('stop');
            },
            onend   : function() {

                $timer.text('end');
                document.getElementById("boom").play();

            }
        });

        $play.on('click', function() {
            timer.start(360);
        });

        $pause.on('click', function() {
            if (timer.getStatus() === 'started') {
                timer.pause();
            }
        });

        $stop.on('click', function() {
            if (/started|paused/.test(timer.getStatus())) {
                timer.stop();
            }
        });


    });
}(jQuery));

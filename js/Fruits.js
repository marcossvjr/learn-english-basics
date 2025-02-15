let fruits = function () {
    let _this = this;
    
    _this.init = function () {
        document.querySelectorAll('.box-button').forEach(function(paramElement){
            paramElement.addEventListener('click', function () {
                _this.playSound(this);
            });
        });
    };

    _this.playSound = function (paramElement) {
        let audioElement = document.createElement('audio');
        
        audioElement.src = `../sound/Fruits/${paramElement.title}.mp3`;
        document.body.append(audioElement);
        audioElement.play();
    };
};

new fruits().init();
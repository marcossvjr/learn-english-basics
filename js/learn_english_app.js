let app = function () {
    let _this = this;
    
    _this.init = function () {
        document.querySelectorAll('.box-button').forEach(function(paramElement){
            paramElement.addEventListener('click', function () {
                _this.openModal(this);
            });
        });
    };

    _this.openModal = function (paramElement) {
        let divModalWrap = document.createElement('div');
        let divModal = document.createElement('div');
        let iframeModal = document.createElement('iframe');
        let audioElement = document.createElement('audio');
        
        audioElement.src = `sound/${paramElement.title}.mp3`;

        //attrs
        divModalWrap.classList.add('modal-wrap');
        divModal.classList.add('modal');
        iframeModal.src = paramElement.dataset.url;

        //binds
        divModalWrap.addEventListener('click', function (e) {
            const target = e.currentTarget || e.target;
            const after = getComputedStyle(target, ":after");
            if (after) {
                _this.closeModal(target);
            }
        });

        //appends
        divModalWrap.append(audioElement);
        divModalWrap.append(divModal);
        divModal.append(iframeModal);
        document.querySelector('body').append(divModalWrap);

        //play sound
        audioElement.play();
    };

    _this.closeModal = function (paramElement) {
        paramElement.remove();
    };
};

new app().init();
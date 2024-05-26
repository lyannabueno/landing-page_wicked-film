document.querySelectorAll('.main-characters img').forEach(img => {

    img.addEventListener('click', function() {

        this.style.animation = 'bounce 0.6s cubic-bezier(0.28, 0.84, 0.42, 1)';
        this.addEventListener('animationend', function() {
            this.style.animation = '';
        }, 

        { 
            once: true 
        });
        
    });

});
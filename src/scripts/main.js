document.querySelectorAll('.main-characters img').forEach(img => {

    img.addEventListener('click', function() {
        this.style.animation = 'bounce 0.6s cubic-bezier(0.28, 0.84, 0.42, 1)';

        this.addEventListener('animationend', function() {
            this.style.animation = '';
        }, { once: true });
    });

});

document.getElementById('first-animation').addEventListener('click', function() {
    this.style.animation = 'leftrotate 1s infinite linear';
    
    this.addEventListener('animationend', function() {
        this.style.animation = '';
    }, { once: true });
});

document.getElementById('separate-animation').addEventListener('click', function() {
    this.style.animation = 'pulse 0.5s infinite alternate';
    
    this.addEventListener('animationend', function() {
        this.style.animation = '';
    }, { once: true });
});

document.getElementById('second-animation').addEventListener('click', function() {
    this.style.animation = 'rightrotate 1s infinite linear';
    
    this.addEventListener('animationend', function() {
        this.style.animation = '';
    }, { once: true });
});
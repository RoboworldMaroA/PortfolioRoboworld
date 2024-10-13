function typeWriter(text, elementId, delay) {
    let i = 0;
    const element = document.getElementById(elementId);
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.remove('hidden');
                typeWriter("Mobile robots", "typewriter", 300);
                observer.unobserve(element);
            }
        });
    });

    const target = document.getElementById('typewriter');
    observer.observe(target);
});
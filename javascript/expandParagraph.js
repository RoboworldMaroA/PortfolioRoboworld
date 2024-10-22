document.getElementById('toggleParagraph').addEventListener('click', function() {
    const details = document.getElementById('details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
});
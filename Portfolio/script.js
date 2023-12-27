
document.addEventListener("DOMContentLoaded", function() {
    openPopup();
});

function openPopup() {
    var blurBg = document.getElementById('blur-background');
    var contactPopup = document.getElementById('popup');
    
    blurBg.style.display = 'flex';
    contactPopup.style.transform = 'translate(0, 0)';
}

function closePopup() {
    var blurBg = document.getElementById('blur-background');
    var contactPopup = document.getElementById('popup');

    blurBg.style.display = 'none';
    contactPopup.style.transform = 'translate(0, -100%)';
}
function togglePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}

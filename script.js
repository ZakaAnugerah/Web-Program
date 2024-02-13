// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Apply random background color to each paragraph with class 'experience' and 'skill'
var experienceParagraphs = document.querySelectorAll('.experience');
experienceParagraphs.forEach(function(paragraph) {
    paragraph.style.backgroundColor = getRandomColor();
});

var skillParagraphs = document.querySelectorAll('.skill');
skillParagraphs.forEach(function(paragraph) {
    paragraph.style.backgroundColor = getRandomColor();
});


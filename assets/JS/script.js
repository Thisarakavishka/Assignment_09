var current_div = 0;
let direction = true;

function updateLightPanel() {
    if (direction) {
        if (current_div === 5) {
            direction = false;
        }
        $('body > div:first-child > div').eq(current_div - 1).css("background", "white");
        $('body > div:first-child > div').eq(current_div).css("background", "#ff6969");
        $('body > div:first-child > div').eq(++current_div).css("background", "red");
    } else {
        $('body > div:first-child > div').eq(current_div + 1).css("background", "white");
        $('body > div:first-child > div').eq(current_div).css("background", "#ff6969");
        $('body > div:first-child > div').eq(--current_div).css("background", "red");
        if (current_div == 0) {
            direction = false;
        }
    }
}

let interval = null;

$('#start').on('click', () => {
    if (interval == null) {
        interval = setInterval(updateLightPanel, 200);
        $('#audio')[0].play();
    }
})

$('#stop').on('click', () => {
    clearInterval(interval);
    interval = null;
    $('#audio')[0].pause();
})
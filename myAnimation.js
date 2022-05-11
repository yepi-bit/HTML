var speed = 0;
function startAnimation(obj, attr, endTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var cur = 0;
        if (attr === 'opacity') {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);

        } else {
            cur = parseInt(getStyle(obj, attr));
        }
        speed = (endTarget - cur) / 20;
        speed = endTarget > cur ? Math.ceil(speed) : Math.floor(speed);
        if (endTarget === cur) {
            clearInterval(obj, timer);
            return;
        }
        if (attr === 'opacity') {
            obj.style[attr] = `alpha(opacity: ${cur + speed})`;
            obj.style[attr] = (cur + speed) / 100;
        } else {
            obj.style[attr] = cur + speed + 'px';
        }
    });


}


function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null);
    }
}
function randomCase(x) {
x = x.toLowerCase();
    var v = "";
    for (var i = 0; i < x.length; i++) {
        var r = x.charAt(i);
        if (Math.floor(Math.random() * 2 + 1) == 1) {
            v += r.toUpperCase()
        } else {
            v += r
        }
    }
    return v;
}

//____________________________
//Random case

function randomCase(x) {
x = x.toLowerCase();
    var v = "";
    for (var i = 0; i < x.length; i++) {
        var r = x.charAt(i);
        if (Math.floor(Math.random() * 2 + 1) == 1) {
            v += r.toUpperCase()
        } else {
            v += r
        }
    }
    return v;
}

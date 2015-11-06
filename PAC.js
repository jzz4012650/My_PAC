function FindProxyForURL(url, host) {

    var OUT_WALLS = [
        // 谷歌系
        /\.??google.com/,
        /\.??youtube.com/,
        /\.??android.com/,
        // 国外社交系
        /\.??facebook.com/,
        /\.??twitter.com/,
        /\.??vimeo.com/,
        // 程序员系
        /\.??github.com/,
        /\.??github.io/,
        /\.??stackoverflow.com/,
        /\.??codepen.io/,
        /\.??jsfiddle.net/,
        // 其它系
        /\.??engadget.com/,
        /\.??amazon.com/,
        /\.??live.com/,
        /\.??microsoft.com/,
        /\.??wikipedia.org/
    ]

    var PROXYS = [
        "PROXY 10.16.13.18:8080", 
        "PROXY proxy.corp.qihoo.net:8080"
    ].join(";")

    for (var i = 0; i < OUT_WALLS.length; i++ ) {
        if (OUT_WALLS[i].test(host)) {
    	    return PROXYS;
        }
    }

    return "DIRECT";
}

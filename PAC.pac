function FindProxyForURL(url, host) {

    var OUT_WALLS = [
        // 谷歌系
        "*.google.com",
        "*.google.com.tw",
        "*.google.com.hk",
        "*.youtube.com",
        "*.android.com",
        // 国外社交系
        "*.facebook.com",
        "*.twitter.com",
        "*.vimeo.com",
        // 程序员系
        "*.github.com",
        "*.github.io",
        "*.stackoverflow.com",
        "*.codepen.io",
        "*.jsfiddle.net",
        // 其它系
        "*.adobe.com",
        "*.amazon.com",
        "*.live.com",
        "*.microsoft.com"
    ]

    for (var i = 0; i < OUT_WALLS.length; i++ ) {
        if (shExpMatch(host, OUT_WALLS[i])) {
    	    return "PROXY 10.16.13.18:8080; SOCKS5 10.16.13.18:8080; SOCKS 10.16.13.18:8080";
        }
    }

    return "DIRECT";
}

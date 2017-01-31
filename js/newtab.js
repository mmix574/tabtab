var engine_list = document.querySelectorAll(".btn-search");

engine_list.forEach(function(engine) {
    engine.addEventListener("click", function() {
        var search_content = this.previousSibling.previousSibling.value;
        var search_engine = this.nextSibling.nextSibling.value;
        if (search_content) {
            do_search(search_engine,search_content);
        }
    });
});

document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) { // enter key pushdown
        if (document.activeElement.tagName.toLowerCase() == "input") {
            var search_engine=document.activeElement.nextSibling.nextSibling.nextSibling.nextSibling.value;
            var search_content=document.activeElement.value;
            do_search(search_engine,search_content);
        }
    }
};

var search_url = {
    "baidu": "https://www.baidu.com/s?wd=",
    "google": "https://www.google.com.hk/#&q=",
    "bing": "http://cn.bing.com/search?q=",
    "sougou": "https://www.sogou.com/web?query=",
    "stackoverflow": "https://www.google.com.hk/#&q=site:stackoverflow.com ",
    "zhihu": "https://www.google.com.hk/#&q=site:zhihu.com ",
    "chromestore":"https://chrome.google.com/webstore/search/",
    "taobao":"https://s.taobao.com/search?q=",
    "youtube":"https://www.youtube.com/results?search_query="
}


var do_search = function(engine, content) {
    var newUrl = search_url[engine]+content;
    window.location.href=newUrl;
}
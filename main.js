var text="";
var url_input="";

var selected="";

function loadUp() {
    document.onclick = update;
    document.onchange = update;

    function update() {
        url_input = $("url-input").value;
        if (url_input!="text") {
            text=url_input;    
        }
        if (text!="") { $("imagetochange").src="https://www.google.com/s2/favicons?sz=128&domain_url="+text; }
        else { $("imagetochange").src="https://via.placeholder.com/128" } 
        

        $("chrome").onclick=function() { selected="chrome"; 
            $c("browser-option")[0].style.backgroundColor="#82db5c";
            $c("browser-option")[1].style.backgroundColor="#7896e9";
            $c("browser-option")[2].style.backgroundColor="#7896e9";
        }
        $("edge").onclick=function() { selected="edge"; 
            $c("browser-option")[1].style.backgroundColor="#82db5c";
            $c("browser-option")[2].style.backgroundColor="#7896e9";
            $c("browser-option")[0].style.backgroundColor="#7896e9";
        }
        $("firefox").onclick=function() { selected="firefox"; 
            $c("browser-option")[2].style.backgroundColor="#82db5c";
            $c("browser-option")[0].style.backgroundColor="#7896e9";
            $c("browser-option")[1].style.backgroundColor="#7896e9";
        }

        $("chrome").onmouseenter=function() { $c("browser-option")[0].style.backgroundColor="#4969c0"; }
        $("chrome").onmouseleave=function() { if (selected!="chrome")$c("browser-option")[0].style.backgroundColor="#7896e9"; else $c("browser-option")[0].style.backgroundColor="#82db5c"; }

        $("edge").onmouseenter=function() { $c("browser-option")[1].style.backgroundColor="#4969c0"; }
        $("edge").onmouseleave=function() { if (selected!="edge")$c("browser-option")[1].style.backgroundColor="#7896e9"; else $c("browser-option")[1].style.backgroundColor="#82db5c"; }

        $("firefox").onmouseenter=function() { $c("browser-option")[2].style.backgroundColor="#4969c0"; }
        $("firefox").onmouseleave=function() { if (selected!="firefox")$c("browser-option")[2].style.backgroundColor="#7896e9"; else $c("browser-option")[2].style.backgroundColor="#82db5c"; }
    
        // format 1: start msedge/chrome/ --app="url_input"
        // format 2: start firefox -url="url_input" --foreground
    }
}
var $ = function (id) { return document.getElementById(id); }
var $c = function (cname) { return document.getElementsByClassName(cname); }
    function loadscript(filename) {
      var scr=document.createElement('script');
      scr.setAttribute("type","text/javascript");
      scr.setAttribute("src",filename);
      document.getElementsByTagName("head")[0].appendChild(scr);
    }
    var waitElm=null;
    function urltinyfyprompt_callback(response) {
      if(waitElm) waitElm.style.display="none";
      var txt="Short URL";
      if(response.title && response.title!="") txt+=' for "'+response.title+'"';
      else if(response.longurl && response.longurl!="") txt+=" for "+response.longurl;
      if(response.tinyurl && response.tinyurl!="")
        prompt(txt+":", response.tinyurl);
      else
        alert("Could not get short URL, try again later." + ((response.error && response.error != "") ? ("nError: " + response.error) : ""));
    }
    function shortenUrl(elm, long_url, service) {
      waitElm=elm.parentNode.nextSibling;
      if(waitElm) waitElm.style.display="inline";
      loadscript("https://urltinyfy.appspot.com/"+service+"?unify=1&url="+encodeURIComponent(long_url) + "&callback=urltinyfyprompt_callback");
    }
var mql=window.matchMedia("screen and (min-width: 60em)");mql.matches&&(window.onload=function(){var n=document.getElementById("lightcredit");null==n&&(window.location.href="http://www.arlinadzgn.com"),n.setAttribute("href","http://www.arlinadzgn.com"),n.setAttribute("rel","nofollow"),n.innerHTML="<a href='http://www.arlinadzgn.com/' target='_blank' title='Designed by Arlina Design'>Arlina Design</a>"});

(function() {
    function async_load(){
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      var url = 'https://app.convertcalculator.co/embed.js';
      s.src = url + ( url.indexOf("?") >= 0 ? "&" : "?") + "ref=" + encodeURIComponent(window.location.href);
      var embedder = document.getElementById('convertcalculator-embedder-3s9JGG6kzNj78yt9u');
      embedder.parentNode.insertBefore(s, embedder);
    }
    if (window.attachEvent)
      window.attachEvent("onload", async_load);
    else
      window.addEventListener("load", async_load, false);
  })();


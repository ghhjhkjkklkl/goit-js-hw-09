const t=document.querySelector(".data-start"),e=document.querySelector(".data-stop");t.addEventListener("click",(function(){setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3);t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(timer),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.ad21aae3.js.map

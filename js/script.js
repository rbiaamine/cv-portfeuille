
//==========About Tabs ==============
(()=>{
    const aboutSection=document.querySelector(".about-section"),
          aboutTabs=document.querySelector(".about-tabs");
          aboutTabs.addEventListener("click",(event) =>{
              if(event.target.classList.contains("tab-item")
              &&! event.target.classList.contains("active")){
                  const target= event.target.getAttribute("data-target");
                  aboutTabs.querySelector(".active").classList.remove("outer-shadow","active");
                  event.target.classList.add("active","outer-shadow");
              }
        })
})();
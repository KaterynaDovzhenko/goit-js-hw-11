import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=r=>`<li class="gallery-card">
        <a href="${r.largeImageURL}" class="gallery-link">
            <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
            </a>
             <div class="gallery-info">
              <p><strong>Likes:</strong> ${r.likes}</p>
              <p><strong>Views:</strong> ${r.views}</p>
              <p><strong>Comments:</strong> ${r.comments}</p>
              <p><strong>Downloads:</strong> ${r.downloads}</p>
            </div>
          </li>`,f=r=>fetch(`https://pixabay.com/api/?key=46917062-2aeb1fc3b978e5a238a42f10e&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),c=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),y=new u(".gallery-link",{captionsData:"alt",captionDelay:50}),m=r=>{r.preventDefault();const s=r.currentTarget.elements.user_query.value.trim();if(s===""){n.show({message:"the field must be filled!"});return}loader.style.display="flex",f(s).then(o=>{if(o.total===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML="",c.reset();return}const a=o.hits.map(e=>d(e)).join("");i.innerHTML=a,y.refresh()}).catch(o=>{console.log(o)}).finally(()=>{loader.style.display="none"})};c.addEventListener("submit",m);
//# sourceMappingURL=index.js.map

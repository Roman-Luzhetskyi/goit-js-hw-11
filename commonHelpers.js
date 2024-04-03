import{i as d,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function h(s){const r="https://pixabay.com/api/",o="40891115-11d0b88dd3a60afc830d1d27f";s.includes(" ")&&(s=s.replace(/\s+/g,"+"));const a=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p(s){return s.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${a}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}const l=document.querySelector(".js-search"),n=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader");c.style.display="none";l.addEventListener("submit",m);function m(s){s.preventDefault(),n.innerHTML="",c.style.display="block";const r=s.target.elements.search.value.trim();if(!r){c.style.display="none";return}h(r).then(o=>{c.style.display="none",o.hits.length||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.insertAdjacentHTML("beforeend",p(o.hits)),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(o=>{c.style.display="none",console.log(o)})}
//# sourceMappingURL=commonHelpers.js.map

import{i as d,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function h(o){const s="https://pixabay.com/api/",r="40891115-11d0b88dd3a60afc830d1d27f";o.includes(" ")&&o.replace(/\s+/g,"+");const a=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p(o){return o.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${s}"
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
        </li>`).join("")}const l=document.querySelector(".js-search"),c=document.querySelector(".js-gallery"),n=document.querySelector(".js-loader");n.style.display="none";l.addEventListener("submit",m);function m(o){o.preventDefault(),c.innerHTML="",n.style.display="block";const s=o.target.elements.search.value.trim();if(!s){n.style.display="none";return}h(s).then(r=>{n.style.display="none",r.hits.length||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=p(r.hits),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(r=>{n.style.display="none",console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map

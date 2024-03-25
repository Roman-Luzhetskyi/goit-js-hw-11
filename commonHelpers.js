import{i as d,S as h}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(r){const o="https://pixabay.com/api/",s="40891115-11d0b88dd3a60afc830d1d27f";r.includes(" ")&&r.replace(/\s+/g,"+");const a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
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
        </li>`).join("")}const n=document.querySelector(".js-search"),l=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader");c.style.display="none";n.addEventListener("submit",m);function m(r){r.preventDefault(),l.innerHTML="",c.style.display="block";const o=r.target.elements.search.value;f(o).then(s=>{c.style.display="none",s.hits.length||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML=p(s.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),n.reset()}).catch(s=>{c.style.display="none",console.log(s)})}
//# sourceMappingURL=commonHelpers.js.map

document.getElementById('y').textContent=new Date().getFullYear();
const f=document.getElementById('f');
if(f){const q=new URLSearchParams(location.search);['a','m'].forEach(k=>{const v=q.get(k);if(v&&f[k])for(const o of f[k].options)if(o.text===v)f[k].value=v});
const enc=v=>encodeURIComponent(v);
f.querySelectorAll('[data-w]').forEach(b=>b.onclick=()=>{if(!f.reportValidity())return;const d=new FormData(f);
const m=`Hi Temomi! I'd like to book a home massage.%0AName: ${enc(d.get('n'))}%0AArea: ${enc(d.get('a'))}%0AMassage: ${enc(d.get('m'))}%0ATime: ${enc(d.get('t')||'ASAP')}%0AAddress/notes: ${enc(d.get('x')||'-')}`;
location.href=b.dataset.w=='wa'?`https://wa.me/639561256880?text=${m}`:`viber://forward?text=${m}`;});}

const T={
uz:{nav_about:"Men haqimda",nav_int:"Qiziqishlar",nav_gal:"Lahzalar",nav_draw:"Chizish",nav_tr:"Turkcha",nav_contact:"Aloqa",
hi:"Salom, men…",iam:"Men —",roles:["qo‘shiq aytuvchi","rassom","kod yozuvchi","turkcha sevuvchi"],lead:"Talaba, ijodkor va doimiy yangi narsa o‘rganuvchi. Musiqa, rasm va kod — hammasi bir joyda.",cta:"Avval biror narsa chiz",
about_t:"Men haqimda",about_p:"Men Madina — talabaman. Qo‘shiq aytaman, rasm chizaman, kod yozib dizayn yarataman va turk tilini sevib o‘rganaman. Menimcha, ijod bu turli olamlarni bir-biriga ulash.",
int_t:"Nimalarga qiziqaman",m_t:"Musiqa",m_p:"Qo‘shiq aytish va tinglash — kunimni boshlaydigan ritm.",a_t:"Rasm chizish",a_p:"Qalam, rang va bo‘sh qog‘oz — fikrlarimning eng sodda tili.",
d_t:"Grafik dizayn & kod",d_p:"HTML, CSS va JS bilan g‘oyalarni ko‘zga ko‘rinadigan qilaman.",t_t:"Turk tili",t_p:"Tovushlari va she’riyati uchun yaxshi ko‘raman. Her gün yeni bir kelime!",
gal_t:"Lahzalar",g_hint:"Surib ko‘r, bossang kattalashadi →",g1:"Ranglar bilan",g2:"Kitoblar orasida",g3:"Shahar nuri",g4:"Tabiat bag‘rida",g5:"Cheksiz adirlar",g6:"Ichimdagi bola",g7:"Do‘stlar bilan",g8:"Naqshlar sirlari",g9:"Sariq atirgullar",
draw_t:"Sen ham chiz!",draw_p:"Sichqoncha yoki barmoqing bilan bu yerda ijod qil.",clear:"Tozalash",
p_t:"Mening pianinom",p_s:"Tugmalarni bos yoki klaviaturadan A S D F G H J K ni ishlat.",
tr_t:"Turkcha so‘zlar",tr_s:"Kartani bos — tarjimasi chiqadi.",rand:"Tasodifiy so‘z",c_t:"Gaplashamizmi?",c_p:"Hamkorlik, g‘oya yoki shunchaki salom uchun yoz.",
marq:["Musiqa","Rasm","Dizayn","Kod","Müzik","Resim","Hayal","Ijod"]},
en:{nav_about:"About",nav_int:"Interests",nav_gal:"Moments",nav_draw:"Draw",nav_tr:"Türkçe",nav_contact:"Contact",
hi:"Hello, I'm…",iam:"I'm a",roles:["singer","painter","coder","Turkish lover"],lead:"A student, maker and permanent learner. Music, drawing and code — all in one place.",cta:"Draw something first",
about_t:"About me",about_p:"I'm Madina, a student. I sing, draw, build designs with code and I'm learning Turkish because I love it. To me, creativity means connecting different worlds.",
int_t:"What I'm into",m_t:"Music",m_p:"Singing and listening — the rhythm that starts my day.",a_t:"Drawing",a_p:"Pencil, colour and a blank page — the simplest language of my thoughts.",
d_t:"Graphic design & code",d_p:"I turn ideas into visuals with HTML, CSS and JS.",t_t:"Turkish",t_p:"I love its sounds and poetry. Her gün yeni bir kelime!",
gal_t:"Moments",g_hint:"Swipe it, tap to enlarge →",g1:"With colours",g2:"Among books",g3:"City light",g4:"In nature",g5:"Endless hills",g6:"The kid inside",g7:"With friends",g8:"Patterns & carvings",g9:"Yellow roses",
draw_t:"Your turn to draw!",draw_p:"Use your mouse or finger and create something here.",clear:"Clear",
p_t:"My little piano",p_s:"Tap the keys or use A S D F G H J K on your keyboard.",
tr_t:"Turkish words",tr_s:"Tap a card to see its meaning.",rand:"Random word",c_t:"Let's talk?",c_p:"Write for collaboration, ideas, or just to say hi.",
marq:["Music","Drawing","Design","Code","Müzik","Resim","Hayal","Creativity"]},
tr:{nav_about:"Hakkımda",nav_int:"İlgi alanları",nav_gal:"Anlar",nav_draw:"Çiz",nav_tr:"Türkçe",nav_contact:"İletişim",
hi:"Merhaba, ben…",iam:"Ben bir",roles:["şarkıcı","ressam","kodlayıcı","Türkçe âşığı"],lead:"Öğrenci, üretici ve hep yeni şeyler öğrenen biri. Müzik, resim ve kod — hepsi tek yerde.",cta:"Önce bir şey çiz",
about_t:"Hakkımda",about_p:"Ben Madina, bir öğrenciyim. Şarkı söylerim, resim çizerim, kodla tasarım yaparım ve Türkçeyi severek öğrenirim. Bence yaratıcılık, farklı dünyaları birbirine bağlamaktır.",
int_t:"İlgi alanlarım",m_t:"Müzik",m_p:"Şarkı söylemek ve dinlemek — günümü başlatan ritim.",a_t:"Resim",a_p:"Kalem, renk ve boş bir kâğıt — düşüncelerimin en sade dili.",
d_t:"Grafik tasarım & kod",d_p:"HTML, CSS ve JS ile fikirleri görsele dönüştürürüm.",t_t:"Türkçe",t_p:"Seslerini ve şiirselliğini çok seviyorum. Her gün yeni bir kelime!",
gal_t:"Anlar",g_hint:"Kaydır, büyütmek için dokun →",g1:"Renklerle",g2:"Kitapların arasında",g3:"Şehrin ışığı",g4:"Doğanın kalbinde",g5:"Sonsuz tepeler",g6:"İçimdeki çocuk",g7:"Arkadaşlarla",g8:"Nakışlar ve oymalar",g9:"Sarı güller",
draw_t:"Sıra sende, çiz!",draw_p:"Fare veya parmağınla burada bir şeyler yarat.",clear:"Temizle",
p_t:"Minik piyanom",p_s:"Tuşlara dokun ya da klavyeden A S D F G H J K kullan.",
tr_t:"Türkçe kelimeler",tr_s:"Anlamını görmek için karta dokun.",rand:"Rastgele kelime",c_t:"Konuşalım mı?",c_p:"İş birliği, fikir ya da sadece merhaba demek için yaz.",
marq:["Müzik","Resim","Tasarım","Kod","Hayal","Sevgi","Yıldız","Yaratıcılık"]}};
const W=[["Merhaba","Salom","Hello"],["Günaydın","Xayrli tong","Good morning"],["Güzel","Chiroyli","Beautiful"],["Sevgi","Sevgi","Love"],["Yıldız","Yulduz","Star"],["Müzik","Musiqa","Music"],["Şarkı","Qo‘shiq","Song"],["Resim","Rasm","Drawing"],["Hayal","Orzu","Dream"],["Teşekkürler","Rahmat","Thank you"],["Kitap","Kitob","Book"],["Gökyüzü","Osmon","Sky"],["Arkadaş","Do‘st","Friend"],["Gül","Gul","Rose"],["Mutluluk","Baxt","Happiness"],["Deniz","Dengiz","Sea"],["Ay","Oy","Moon"],["Kalp","Yurak","Heart"],["Yolculuk","Sayohat","Journey"],["Başarılar","Omad","Good luck"]];
const CL=['#FF5D73','#FFE14D','#7ee2d3','#c3b4ff','#ffa94d'];
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s),root=document.documentElement;
let lang=localStorage.getItem('lang')||'uz',theme=localStorage.getItem('theme')||'light',ri=0;
const mean=w=>lang==='uz'?w[1]:lang==='en'?w[2]:w[1]+' / '+w[2];
function setLang(l){lang=l;localStorage.setItem('lang',l);root.lang=l;
 $$('.langs button').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
 $$('[data-i18n]').forEach(e=>e.textContent=T[l][e.dataset.i18n]);
 $('#track').innerHTML=T[l].marq.map(w=>`<span>${w} ✦</span>`).join('').repeat(6);
 $$('.w .b').forEach((b,i)=>b.textContent=mean(W[+b.parentNode.parentNode.dataset.i]));role()}
function role(){const r=T[lang].roles;$('#role').textContent=r[ri%r.length];const b=$('#role');b.style.animation='none';b.offsetWidth;b.style.animation=''}
setInterval(()=>{ri++;role()},2200);
function setTheme(t){theme=t;localStorage.setItem('theme',t);root.dataset.theme=t;$('#themeBtn').textContent=t==='dark'?'☀':'☾'}
$$('.langs button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
$('#themeBtn').onclick=()=>setTheme(theme==='dark'?'light':'dark');
// turkish cards
$('#words').innerHTML=W.map((w,i)=>`<div class="w" data-i="${i}" style="--c:${CL[i%5]}"><div><span class="f">${w[0]}</span><span class="b"></span></div></div>`).join('');
$$('.w').forEach(c=>c.onclick=()=>c.classList.toggle('flip'));
$('#trRand').onclick=()=>{const c=$$('.w'),x=c[Math.floor(Math.random()*c.length)];x.classList.add('flip','hit');x.scrollIntoView({block:'center',behavior:'smooth'});setTimeout(()=>x.classList.remove('hit'),600)};
// equalizer, glow, progress
$('#eq').innerHTML=Array.from({length:22},(_,i)=>`<i style="animation-delay:${(i*.11).toFixed(2)}s;animation-duration:${(.6+Math.random()*.8).toFixed(2)}s"></i>`).join('');
addEventListener('pointermove',e=>{const g=$('#glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
addEventListener('scroll',()=>{$('#bar').style.width=(scrollY/(root.scrollHeight-innerHeight)*100)+'%'});
// gallery: drag scroll + lightbox
const st=$('#strip');let dn=false,sx=0,sl=0,moved=0;
st.onpointerdown=e=>{if(e.pointerType!=='mouse')return;dn=true;sx=e.clientX;sl=st.scrollLeft;moved=0;st.style.scrollSnapType='none'};
addEventListener('pointermove',e=>{if(!dn)return;moved=Math.abs(e.clientX-sx);st.scrollLeft=sl-(e.clientX-sx)});
addEventListener('pointerup',()=>{if(dn){dn=false;st.style.scrollSnapType=''}});
$$('.snap').forEach(f=>f.onclick=()=>{if(moved>6)return;$('#lb img').src=f.dataset.full;$('#lb').classList.add('on')});
$('#lb').onclick=()=>$('#lb').classList.remove('on');
addEventListener('keydown',e=>{if(e.key==='Escape')$('#lb').classList.remove('on')});
// canvas
const cv=$('#cv'),ctx=cv.getContext('2d'),cols=['#7B5CFF','#FF5D73','#FFE14D','#2EC4B6','#FF9F1C','#E30A17'];let color=cols[0],draw=false;
$('#palette').innerHTML=cols.map((c,i)=>`<button style="background:${c}" class="${i?'':'on'}" data-c="${c}" aria-label="${c}"></button>`).join('');
$('#palette').onclick=e=>{const b=e.target.closest('button');if(!b)return;color=b.dataset.c;$$('#palette button').forEach(x=>x.classList.toggle('on',x===b))};
const pos=e=>{const r=cv.getBoundingClientRect();return[(e.clientX-r.left)*cv.width/r.width,(e.clientY-r.top)*cv.height/r.height]};
cv.onpointerdown=e=>{draw=true;cv.setPointerCapture(e.pointerId);const[x,y]=pos(e);ctx.beginPath();ctx.moveTo(x,y)};
cv.onpointermove=e=>{if(!draw)return;const[x,y]=pos(e);ctx.lineWidth=7;ctx.lineCap=ctx.lineJoin='round';ctx.strokeStyle=color;ctx.lineTo(x,y);ctx.stroke()};
cv.onpointerup=()=>draw=false;$('#clear').onclick=()=>ctx.clearRect(0,0,cv.width,cv.height);
// piano
const N=[['C',261.6],['D',293.7],['E',329.6],['F',349.2],['G',392],['A',440],['B',493.9],['C',523.3]],KB='asdfghjk';let ac;
$('#keys').innerHTML=N.map((n,i)=>`<button class="key" data-i="${i}" style="--k:${CL[i%5]}">${n[0]}</button>`).join('');
function note(i){ac=ac||new (window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.value=N[i][1];
 g.gain.setValueAtTime(.35,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+1.2);o.connect(g).connect(ac.destination);o.start();o.stop(ac.currentTime+1.2);
 const k=$$('.key')[i];k.classList.add('on');setTimeout(()=>k.classList.remove('on'),160)}
$$('.key').forEach(k=>k.onpointerdown=()=>note(+k.dataset.i));
addEventListener('keydown',e=>{const i=KB.indexOf(e.key.toLowerCase());if(i>-1&&!e.repeat&&!e.ctrlKey&&!e.metaKey)note(i)});
// splash
setTheme(theme);setLang(lang);
const sw=['Salom','Hello','Merhaba'];let si=0;const t=setInterval(()=>{if(si<3){$('#sw').textContent=sw[si++]}else{clearInterval(t);$('#splash').classList.add('hide');setTimeout(()=>$('#splash').remove(),1000)}},480);

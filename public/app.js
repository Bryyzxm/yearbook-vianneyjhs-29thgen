var SELECTED_CAT = "umum";
var firebaseConfig = {
  apiKey: "AIzaSyBdgEaVIMmeW3UlUPyuK2pBNSmlgpyD3oU",
  authDomain: "yearbook-vianney.firebaseapp.com",
  databaseURL: "https://yearbook-vianney-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yearbook-vianney",
  storageBucket: "yearbook-vianney.firebasestorage.app",
  messagingSenderId: "613927878890",
  appId: "1:613927878890:web:866a9dbb5fc7b346901793"
};

if(!firebaseConfig.databaseURL && firebaseConfig.projectId){
  firebaseConfig.databaseURL = "https://" + firebaseConfig.projectId + "-default-rtdb.firebaseio.com";
}

firebase.initializeApp(firebaseConfig);
var db = firebase.database();
var messagesRef = db.ref('messages');

var PD = [
  {id:0,name:"Annabelle Calista Wijaya",kelas:"IX A",imgUrl:"https://i.ibb.co.com/HfZMKbLr/Anabelle.png",tagline:"\"Hidupmu, ceritamu.\"",color:"#2a3a4a",initials:"AC"},
  {id:1,name:"Antonius Favian Kurnia",kelas:"IX A",imgUrl:"https://i.ibb.co.com/VphD6bHL/Vian.png",tagline:"\"Senyum itu gratis.\"",color:"#3a2a4a",initials:"AF"},
  {id:2,name:"Aristyawidya Tri Indraloka",kelas:"IX A",imgUrl:"https://i.ibb.co.com/prn0vrc6/Widya-2.png",tagline:"\"Tetap bersinar.\"",color:"#2a4a3a",initials:"AT"},
  {id:3,name:"Bryan Fildy",kelas:"IX A",imgUrl:"https://i.ibb.co.com/spRHV1tz/Bryan.png",tagline:"\"Jangan lupa bahagia.\"",color:"#4a3a2a",initials:"BF"},
  {id:4,name:"Clarisa Florence Winanto",kelas:"IX A",imgUrl:"https://i.ibb.co.com/MykdtP0v/Clarisa.png",tagline:"\"Kamu lebih kuat dari yang kamu pikir.\"",color:"#2a4a4a",initials:"CF"},
  {id:5,name:"Darrel Xaviere Widjaja",kelas:"IX A",imgUrl:"https://i.ibb.co.com/xS6JsDw7/Darrel-1.png",tagline:"\"Setiap hari adalah petualangan.\"",color:"#4a2a3a",initials:"DX"},
  {id:6,name:"Dean Frederic Ottelo",kelas:"IX A",imgUrl:"https://i.ibb.co.com/QvNgvxzq/Dean.png",tagline:"\"Jadilah dirimu yang terbaik.\"",color:"#3a4a2a",initials:"DF"},
  {id:7,name:"Gabriel Pandu Anjasa Putra",kelas:"IX A",imgUrl:"https://i.ibb.co.com/HLb5ZXY5/Pandu.png",tagline:"\"Selalu ada besok yang lebih cerah.\"",color:"#4a2a4a",initials:"GP"},
  {id:8,name:"Gabriella Michelle Josephine",kelas:"IX A",imgUrl:"https://i.ibb.co.com/Kxs0tQxx/Michelle.png",tagline:"\"Mimpi besar, usaha nyata.\"",color:"#2a3a3a",initials:"GM"},
  {id:9,name:"Gavin Tan",kelas:"IX A",imgUrl:"https://i.ibb.co.com/6JLTCz2F/Gavin.png",tagline:"\"Sukses menunggumu di depan.\"",color:"#3a2a2a",initials:"GT"},
  {id:10,name:"Genevieve Amadea Lumi",kelas:"IX A",imgUrl:"https://i.ibb.co.com/gZ18k70j/Vie-2.png",tagline:"\"Hidupmu, ceritamu.\"",color:"#2a3a4a",initials:"GA"},
  {id:11,name:"Gwen Velisha Lim",kelas:"IX A",imgUrl:"https://i.ibb.co.com/B2sGdSHz/Gwen.png",tagline:"\"Senyum itu gratis.\"",color:"#3a2a4a",initials:"GV"},
  {id:12,name:"Hazael Reydo Cornelis Lukito",kelas:"IX A",imgUrl:"https://i.ibb.co.com/dJXQwsQ1/Reydo.png",tagline:"\"Tetap bersinar.\"",color:"#2a4a3a",initials:"HR"},
  {id:13,name:"Hope Amabelle Budiyanto",kelas:"IX A",imgUrl:"https://i.ibb.co.com/99cN6RJb/Hope.png",tagline:"\"Jangan lupa bahagia.\"",color:"#4a3a2a",initials:"HA"},
  {id:14,name:"Jose Antonio Ola Padak",kelas:"IX A",imgUrl:"https://i.ibb.co.com/8L8ht9Zr/Jose.png",tagline:"\"Kamu lebih kuat dari yang kamu pikir.\"",color:"#2a4a4a",initials:"JA"},
  {id:15,name:"Kristian Nathanael Manalu",kelas:"IX A",imgUrl:"https://i.ibb.co.com/tpPRpmdB/FGladys-2.png",tagline:"\"Setiap hari adalah petualangan.\"",color:"#4a2a3a",initials:"KN"},
  {id:16,name:"Nathan Pangkawira",kelas:"IX A",imgUrl:"https://i.ibb.co.com/8gQjKQZj/Nathan.png",tagline:"\"Jadilah dirimu yang terbaik.\"",color:"#3a4a2a",initials:"NP"},
  {id:17,name:"Rebeka Angelina Nadeak",kelas:"IX A",imgUrl:"https://i.ibb.co.com/4gNm6s5n/Rebeka.png",tagline:"\"Selalu ada besok yang lebih cerah.\"",color:"#4a2a4a",initials:"RA"},
  {id:18,name:"Sebastian Orlando",kelas:"IX A",imgUrl:"https://i.ibb.co.com/pHvQB5X/Nando.jpg",tagline:"\"Mimpi besar, usaha nyata.\"",color:"#2a3a3a",initials:"SO"},
  {id:19,name:"Theresia Angelina",kelas:"IX A",imgUrl:"https://i.ibb.co.com/rf4qDPnV/FGladys-1.png",tagline:"\"Sukses menunggumu di depan.\"",color:"#3a2a2a",initials:"TA"},
  {id:20,name:"Vannesa Shannon Tirtarahaja",kelas:"IX A",imgUrl:"https://i.ibb.co.com/9HmpgM4p/Shannon.png",tagline:"\"Hidupmu, ceritamu.\"",color:"#2a3a4a",initials:"VS"},
  {id:21,name:"Verren Nathallie",kelas:"IX A",imgUrl:"https://i.ibb.co.com/g5rs8F3/Verren.png",tagline:"\"Senyum itu gratis.\"",color:"#3a2a4a",initials:"VN"},
  {id:22,name:"Yoel Natanael Laia",kelas:"IX A",imgUrl:"https://i.ibb.co.com/rKd61jrH/Yoel.png",tagline:"\"Tetap bersinar.\"",color:"#2a4a3a",initials:"YN"},
  {id:23,name:"Adelio Lamond Combitz T. P Sipahutar",kelas:"IX B",imgUrl:"https://i.ibb.co.com/Z679HJjf/Adelio-2.png",tagline:"\"Jangan lupa bahagia.\"",color:"#4a3a2a",initials:"AL"},
  {id:24,name:"Agatha Graceline Zawn Suherza",kelas:"IX B",imgUrl:"https://i.ibb.co.com/HDqQxkm2/Agatha-1.png",tagline:"\"Kamu lebih kuat dari yang kamu pikir.\"",color:"#2a4a4a",initials:"AG"},
  {id:25,name:"Ahmad Miftah Pratama",kelas:"IX B",imgUrl:"https://i.ibb.co.com/6CjLxRN/Ahmad.png",tagline:"\"Setiap hari adalah petualangan.\"",color:"#4a2a3a",initials:"AM"},
  {id:26,name:"Alexis Fidelio Yap",kelas:"IX B",imgUrl:"https://i.ibb.co.com/vvV23rvw/Fidel.png",tagline:"\"Jadilah dirimu yang terbaik.\"",color:"#3a4a2a",initials:"AF"},
  {id:27,name:"Bentley Amadeus",kelas:"IX B",imgUrl:"https://i.ibb.co.com/TBZZCsQ4/Bentley.png",tagline:"\"Selalu ada besok yang lebih cerah.\"",color:"#4a2a4a",initials:"BA"},
  {id:28,name:"Cherish Alexandra Siyadi",kelas:"IX B",imgUrl:"https://i.ibb.co.com/GQySkHBd/Cherish.png",tagline:"\"Mimpi besar, usaha nyata.\"",color:"#2a3a3a",initials:"CA"},
  {id:29,name:"Erik Agustinus",kelas:"IX B",imgUrl:"https://i.ibb.co.com/hJPQkfwC/Erik.png",tagline:"\"Sukses menunggumu di depan.\"",color:"#3a2a2a",initials:"EA"},
  {id:30,name:"Eugenia Meta Angelica Simanjorang",kelas:"IX B",imgUrl:"https://i.ibb.co.com/prJB2ymg/Eugenia.png",tagline:"\"Hidupmu, ceritamu.\"",color:"#2a3a4a",initials:"EM"},
  {id:31,name:"Faith Adabelle Budiyanto",kelas:"IX B",imgUrl:"https://i.ibb.co.com/5Wtt086K/Faith.png",tagline:"\"Senyum itu gratis.\"",color:"#3a2a4a",initials:"FA"},
  {id:32,name:"Felix Moses",kelas:"IX B",imgUrl:"https://i.ibb.co.com/nqHnktqs/Felix-1.png",tagline:"\"Tetap bersinar.\"",color:"#2a4a3a",initials:"FM"},
  {id:33,name:"Gabriel Richard Kei Nai Putra Junior",kelas:"IX B",imgUrl:"https://i.ibb.co.com/rKHfd1QD/Juan.png",tagline:"\"Jangan lupa bahagia.\"",color:"#4a3a2a",initials:"GR"},
  {id:34,name:"Gladys Sapphira",kelas:"IX B",imgUrl:"https://i.ibb.co.com/23wNcLfs/Gladys.png",tagline:"\"Kamu lebih kuat dari yang kamu pikir.\"",color:"#2a4a4a",initials:"GS"},
  {id:35,name:"Jason Carlton Hambali",kelas:"IX B",imgUrl:"https://i.ibb.co.com/Jws94PHc/Jason.png",tagline:"\"Setiap hari adalah petualangan.\"",color:"#4a2a3a",initials:"JC"},
  {id:36,name:"Jeremy Nathanael Chandra",kelas:"IX B",imgUrl:"https://i.ibb.co.com/hRHsKXR0/Jeremy.png",tagline:"\"Jadilah dirimu yang terbaik.\"",color:"#3a4a2a",initials:"JN"},
  {id:37,name:"Jessie Benjamin",kelas:"IX B",imgUrl:"https://i.ibb.co.com/39GZXFGJ/Jessie.png",tagline:"\"Selalu ada besok yang lebih cerah.\"",color:"#4a2a4a",initials:"JB"},
  {id:38,name:"Joshua Feraldo Ngadimin",kelas:"IX B",imgUrl:"https://i.ibb.co.com/S4Ry866c/Joshua.png",tagline:"\"Mimpi besar, usaha nyata.\"",color:"#2a3a3a",initials:"JF"},
  {id:39,name:"Justina Patricia",kelas:"IX B",imgUrl:"https://i.ibb.co.com/BV1qqZnd/Justina.png",tagline:"\"Sukses menunggumu di depan.\"",color:"#3a2a2a",initials:"JP"},
  {id:40,name:"Lionel Liong",kelas:"IX B",imgUrl:"https://i.ibb.co.com/QjNT8258/Lionel.png",tagline:"\"Hidupmu, ceritamu.\"",color:"#2a3a4a",initials:"LL"},
  {id:41,name:"Marvellino Jose",kelas:"IX B",imgUrl:"https://i.ibb.co.com/j9CkwQQt/Marvel.png",tagline:"\"Senyum itu gratis.\"",color:"#3a2a4a",initials:"MJ"},
  {id:42,name:"Regina Caeli",kelas:"IX B",imgUrl:"https://i.ibb.co.com/nG3yDL5/Regina.png",tagline:"\"Tetap bersinar.\"",color:"#2a4a3a",initials:"RC"},
  {id:43,name:"Sophie Elizabeth Gunawan",kelas:"IX B",imgUrl:"https://i.ibb.co.com/wNd4xZ49/Sophie.png",tagline:"\"Jangan lupa bahagia.\"",color:"#4a3a2a",initials:"SE"},
  {id:44,name:"Vanessa Lim",kelas:"IX B",imgUrl:"https://i.ibb.co.com/DHwStWBQ/Vanessa.png",tagline:"\"Kamu lebih kuat dari yang kamu pikir.\"",color:"#2a4a4a",initials:"VL"},
  {id:45,name:"Winson Mikael Kurniawan",kelas:"IX B",imgUrl:"https://i.ibb.co.com/TBL0w8Vc/Winson.png",tagline:"\"Setiap hari adalah petualangan.\"",color:"#4a2a3a",initials:"WM"}
];

var MSG = {};
var MSG_KEYS = {};
PD.forEach(function(p){ MSG[p.id] = []; });
PD.forEach(function(p){ MSG_KEYS[p.id] = []; });

var CUR = null;
var APWD = "admin123";
var DEL_PID = null, DEL_IDX = null;
var ADMIN_MODE = false;
var ADMIN_KEY_COUNT = 0;
var ADMIN_KEY_TIMER = null;
var REACTIONS = {};
var REACTIONS_REF = db.ref('reactions');
var MY_ID = localStorage.getItem('ybid');
if(!MY_ID){
  MY_ID = 'u'+Date.now().toString(36)+Math.random().toString(36).substr(2,9);
  localStorage.setItem('ybid',MY_ID);
}

function setAdminMode(next){
  ADMIN_MODE = next;
  var btn = document.getElementById("admin-toggle");
  if(btn){
    if(ADMIN_MODE){
      btn.classList.add("active");
      btn.setAttribute("aria-pressed","true");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed","false");
    }
  }
  if(CUR){ renderMsgs(CUR.id); }
}

function ts(){
  var n = new Date();
  return n.toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})+" · "+n.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});
}

function esc(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");
}

function showToast(m){
  var t = document.getElementById("toast");
  t.textContent = m;
  t.classList.add("show");
  setTimeout(function(){ t.classList.remove("show"); },2500);
}

function fireConfetti(){
  var container = document.createElement("div");
  container.className = "confetti-container";
  document.body.appendChild(container);
  var colors = ["#c9a96e","#ffd700","#ff6b6b","#69db7c","#74c0fc","#f783ac","#da77f2"];
  var shapes = ["circle","square"];
  for(var i=0;i<60;i++){
    var c = document.createElement("div");
    c.className = "confetti";
    var color = colors[Math.floor(Math.random()*colors.length)];
    var shape = shapes[Math.floor(Math.random()*shapes.length)];
    var size = 6+Math.random()*8;
    var left = Math.random()*100;
    var drift = (Math.random()-0.5)*200;
    var rot = Math.random()*720;
    var dur = 1.5+Math.random()*1.5;
    var delay = Math.random()*0.5;
    var borderRadius = shape==="circle"?"50%":"2px";
    c.style.cssText = "left:"+left+"%;top:-10px;width:"+size+"px;height:"+size+"px;background:"+color+";border-radius:"+borderRadius+";--drift:"+drift+"px;--rot:"+rot+"deg;--fall-dur:"+dur+"s;--fall-delay:"+delay+"s;";
    container.appendChild(c);
  }
  setTimeout(function(){ container.remove(); },3500);
}

function animateCounter(el,target){
  var current = parseInt(el.textContent)||0;
  if(current===target) return;
  var duration = 800;
  var start = performance.now();
  function step(now){
    var progress = Math.min((now-start)/duration,1);
    var eased = 1-Math.pow(1-progress,3);
    el.textContent = Math.round(current+(target-current)*eased);
    if(progress<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function updateTotalCounter(){
  var total = 0;
  for(var k in MSG){ total += (MSG[k]||[]).length; }
  animateCounter(document.getElementById("total-counter"),total);
}

function goHomeAnimated(){
  var profile = document.getElementById("pg-profile");
  var home = document.getElementById("pg-home");
  profile.classList.add("fade-out");
  setTimeout(function(){
    profile.classList.remove("active","fade-out");
    home.classList.add("active");
    buildGrid();
    window.scrollTo(0,0);
  },400);
}

function openProfAnimated(id){
  var home = document.getElementById("pg-home");
  home.classList.add("fade-out");
  setTimeout(function(){
    home.classList.remove("active","fade-out");
    openProf(id);
  },400);
}

var gridBuildToken = 0;

function buildGrid(){
  var g = document.getElementById("the-grid");
  g.innerHTML = "";
  gridBuildToken++;
  var currentToken = gridBuildToken;
  var EAGER_COUNT = 8;
  PD.forEach(function(p, i){
    var mc = MSG[p.id] ? MSG[p.id].length : 0;
    var el = document.createElement("div");
    el.className = "card";
    el.style.animationDelay = (i*0.05)+"s";
    el.setAttribute("onclick","openProfAnimated("+p.id+")");
    var loadAttr = i < EAGER_COUNT ? "eager" : "lazy";
    var fetchAttr = i < 2 ? " fetchpriority='high'" : "";
    var ph;
    if(p.imgUrl){
      ph = "<img class='cimg' src='"+p.imgUrl+"' alt='"+p.name+"' loading='"+loadAttr+"' decoding='async'"+fetchAttr+">";
    } else {
      ph = "<div class='cph' style='background:"+p.color+";'>"+p.initials+"</div>";
    }
    el.innerHTML = ph+"<div class='cfade'></div><div class='chint'>Buka Profil</div>";
    el.innerHTML += "<div class='cinfo'><div class='cname'>"+p.name+"</div><div class='ccls'>"+p.kelas+"</div>";
    if(mc > 0){ el.innerHTML += "<div class='cbdg'>"+mc+" pesan</div>"; }
    el.innerHTML += "</div>";
    g.appendChild(el);
    if(p.imgUrl){
      var img = el.querySelector(".cimg");
      if(img){
        if(img.complete && img.naturalHeight > 0){ el.classList.add("loaded"); }
        img.addEventListener("load", function(){
          if(currentToken === gridBuildToken){ el.classList.add("loaded"); }
        });
        img.addEventListener("error", function(){
          if(currentToken === gridBuildToken){
            el.classList.add("loaded");
            var phDiv = document.createElement("div");
            phDiv.className = "cph";
            phDiv.style.background = p.color;
            phDiv.textContent = p.initials;
            img.replaceWith(phDiv);
          }
        });
      }
    } else {
      el.classList.add("loaded");
    }
  });
  updateTotalCounter();
}

function openProf(id){
  CUR = null;
  for(var i = 0; i < PD.length; i++){
    if(PD[i].id === id){ CUR = PD[i]; break; }
  }
  if(!CUR) return;
  var h = document.getElementById("p-hero");
  var ph = CUR.imgUrl ? "<img class='phimg' src='"+CUR.imgUrl+"' alt='"+CUR.name+"' decoding='async'>" : "<div class='phph' style='background:"+CUR.color+";'>"+CUR.initials+"</div>";
  h.innerHTML = ph+"<div class='phfade'></div><div class='phinfo'>";
  h.innerHTML += "<div class='phname'>"+CUR.name+"</div>";
  h.innerHTML += "<div class='phcls'>"+CUR.kelas+"</div>";
  h.innerHTML += "<div class='phtag'>"+CUR.tagline+"</div></div>";
  document.getElementById("p-short").textContent = CUR.name.split(" ")[0];
  document.getElementById("msg-in").value = "";
  renderMsgs(id);
  document.getElementById("pg-home").classList.remove("active");
  document.getElementById("pg-profile").classList.add("active");
  window.scrollTo(0,0);
}

function renderMsgs(id){
  var l = document.getElementById("m-list");
  var m = MSG[id] || [];
  document.getElementById("m-count").textContent = m.length === 0 ? "Belum ada pesan" : m.length+" Pesan";
  if(!m.length){
    l.innerHTML = "<div class='nomsg'>Jadilah yang pertama meninggalkan pesan ✶</div>";
    return;
  }
  var html = "";
  for(var i = m.length-1; i >= 0; i--){
    var msg = m[i];
    var cat = msg.category || "umum";
    var catLabel = cat==="umum" ? "" : "<span class='cat-badge cat-"+cat+"'>"+cat.charAt(0).toUpperCase()+cat.slice(1)+"</span>";
    var key = (MSG_KEYS[id]||[])[i] || "";
    var r = REACTIONS[key] || {};
    var likeUsers = r.like ? Object.keys(r.like) : [];
    var heartUsers = r.heart ? Object.keys(r.heart) : [];
    var laughUsers = r.laugh ? Object.keys(r.laugh) : [];
    var hasLiked = likeUsers.indexOf(MY_ID) !== -1;
    var hasHearted = heartUsers.indexOf(MY_ID) !== -1;
    var hasLaughed = laughUsers.indexOf(MY_ID) !== -1;
    html += "<div class='mbub'>"
      +(ADMIN_MODE ? "<button class='dbtn' data-pid='"+id+"' data-idx='"+i+"'>Hapus</button>" : "")
      +"<div class='mtxt'>"+esc(msg.text)+catLabel+"</div>"
      +"<div class='mmeta'>"+msg.time+"</div>"
      +"<div class='reactions'>"
      +"<button class='react-btn"+(hasLiked?" reacted":"")+"' onclick='toggleReaction(\""+key+"\",\"like\")'>&#x1F44D; <span class='count'>"+(likeUsers.length||"")+"</span></button>"
      +"<button class='react-btn"+(hasHearted?" reacted":"")+"' onclick='toggleReaction(\""+key+"\",\"heart\")'>&#x2764; <span class='count'>"+(heartUsers.length||"")+"</span></button>"
      +"<button class='react-btn"+(hasLaughed?" reacted":"")+"' onclick='toggleReaction(\""+key+"\",\"laugh\")'>&#x1F602; <span class='count'>"+(laughUsers.length||"")+"</span></button>"
      +"</div>"
      +"</div>";
  }
  l.innerHTML = html;
}

function toggleReaction(msgKey,type){
  if(!msgKey) return;
  var ref = REACTIONS_REF.child(msgKey).child(type).child(MY_ID);
  ref.once('value',function(snap){
    if(snap.exists()){
      ref.remove();
    } else {
      ref.set(true);
    }
  });
}

function showRandomMsg(){
  var allMsgs = [];
  for(var pid in MSG){
    var bucket = MSG[pid]||[];
    for(var i=0;i<bucket.length;i++){
      var p = null;
      for(var j=0;j<PD.length;j++){ if(PD[j].id==pid){ p=PD[j]; break; } }
      allMsgs.push({text:bucket[i].text, to:p?p.name:"Seseorang"});
    }
  }
  if(!allMsgs.length){ showToast("Belum ada pesan di kelas."); return; }
  var pick = allMsgs[Math.floor(Math.random()*allMsgs.length)];
  var display = document.getElementById("random-msg");
  document.getElementById("random-text").textContent = pick.text;
  document.getElementById("random-from").textContent = "— untuk "+pick.to;
  display.classList.remove("show");
  void display.offsetWidth;
  display.classList.add("show");
}

function kirim(){
  var inp = document.getElementById("msg-in");
  var txt = inp.value.trim();
  if(!txt){ showToast("Pesan tidak boleh kosong."); return; }
  if(txt.length > 500){ showToast("Maks. 500 karakter."); return; }
  var newMsg = {text:txt, time:ts(), category:SELECTED_CAT};
  messagesRef.child(String(CUR.id)).push(newMsg)
    .then(function(){
      inp.value = "";
      fireConfetti();
      showToast("Pesan terkirim! ✶");
    })
    .catch(function(err){
      console.error("Gagal kirim pesan:", err);
      showToast("Gagal kirim pesan. Cek koneksi / rules Firebase.");
    });
}

function goHome(){
  goHomeAnimated();
}

function openModal(pid,idx){
  DEL_PID = pid; DEL_IDX = idx;
  document.getElementById("del-pw").value = "";
  document.getElementById("del-err").style.display = "none";
  document.getElementById("del-modal").classList.add("show");
  setTimeout(function(){ document.getElementById("del-pw").focus(); },80);
}

function closeModal(){
  DEL_PID = null; DEL_IDX = null;
  document.getElementById("del-modal").classList.remove("show");
}

function confirmDel(){
  var pw = document.getElementById("del-pw").value;
  if(pw !== APWD){
    document.getElementById("del-err").textContent = "Invalid Password";
    document.getElementById("del-err").style.display = "block";
    document.getElementById("del-pw").value = "";
    return;
  }
  document.getElementById("del-err").style.display = "none";
  var pid = DEL_PID;
  var idx = DEL_IDX;
  var keys = MSG_KEYS[pid] || [];
  if(idx >= 0 && idx < keys.length){
    var keyToDelete = keys[idx];
    messagesRef.child(String(pid)).child(keyToDelete).remove().catch(function(err){
      console.error("Gagal hapus pesan:", err);
      showToast("Gagal hapus pesan. Cek rules Firebase.");
    });
  }
  closeModal();
  showToast("Pesan dihapus.");
}

messagesRef.on('value', function(snapshot){
  var data = snapshot.val() || {};
  PD.forEach(function(p){
    var bucket = data[p.id] || {};
    var entries = Object.entries(bucket);
    var vals = [];
    var keys = [];
    for(var i = 0; i < entries.length; i++){
      var key = entries[i][0];
      var val = entries[i][1];
      if(val && typeof val.text === "string"){
        vals.push(val);
        keys.push(key);
      }
    }
    MSG[p.id] = vals;
    MSG_KEYS[p.id] = keys;
  });
  buildGrid();
  if(CUR){ renderMsgs(CUR.id); }
}, function(error){
  console.error("Realtime listener error:", error);
  showToast("Gagal membaca data realtime. Cek rules Firebase.");
});

db.ref('.info/connected').on('value', function(snapshot){
  if(snapshot.val() === true){
    console.log("Firebase connected");
  } else {
    console.warn("Firebase disconnected");
  }
});

document.addEventListener("click",function(e){
  var btn = e.target.closest(".dbtn");
  if(btn){
    openModal(parseInt(btn.getAttribute("data-pid")),parseInt(btn.getAttribute("data-idx")));
    return;
  }
  if(e.target === document.getElementById("del-modal")) closeModal();
});

document.getElementById("btn-cancel").addEventListener("click",closeModal);
document.getElementById("btn-confirm").addEventListener("click",confirmDel);
document.getElementById("del-pw").addEventListener("keydown",function(e){ if(e.key==="Enter") confirmDel(); });
document.addEventListener("keydown",function(e){ if(e.key==="Escape") closeModal(); });
document.getElementById("admin-toggle").addEventListener("click",function(){
  setAdminMode(!ADMIN_MODE);
  showToast(ADMIN_MODE ? "Admin mode aktif" : "Admin mode nonaktif");
});

document.getElementById("eye-btn").addEventListener("click",function(){
  var inp = document.getElementById("del-pw");
  var icon = document.getElementById("eye-icon");
  if(inp.type === "password"){
    inp.type = "text";
    icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
  } else {
    inp.type = "password";
    icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  }
  inp.focus();
});

document.addEventListener("keydown",function(e){
  if(e.key === "a" || e.key === "A"){
    ADMIN_KEY_COUNT++;
    if(ADMIN_KEY_TIMER) clearTimeout(ADMIN_KEY_TIMER);
    ADMIN_KEY_TIMER = setTimeout(function(){ ADMIN_KEY_COUNT = 0; }, 1000);
    if(ADMIN_KEY_COUNT >= 3){
      ADMIN_KEY_COUNT = 0;
      setAdminMode(!ADMIN_MODE);
      showToast(ADMIN_MODE ? "Admin mode aktif" : "Admin mode nonaktif");
    }
  }
});

setAdminMode(false);
buildGrid();

document.addEventListener("click",function(e){
  var catBtn = e.target.closest(".cat-btn");
  if(catBtn){
    var parent = catBtn.parentElement;
    parent.querySelectorAll(".cat-btn").forEach(function(b){ b.classList.remove("selected"); });
    catBtn.classList.add("selected");
    SELECTED_CAT = catBtn.getAttribute("data-cat")||"umum";
  }
});

REACTIONS_REF.on('value',function(snapshot){
  REACTIONS = snapshot.val()||{};
  if(CUR) renderMsgs(CUR.id);
});

try{(function(){
  var overlay = document.getElementById("intro-overlay");
  var textEl = document.getElementById("intro-text");
  var subEl = document.getElementById("intro-sub");
  var hintEl = document.getElementById("intro-hint");
  var particlesEl = document.getElementById("intro-particles");
  var audio = document.getElementById("bg-audio");
  var toggleBtn = document.getElementById("audio-toggle");
  if(!overlay||!textEl||!audio) return;
  var SPEED = 65;
  var GLOW_MS = 2200;
  var TITLE = [
    {t:"Yearbook ",a:false},
    {t:"Vianney's Student ",a:true},
    {t:"2025/2026",a:false}
  ];
  var full = "";
  TITLE.forEach(function(p){ full += p.t; });
  var idx = 0;
  var cur = '<span class="cursor"></span>';

  function htmlAt(){
    var n = 0, r = "";
    for(var i=0;i<TITLE.length;i++){
      var p=TITLE[i], len=p.t.length;
      if(idx<=n) break;
      var take=Math.min(idx-n,len);
      var s=p.t.substring(0,take);
      r += p.a ? '<span class="intro-accent">'+s+'</span>' : s;
      n += len;
    }
    return r;
  }

  function type(){
    if(idx <= full.length){
      textEl.innerHTML = htmlAt() + cur;
      idx++;
      setTimeout(type, SPEED);
    } else {
      textEl.classList.add("glow");
      if(subEl) subEl.classList.add("show");
      if(hintEl) hintEl.classList.add("show");
      if(particlesEl) spawnParticles();
      setTimeout(startReveal, GLOW_MS);
    }
  }

  function spawnParticles(){
    var count = 30;
    var cx = 50, cy = 45;
    for(var i=0; i<count; i++){
      var el = document.createElement("div");
      el.className = "intro-particle";
      var angle = Math.random() * Math.PI * 2;
      var r1 = 20 + Math.random() * 30;
      var r2 = 80 + Math.random() * 120;
      var dx1 = Math.cos(angle) * r1;
      var dy1 = Math.sin(angle) * r1;
      var dx2 = Math.cos(angle) * r2;
      var dy2 = Math.sin(angle) * r2;
      var dur = 1.5 + Math.random() * 1.5;
      var del = Math.random() * 0.8;
      var size = 2 + Math.random() * 4;
      el.style.cssText = "left:"+cx+"%;top:"+cy+"%;width:"+size+"px;height:"+size+"px;"+
        "--dx1:"+dx1+"px;--dy1:"+dy1+"px;--dx2:"+dx2+"px;--dy2:"+dy2+"px;"+
        "--dur:"+dur+"s;--delay:"+del+"s;";
      particlesEl.appendChild(el);
    }
  }

  function startReveal(){
    overlay.classList.add("reveal");
    overlay.addEventListener("animationend", function(){
      overlay.style.display = "none";
      if(toggleBtn) toggleBtn.classList.add("visible");
    }, {once:true});
  }

  audio.volume = 0.5;
  var audioReady = false;

  function startAudio(){
    if(audioReady) return;
    audio.muted = false;
    audio.volume = 0.5;
    audio.play().then(function(){
      audioReady = true;
    }).catch(function(){});
  }

  startAudio();

  document.addEventListener("click", function(){ startAudio(); });
  document.addEventListener("touchstart", function(){ startAudio(); });
  document.addEventListener("keydown", function(){ startAudio(); });

  var playSVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
  var pauseSVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';

  function syncIcon(){
    if(!toggleBtn||!audio) return;
    toggleBtn.innerHTML = audio.paused ? playSVG : pauseSVG;
    toggleBtn.classList.toggle("paused", audio.paused);
  }

  if(toggleBtn) toggleBtn.addEventListener("click", function(e){
    e.stopPropagation();
    audio.muted = false;
    if(audio.paused){
      audio.play().then(function(){ audioReady = true; }).catch(function(){});
    } else {
      audio.pause();
    }
  });
  if(audio){
    audio.addEventListener("play", syncIcon);
    audio.addEventListener("pause", syncIcon);
  }
  syncIcon();

  setTimeout(type, 600);
})()}catch(e){}

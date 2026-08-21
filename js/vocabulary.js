(() => {
const KEY='wordventure.vocabNotebook';
let words=JSON.parse(localStorage.getItem(KEY)||'[]');
const grid=document.getElementById('notebookGrid'), count=document.getElementById('vocabCount'), search=document.getElementById('vocabSearch');
function render(){
 const q=(search.value||'').toLowerCase().trim();
 const list=words.filter(v=>!q||v.word.toLowerCase().includes(q)||v.meaning.toLowerCase().includes(q));
 count.textContent=words.length;
 grid.innerHTML=list.length?list.map((v,i)=>`<article class="notebook-card"><div class="notebook-word">${v.word}</div><div class="notebook-meaning">${v.meaning}</div><div class="notebook-meta"><span>${v.course||'Wordventure'}</span><button class="remove-word" data-index="${words.indexOf(v)}" title="Remove"><i class="bi bi-trash3"></i></button></div></article>`).join(''):'<div class="empty-notebook"><i class="bi bi-bookmark-heart" style="font-size:1.6rem"></i><p style="margin:10px 0 0">Your notebook is empty. Save words from a lesson to start building your collection.</p></div>';
 grid.querySelectorAll('.remove-word').forEach(btn=>btn.onclick=()=>{words.splice(Number(btn.dataset.index),1);localStorage.setItem(KEY,JSON.stringify(words));render();});
}
search.addEventListener('input',render);
document.getElementById('clearVocab').onclick=()=>{if(!words.length)return;words=[];localStorage.setItem(KEY,'[]');render();};
render();
})();

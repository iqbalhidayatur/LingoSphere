(() => {
const completed=JSON.parse(localStorage.getItem('completedLessons')||'[]');
const vocab=JSON.parse(localStorage.getItem('wordventure.vocabNotebook')||'[]');
const xp=Number(localStorage.getItem('lingosphere.xp')||0);
const examCount=Object.keys(localStorage).filter(k=>k.startsWith('wordventure.weeklyExam.')&&localStorage.getItem(k)==='passed').length;
const totalLessons=40;
const progress=Math.min(100,Math.round(completed.length/totalLessons*100));
document.getElementById('totalLessons').textContent=completed.length;
document.getElementById('progressValue').textContent=progress+'%';
document.getElementById('progressBar').style.width=progress+'%';
document.getElementById('courseCount').textContent=`${completed.length} lessons completed`;
document.getElementById('xpTotal').textContent=`${xp} XP`;
document.getElementById('vocabMetric').textContent=vocab.length;
document.getElementById('examMetric').textContent=examCount;
const base=Number(localStorage.getItem('wordventure.analytics.base')||0);
const skills=[
['Grammar',Math.min(100,82+Math.round(completed.length/5))],
['Vocabulary',Math.min(100,74+Math.round(vocab.length/3))],
['Speaking',Math.min(100,70+Math.round(completed.length/6))],
['Writing',Math.min(100,68+Math.round(completed.length/6))]
];
document.getElementById('skillList').innerHTML=skills.map(([n,v])=>`<div class="skill-row"><span>${n}</span><div class="skill-track"><span style="width:${v}%"></span></div><strong>${v}%</strong></div>`).join('');
const labels=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const today=new Date().getDay();
const values=labels.map((_,i)=>Math.min(100,15+((completed.length*7+i*17)%76)));
document.getElementById('weekBars').innerHTML=labels.map((d,i)=>`<div class="day-bar"><span style="--h:${values[i]}%"></span><small>${d}</small></div>`).join('');
})();

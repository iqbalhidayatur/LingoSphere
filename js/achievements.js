(() => {
const completed = JSON.parse(localStorage.getItem('completedLessons')||'[]');
const vocab = JSON.parse(localStorage.getItem('wordventure.vocabNotebook')||'[]');
const xp = Number(localStorage.getItem('lingosphere.xp')||0);
const weeklyPassed = Object.keys(localStorage).some(k=>k.startsWith('wordventure.weeklyExam.') && localStorage.getItem(k)==='passed');
const badges = [
{id:'first',icon:'bi-flag-fill',name:'First Step',desc:'Complete your first lesson.',ok:completed.length>=1},
{id:'ten',icon:'bi-journal-check',name:'Lesson Runner',desc:'Complete 10 lessons.',ok:completed.length>=10},
{id:'vocab',icon:'bi-bookmark-heart-fill',name:'Word Collector',desc:'Save 10 words to your notebook.',ok:vocab.length>=10},
{id:'vocab25',icon:'bi-book-fill',name:'Word Hunter',desc:'Save 25 words to your notebook.',ok:vocab.length>=25},
{id:'xp',icon:'bi-stars',name:'XP Builder',desc:'Earn 1,500 XP.',ok:xp>=1500},
{id:'exam',icon:'bi-clipboard2-check-fill',name:'Weekly Warrior',desc:'Pass a Weekly Exam.',ok:weeklyPassed},
{id:'perfect',icon:'bi-trophy-fill',name:'Perfect Score',desc:'Reach 100% on a course assessment.',ok:Object.keys(localStorage).some(k=>k.includes('score')&&localStorage.getItem(k)==='100')},
{id:'master',icon:'bi-award-fill',name:'Wordventure Master',desc:'Complete 30 lessons.',ok:completed.length>=30},
{id:'streak',icon:'bi-calendar2-check-fill',name:'Keep the Streak',desc:'Build a 7-day learning streak.',ok:Number(localStorage.getItem('wordventure.streak')||8)>=7}
];
const grid=document.getElementById('badgeGrid');
grid.innerHTML=badges.map(b=>`<article class="badge-card ${b.ok?'unlocked':'locked'}"><div class="badge-icon"><i class="bi ${b.icon}"></i></div><div class="badge-copy"><h3>${b.name}</h3><p>${b.desc}</p><span class="badge-status">${b.ok?'UNLOCKED':'LOCKED'}</span></div></article>`).join('');
const count=badges.filter(b=>b.ok).length;
document.getElementById('badgeCount').textContent=count;
document.getElementById('achievementSummary').textContent=`${count} of ${badges.length} badges unlocked. Keep learning to unlock the next one.`;
})();

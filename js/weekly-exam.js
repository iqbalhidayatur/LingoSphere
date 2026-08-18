'use strict';

(() => {
  const QUESTIONS = [
    { type:'Grammar', q:'Which sentence is correct?', options:['She go to school every day.','She goes to school every day.','She going to school every day.','She gone to school every day.'], answer:1 },
    { type:'Vocabulary', q:'What does “deadline” mean?', options:['A place to meet','The final time to finish something','A type of lesson','A daily routine'], answer:1 },
    { type:'Reading', q:'“Tom has lived in Bandung for three years.” What does this mean?', options:['Tom moved to Bandung three years ago and still lives there.','Tom will move to Bandung in three years.','Tom lived in Bandung for one day.','Tom has never lived in Bandung.'], answer:0 },
    { type:'Grammar', q:'Choose the best sentence for a plan.', options:['I am going to study tonight.','I going study tonight.','I am study going tonight.','I go to studying tonight.'], answer:0 },
    { type:'Vocabulary', q:'What is the closest meaning of “reliable”?', options:['Easy to break','Able to be trusted','Very expensive','Difficult to understand'], answer:1 },
    { type:'Practical English', q:'Someone says, “Could you help me with this?” What is a natural response?', options:['Sure, what do you need?','Yesterday was Monday.','I am from Bandung.','No, I have twenty years.'], answer:0 },
    { type:'Grammar', q:'Choose the correct past tense sentence.', options:['I see him yesterday.','I saw him yesterday.','I seen him yesterday.','I seeing him yesterday.'], answer:1 },
    { type:'Vocabulary', q:'If a restaurant is “crowded”, it is...', options:['Full of people','Closed for the day','Very quiet','Far from the city'], answer:0 },
    { type:'Reading', q:'“Please submit the report before Friday.” What should you do?', options:['Send the report before Friday.','Read the report next month.','Cancel the report.','Wait until Friday next week.'], answer:0 },
    { type:'Practical English', q:'You did not hear someone clearly. What is the most natural response?', options:['Could you say that again, please?','I am agree.','Say me yesterday.','What you are saying?'], answer:0 }
  ];

  const $ = id => document.getElementById(id);
  const STORAGE = 'wordventure.weeklyExam';
  const XP_KEY = 'lingosphere.xp';
  const PASS = 70;
  let current = -1;
  let selected = null;
  let score = 0;
  let answers = [];

  function weekKey(date = new Date()) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
  }

  function getRecord() {
    try { return JSON.parse(localStorage.getItem(STORAGE) || '{}'); } catch { return {}; }
  }

  function isComplete() {
    const record = getRecord();
    return record.week === weekKey() && record.completed === true;
  }

  function saveCompletion(percent) {
    localStorage.setItem(STORAGE, JSON.stringify({ week:weekKey(), completed:true, score:percent, completedAt:new Date().toISOString() }));
    const currentXp = Number(localStorage.getItem(XP_KEY) || 0);
    localStorage.setItem(XP_KEY, String(currentXp + 150));
  }

  function updateStatus() {
    const record = getRecord();
    const complete = record.week === weekKey() && record.completed === true;
    $('weeklyStatusCard')?.classList.toggle('completed', complete);
    $('statusLabel').textContent = complete ? 'Completed this week' : 'Not completed';
    $('statusScore').textContent = complete ? `${record.score}% score` : 'This week’s exam';
    $('statusSubtext').textContent = complete ? 'You are all set until next week.' : 'Available whenever you are ready.';
    $('navExamDot')?.classList.toggle('done', complete);
  }

  function renderStart() {
    $('questionProgress').textContent = 'Weekly checkpoint';
    $('questionTitle').textContent = isComplete() ? 'You already completed this week.' : 'Ready when you are.';
    $('scorePill').textContent = isComplete() ? `${getRecord().score}%` : '0 pts';
    $('examProgressBar').style.width = isComplete() ? '100%' : '0%';
    $('questionArea').innerHTML = `
      <div class="exam-result">
        <div class="exam-result-icon"><i class="bi ${isComplete() ? 'bi-check2-circle' : 'bi-clipboard2-check-fill'}"></i></div>
        <h2>${isComplete() ? 'Weekly exam completed.' : 'Your weekly exam is ready.'}</h2>
        <p>${isComplete() ? `You scored ${getRecord().score}%. Come back when the new weekly exam appears.` : 'Take the exam at any time this week. There is no fixed time or appointment.'}</p>
      </div>`;
    $('examFeedback').hidden = true;
    $('backQuestionBtn').style.visibility = 'hidden';
    $('nextQuestionBtn').style.display = isComplete() ? 'none' : '';
    if (!isComplete()) $('nextQuestionBtn').innerHTML = 'Start exam <i class="bi bi-arrow-right"></i>';
  }

  function renderQuestion() {
    const item = QUESTIONS[current];
    selected = null;
    $('questionProgress').textContent = `Question ${current + 1} of ${QUESTIONS.length}`;
    $('questionTitle').textContent = 'Choose the best answer.';
    $('scorePill').textContent = `${score} pts`;
    $('examProgressBar').style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
    $('examFeedback').hidden = true;
    $('backQuestionBtn').style.visibility = current > 0 ? 'visible' : 'hidden';
    $('nextQuestionBtn').disabled = true;
    $('nextQuestionBtn').innerHTML = current === QUESTIONS.length - 1 ? 'Finish exam <i class="bi bi-trophy-fill"></i>' : 'Next question <i class="bi bi-arrow-right"></i>';
    $('questionArea').innerHTML = `
      <div class="question-type"><i class="bi bi-bookmark-star-fill"></i>${item.type}</div>
      <h2 class="question-text">${item.q}</h2>
      <div class="question-options">
        ${item.options.map((option,i) => `<button class="question-option" type="button" data-option="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span class="option-copy">${option}</span></button>`).join('')}
      </div>`;
    document.querySelectorAll('.question-option').forEach(btn => btn.addEventListener('click', () => {
      document.querySelectorAll('.question-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selected = Number(btn.dataset.option);
      $('nextQuestionBtn').disabled = false;
    }));
  }

  function startExam() {
    current = 0;
    score = 0;
    answers = [];
    $('nextQuestionBtn').style.display = '';
    renderQuestion();
  }

  function next() {
    if (current === -1) return startExam();
    if (selected === null) return;
    const item = QUESTIONS[current];
    const correct = selected === item.answer;
    if (correct) score += 10;
    answers.push({ selected, correct });
    if (current < QUESTIONS.length - 1) {
      current += 1;
      renderQuestion();
      return;
    }
    finishExam();
  }

  function finishExam() {
    const percent = score;
    const passed = percent >= PASS;
    if (passed) saveCompletion(percent);
    $('questionProgress').textContent = 'Final result';
    $('questionTitle').textContent = passed ? 'Weekly checkpoint complete.' : 'Keep building your score.';
    $('scorePill').textContent = `${percent}%`;
    $('examProgressBar').style.width = '100%';
    $('examFeedback').hidden = true;
    $('backQuestionBtn').style.visibility = 'hidden';
    $('nextQuestionBtn').style.display = 'none';
    $('questionArea').innerHTML = `
      <div class="exam-result">
        <div class="exam-result-icon"><i class="bi ${passed ? 'bi-trophy-fill' : 'bi-arrow-repeat'}"></i></div>
        <h2>${passed ? 'You passed this week’s exam.' : 'You did not reach 70% yet.'}</h2>
        <p>${passed ? 'Your result is saved for this week and +150 XP has been added.' : 'You can retake the exam anytime this week. There is no limit on when you can try again.'}</p>
        <div class="exam-result-score">${percent}% · ${score} / 100</div>
        <div class="exam-result-actions"><button class="btn btn-primary" id="resultAction" type="button">${passed ? 'Back to dashboard' : 'Retake exam'} <i class="bi bi-arrow-right"></i></button></div>
      </div>`;
    $('resultAction').addEventListener('click', () => passed ? location.href = 'learning.html' : startExam());
    updateStatus();
  }

  function initProfile() {
    const user = window.LS?.Auth?.getUser?.() || window.LS?.DEMO_USER || {};
    const name = user.name || 'Alex Morgan';
    const initials = name.split(' ').slice(0,2).map(part => part[0]).join('').toUpperCase();
    $('sidebarUserName').textContent = name;
    $('sidebarUserLevel').textContent = `${user.levelName || 'Communicator'} · Level ${user.level || 4}`;
    $('sidebarAvatar').textContent = initials;
    $('topbarAvatar').textContent = initials;
  }

  function initMobileNav() {
    const sidebar = $('learningSidebar');
    const backdrop = $('sidebarBackdrop');
    $('sidebarOpen')?.addEventListener('click', () => { sidebar.classList.add('open'); backdrop.classList.add('show'); });
    const close = () => { sidebar.classList.remove('open'); backdrop.classList.remove('show'); };
    $('sidebarClose')?.addEventListener('click', close);
    backdrop?.addEventListener('click', close);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initProfile();
    initMobileNav();
    updateStatus();
    renderStart();
    $('nextQuestionBtn').addEventListener('click', next);
    $('backQuestionBtn').addEventListener('click', () => {
      if (current > 0) { current -= 1; answers.pop(); renderQuestion(); }
    });
  });
})();

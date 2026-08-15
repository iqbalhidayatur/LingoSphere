(function () {
  'use strict';

  const lessons = [
    { title: 'Airport Check-in', type: 'Conversation', icon: 'bi-chat-square-text-fill', context: 'Travel English', description: 'Learn the phrases you need to check in, confirm your baggage, and ask about your gate.', speaker: 'Airport agent', example: 'Good morning. May I see your passport?', prompt: 'Choose the best response.', answers: ['Sure. Here you are.', 'No, I do not travel.', 'Where is the hotel?', 'I am studying English.'], correct: 0 },
    { title: 'Baggage Questions', type: 'Vocabulary', icon: 'bi-luggage-fill', context: 'Travel English', description: 'Practice useful words for checked bags, carry-ons, weight, and baggage limits.', speaker: 'Airport agent', example: 'Do you have any bags to check?', prompt: 'Choose the best response.', answers: ['Yes, I have one suitcase.', 'It is very delicious.', 'My gate is number twelve.', 'I booked a room.'], correct: 0 },
    { title: 'Finding Your Gate', type: 'Conversation', icon: 'bi-signpost-2-fill', context: 'Travel English', description: 'Ask for directions and understand common airport signs.', speaker: 'Traveler', example: 'Excuse me, where is gate B14?', prompt: 'Choose the best response.', answers: ['It is down the hall on your left.', 'I would like a coffee.', 'My passport is blue.', 'The flight leaves tomorrow.'], correct: 0 },
    { title: 'At the Boarding Gate', type: 'Listening', icon: 'bi-headphones', context: 'Travel English', description: 'Recognize common announcements and respond to simple boarding instructions.', speaker: 'Gate agent', example: 'Passengers in group three may now board.', prompt: 'What does the announcement mean?', answers: ['Group three can enter the plane now.', 'Group three should check their hotel.', 'The airport is closing.', 'The flight has been cancelled.'], correct: 0 },
    { title: 'Hotel Check-in', type: 'Conversation', icon: 'bi-building-fill', context: 'Travel English', description: 'Check into a hotel, confirm your reservation, and ask simple questions.', speaker: 'Receptionist', example: 'Do you have a reservation?', prompt: 'Choose the best response.', answers: ['Yes, I booked a room for two nights.', 'I need to catch a flight.', 'My suitcase is heavy.', 'Where is gate B14?'], correct: 0 },
    { title: 'Ordering Breakfast', type: 'Speaking', icon: 'bi-cup-hot-fill', context: 'Travel English', description: 'Order food and drinks politely while staying clear and confident.', speaker: 'Server', example: 'What would you like for breakfast?', prompt: 'Choose the best response.', answers: ['I would like eggs and orange juice, please.', 'My room is on the third floor.', 'Here is my passport.', 'Where is the taxi?'], correct: 0 },
    { title: 'Getting Around Town', type: 'Vocabulary', icon: 'bi-map-fill', context: 'Travel English', description: 'Use practical phrases for taxis, public transport, and asking for directions.', speaker: 'Traveler', example: 'How can I get to the city center?', prompt: 'Choose the best response.', answers: ['You can take the metro from here.', 'I would like a single room.', 'My flight boards at six.', 'I have two suitcases.'], correct: 0 },
    { title: 'Travel Wrap-up', type: 'Challenge', icon: 'bi-trophy-fill', context: 'Travel English', description: 'Review the core phrases from this course in one final confidence check.', speaker: 'Coach', example: 'You are ready for your trip. What will you say at check-in?', prompt: 'Choose the strongest response.', answers: ['Hello. I have a reservation under Morgan.', 'The weather is beautiful.', 'I like grammar exercises.', 'My favorite color is blue.'], correct: 0 }
  ];

  const state = {
    course: new URLSearchParams(location.search).get('course') || 'Travel English',
    current: Math.min(Math.max(Number(new URLSearchParams(location.search).get('lesson')) || 1, 1), lessons.length) - 1,
    selected: null,
    checked: false,
    completed: JSON.parse(localStorage.getItem('lingosphere.completedLessons') || '[]'),
    bookmarks: JSON.parse(localStorage.getItem('lingosphere.bookmarkedLessons') || '[]')
  };

  const $ = id => document.getElementById(id);

  function toast(message) {
    if (window.LS?.Toast?.show) window.LS.Toast.show(message);
    else console.log(message);
  }

  function saveState() {
    localStorage.setItem('lingosphere.completedLessons', JSON.stringify(state.completed));
    localStorage.setItem('lingosphere.bookmarkedLessons', JSON.stringify(state.bookmarks));
  }

  function renderList() {
    const list = $('lessonList');
    if (!list) return;
    list.innerHTML = lessons.map((lesson, index) => {
      const done = state.completed.includes(index);
      const locked = index > 0 && !state.completed.includes(index - 1) && index !== state.current;
      return `<button class="lesson-item ${index === state.current ? 'active' : ''} ${locked ? 'locked' : ''}" type="button" data-index="${index}" ${locked ? 'disabled' : ''}>
        <span class="lesson-item-num">${done ? '<i class="bi bi-check2"></i>' : String(index + 1).padStart(2, '0')}</span>
        <span><span class="lesson-item-title">${lesson.title}</span><span class="lesson-item-meta">${lesson.type}</span></span>
        <i class="bi ${done ? 'bi-check-circle-fill' : locked ? 'bi-lock-fill' : 'bi-chevron-right'}"></i>
      </button>`;
    }).join('');

    list.querySelectorAll('.lesson-item:not(:disabled)').forEach(button => {
      button.addEventListener('click', () => loadLesson(Number(button.dataset.index)));
    });
  }

  function renderLesson() {
    const lesson = lessons[state.current];
    $('courseName').textContent = state.course;
    $('lessonNumber').textContent = state.current + 1;
    $('lessonTotal').textContent = lessons.length;
    $('lessonTitle').textContent = lesson.title;
    $('stageNumber').textContent = String(state.current + 1).padStart(2, '0');
    $('lessonContext').textContent = lesson.context;
    $('stageTitle').textContent = lesson.description.split('. ')[0] + '.';
    $('stageDescription').textContent = lesson.description;
    $('lessonType').innerHTML = `<i class="bi ${lesson.icon}"></i> ${lesson.type}`;
    $('examplePanel').querySelector('.example-speaker span').textContent = lesson.speaker;
    $('examplePanel').querySelector('.example-speaker strong').textContent = lesson.example;
    document.querySelector('#practicePanel .practice-heading h3').textContent = lesson.prompt;
    $('answerGrid').innerHTML = lesson.answers.map((answer, index) => `<button class="answer-btn" type="button" data-index="${index}">${answer}</button>`).join('');

    state.selected = null;
    state.checked = false;
    $('nextBtn').disabled = true;
    $('nextBtn').innerHTML = 'Check answer <i class="bi bi-arrow-right"></i>';
    $('feedback').hidden = true;
    $('bookmarkBtn').innerHTML = `<i class="bi ${state.bookmarks.includes(state.current) ? 'bi-bookmark-fill' : 'bi-bookmark'}"></i>`;

    const percent = Math.round((state.completed.length / lessons.length) * 100);
    $('progressPercent').textContent = `${percent}%`;
    $('progressBar').style.width = `${percent}%`;
    $('completedCount').textContent = `${state.completed.length} / ${lessons.length}`;
    $('xpValue').textContent = `+${20 + state.current * 5} XP`;

    document.querySelectorAll('.answer-btn').forEach(button => {
      button.addEventListener('click', () => {
        if (state.checked) return;
        document.querySelectorAll('.answer-btn').forEach(item => item.classList.remove('selected'));
        button.classList.add('selected');
        state.selected = Number(button.dataset.index);
        $('nextBtn').disabled = false;
        $('nextBtn').innerHTML = 'Check answer <i class="bi bi-check2"></i>';
      });
    });
    renderList();
  }

  function loadLesson(index) {
    state.current = index;
    renderLesson();
    history.replaceState(null, '', `lesson.html?course=${encodeURIComponent(state.course)}&lesson=${index + 1}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function checkAnswer() {
    if (state.selected === null) return;
    if (!state.checked) {
      const lesson = lessons[state.current];
      state.checked = true;
      const buttons = [...document.querySelectorAll('.answer-btn')];
      buttons[lesson.correct]?.classList.add('correct');
      if (state.selected !== lesson.correct) buttons[state.selected]?.classList.add('wrong');

      const good = state.selected === lesson.correct;
      const feedback = $('feedback');
      feedback.hidden = false;
      feedback.className = `lesson-feedback ${good ? 'good' : 'bad'}`;
      feedback.textContent = good ? 'Correct. Nice work. +20 XP earned.' : `Not quite. The best answer is “${lesson.answers[lesson.correct]}”.`;
      $('nextBtn').innerHTML = state.current === lessons.length - 1 ? 'Finish course <i class="bi bi-trophy-fill"></i>' : 'Next lesson <i class="bi bi-arrow-right"></i>';
      if (good && !state.completed.includes(state.current)) state.completed.push(state.current);
      saveState();
      renderList();
      return;
    }

    if (state.current < lessons.length - 1) {
      loadLesson(state.current + 1);
    } else {
      toast('Course complete. Great job!');
      location.href = `courses.html`;
    }
  }

  $('nextBtn')?.addEventListener('click', checkAnswer);
  $('backBtn')?.addEventListener('click', () => location.href = 'courses.html');
  $('skipBtn')?.addEventListener('click', () => {
    toast('Saved for later. You can return from the course map.');
  });
  $('audioBtn')?.addEventListener('click', () => toast('Audio practice is ready for the next integration step.'));
  $('bookmarkBtn')?.addEventListener('click', () => {
    const index = state.current;
    if (state.bookmarks.includes(index)) state.bookmarks = state.bookmarks.filter(item => item !== index);
    else state.bookmarks.push(index);
    saveState();
    renderLesson();
    toast(state.bookmarks.includes(index) ? 'Lesson bookmarked.' : 'Bookmark removed.');
  });
  $('themeBtn')?.addEventListener('click', () => {
    if (window.LS?.Theme?.toggle) window.LS.Theme.toggle();
    else document.documentElement.classList.toggle('dark');
  });

  renderLesson();
})();

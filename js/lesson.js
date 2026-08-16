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

  const params = new URLSearchParams(window.location.search);
  const requestedLesson = Number(params.get('lesson')) || 1;

  const state = {
    course: params.get('course') || 'Travel English',
    current: Math.min(Math.max(requestedLesson, 1), lessons.length) - 1,
    selected: null,
    checked: false,
    completed: readArray('lingosphere.completedLessons'),
    bookmarks: readArray('lingosphere.bookmarkedLessons')
  };

  const $ = id => document.getElementById(id);

  function readArray(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }

  function saveState() {
    localStorage.setItem('lingosphere.completedLessons', JSON.stringify(state.completed));
    localStorage.setItem('lingosphere.bookmarkedLessons', JSON.stringify(state.bookmarks));
  }

  function addLessonXP(amount) {
    const current = Number(localStorage.getItem('lingosphere.xp') || 0);
    localStorage.setItem('lingosphere.xp', String(current + amount));

    if (window.LS?.Toast?.xp) {
      window.LS.Toast.xp(amount, lessons[state.current].title);
    }
  }

  function showToast(title, message = '') {
    if (window.LS?.Toast?.show) {
      window.LS.Toast.show({
        title,
        message,
        type: 'info'
      });
      return;
    }

    console.log(title, message);
  }

  function renderList() {
    const list = $('lessonList');
    if (!list) return;

    list.innerHTML = lessons.map((lesson, index) => {
      const done = state.completed.includes(index);
      const previousDone = index === 0 || state.completed.includes(index - 1);
      const locked = !previousDone && index !== state.current;

      return `
        <button
          class="lesson-item ${index === state.current ? 'active' : ''} ${locked ? 'locked' : ''}"
          type="button"
          data-index="${index}"
          ${locked ? 'disabled' : ''}
          aria-current="${index === state.current ? 'step' : 'false'}"
          aria-label="${lesson.title}${done ? ', completed' : locked ? ', locked' : ''}"
        >
          <span class="lesson-item-num">
            ${done ? '<i class="bi bi-check2"></i>' : String(index + 1).padStart(2, '0')}
          </span>
          <span>
            <span class="lesson-item-title">${lesson.title}</span>
            <span class="lesson-item-meta">${lesson.type}</span>
          </span>
          <i class="bi ${done ? 'bi-check-circle-fill' : locked ? 'bi-lock-fill' : 'bi-chevron-right'}"></i>
        </button>
      `;
    }).join('');

    list.querySelectorAll('.lesson-item:not(:disabled)').forEach(button => {
      button.addEventListener('click', () => loadLesson(Number(button.dataset.index)));
    });
  }

  function renderLesson() {
    const lesson = lessons[state.current];
    if (!lesson) return;

    const examplePanel = $('examplePanel');
    const practicePanel = $('practicePanel');
    const nextButton = $('nextBtn');
    const feedback = $('feedback');
    const answerGrid = $('answerGrid');

    $('courseName').textContent = state.course;
    $('lessonNumber').textContent = state.current + 1;
    $('lessonTotal').textContent = lessons.length;
    $('lessonTitle').textContent = lesson.title;
    $('stageNumber').textContent = String(state.current + 1).padStart(2, '0');
    $('lessonContext').textContent = lesson.context;
    $('stageTitle').textContent = lesson.description.split('. ')[0] + '.';
    $('stageDescription').textContent = lesson.description;
    $('lessonType').innerHTML = `<i class="bi ${lesson.icon}"></i> ${lesson.type}`;

    const speaker = examplePanel?.querySelector('.example-speaker span');
    const example = examplePanel?.querySelector('.example-speaker strong');
    const prompt = practicePanel?.querySelector('.practice-heading h3');

    if (speaker) speaker.textContent = lesson.speaker;
    if (example) example.textContent = lesson.example;
    if (prompt) prompt.textContent = lesson.prompt;

    if (answerGrid) {
      answerGrid.innerHTML = lesson.answers.map((answer, index) => `
        <button class="answer-btn" type="button" data-index="${index}">
          <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
          <span>${answer}</span>
        </button>
      `).join('');
    }

    state.selected = null;
    state.checked = false;

    if (nextButton) {
      nextButton.disabled = true;
      nextButton.classList.remove('retry');
      nextButton.innerHTML = 'Check answer <i class="bi bi-arrow-right"></i>';
    }

    if (feedback) {
      feedback.hidden = true;
      feedback.className = 'lesson-feedback';
      feedback.textContent = '';
    }

    const bookmarked = state.bookmarks.includes(state.current);
    $('bookmarkBtn').innerHTML = `<i class="bi ${bookmarked ? 'bi-bookmark-fill' : 'bi-bookmark'}"></i>`;
    $('bookmarkBtn').setAttribute('aria-pressed', String(bookmarked));

    const completedCount = state.completed.length;
    const percent = Math.round((completedCount / lessons.length) * 100);

    $('progressPercent').textContent = `${percent}%`;
    $('progressBar').style.width = `${percent}%`;
    $('completedCount').textContent = `${completedCount} / ${lessons.length}`;
    $('xpValue').textContent = `+${20 + state.current * 5} XP`;

    answerGrid?.querySelectorAll('.answer-btn').forEach(button => {
      button.addEventListener('click', () => selectAnswer(Number(button.dataset.index)));
    });

    renderList();
  }

  function selectAnswer(index) {
    if (state.checked) return;

    state.selected = index;

    document.querySelectorAll('.answer-btn').forEach(button => {
      button.classList.toggle('selected', Number(button.dataset.index) === index);
    });

    const nextButton = $('nextBtn');
    if (nextButton) {
      nextButton.disabled = false;
      nextButton.innerHTML = 'Check answer <i class="bi bi-check2"></i>';
    }
  }

  function loadLesson(index) {
    if (index < 0 || index >= lessons.length) return;

    const previousDone = index === 0 || state.completed.includes(index - 1);
    if (index !== state.current && !previousDone) {
      showToast('Lesson locked', 'Complete the previous lesson first.');
      return;
    }

    state.current = index;
    renderLesson();

    const url = `lesson.html?course=${encodeURIComponent(state.course)}&lesson=${index + 1}`;
    history.replaceState(null, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function resetQuestion() {
    state.selected = null;
    state.checked = false;

    document.querySelectorAll('.answer-btn').forEach(button => {
      button.classList.remove('selected', 'correct', 'wrong');
    });

    const feedback = $('feedback');
    if (feedback) {
      feedback.hidden = true;
      feedback.className = 'lesson-feedback';
      feedback.textContent = '';
    }

    const nextButton = $('nextBtn');
    if (nextButton) {
      nextButton.disabled = true;
      nextButton.classList.remove('retry');
      nextButton.innerHTML = 'Check answer <i class="bi bi-arrow-right"></i>';
    }
  }

  function checkAnswer() {
    if (state.selected === null) return;

    const lesson = lessons[state.current];
    const buttons = [...document.querySelectorAll('.answer-btn')];
    const feedback = $('feedback');
    const nextButton = $('nextBtn');
    const good = state.selected === lesson.correct;

    if (!state.checked) {
      state.checked = true;

      buttons[lesson.correct]?.classList.add('correct');
      if (!good) buttons[state.selected]?.classList.add('wrong');

      if (feedback) {
        feedback.hidden = false;
        feedback.className = `lesson-feedback ${good ? 'good' : 'bad'}`;
        feedback.textContent = good
          ? 'Correct. Nice work. +20 XP earned.'
          : `Not quite. The best answer is “${lesson.answers[lesson.correct]}”. Try again.`;
      }

      if (good) {
        if (!state.completed.includes(state.current)) {
          state.completed.push(state.current);
          saveState();
          addLessonXP(20);
        }

        renderList();

        if (nextButton) {
          nextButton.disabled = false;
          nextButton.classList.remove('retry');
          nextButton.innerHTML = state.current === lessons.length - 1
            ? 'Finish course <i class="bi bi-trophy-fill"></i>'
            : 'Next lesson <i class="bi bi-arrow-right"></i>';
        }
      } else if (nextButton) {
        nextButton.disabled = false;
        nextButton.classList.add('retry');
        nextButton.innerHTML = 'Try again <i class="bi bi-arrow-counterclockwise"></i>';
      }

      return;
    }

    if (!good) {
      resetQuestion();
      return;
    }

    if (state.current < lessons.length - 1) {
      loadLesson(state.current + 1);
      return;
    }

    showToast('Course complete', 'Great job. You completed every lesson.');

    setTimeout(() => {
      window.location.href = 'courses.html';
    }, 700);
  }

  $('nextBtn')?.addEventListener('click', checkAnswer);

  $('backBtn')?.addEventListener('click', () => {
    window.location.href = 'courses.html';
  });

  $('skipBtn')?.addEventListener('click', () => {
    showToast('Saved for later', 'You can return to this lesson from the course map.');
  });

  $('audioBtn')?.addEventListener('click', () => {
    showToast('Audio practice', 'Audio playback will be connected in the next integration step.');
  });

  $('bookmarkBtn')?.addEventListener('click', () => {
    const index = state.current;
    const alreadyBookmarked = state.bookmarks.includes(index);

    state.bookmarks = alreadyBookmarked
      ? state.bookmarks.filter(item => item !== index)
      : [...state.bookmarks, index];

    saveState();
    renderLesson();

    showToast(
      alreadyBookmarked ? 'Bookmark removed' : 'Lesson bookmarked',
      alreadyBookmarked ? '' : 'You can find it again from the course map.'
    );
  });

  $('themeBtn')?.addEventListener('click', () => {
    if (window.LS?.ThemeManager?.toggle) {
      window.LS.ThemeManager.toggle();
    }
  });

  renderLesson();
})();

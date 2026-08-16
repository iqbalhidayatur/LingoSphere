'use strict';

const practiceState = {
    xp: Number(localStorage.getItem('lingosphere_practice_xp') || 0),
    completedToday: Number(localStorage.getItem('lingosphere_practice_today') || 0),
    weekly: JSON.parse(
        localStorage.getItem('lingosphere_practice_week') ||
        '[5, 10, 0, 8, 12, 0, 0]'
    ),
    results: JSON.parse(
        localStorage.getItem('lingosphere_practice_results') || '[]'
    ),
    mode: null,
    questionIndex: 0,
    selectedAnswer: null,
    sessionScore: 0
};


const practiceData = {
    vocabulary: {
        label: 'Vocabulary',
        title: 'Vocabulary Sprint',
        questions: [
            {
                prompt: 'Choose the meaning of “reliable”.',
                answers: [
                    'Someone you can trust to do what they promise',
                    'Someone who talks very fast',
                    'Something that is difficult to understand',
                    'A place where people study'
                ],
                correct: 0,
                explanation:
                    'Reliable means dependable or able to be trusted.'
            },
            {
                prompt: 'Choose the closest meaning of “improve”.',
                answers: [
                    'To make something better',
                    'To stop doing something',
                    'To forget something',
                    'To move somewhere'
                ],
                correct: 0,
                explanation:
                    'Improve means to make something better.'
            },
            {
                prompt: 'What does “schedule” mean?',
                answers: [
                    'A plan of arranged activities or times',
                    'A type of conversation',
                    'A grammar mistake',
                    'A travel document'
                ],
                correct: 0,
                explanation:
                    'A schedule is a plan that shows when activities will happen.'
            }
        ]
    },

    grammar: {
        label: 'Grammar',
        title: 'Grammar Fix',
        questions: [
            {
                prompt: 'Choose the correct sentence.',
                answers: [
                    'She go to class every day.',
                    'She goes to class every day.',
                    'She going to class every day.',
                    'She gone to class every day.'
                ],
                correct: 1,
                explanation:
                    'Use “goes” with she, he, or it in the simple present.'
            },
            {
                prompt: 'Choose the correct sentence.',
                answers: [
                    'I have finished my homework.',
                    'I has finished my homework.',
                    'I have finish my homework.',
                    'I finished have my homework.'
                ],
                correct: 0,
                explanation:
                    'Use “have + past participle” with I, you, we, and they.'
            },
            {
                prompt: 'Choose the correct sentence.',
                answers: [
                    'They was late.',
                    'They were late.',
                    'They is late.',
                    'They be late.'
                ],
                correct: 1,
                explanation:
                    '“Were” is the correct past form of be for they.'
            }
        ]
    },

    listening: {
        label: 'Listening',
        title: 'Listen & Choose',
        questions: [
            {
                prompt:
                    'Imagine you hear: “Could you repeat that, please?” What does the speaker want?',
                answers: [
                    'They want you to say it again.',
                    'They want to leave.',
                    'They want to write it down.',
                    'They want to answer first.'
                ],
                correct: 0,
                explanation:
                    '“Could you repeat that?” is a polite request to hear something again.'
            },
            {
                prompt:
                    'You hear: “I’ll call you back in ten minutes.” What will happen?',
                answers: [
                    'The speaker will call again later.',
                    'The speaker will arrive tomorrow.',
                    'The speaker will send an email.',
                    'The speaker will cancel the meeting.'
                ],
                correct: 0,
                explanation:
                    '“Call you back” means the speaker will call again later.'
            },
            {
                prompt:
                    'You hear: “I’m running a little late.” What does it mean?',
                answers: [
                    'The person will arrive later than planned.',
                    'The person is running for exercise.',
                    'The person is already there.',
                    'The person is leaving early.'
                ],
                correct: 0,
                explanation:
                    '“Running late” means arriving later than expected.'
            }
        ]
    },

    speaking: {
        label: 'Speaking',
        title: 'Speak Up',
        questions: [
            {
                prompt:
                    'Practice saying this aloud: “I usually study English in the evening.” What is the main goal?',
                answers: [
                    'Speak clearly and at a comfortable pace.',
                    'Speak as quickly as possible.',
                    'Whisper the sentence.',
                    'Skip difficult words.'
                ],
                correct: 0,
                explanation:
                    'Focus on clear pronunciation and a natural speaking pace.'
            },
            {
                prompt:
                    'Practice: “Could you help me find the nearest station?” What tone fits best?',
                answers: [
                    'Polite and clear',
                    'Angry and loud',
                    'Very informal',
                    'Uncertain and silent'
                ],
                correct: 0,
                explanation:
                    'This is a polite request, so use a friendly and clear tone.'
            },
            {
                prompt:
                    'Practice: “I agree with you because…” What should you add?',
                answers: [
                    'A reason for your opinion',
                    'A random question',
                    'A new greeting',
                    'Nothing'
                ],
                correct: 0,
                explanation:
                    'Add a short reason to explain why you agree.'
            }
        ]
    }
};


const elements = {
    cards: document.querySelectorAll('.practice-card'),

    sessionPanel: document.getElementById('sessionPanel'),
    sessionLabel: document.getElementById('sessionLabel'),
    sessionTitle: document.getElementById('sessionTitle'),
    questionCounter: document.getElementById('questionCounter'),
    sessionXp: document.getElementById('sessionXp'),
    questionPrompt: document.getElementById('questionPrompt'),
    answerList: document.getElementById('answerList'),
    feedback: document.getElementById('feedback'),
    nextQuestion: document.getElementById('nextQuestion'),
    closeSession: document.getElementById('closeSession'),

    dailyProgressText:
        document.getElementById('dailyProgressText'),

    dailyProgressFill:
        document.getElementById('dailyProgressFill'),

    weeklyXp:
        document.getElementById('weeklyXp'),

    weekChart:
        document.getElementById('weekChart'),

    resultsList:
        document.getElementById('resultsList'),

    streakValue:
        document.getElementById('streakValue'),

    themeToggle:
        document.getElementById('themeToggle'),

    logoutButton:
        document.getElementById('logoutBtn')
};


function savePracticeState() {
    localStorage.setItem(
        'lingosphere_practice_xp',
        String(practiceState.xp)
    );

    localStorage.setItem(
        'lingosphere_practice_today',
        String(practiceState.completedToday)
    );

    localStorage.setItem(
        'lingosphere_practice_week',
        JSON.stringify(practiceState.weekly)
    );

    localStorage.setItem(
        'lingosphere_practice_results',
        JSON.stringify(practiceState.results)
    );
}


function renderProgress() {
    const dailyGoal = 20;

    const dailyPercent = Math.min(
        100,
        (practiceState.completedToday / dailyGoal) * 100
    );

    if (elements.dailyProgressText) {
        elements.dailyProgressText.textContent =
            `${practiceState.completedToday} / ${dailyGoal} XP`;
    }

    if (elements.dailyProgressFill) {
        elements.dailyProgressFill.style.width =
            `${dailyPercent}%`;
    }

    const totalWeeklyXp =
        practiceState.weekly.reduce(
            (sum, value) => sum + value,
            0
        );

    if (elements.weeklyXp) {
        elements.weeklyXp.textContent =
            `${totalWeeklyXp + practiceState.xp} XP`;
    }

    renderChart();
    renderResults();
}


function renderChart() {
    if (!elements.weekChart) {
        return;
    }

    const days = [
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S'
    ];

    const values = [...practiceState.weekly];

    const max = Math.max(
        20,
        ...values
    );

    elements.weekChart.innerHTML =
        days.map((day, index) => {

            const height = Math.max(
                8,
                Math.round(
                    (values[index] / max) * 100
                )
            );

            return `
                <div class="chart-day">
                    <div class="chart-bar-wrap">
                        <div
                            class="chart-bar"
                            style="height: ${height}%"
                        ></div>
                    </div>

                    <span>${day}</span>
                </div>
            `;

        }).join('');
}


function renderResults() {
    if (!elements.resultsList) {
        return;
    }

    if (!practiceState.results.length) {

        elements.resultsList.innerHTML = `
            <div class="result-item">
                <div class="result-copy">
                    <strong>No practice yet</strong>
                    <span>
                        Complete your first session to see
                        results here.
                    </span>
                </div>
            </div>
        `;

        return;
    }

    elements.resultsList.innerHTML =
        practiceState.results
            .slice(-4)
            .reverse()
            .map(result => `
                <div class="result-item">
                    <div class="result-copy">
                        <strong>${result.title}</strong>

                        <span>
                            ${result.score}/${result.total}
                            correct
                        </span>
                    </div>

                    <span class="result-score">
                        +${result.xp} XP
                    </span>
                </div>
            `)
            .join('');
}


function startSession(mode) {
    const session = practiceData[mode];

    if (!session || !elements.sessionPanel) {
        return;
    }

    practiceState.mode = mode;
    practiceState.questionIndex = 0;
    practiceState.selectedAnswer = null;
    practiceState.sessionScore = 0;

    if (elements.sessionLabel) {
        elements.sessionLabel.textContent =
            session.label;
    }

    if (elements.sessionTitle) {
        elements.sessionTitle.textContent =
            session.title;
    }

    elements.sessionPanel.hidden = false;

    elements.sessionPanel.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    renderQuestion();
}


function renderQuestion() {
    const session =
        practiceData[practiceState.mode];

    if (!session) {
        return;
    }

    const question =
        session.questions[
            practiceState.questionIndex
        ];

    if (!question) {
        return;
    }

    if (elements.questionCounter) {
        elements.questionCounter.textContent =
            `Question ${practiceState.questionIndex + 1} of ${session.questions.length}`;
    }

    if (elements.sessionXp) {
        elements.sessionXp.textContent =
            `+${5 * session.questions.length} XP`;
    }

    if (elements.questionPrompt) {
        elements.questionPrompt.textContent =
            question.prompt;
    }

    if (elements.feedback) {
        elements.feedback.hidden = true;
        elements.feedback.textContent = '';
    }

    if (elements.nextQuestion) {
        elements.nextQuestion.disabled = true;
        elements.nextQuestion.textContent =
            'Check answer';
    }

    practiceState.selectedAnswer = null;

    if (!elements.answerList) {
        return;
    }

    elements.answerList.innerHTML =
        question.answers.map((answer, index) => `
            <button
                class="answer-option"
                type="button"
                data-answer="${index}"
            >
                ${answer}
            </button>
        `).join('');

    elements.answerList
        .querySelectorAll('.answer-option')
        .forEach(button => {

            button.addEventListener(
                'click',
                () => {
                    selectAnswer(
                        Number(button.dataset.answer)
                    );
                }
            );

        });
}


function selectAnswer(answerIndex) {
    if (
        practiceState.selectedAnswer !== null ||
        !elements.answerList
    ) {
        return;
    }

    const session =
        practiceData[practiceState.mode];

    const question =
        session.questions[
            practiceState.questionIndex
        ];

    const answerButtons = [
        ...elements.answerList
            .querySelectorAll('.answer-option')
    ];

    const selectedButton =
        answerButtons[answerIndex];

    if (!selectedButton) {
        return;
    }

    practiceState.selectedAnswer =
        answerIndex;

    selectedButton.classList.add('selected');

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    const isCorrect =
        answerIndex === question.correct;

    if (isCorrect) {

        practiceState.sessionScore += 1;

        selectedButton.classList.add(
            'correct'
        );

        if (elements.feedback) {
            elements.feedback.textContent =
                `Correct. ${question.explanation}`;
        }

    } else {

        selectedButton.classList.add(
            'incorrect'
        );

        answerButtons[
            question.correct
        ]?.classList.add('correct');

        if (elements.feedback) {
            elements.feedback.textContent =
                `Not quite. ${question.explanation}`;
        }
    }

    if (elements.feedback) {
        elements.feedback.hidden = false;
    }

    if (elements.nextQuestion) {
        elements.nextQuestion.disabled = false;

        elements.nextQuestion.textContent =
            practiceState.questionIndex ===
            session.questions.length - 1
                ? 'Finish session'
                : 'Next question';
    }
}


function finishSession() {
    const session =
        practiceData[practiceState.mode];

    if (!session) {
        return;
    }

    const total =
        session.questions.length;

    const xp =
        practiceState.sessionScore * 5;

    practiceState.xp += xp;
    practiceState.completedToday += xp;

    const day =
        new Date().getDay();

    const weekIndex =
        day === 0
            ? 6
            : day - 1;

    practiceState.weekly[weekIndex] += xp;

    practiceState.results.push({
        title: session.title,
        score: practiceState.sessionScore,
        total,
        xp
    });

    practiceState.results =
        practiceState.results.slice(-8);

    savePracticeState();
    renderProgress();

    if (elements.questionPrompt) {
        elements.questionPrompt.textContent =
            `Session complete. You scored ${practiceState.sessionScore}/${total}.`;
    }

    if (elements.answerList) {
        elements.answerList.innerHTML = '';
    }

    if (elements.feedback) {
        elements.feedback.hidden = false;

        elements.feedback.textContent =
            `You earned ${xp} XP. Keep going to build your streak.`;
    }

    if (elements.nextQuestion) {
        elements.nextQuestion.disabled = false;
        elements.nextQuestion.textContent =
            'Close session';
    }

    if (elements.questionCounter) {
        elements.questionCounter.textContent =
            'Completed';
    }
}


function closeSession() {
    if (elements.sessionPanel) {
        elements.sessionPanel.hidden = true;
    }

    practiceState.mode = null;
    practiceState.questionIndex = 0;
    practiceState.selectedAnswer = null;
}


function toggleTheme() {
    if (
        window.LS?.ThemeManager?.toggle
    ) {
        window.LS.ThemeManager.toggle();
    }
}


function logout() {
    if (window.LS?.Auth?.logout) {
        window.LS.Auth.logout();
        return;
    }

    localStorage.removeItem(
        'lingosphere_user'
    );

    localStorage.removeItem(
        'ls_user'
    );

    window.location.href =
        'signin.html';
}


elements.cards.forEach(card => {

    card.addEventListener(
        'click',
        () => {
            startSession(
                card.dataset.mode
            );
        }
    );

});


elements.nextQuestion?.addEventListener(
    'click',
    () => {

        if (!practiceState.mode) {
            return;
        }

        const session =
            practiceData[practiceState.mode];

        if (
            elements.nextQuestion.textContent ===
            'Close session'
        ) {
            closeSession();
            return;
        }

        if (
            practiceState.questionIndex >=
            session.questions.length - 1
        ) {
            finishSession();
            return;
        }

        practiceState.questionIndex += 1;

        renderQuestion();
    }
);


elements.closeSession?.addEventListener(
    'click',
    closeSession
);


elements.themeToggle?.addEventListener(
    'click',
    toggleTheme
);


elements.logoutButton?.addEventListener(
    'click',
    logout
);


renderProgress();
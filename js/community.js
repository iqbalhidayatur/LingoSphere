'use strict';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof ThemeManager !== 'undefined') {
        ThemeManager.init();
    }

    setupFeedFilters();
    setupPostActions();
    setupFollowButtons();
    setupCommunityActions();
    setupUserName();
});

function setupUserName() {
    const userName = document.getElementById('communityUserName');

    if (!userName) {
        return;
    }

    try {
        const storedUser = JSON.parse(localStorage.getItem('ls_user') || 'null');

        if (storedUser?.name) {
            userName.textContent = storedUser.name;
        }
    } catch (error) {
        console.warn('Unable to load community user data.', error);
    }
}

function setupFeedFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const posts = document.querySelectorAll('.community-post');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(item => {
                item.classList.toggle('active', item === button);
            });

            posts.forEach(post => {
                const category = post.dataset.category;
                const shouldShow = filter === 'all' || category === filter;

                post.classList.toggle('is-hidden', !shouldShow);
            });
        });
    });
}

function setupPostActions() {
    const actions = document.querySelectorAll('.post-action');

    actions.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;

            if (action === 'like') {
                toggleLike(button);
                return;
            }

            if (action === 'comment') {
                showCommunityToast('Comments', 'Commenting will be available soon.');
                return;
            }

            if (action === 'share') {
                sharePost(button);
            }
        });
    });
}

function toggleLike(button) {
    const icon = button.querySelector('i');
    const countElement = button.querySelector('span');
    const currentCount = Number(countElement.textContent) || 0;
    const isLiked = button.classList.toggle('liked');

    if (isLiked) {
        icon.className = 'bi bi-heart-fill';
        countElement.textContent = currentCount + 1;
        return;
    }

    icon.className = 'bi bi-heart';
    countElement.textContent = Math.max(0, currentCount - 1);
}

async function sharePost(button) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'LingoSphere Community',
                text: 'Check out this post on LingoSphere Community.',
                url: window.location.href,
            });
            return;
        } catch (error) {
            if (error.name === 'AbortError') {
                return;
            }
        }
    }

    try {
        await navigator.clipboard.writeText(window.location.href);
        showCommunityToast('Link copied', 'The community page link is ready to share.');
    } catch (error) {
        showCommunityToast('Share', 'Copy the page URL from your browser to share this post.');
    }
}

function setupFollowButtons() {
    const buttons = document.querySelectorAll('.follow-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const following = button.classList.toggle('following');
            button.textContent = following ? 'Following' : 'Follow';
        });
    });
}

function setupCommunityActions() {
    const createPostButton = document.getElementById('createPostButton');
    const findFriendsButton = document.getElementById('findFriendsButton');
    const joinChallengeButton = document.getElementById('joinChallengeButton');
    const browseQuestionsButton = document.getElementById('browseQuestionsButton');


    createPostButton?.addEventListener('click', () => {
        showCommunityToast('Create Post', 'Post creation will be available in the next community update.');
    });

    findFriendsButton?.addEventListener('click', () => {
        showCommunityToast('Find Friends', 'Friend recommendations are ready in the sidebar.');
    });

    joinChallengeButton?.addEventListener('click', () => {
        if (typeof Toast !== 'undefined') {
            Toast.xp(XP_REWARDS.community_challenge, 'Community Challenge');
            return;
        }

        showCommunityToast('Challenge joined', 'You joined today’s community challenge.');
    });

    browseQuestionsButton?.addEventListener('click', () => {
        document.querySelector('[data-filter="questions"]')?.click();
        document.querySelector('.community-feed')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });


        showCommunityToast('Profile', 'Profile settings will be connected to the account system later.');
    };


function showCommunityToast(title, message) {
    if (typeof Toast !== 'undefined') {
        Toast.show({
            title,
            message,
            type: 'info',
        });
        return;
    }

    window.alert(`${title}\n\n${message}`);
}

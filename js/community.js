'use strict';


document.addEventListener(
    'DOMContentLoaded',
    () => {

        setupFeedFilters();
        setupPostActions();
        setupFollowButtons();
        setupCommunityActions();

    }
);


/* ============================================================
   FEED FILTER
   ============================================================ */

function setupFeedFilters() {

    const filterButtons =
        document.querySelectorAll(
            '.filter-button'
        );

    const posts =
        document.querySelectorAll(
            '.community-post'
        );

    filterButtons.forEach(button => {

        button.addEventListener(
            'click',
            () => {

                const filter =
                    button.dataset.filter;

                filterButtons.forEach(item => {

                    item.classList.toggle(
                        'active',
                        item === button
                    );

                });

                posts.forEach(post => {

                    const category =
                        post.dataset.category;

                    const shouldShow =
                        filter === 'all' ||
                        category === filter;

                    post.classList.toggle(
                        'is-hidden',
                        !shouldShow
                    );

                });

            }
        );

    });
}


/* ============================================================
   POST ACTIONS
   ============================================================ */

function setupPostActions() {

    const actions =
        document.querySelectorAll(
            '.post-action'
        );

    actions.forEach(button => {

        button.addEventListener(
            'click',
            () => {

                const action =
                    button.dataset.action;

                if (action === 'like') {
                    toggleLike(button);
                    return;
                }

                if (action === 'comment') {

                    showCommunityToast(
                        'Comments',
                        'Commenting will be available soon.'
                    );

                    return;
                }

                if (action === 'share') {
                    sharePost(button);
                }

            }
        );

    });
}


/* ============================================================
   LIKE
   ============================================================ */

function toggleLike(button) {

    const icon =
        button.querySelector('i');

    const countElement =
        button.querySelector('span');

    if (!icon || !countElement) {
        return;
    }

    const currentCount =
        Number(
            countElement.textContent
        ) || 0;

    const isLiked =
        button.classList.toggle(
            'liked'
        );

    if (isLiked) {

        icon.className =
            'bi bi-heart-fill';

        countElement.textContent =
            currentCount + 1;

        return;
    }

    icon.className =
        'bi bi-heart';

    countElement.textContent =
        Math.max(
            0,
            currentCount - 1
        );
}


/* ============================================================
   SHARE
   ============================================================ */

async function sharePost(button) {

    if (navigator.share) {

        try {

            await navigator.share({
                title:
                    'Wordventure Community',

                text:
                    'Check out this post on Wordventure Community.',

                url:
                    window.location.href
            });

            return;

        } catch (error) {

            if (
                error.name ===
                'AbortError'
            ) {
                return;
            }

        }
    }


    if (navigator.clipboard) {

        try {

            await navigator.clipboard.writeText(
                window.location.href
            );

            showCommunityToast(
                'Link copied',
                'The community page link is ready to share.'
            );

            return;

        } catch (error) {
            // Continue to fallback message.
        }
    }


    showCommunityToast(
        'Share',
        'Copy the page URL from your browser to share this post.'
    );
}


/* ============================================================
   FOLLOW
   ============================================================ */

function setupFollowButtons() {

    const buttons =
        document.querySelectorAll(
            '.follow-button'
        );

    buttons.forEach(button => {

        button.addEventListener(
            'click',
            () => {

                const following =
                    button.classList.toggle(
                        'following'
                    );

                button.textContent =
                    following
                        ? 'Following'
                        : 'Follow';

            }
        );

    });
}


/* ============================================================
   COMMUNITY ACTIONS
   ============================================================ */

function setupCommunityActions() {

    const createPostButton =
        document.getElementById(
            'createPostButton'
        );

    const findFriendsButton =
        document.getElementById(
            'findFriendsButton'
        );

    const joinChallengeButton =
        document.getElementById(
            'joinChallengeButton'
        );

    const browseQuestionsButton =
        document.getElementById(
            'browseQuestionsButton'
        );


    createPostButton?.addEventListener(
        'click',
        () => {

            showCommunityToast(
                'Create Post',
                'Post creation will be available in the next community update.'
            );

        }
    );


    findFriendsButton?.addEventListener(
        'click',
        () => {

            showCommunityToast(
                'Find Friends',
                'Friend recommendations are ready in the sidebar.'
            );

        }
    );


    joinChallengeButton?.addEventListener(
        'click',
        () => {

            if (
                typeof Toast !== 'undefined' &&
                typeof XP_REWARDS !== 'undefined'
            ) {

                Toast.xp(
                    XP_REWARDS.community_challenge,
                    'Community Challenge'
                );

                return;
            }

            showCommunityToast(
                'Challenge joined',
                'You joined today’s community challenge.'
            );

        }
    );


    browseQuestionsButton?.addEventListener(
        'click',
        () => {

            const questionsFilter =
                document.querySelector(
                    '[data-filter="questions"]'
                );

            questionsFilter?.click();

            document
                .querySelector(
                    '.community-feed'
                )
                ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

        }
    );

}


/* ============================================================
   COMMUNITY TOAST
   ============================================================ */

function showCommunityToast(
    title,
    message
) {

    if (
        typeof Toast !== 'undefined' &&
        typeof Toast.show === 'function'
    ) {

        Toast.show({
            title,
            message,
            type: 'info'
        });

        return;
    }

    window.alert(
        `${title}\n\n${message}`
    );
}
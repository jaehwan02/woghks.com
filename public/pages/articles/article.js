document.addEventListener('DOMContentLoaded', function () {
  const commentForm = document.getElementById('comment-form');
  const usernameInput = document.getElementById('username-input');
  const commentInput = document.getElementById('comment-input');
  const commentsList = document.getElementById('comments-list');
  const commentsCount = document.getElementById('comments-count');

  commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addComment(usernameInput.value.trim(), commentInput.value.trim());
  });

  function addComment(username, commentText, parent = null) {
    if (username !== '' && commentText !== '') {
      const newComment = document.createElement('li');
      newComment.classList.add('comment');

      const headerDiv = document.createElement('div');
      headerDiv.classList.add('header');

      const usernameDiv = document.createElement('div');
      usernameDiv.classList.add('username');
      usernameDiv.textContent = username;

      const dateDiv = document.createElement('div');
      dateDiv.classList.add('date');
      const currentDate = new Date().toISOString().split('T')[0];
      dateDiv.textContent = currentDate;

      headerDiv.appendChild(usernameDiv);
      headerDiv.appendChild(dateDiv);

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      contentDiv.textContent = commentText;

      const footerDiv = document.createElement('div');
      footerDiv.classList.add('footer');

      if (!parent) {
        const replyButton = document.createElement('button');
        replyButton.classList.add('reply-button');
        replyButton.textContent = '답글';
        replyButton.addEventListener('click', function () {
          const replyForm = newComment.querySelector('.reply-form');
          replyForm.style.display = replyForm.style.display === 'flex' ? 'none' : 'flex';
        });

        footerDiv.appendChild(replyButton);

        const replyForm = document.createElement('form');
        replyForm.classList.add('reply-form');
        replyForm.addEventListener('submit', function (e) {
          e.preventDefault();
          addComment(
            replyForm.querySelector('input').value.trim(),
            replyForm.querySelector('textarea').value.trim(),
            newComment,
          );
        });

        const replyUsernameInput = document.createElement('input');
        replyUsernameInput.type = 'text';
        replyUsernameInput.placeholder = '아이디를 입력해주세요.';
        replyUsernameInput.required = true;

        const replyTextarea = document.createElement('textarea');
        replyTextarea.placeholder = '댓글 내용을 입력해주세요.';
        replyTextarea.required = true;

        const replySubmitButton = document.createElement('button');
        replySubmitButton.type = 'submit';
        replySubmitButton.textContent = '등록';

        replyForm.appendChild(replyUsernameInput);
        replyForm.appendChild(replyTextarea);
        replyForm.appendChild(replySubmitButton);

        newComment.appendChild(replyForm);
      }

      newComment.appendChild(headerDiv);
      newComment.appendChild(contentDiv);
      newComment.appendChild(footerDiv);

      if (parent) {
        const repliesList = parent.querySelector('.replies-list') || document.createElement('ul');
        repliesList.classList.add('replies-list');
        parent.appendChild(repliesList);
        repliesList.appendChild(newComment);
      } else {
        commentsList.appendChild(newComment);
      }

      usernameInput.value = '';
      commentInput.value = '';
      updateCommentsCount();
    }
  }

  function updateCommentsCount() {
    const count = commentsList.querySelectorAll('.comment').length;
    commentsCount.textContent = count;
  }
});

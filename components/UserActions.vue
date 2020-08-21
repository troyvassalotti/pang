<template>
<div>
  <button>Like</button>
  <button>Dislike</button>
  <button>Comment</button>
  <button>Share</button>
</div>
<p>
  <a href="#" target="_blank" rel="noopener">Tweet this Bad Boy</a>
</p>
<form>
  <label for="name">Your Name (for fun):</label>
  <input id="name" type="text" maxlength="100">
  <label for="comment">Write your comment below:</label>
  <textarea id="comment" maxlength="300"></textarea>
  <button type="submit">Post Comment</button>
</form>
<p>Oops! Please put a name and comment.</p>
<article>
  <p>name</p>
  <p>comment</p>
  <footer>
    <p>time</p>
  </footer>
</article>
</template>

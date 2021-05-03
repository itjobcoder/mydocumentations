---
title: Create a Blog Post
---

<script async defer src="https://teams.microsoft.com/share/launcher.js"></script>

Share this page in MS Teams <a  class="teams-share-button" data-href="http://localhost:3000/docs/create-a-document">Share this link</a>

<script src="./mvp.js"></script>

constReact = require('react'); constReactDOM = require('react-dom'); constReactMarkdown = require('react-markdown'); constinput = '# This is a header\n\nAnd this is a paragraph';

## Share this page in Microsoft Teams

## Root

ReactDOM.render(<ReactMarkdownsource={​​​​​input}​​​​​/>, document.getElementById('container'))

<div id="container"></div>

```
<div
  class="teams-share-button"
  data-href="http://localhost:3000/docs/create-a-document">
</div>

```

---

Share this page in MS Teams <a  class="teams-share-button" data-href="http://localhost:3000/docs/create-a-document">Share this link</a>

<div>&nbsp;</div>
This page will help you on how to create blog posts in Docusaurus.

## Create a Blog Post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
title: Greetings!
author: Steven Hansel
author_title: Docusaurus Contributor
author_url: https://github.com/ShinteiMai
author_image_url: https://github.com/ShinteiMai.png
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

A new blog post is now available at `http://localhost:3000/blog/greetings`.

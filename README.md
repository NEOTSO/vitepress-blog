## Todos

-   [x] /
-   [x] /tags
-   [x] prev/next post
-   [x] /about
-   [ ] search

## Developing with Real Content

```
git@github.com:NEOTSO/vitepress-blog.git
cd vitepress-blog
git clone your-blog.git posts
```

your-blog.git is a repository which only contains markdown files and assets.

## draft option for post

```md
---
draft: true
---
```

to make post as a draft, you can set `draft` option to `true` in the markdown frontmatter part, default value is `false`.

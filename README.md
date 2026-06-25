# UCSB Political Communication Working Group — Website

## Structure

```
ucsbpolcomm/
├── index.html              # Home page (about + meeting schedule)
├── people/
│   └── index.html          # Faculty & graduate students
├── research/
│   └── index.html          # Recent publications
├── courses/
│   └── index.html          # Graduate coursework
├── css/
│   └── style.css           # All styles
├── js/
│   └── nav.js              # Navigation behavior
├── assets/
│   └── seal.png            # UCSB seal (add manually)
├── _config.yml             # GitHub Pages config
└── README.md
```

## How to Edit Content

All content is plain HTML — no build tools or frameworks required.

| Task | File to edit |
|------|-------------|
| Update meeting schedule | `index.html` — look for `<!-- schedule -->` section |
| Add/remove a person | `people/index.html` — copy a `.person-card` block |
| Add a publication | `research/index.html` — copy a `.pub-item` block |
| Update course info | `courses/index.html` |
| Change colors/fonts | `css/style.css` — edit the `:root` variables at the top |

## Adding Photos

Place headshot images in `assets/people/` (e.g. `assets/people/bimber.jpg`).

Then in `people/index.html`, replace the placeholder `<div>` with:

```html
<img src="../assets/people/bimber.jpg" alt="Prof. Bruce Bimber" class="person-card-photo" />
```

Recommended image size: **400 × 575 px** (3:4 ratio), JPEG, under 200 KB.

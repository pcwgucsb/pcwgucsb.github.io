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

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `ucsbpolcomm.github.io` or any repo name).
2. Push all files to the `main` branch.
3. Go to **Settings → Pages**, set source to `main` branch, root (`/`).
4. Your site will be live at `https://<org>.github.io/<repo>/`.

To use a custom domain (e.g. `www.ucsbpolcomm.org`):
- Add a `CNAME` file to the repo root containing just your domain name.
- Point your DNS to GitHub's servers per [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

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

## UCSB Seal

Download the official UCSB seal from UCSB Brand & Visual Identity and save it as `assets/seal.png`.

A transparent-background PNG works best (the nav inverts it to white automatically).

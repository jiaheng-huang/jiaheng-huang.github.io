# Portfolio — how to edit

Everything you write lives in **`js/content.js`**. The other files are layout.

## Add photos / videos
1. Drop files into `assets/<project>/` (e.g. `assets/go-kart/hero.jpg`).
2. In `content.js`, make sure the `src` matches the filename.
   - Image: `{ type: "image", src: "assets/go-kart/hero.jpg", caption: "..." }`
   - Video file: `{ type: "video", src: "assets/go-kart/launch.mp4", poster: "assets/go-kart/launch.jpg" }`
   - YouTube: `{ type: "youtube", src: "VIDEO_ID" }` (the part after `watch?v=`)
3. Any missing file shows as a dashed placeholder box with its expected path.
   When you're done, set `showPlaceholders: false` at the top of `content.js` to hide leftover boxes.

Tips: export photos at about 2000px wide as JPG (under ~500 KB). Keep videos short (under ~20 MB) or put them on YouTube.
`thumb.jpg` is the 4:3 image on the home page; `hero` is the wide 16:9 one at the top of each project page.

## Add a project
Copy one object in the `projects` array, give it a new `id`, and create `assets/<id>/`.
Its page is `project.html?id=<id>`.

## Preview
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and go to http://localhost:8000.

## Publish (free)
- **GitHub Pages:** push this folder to a repo named `<username>.github.io`, then turn on Pages in Settings → Pages.
- **Netlify:** drag the folder onto app.netlify.com/drop.

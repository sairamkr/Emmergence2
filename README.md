# Squish

A 3D cell-division toy for phones: squeeze cells to divide them (squeezing speeds time through day and night); paper creatures pop out, breed, fight and die, leaving sandstone ruins. After ten divisions a colony knits into tissue and folds into a paper town; at dawn, or when a large creature leans on one, a paper house cracks open and a new cell starts a new colony further out.

## Files
- `index.html` — the whole app (Three.js r128 loads from cdnjs; Caveat font from Google Fonts)
- `ground.jpg` — the gold-flecked paper used as the ground
- `walk.png` — the walking-figure sprite sheet used for the cells
- `orb.png` — the flower roundel the game starts with
- `rd.jpg` — the reaction-diffusion pattern used for the ink
- `build.webp` — the four pictures that rise as buildings (finial, arcade, tree, clay house)
- `maps.jpg` — the map-paper atlas (forty fragments cut from your own MapTextures2 collection)

## Deploy to Vercel
Option A — drag and drop: go to vercel.com/new, choose "Deploy" from a folder/upload, and drop this folder.
Option B — CLI: `npm i -g vercel`, then run `vercel` in this folder (no build step; framework preset "Other").

Test locally with any static server, e.g. `npx serve .` (opening index.html directly from disk won't load maps.jpg in some browsers).

## Run with Node.js
No packages to install. In this folder run `npm start` (or `node server.js`), then open http://localhost:3000. Set another port with `PORT=8080 npm start`.
To try it on your phone, connect it to the same Wi-Fi and open http://<your computer's IP>:3000.

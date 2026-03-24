# Romantic GitHub Pages Website

A small interactive single-page website you can publish with GitHub Pages.

## Customize your message

1. Open `script.js`.
2. Edit the `lines` array with your own words.
3. (Optional) Update title and intro text in `index.html`.

## Run locally

You can open `index.html` directly in your browser.

## Publish on GitHub Pages

1. Create a new GitHub repository (for example: `for-her`).
2. In this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Create interactive letter site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/for-her.git
   git push -u origin main
   ```

3. On GitHub, open your repository:
   - Go to **Settings** -> **Pages**
   - Under **Build and deployment**, choose:
     - **Source**: Deploy from a branch
     - **Branch**: `main` and `/ (root)`
4. Save. Wait about 1-2 minutes.
5. Your website will be live at:

   `https://<your-username>.github.io/for-her/`

## Optional private custom domain

If you own a domain, you can connect it in the same Pages settings page.

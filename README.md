# SEAS research group website

Static website for **Software Engineering for Embedded and Automotive Systems (SEAS)** at the University of Gothenburg and Chalmers University of Technology.

## Preview locally

Open `index.html` directly, or run any local static server from this directory. For example:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a GitHub repository. For an organisation/user homepage, name it `<account>.github.io`; for a project site, any repository name works.
2. Add it as the remote and push:

   ```powershell
   git remote add origin https://github.com/<account>/<repository>.git
   git push -u origin main
   ```

3. In the repository, open **Settings → Pages** and select **GitHub Actions** under “Build and deployment”.
4. The included workflow publishes the site after every push to `main`.

The site uses only HTML, CSS, and a small amount of JavaScript, so there is no build step and no dependency maintenance.

## Updating content

All page content is in `index.html`. Colors, typography, layout, and responsive rules are in `styles.css`. The mobile menu and scroll reveals are in `script.js`.

Before publishing, review the selected publications, group membership, contact details, and affiliation wording.

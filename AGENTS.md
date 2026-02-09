# AGENTS.md - CV Site Rules

## Project
- Site: CV static website
- GitHub repo: https://github.com/Kacperpe/CV
- GitHub Pages URL: https://kacperpe.github.io/CV/
- Default branch: `main`

## Design Rules (mandatory)
- Always keep the main palette:
  - Dark green: `#31473A`
  - Light gray: `#EDF4F2`
- Do not introduce unrelated accent colors unless user explicitly asks.
- Keep the look clean, minimal, and premium.

## After Every Change (mandatory)
After ANY edit in HTML/CSS/JS/content:
1. Validate changed files quickly.
2. Commit and push immediately.
3. Report commit hash and changed files.

## Git Workflow
If current folder IS a git repo:
1. `git add -A`
2. `git commit -m "<short clear message>"`
3. `git push origin main`

If current folder is NOT a git repo:
1. Clone repo to temp folder:
   - `git clone https://github.com/Kacperpe/CV.git <temp_dir>`
2. Copy changed project files into cloned repo.
3. Run:
   - `git add -A`
   - `git commit -m "<short clear message>"`
   - `git push origin main`
4. Confirm push success and commit hash.

## Verification Checklist
- Pages load without console errors.
- Mobile menu works on small screens.
- Styles remain in dark green/light gray palette.
- `site.js` has valid syntax.
- GitHub Pages URL is provided in summary.

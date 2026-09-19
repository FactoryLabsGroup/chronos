# Chronos web

The landing page for [Chronos](https://github.com/FactoryLabsGroup/cronos-ios), the iPhone app that tells history as short illustrated cards.

Live at **https://factorylabsgroup.github.io/Chronos-web/**

A static site with no build step: `index.html`, `assets/styles.css`, `assets/app.js`, and `privacy.html` (the app's privacy policy).

- **Languages.** English and Georgian. The page opens in Georgian when the browser prefers it, remembers the reader's choice, and takes `?lang=ka` or `?lang=en`. All copy lives in `STRINGS` in `assets/app.js`. Georgian is never uppercased.
- **Content.** The cards, the Emu War story and the Georgia facts in `assets/data.js` are copied from the app's `FactLibrary` and `StoryLibrary`, so the site says exactly what the app says.
- **Design.** Colours mirror `ChronosColor` in the app, light and dark. Screenshots in `assets/screens/` are cropped from `AppStore/Screenshots/en-US-6.5`.
- **App Store.** Set `APP_STORE_URL` at the top of `assets/app.js` once Chronos is live, and every "Coming soon" button becomes a download link.

## Running locally

```bash
python3 -m http.server 8123
```

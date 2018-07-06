## Pantheon Dev/Test/Live Style
---

Are you ever getting ready to wipe a dev or test site only to realize you're about to click that delete button on your live site?

Maybe this can help, it's a simple script written for [TamperMonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).

Add *pantheon_devtestlive.user.js* to your UserScripts and viola, some colored headers.

### Known Issues
---
 - The JavaScript on Pantheon's dashboard doesn't really like having the link to the stylesheet shoved into the page, and thus, the default styling on the environment tabs is broken. I need see if there's a better place to insert the stylesheet.
# Evetools to Zkillboard

## About

This is an experimental browser extension will change the links for killmails, pilots, corporations, systems etc to use zkillboard.com rather than Evetool's kb.evetools.org. 

It works by simply waiting 1 second after the page has loaded to allow all the killmails to be fetched, and then loops through each link and replaces `kb.evetools.org` => `zkillboard.com`  so that you can view killmails in zkillboard.

---
## Supported Browsers 
[![Chrome](assets/chrome.png "Chrome")](#chrome-installation-instructions)
[![Firefox](assets/firefox.png "Firefox")](#Firefox-installation-instructions)

---

## Installation Instructions

- [Chrome instructions](#chrome-installation-instructions)
- [Firefox instructions](#Firefox-installation-instructions)

### Chrome Installation Instructions

1. Download the [latest zip file](https://github.com/samoneilll/Evetools-to-Zkillboard-Extension/releases/tag/v1.0) from the Releases page
1. Extract the zip somewhere on your PC
1. In Chrome nagivate to `chrome://extensions/`
1. Turn on the "Developer mode" toggle at the top right
1. Click "Load Unpacked", and select the folder that contains the unzipped files
1. Enjoy

### Firefox Installation Instructions

1. Download the [latest zip file](https://github.com/samoneilll/Evetools-to-Zkillboard-Extension/releases/tag/v1.0) from the Releases page
1. Extract the zip somewhere on your PC
1. In Firefox navigate to `about:debugging` and click "This firefox"
1. Click "Load Temporary Add-on..."
1. Select the `manifest.json` file from the extracted files
1. Enjoy

---
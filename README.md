lang-guess
Guess the language of any text. Use it from the command line or in the browser.

Built with franc for language detection and langs for language names. The web UI is plain HTML, CSS and vanilla JavaScript, bundled with Vite.

Features
Web app: paste text and see the detected language as you type.
Top candidates: shows the best guess plus the next closest matches as bars.
Native names: shows the language's own name where available (for example, Français).
CLI: run node index.js "your text" for a quick answer in the terminal.
No backend: the web app runs entirely in the browser.
Tech stack
Part	Tool
Language detection	franc ^5
Language names	langs
Terminal colors (CLI)	colors
Dev server and bundler	Vite
UI	HTML, CSS, vanilla JS
Getting started
Prerequisites
Node.js 18 or newer
npm (comes with Node)
Installation
bash
git clone https://github.com/sharma-aadi24/lang-guess.git
cd lang-guess
npm install
Usage
Web app
bash
npm run dev
Open the URL printed in the terminal (usually http://localhost:5173), then type or paste at least 10 characters.

To build for production:

bash
npm run build     # outputs static files to dist/
npm run preview   # preview the production build locally
CLI
bash
node index.js "Bonjour tout le monde"
# or
npm run cli -- "Bonjour tout le monde"
Example output:

OUR BEST GUESS IS : French
If the language can't be identified, the CLI prints a red message instead.

Scripts
Command	What it does
npm run dev	Start the Vite dev server
npm run build	Create a production build in dist/
npm run preview	Serve the production build locally
npm run cli -- "text"	Run the command-line version
Project structure
lang-guess/
├── index.html        Web app entry point
├── index.js          CLI entry point
├── src/
│   ├── guess.js      Detection logic (franc + langs)
│   ├── main.js       Connects the page to the detection logic
│   └── style.css     Page styles
├── package.json
└── package-lock.json
How it works
franc compares the input text against trigram profiles for hundreds of languages and returns scored candidates as ISO 639-3 codes (like fra).
langs converts each code into a readable name and native name.
The web UI waits briefly after you stop typing, then shows the top match and the next closest candidates.
Limitations
Text under 10 characters can't be detected reliably.
Short samples and closely related languages (for example, Spanish and Portuguese, or Hindi and Marathi) can score similarly. Longer text gives better results.
Mixed-language text returns whichever language scores highest.
franc is pinned to version 5 because newer versions are ESM-only and don't work with the CommonJS require used in the CLI.
Author
sharma-aadi24

License
ISC


Claude finished the response

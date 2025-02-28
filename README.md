# Fit Prompt
Simple web application for creating clever prompts that will get you fit.

(chatbot functionality is available using free Groq API. More info here: https://groq.com/)

Try running demo on: https://fit-prompt.web.app/home

## Available Scripts

In the project directory, you can run:

### For local development

You will need to add `.env` file to your root repository. The file should contain both Firebase and Groq API keys.

### `npm start`

Runs the app in the development mode.

### Build and deploy to Firebase

Firstly you need to set up your own Firebase hosting in project root (for further details visit https://firebase.google.com/).

### `npm run build`

Builds the app for production to the `build` folder.

### `firebase deploy`

Deploys the app to remote Firebase hosting.
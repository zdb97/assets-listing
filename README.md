### Project Structure

📂 src/ ├── 📂 components/ # React components │ ├── 📄 Header.tsx # Header component │ ├── 📄 Footer.tsx # Footer component │ ├── 📄 ContentList.tsx # Main content list component ├── 📄 App.tsx # Main application entry point ├── 📄 App.css # Global styles ├── 📄 index.tsx # React DOM rendering

📂 public/ ├── 📂 feed/ │ └── 📄 sample.json # Static JSON data for the app

📂 dist/ # Production build output (after npm run build)

In the project directory, you can run:

### `npm install`

install required project depedencies and dev-dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run test -- --watchAll`

To run all tests, regardless of changes, use the --watchAll flag

### `npm run test:playwright`

Launches the test with playwright.

### `npm run build`

The default build folder is renamed to dist using the postbuild script. Depending on your operating system, use the appropriate command for `postBuild`:

For Unix-like systems (macOS, Linux): `"postbuild": "mv build dist"`

For Windows: `"postbuild": "move build dist"`

After running the build command:

The production-ready files will be in the dist folder. Then run `serve -s dist` to locally host the dist folder.

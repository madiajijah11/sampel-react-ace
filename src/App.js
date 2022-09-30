import React, { useState } from "react";
import AceEditor from "react-ace";
import "./App.css";

import "ace-builds/src-min-noconflict/mode-jsx";
import "ace-builds/src-min-noconflict/ext-language_tools";

const languages = [
	"javascript",
	"java",
	"python",
	"xml",
	"ruby",
	"sass",
	"markdown",
	"mysql",
	"json",
	"html",
	"handlebars",
	"golang",
	"csharp",
	"elixir",
	"typescript",
	"css",
];

const themes = [
	"monokai",
	"github",
	"tomorrow",
	"kuroir",
	"twilight",
	"xcode",
	"textmate",
	"solarized_dark",
	"solarized_light",
	"terminal",
];

function App() {
	const [code, setCode] = useState("");
	const [language, setLanguage] = useState("javascript");
	const [theme, setTheme] = useState("monokai");
	const [fontSize, setFontSize] = useState(16);
	const [showGutter, setShowGutter] = useState(true);
	const [showPrintMargin, setShowPrintMargin] = useState(true);
	const [highlightActiveLine, setHighlightActiveLine] = useState(true);
	const [enableBasicAutocompletion, setEnableBasicAutocompletion] = useState(true);
	const [enableLiveAutocompletion, setEnableLiveAutocompletion] = useState(true);
	const [enableSnippets, setEnableSnippets] = useState(true);
	const [showLineNumbers, setShowLineNumbers] = useState(true);

	const handleChange = (e) => {
		setCode(e);
	};

	languages.forEach((language) => {
		require(`ace-builds/src-min-noconflict/mode-${language}`);
		require(`ace-builds/src-min-noconflict/snippets/${language}`);
	});

	themes.forEach((theme) => require(`ace-builds/src-min-noconflict/theme-${theme}`));

	return (
		<div className="App">
			<div className="options">
				<h1>Code Options</h1>
				<div>
					<p>language</p>
					<select value={language} onChange={(e) => setLanguage(e.target.value)}>
						{languages.map((lang) => (
							<option key={lang} value={lang}>
								{lang}
							</option>
						))}
					</select>
				</div>
				<div>
					<p>theme</p>
					<select value={theme} onChange={(e) => setTheme(e.target.value)}>
						{themes.map((theme) => (
							<option key={theme} value={theme}>
								{theme}
							</option>
						))}
					</select>
				</div>
				<div>
					<p>fontSize</p>
					<input
						type="number"
						value={fontSize}
						onChange={(e) => setFontSize(parseInt(e.target.value))}
					/>
				</div>
				<div>
					<p>showGutter</p>
					<input
						type="checkbox"
						checked={showGutter}
						onChange={(e) => setShowGutter(e.target.checked)}
					/>
				</div>
				<div>
					<p>showPrintMargin</p>
					<input
						type="checkbox"
						checked={showPrintMargin}
						onChange={(e) => setShowPrintMargin(e.target.checked)}
					/>
				</div>
				<div>
					<p>highlightActiveLine</p>
					<input
						type="checkbox"
						checked={highlightActiveLine}
						onChange={(e) => setHighlightActiveLine(e.target.checked)}
					/>
				</div>
				<div>
					<p>enableBasicAutocompletion</p>
					<input
						type="checkbox"
						checked={enableBasicAutocompletion}
						onChange={(e) => setEnableBasicAutocompletion(e.target.checked)}
					/>
				</div>
				<div>
					<p>enableLiveAutocompletion</p>
					<input
						type="checkbox"
						checked={enableLiveAutocompletion}
						onChange={(e) => setEnableLiveAutocompletion(e.target.checked)}
					/>
				</div>
				<div>
					<p>enableSnippets</p>
					<input
						type="checkbox"
						checked={enableSnippets}
						onChange={(e) => setEnableSnippets(e.target.checked)}
					/>
				</div>
				<div>
					<p>showLineNumbers</p>
					<input
						type="checkbox"
						checked={showLineNumbers}
						onChange={(e) => setShowLineNumbers(e.target.checked)}
					/>
				</div>
			</div>
			<div className="editor">
				<h1>Code Editor</h1>
				<AceEditor
					style={{ width: 1000, height: 700 }}
					mode={language}
					theme={theme}
					value={code}
					onChange={handleChange}
					editorProps={{ $blockScrolling: true }}
					setOptions={{
						fontSize,
						showPrintMargin,
						showGutter,
						highlightActiveLine,
						enableBasicAutocompletion,
						enableLiveAutocompletion,
						enableSnippets,
						showLineNumbers,
						tabSize: 2,
						useWorker: false,
					}}
				/>
			</div>
		</div>
	);
}

export default App;

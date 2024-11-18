import React, { useEffect, useState } from "react";

export default function StyleEditor() {
  const [code, setCode] = useState("");
  const [fontFamily, setFontFamily] = useState("monospace");
  const [fontSize, setFontSize] = useState(16); // 36 16 12

  useEffect(() => {
    const root = document.documentElement; 
    const isDarkMode = localStorage.getItem("theme") === "dark";

    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    const isDarkMode = root.classList.contains("dark");

    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-400">Code Styler IDE</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-lg shadow-md font-semibold transition-colors duration-300 
          bg-blue-500 text-gray-100 hover:bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Toggle Dark Mode
        </button>
      </div>

      {/* Code Editor */}
      <div className="relative w-full max-w-4xl bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
        <textarea
          className="w-full h-72 md:h-96 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 
          font-mono p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="Write your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ fontFamily, fontSize }}
        />
      </div>

      <div className="w-full max-w-4xl bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-blue-400">Font Family</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFontFamily("monospace")}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-500"
            >
              Monospace
            </button>
            <button
              onClick={() => setFontFamily("Arial, sans-serif")}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-500"
            >
              Arial
            </button>
            <button
              onClick={() => setFontFamily("'Courier New', monospace")}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-500"
            >
              Courier New
            </button>
            <button
              onClick={() => setFontFamily("Times New Roman, monospace")}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-500"
            >
              Times New Roman
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2 text-blue-400">Font Size</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFontSize(32)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-500"
            >
              Larger
            </button>
            <button
              onClick={() => setFontSize(24)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-500"
            >
              Large
            </button>
            <button
              onClick={() => setFontSize(16)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-500"
            >
              Medium
            </button>
            <button
              onClick={() => setFontSize(12)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-500"
            >
              Small
            </button>
            <button
              onClick={() => setFontSize(10)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-500"
            >
              Smaller
            </button>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="w-full max-w-4xl bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-4 flex gap-4 flex-wrap justify-center">
        <button
          className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-400 text-gray-900 font-semibold"
          onClick={() => console.log("Export as Image")}
        >
          Export as Image
        </button>
        <button
          className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 text-gray-900 font-semibold"
          onClick={() => console.log("Export as Markdown")}
        >
          Export as Markdown
        </button>
        <button
          className="px-6 py-2 bg-purple-500 rounded-lg hover:bg-purple-400 text-gray-900 font-semibold"
          onClick={() => console.log("Export as File")}
        >
          Export as File
        </button>
      </div>
    </div>
  );
}

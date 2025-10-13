import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Summary />
        <Skills />
        <Experience />
        <Education />
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container-max section-padding py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Edward Yu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

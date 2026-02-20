import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f]">
      <Header />
      <main className="pt-32 px-10 text-white">
        <h1 className="text-4xl">Welcome to my Portfolio</h1>
        <p className="mt-4 text-gray-400">Content goes here...</p>
      </main>
    </div>
  );
}

export default App;
import "./App.css";
import { Navbar } from "./component/NavBar";
import { CategoryTab } from "./component/CategoryTab";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
        <CategoryTab />
      </main>
    </div>
  );
}

export default App;

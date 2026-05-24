import "./App.css";
import { useState } from "react";
import type { TabValue } from "./component/Type";
import { Navbar } from "./component/NavBar";
import { CategoryTab } from "./component/CategoryTab";
import ProductList from "./component/ProductList";

function App() {
  const [tab, setTab] = useState<TabValue>("lifting");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
        <CategoryTab currentTab={tab} changeTab={setTab} />
        <ProductList currentTab={tab} />
      </main>
    </div>
  );
}

export default App;

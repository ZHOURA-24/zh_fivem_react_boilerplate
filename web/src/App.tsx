import {
  Link,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import HomePage from "@/pages/home";
import TestPage from "@/pages/test";
import { ModeToggle } from "./components/mode-toggle";
import { debugData } from "./utils/debugData";
import { cn } from "./lib/utils";

debugData([
  {
    action: "setVisible",
    data: true
  }
])

export default function App() {
  const { pathname } = useLocation()
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="p-4 rounded border bg-background flex flex-col items-center justify-center">
        <ModeToggle />
        <div className="flex gap-x-2 my-4 border p-1 rounded">
          <Link to="/" className={cn("px-2 py-1 rounded", pathname === "/" ? "border-b-2" : "")}>Home</Link>
          <Link to="/test" className={cn("px-2 py-1 rounded", pathname === "/test" ? "border-b-2" : "")}>Test</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </div>
  )
}

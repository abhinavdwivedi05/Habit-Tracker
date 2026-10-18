import { HabitForm } from "./components/habitform"
import { HabitList } from "./components/habitlist"
import { Header } from "./components/header"

export default function App() {
  return <div className="max-w-3xl mx-auto p-4 flex flex-col gap-4">
    <Header />
    <HabitForm />
    <HabitList />
  </div>
}

 

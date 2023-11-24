import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-col space-y-4">
        <Link href={`/todolist`}>TodoList-useEffect</Link>
        <Link href={`/create-data-from-api`}>Create data from API</Link>
      </div>
    </main>
  );
}

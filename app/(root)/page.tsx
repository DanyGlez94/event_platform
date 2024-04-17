import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-[100vh] gap-2">
      <h1 className="text-4xl">Eventify</h1>
      <Button variant="destructive" className="px-10 w-[100px]">Click me</Button>
    </main>
  );
}

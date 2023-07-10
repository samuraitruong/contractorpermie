import CalculationForm from "@/components/CalculationForm";
import Header from "@/components/Header";
import Message from "@/components/Message";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 pt-20">
      <div className="w-3/4 p-5 bg-gray-300">
        <Header />
        <CalculationForm />
        <Message />
      </div>
    </main>
  );
}

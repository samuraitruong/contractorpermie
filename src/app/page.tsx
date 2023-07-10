import CalculationForm from "@/components/CalculationForm";
import Header from "@/components/Header";
import Message from "@/components/Message";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start md:justify-center md:p-10 pt-0 md:pt-10">
      <div className="w-full md:w-3/4 lg:w=1/2 p-5 bg-gray-300">
        <Header />
        <CalculationForm />
        <Message />
      </div>
    </main>
  );
}

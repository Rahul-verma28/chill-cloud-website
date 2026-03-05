import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Metadata } from "next";
import PresenceContent from "@/components/PresenceContent";

export const metadata: Metadata = {
  title: "Our Presence | Chillcloud India LLP",
  description:
    "Discover our global presence across 21 countries and 5 continents through our network of agents and distributors.",
};

export default function PresencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PresenceContent />
      <Footer />
    </main>
  );
}

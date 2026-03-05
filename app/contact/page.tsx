import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactContent from "@/components/ContactContent";
import { Metadata } from "next";
import FeaturesBar from "@/components/FeaturesBar";

export const metadata: Metadata = {
  title: "Concierge & Contact | Chillcloud",
  description:
    "Reach out to Chillcloud India LLP for bespoke inquiries, wholesale partnerships, and artisanal support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactContent />
      <FeaturesBar />
      <Footer />
    </main>
  );
}

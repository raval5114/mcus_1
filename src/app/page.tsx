import AboutSection from "./sections/AboutSection";
import BlogsSection from "./sections/BlogsSection";
import ClientsSection from "./sections/ClientsSection";
import ContactSection from "./sections/ContactUsSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServiceSection";

export default function Home() {
  return (
    <div className="font-sans overflow-y-scroll hide-scrollbar">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection
        clients={[
          {
            name: "Tech Innovators Inc.",
            field: "Information Technology",
            image: "/client-logos/client1.svg",
          },
          {
            name: "Global Finance Solutions",
            field: "Financial Services",
            image: "/client-logos/client2.svg",
          },
          {
            name: "MediCare Health Group",
            field: "Healthcare",
            image: "/client-logos/client3.svg",
          },
          {
            name: "Apex Manufacturing Co.",
            field: "Manufacturing",
            image: "/client-logos/client4.svg",
          },
          {
            name: "Green Energy Ventures",
            field: "Renewable Energy",
            image: "/client-logos/client5.svg",
          },
          {
            name: "Creative Marketing Agency",
            field: "Marketing & Advertising",
            image: "/client-logos/client6.svg",
          },
          {
            name: "Logistics Master Inc.",
            field: "Logistics & Supply Chain",
            image: "/client-logos/client7.svg",
          },
          {
            name: "EduFocus Solutions",
            field: "Education Technology",
            image: "/client-logos/client8.svg",
          },
          {
            name: "Retail Connect Group",
            field: "Retail & E-commerce",
            image: "/client-logos/client9.svg",
          },
        ]}
      />
      <BlogsSection
        blogs={[
          {
            id: "1",
            title: "Understanding the Role of a Company Secretary",
            excerpt:
              "Explore the critical responsibilities a CS handles and why it's essential for businesses today, from corporate governance to regulatory compliance and legal advisory...",
            link: "/blog/understanding-cs-role",
          },
          {
            id: "2",
            title: "5 Key Legal Documents Every Startup Needs",
            excerpt:
              "From Memorandum of Association (MOA) to Shareholders' Agreement — here’s a legal checklist every founder should follow to build a strong foundation...",
            link: "/blog/startup-legal-documents",
          },
          {
            id: "3",
            title: "Navigating GST Compliance for Small Businesses",
            excerpt:
              "A simplified guide to Goods and Services Tax compliance for small and medium enterprises, covering registration, filing, and common pitfalls to avoid...",
            link: "/blog/gst-compliance-sme",
          },
          {
            id: "4",
            title: "The Importance of Secretarial Audit for Growing Companies",
            excerpt:
              "Discover why a thorough secretarial audit is not just a regulatory requirement but a vital tool for risk management and ensuring good corporate governance...",
            link: "/blog/secretarial-audit-importance",
          },
        ]}
      />
      <ContactSection />
    </div>
  );
}

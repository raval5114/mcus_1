export default function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-screen px-6 sm:px-20 py-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800" // Added gradient background
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Corporate & Regulatory Compliance */}
        <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-indigo-700">Corporate & Regulatory Compliance</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li>Company Incorporation & ROC Filing</li>
            <li>Annual Compliance Management</li>
            <li>Secretarial Audit & Due Diligence</li>
            <li>Company Law Advisory</li>
            <li>RERA Compliance</li>
            <li>SEBI Compliance</li>
            <li>FEMA Compliance</li>
          </ul>
        </div>

        {/* Business & Legal Support */}
        <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-green-700">Business & Legal Support</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li>Startup Registration</li>
            <li>MSME Registration</li>
            <li>Startup & MSME Legal Support</li>
            <li>Legal Drafting and Contract Vetting</li>
            <li>Intellectual Property (Trademark)</li>
            <li>Digital Signature Provider</li>
            <li>Labour Law Compliance</li>
          </ul>
        </div>

        {/* Financial & Taxation Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-red-700">Financial & Taxation Services</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li>GST Compliance & Filings</li>
            <li>Accounting Services</li>
            <li>Auditing Services</li>
            <li>TDS/TCS Compliance</li>
            <li>PF & ESI Compliance</li>
            <li>Registered Valuer Services</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
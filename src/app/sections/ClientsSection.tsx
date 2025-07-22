import Image from "next/image";

// 1. Define the Client type (interface or type alias)
interface Client {
  name: string;
  field: string;
  image: string;
}

// Update the component to accept 'clients' as a prop, typed as an array of Client objects
export default function ClientsSection({ clients = [] }: { clients?: Client[] }) {
  return (
    <section
      id="clients"
      className="min-h-screen px-4 sm:px-10 md:px-20 py-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 flex flex-col justify-center"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 md:mb-10 text-gray-900">Our Valued Clients</h2>
      <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto mb-12 text-gray-700">
        We&apos;re proud to partner with a diverse range of **startups, SMEs, and established corporations** across various industries, helping them achieve their corporate governance and compliance goals.
      </p>

      {/* Horizontal Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-hide py-4 md:py-8 space-x-6 sm:space-x-8 lg:space-x-10 px-4 md:px-0">
          {/* Map over the clients prop */}
          {clients.map((client: Client, index) => ( // Explicitly type 'client' here too for clarity, though TS might infer it
            <div
              key={client.name || index} // Using client.name for key if it's unique, otherwise fallback to index
              className="flex-shrink-0 w-64 sm:w-72 lg:w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer group"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center border-2 border-indigo-200">
                  <Image
                    src={client.image}
                    alt={`${client.name} Logo`}
                    width={100}
                    height={100}
                    layout="intrinsic"
                    objectFit="contain"
                    className="filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 leading-tight">{client.name}</h3>
                <p className="text-sm sm:text-base text-indigo-600 font-medium">{client.field}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
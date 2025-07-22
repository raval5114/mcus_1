export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen px-4 sm:px-10 md:px-20 py-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 md:mb-12 text-gray-900">About Madhav Upadhyay</h2>

        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column: Image/Illustration (Placeholder) */}
          <div className="lg:w-1/3 flex justify-center items-center p-2 sm:p-4">
            {/* You could replace this with a professional photo or a relevant illustration */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 text-5xl sm:text-6xl font-bold border-4 border-indigo-400 flex-shrink-0">
              CS
            </div>
          </div>

          {/* Right Column: Narrative Text */}
          <div className="lg:w-2/3 text-base sm:text-lg font-medium leading-relaxed text-gray-700 space-y-5 sm:space-y-6">
            <p>
              At the heart of our practice is **Madhav Upadhyay**, a highly qualified **Company Secretary** with a deep-rooted commitment to corporate excellence. With **years of experience** navigating the intricate landscape of **corporate law, compliance, and governance**, we don&apos;t just offer solutions; we build lasting partnerships based on **trust and strategic insight**.
            </p>
            <p>
              We believe that strong legal and compliance foundations are the bedrock of sustainable business growth. That&apos;s why we meticulously provide **reliable, confidential, and truly professional services**, ensuring every aspect of your business operations aligns with regulatory requirements while fostering **good governance practices**.
            </p>
            <p>
              Whether you&apos;re an innovative **startup** charting new territories, a growing **MSME** looking for robust legal support, or an **established enterprise** seeking comprehensive compliance management, our **tailored approach** is designed to empower your journey. We translate complex legalities into **clear, actionable advice**, allowing you to focus on what you do best: **innovating and leading your industry**.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
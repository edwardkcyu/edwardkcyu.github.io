import { summary } from "../data/cv-data";

const Summary = () => {
  return (
    <section className="py-12">
      <div className="container-max section-padding">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Summary
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <ul className="space-y-4">
            {summary.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Summary;

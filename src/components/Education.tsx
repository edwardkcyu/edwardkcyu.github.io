import { GraduationCap } from "lucide-react";
import { education } from "../data/cv-data";

const Education = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container-max section-padding">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Education
        </h2>
        <div className="card">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                {education.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {education.period}
              </p>
              {education.honors && (
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  🎓 {education.honors}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

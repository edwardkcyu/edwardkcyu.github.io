import { ExternalLink } from 'lucide-react';
import { experience } from '../data/cv-data';

const Experience = () => {
  return (
    <section className="py-12">
      <div className="container-max section-padding">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="card">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {job.title}
                  </h3>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                    {job.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {job.period}
                  </p>
                  {job.note && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {job.note}
                    </p>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {job.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {job.links && job.links.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {job.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

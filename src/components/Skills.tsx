import { skills } from "../data/cv-data";

const Skills = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container-max section-padding">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

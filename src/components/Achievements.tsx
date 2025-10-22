import { achievements } from '../data/cv-data';

const Achievements = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container-max section-padding">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          🚀 Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

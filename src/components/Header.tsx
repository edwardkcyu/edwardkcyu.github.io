import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { contactInfo } from "../data/cv-data";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container-max section-padding py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {contactInfo.name}
            </h1>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{contactInfo.location}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

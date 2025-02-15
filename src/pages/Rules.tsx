import React from 'react';
import { ScrollText } from 'lucide-react';

const Rules = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-white">
        <div className="text-center mb-12">
          <ScrollText className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Rules & Regulations</h1>
        </div>

        <div className="space-y-8 bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <section>
            <h2 className="text-2xl font-bold mb-4">General Guidelines</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All participants must be currently enrolled students</li>
              <li>Valid university ID is required for registration</li>
              <li>Teams must consist of 2-4 members</li>
              <li>Registration deadline is March 10, 2024</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Event-Specific Rules</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Hackathon</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>24-hour continuous event</li>
                  <li>All code must be original and written during the event</li>
                  <li>Use of open-source libraries is allowed</li>
                  <li>Teams must present their projects to judges</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Tech Talks</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Presentations limited to 20 minutes</li>
                  <li>Q&A session of 10 minutes</li>
                  <li>Slides must be submitted 24 hours before the event</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Project Showcase</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Projects must be completed before the event</li>
                  <li>Each team gets a 6x4 ft display area</li>
                  <li>Power outlets will be provided</li>
                  <li>Setup time is 1 hour before the event</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Code of Conduct</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respect all participants and staff</li>
              <li>No plagiarism or cheating</li>
              <li>Maintain professional behavior throughout the event</li>
              <li>Follow all university safety guidelines</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Rules;
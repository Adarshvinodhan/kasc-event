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
            <h2 className="text-2xl font-bold mb-4">QUIZZARD [Quiz]</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Two members per team</li>
              <li>Written prelims will be conducted</li>
              <li>Duration: 60 Minutes</li>
              <li>Participants are not allowed to use mobile phones/any electronic devices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">TECH-TALK [Poster Presentation]</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Theme: Applications of AI [Health Care, Business, Education, Science, IT, etc.]</li>
              <li>Two members per team</li>
              <li>Staff Incharge: B Manogaran</li>
              <li>Student Volunteers: R Ranith Prawin (I MSc CS), G Raja Perarasu (I MSc CS)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">DEBOGAGE [Debugging]</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Two programs will be given</li>
              <li>Languages: C, C++, Java, Python</li>
              <li>Duration: 90 Minutes</li>
              <li>Staff Incharge: M Juliet Monolisa Esther</li>
              <li>Student Volunteers: D Naveen Kumar (III BSc CS), V Deepak (III BSc CS)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">T-HUNT [Treasure Hunt]</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Five members per team</li>
              <li>Participant should have knowledge of the places and structures inside the campus</li>
              <li>Finals will be on the stage</li>
              <li>Staff Incharge: R Pavithra</li>
              <li>Student Volunteers: D Deepan Raj (II BSc CS), V Srimathi (II BSc CS)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">CONNECT-TECH [ConneXions]</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Two members per team</li>
              <li>Staff Incharge: N Pavyasre</li>
              <li>Student Volunteers: S K Kishika (II BSc CS), T Mahaswetha (II BSc CS)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">ACT-OUT [Dumb Charade]</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Three members per team</li>
              <li>One person should give the gestures and the other two should guess the word</li>
              <li>Duration: 60 Minutes</li>
              <li>Finals will be on the stage</li>
              <li>Staff Incharge: A Immaculate</li>
              <li>Student Volunteers: M Diwakar (II MSc CS), R Nandhini (II MSc CS)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">HENNA-TATTOO [Mehndi Design]</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Two members per team</li>
              <li>Staff Incharge: Dr. Nithya</li>
              <li>Student Volunteers: S Naval Sidu (III BSc CS), M Chidambaram (III BSc CS)</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Rules;

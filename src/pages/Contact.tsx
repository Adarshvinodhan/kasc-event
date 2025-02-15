import React from 'react';
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-white">
        <div className="text-center mb-12">
          <Phone className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Event Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Date</h3>
                  <p>March 15-17, 2024</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Time</h3>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Venue</h3>
                  <p>Main Auditorium</p>
                  <p>Tech University Campus</p>
                  <p>123 University Drive</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Event Coordinator</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    john.doe@techuniversity.edu
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Technical Support</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (555) 987-6543
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    support@techuniversity.edu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
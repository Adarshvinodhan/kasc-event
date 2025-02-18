import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { User, Trophy, ArrowLeft} from "lucide-react";
import { useEffect } from "react";

interface Event {
  id: number;
  name: string;
  description: string;
  formLink: string;
  icon: JSX.Element;
  image: string;
  user: string;
  rule: string;
  staff: string;
  student: string;
  prize: string;
  venue:string;
}
const EventDetail = ({ events }: { events: Event[] }) => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id.toString() === eventId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  if (!event) {
    return <div className="text-center text-white text-xl">Event not found</div>;
  }

  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 rounded-xl shadow-lg border border-white/10">
        <Link to="/" className="flex items-center text-indigo-400 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Events
        </Link>
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-white mb-4">{event.name}</h2>
        <div className="flex items-center space-x-4 mb-4 text-gray-300">
          <div className="flex items-center">
            <User className="w-5 h-5 text-indigo-400 mr-2" />
            <span>{event.user}</span>
          </div>
          <div className="flex items-center">
            <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">{event.prize}</span>
          </div>
        </div>
        <p className="text-gray-300 mb-6">{event.description}</p>
        {event.rule && <p className="text-gray-400 mb-2">Rule: {event.rule}</p>}
        <p className="text-gray-400 mb-2">Staff Incharge: {event.staff}</p>
        <p className="text-gray-400 mb-2">Student Volunteers:</p>
        <ul className="text-gray-400 mb-6">
          {event.student.split(",").map((volunteer, index) => (
            <li key={index}>{volunteer}</li>
          ))}
        </ul>
        <a
          href={event.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-500 transition"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default EventDetail;

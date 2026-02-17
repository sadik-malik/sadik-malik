import { LuMail as Mail, LuMapPin as MapPin } from "react-icons/lu";

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">
          Let's Build Something Together
        </h2>
        <p className="text-zinc-400 mb-16 text-lg max-w-2xl mx-auto">
          Currently open to new opportunities, collaborations, or discussing
          your next big project idea. Feel free to reach out via email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800 hover:border-blue-500/30 transition-all group">
            <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all mb-6">
              <Mail size={32} />
            </div>
            <div>
              <p className="text-zinc-500 text-sm uppercase font-bold tracking-widest mb-2">
                Email
              </p>
              <a
                href="mailto:sadik786malik@gmail.com"
                className="text-white text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors break-all"
              >
                sadik786malik@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800 hover:border-blue-500/30 transition-all group">
            <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all mb-6">
              <MapPin size={32} />
            </div>
            <div>
              <p className="text-zinc-500 text-sm uppercase font-bold tracking-widest mb-2">
                Location
              </p>
              <p className="text-white text-xl md:text-2xl font-medium">
                Ghaziabad, UP, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

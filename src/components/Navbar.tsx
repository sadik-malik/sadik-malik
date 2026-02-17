import { LuGithub } from 'react-icons/lu';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <span className="font-bold text-lg tracking-tight text-white">
            <span>SADIK</span> <span className="text-blue-500">MALIK</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#opensource"
              className="hover:text-white transition-colors"
            >
              Open Source
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all"
          >
            Contact
          </a>
          <a
            href="https://github.com/sadik-malik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <LuGithub size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

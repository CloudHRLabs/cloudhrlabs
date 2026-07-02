export default function Navbar() {
  const navLinks = [
    "Home",
    "Learning Paths",
    "Articles",
    "Resources",
    "About",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
            CH
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              CloudHRLabs
            </h1>

            <p className="text-xs text-slate-400">
              Learn • Build • Grow
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-blue-400"
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
export default function MenuOverlay({ close }) {
  return (
    <div className="fixed inset-0 bg-gray-100 z-40 flex flex-col justify-center items-center">

      {/* Close button */}
      <button
        onClick={close}
        className="absolute top-6 right-6 text-3xl"
      >
        ✕
      </button>

      {/* Menu links */}
      <nav className="text-center space-y-6">
        <a href="#" className="text-6xl font-serif">Home</a>
        <a href="#" className="text-6xl font-serif">Portfolio</a>
        <a href="#" className="text-6xl font-serif">About</a>
        <a href="#" className="text-6xl font-serif">Contact</a>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 text-sm">
        Facebook &nbsp; Github &nbsp; Twitter
      </div>

      <div className="absolute bottom-6 right-6 text-sm">
        copyright __ JOHN
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h2 className="text-4xl font-black">
              <span className="text-white">Chrono</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Vault
              </span>
            </h2>

            <p className="text-gray-400 mt-6">
              Preserve today's memories and unlock them in the future with secure digital time capsules.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>Features</li>
              <li>Security</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Resources</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Support</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Connect</h3>

            <p className="text-gray-400">GitHub</p>
            <p className="text-gray-400">LinkedIn</p>
            <p className="text-gray-400">Email</p>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500">

          © 2026 ChronoVault. Built with ❤️ for the Future.

        </div>

      </div>
    </footer>
  );
}

export default Footer;
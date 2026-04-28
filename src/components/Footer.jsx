function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-10">

      <div className="max-w-6xl mx-auto text-center px-4">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png"
            alt="Elementary Education Online Logo"
            className="h-16 object-contain"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        {/* Website Name */}
        <h2 className="text-xl font-semibold">
          Elementary Education Online
        </h2>

        {/* Contact Section */}
        <div className="mt-4 space-y-1">
          <p className="font-semibold">Point of Contact:</p>

          <p>Rutuja Ware</p>
          <p>Divya Ingale</p>
          <p>Snehal Bhalerao</p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Elementary Education Online. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer
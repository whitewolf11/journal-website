function SocialShare() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <section className="py-10 bg-gray-100 text-center">

      <h3 className="text-xl font-semibold mb-4">
        Share This Journal
      </h3>

      <div className="flex flex-wrap justify-center gap-4">

        <a
          href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          WhatsApp
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          Facebook
        </a>

        <a
          href={`https://pinterest.com/pin/create/button/?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          Pinterest
        </a>

        <a
          href={`https://www.reddit.com/submit?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          Reddit
        </a>

        <a
          href={`https://t.me/share/url?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          Telegram
        </a>

      </div>

    </section>
  )
}

export default SocialShare


function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-center md:text-left">&copy; 2023 Movie Dashboard. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer

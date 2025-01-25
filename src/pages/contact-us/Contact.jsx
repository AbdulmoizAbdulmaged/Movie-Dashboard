

function Contact() {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
    <p className="text-lg text-gray-700 mb-4">
      If you have any questions or feedback, feel free to reach out to us. We would love to hear from you!
    </p>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
      <p className="text-lg text-gray-700 mb-2"><strong>Phone:</strong> 0538023368</p>
      <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:abdulmoizabdulmaged@gmail.com" className="text-blue-600 hover:underline">abdulmoizabdulmaged@gmail.com</a></p>
    </div>
  </div>
  )
}

export default Contact

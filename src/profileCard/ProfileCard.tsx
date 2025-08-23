
export default function ProfileCard() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <img
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
          src="https://lh3.googleusercontent.com/a/ACg8ocJAVJ6qi1MKOKc-i2tmwfHMpjUGn4sQbEBl89BlChjryzlF8nWy=s360-c-no"
          alt="Profile"
         />
        <h2 className="text-xl text-center font-bold text-gray-800">Veerendra Kumar Reddy P</h2>
        <p className="text-gray-600 text-center">Full Stack Developer</p>
        <p className="mt-2 text-center text-gray-500">Passionate about building scalabe web apps and learning new technologis.</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Contact Me</button>
      </div>
    </div>
    </>
  )
}

import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
  {
    title: "Profile Card",
    desc: "A clean and modern profile card built with Tailwind CSS.",
    img: "screenshots/profile-card/profile_card_full_screen_view.png",
    link: "/profile-card",
  },
  {
    title: "Landing Page",
    desc: "Responsive landing page layout designed with Tailwind.",
    img: "screenshots/langing-page/landing_page_desktop_view.png",
    link: "/landing-page",
  },
  {
    title: "Pricing Card",
    desc: "Simple pricing card with features & CTAs.",
    img: "screenshots/pricing-card/pricing_desktop_view.png",
    link: "/pricing-card",
  },
];
  return (
    <div id="projects">
        <h2 className="text-2xl font-bold my-8 text-center">My Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
                <div key={idx}
                    className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col" 
                >
                    <img src={project.img}
                    alt = {project.title}
                    className="rounded-xl mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.desc}</p>
                    <Link to={project.link}
                        className="mt-auto inline-block bg-blue-500 hover:bbg-blue-600 text-white ox-4 py-2 rounded-lg text-sm text-center"
                    >View Project</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

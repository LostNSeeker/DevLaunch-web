import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex flex-col items-center justify-between w-full">
          <div className="flex flex-col gap-10 mt-5 sm:flex-row sm:justify-center">
          
          
          </div>

          {/* Social Media Links */}
          <ul className="flex justify-center gap-3 mt-5">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="object-contain w-6 h-6 filter-white" // Adjust size for responsiveness
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Privacy Policy and Terms of Use */}
          <div className="mt-6 text-center small-compact">
            <p>Meghnad Saha Hall of Residence</p>
            <p>IIT Kharagpur, West Bengal</p>
          </div>

          <div className="flex flex-col items-center justify-center mt-5 text-center sm:flex-row">
            <p className="mr-0 opacity-70 sm:mr-20">@Copyright, DevLaunch-2024</p>
            <p className="relative mr-0 transition-all duration-500 legal-after sm:mr-9 text-p5 hover:text-p1">
              Privacy Policy
            </p>
            <p className="transition-all duration-500 text-p5 hover:text-p1">Terms of Use</p>
            <p className="mt-2 ml-0 opacity-70 sm:mt-0 sm:ml-20">Made with ❤️ in India </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

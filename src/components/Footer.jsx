export default function Footer({
  paddingLeft = '8rem',
  paddingRight = '8rem',
  gapMapFollow = '4rem',
  gapFollowWork = '4rem',
}) {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-4">
      <div
        className="w-full flex"
        style={{
          paddingLeft,
          paddingRight,
          gap: gapFollowWork,
        }}
      >
        <div
          className="flex"
          style={{ gap: gapMapFollow, flex: '1 1 0' }}
        >
          {/* LEFT COLUMN */}
          <div style={{ flex: 3 }}>
            <h2 className="text-xl font-bold text-white mb-4">Locate Us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4431999709072!2d72.8725941!3d19.4364493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9236062c8a1%3A0xc2bd6793412764f4!2sR%20AIR%20CLEAN%20PHARMA%20EQUIPMENT!5e0!3m2!1sen!2sin!4v1755286968731!5m2!1sen!2sin"
              width="600"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-md"
              title="Company Location on Google Maps"
            />
          </div>

          {/* MIDDLE COLUMN */}
          <div style={{ flex: 1 }}>
            <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
            <ul className="space-y-4 mt-4">
              {[
                {
                  href: "https://facebook.com/yourusername",
                  icon: "fab fa-facebook",
                  color: "hover:text-blue-400",
                  label: "@yourusername",
                },
                {
                  href: "https://instagram.com/yourusername",
                  icon: "fab fa-instagram",
                  color: "hover:text-pink-400",
                  label: "@yourusername",
                },
                {
                  href: "https://linkedin.com/company/yourcompany",
                  icon: "fab fa-linkedin",
                  color: "hover:text-blue-300",
                  label: "/yourcompany",
                },
                {
                  href: "https://twitter.com/yourhandle",
                  icon: "fab fa-twitter",
                  color: "hover:text-sky-400",
                  label: "@yourhandle",
                },
                {
                  href: "https://youtube.com/yourchannel",
                  icon: "fab fa-youtube",
                  color: "hover:text-red-500",
                  label: "/yourchannel",
                },
              ].map(({ href, icon, color, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-3 transition-transform duration-300 ease-in-out ${color} hover:scale-105`}
                    style={{ cursor: "pointer" }}
                  >
                    <i className={`${icon} fa-lg w-6`}></i>
                    <span className="text-sm">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ flex: 1 }}>
          <div className="flex flex-col justify-between h-full">
            {/* Careers */}
            <div>
              <h2 className="text-xl font-bold mb-4">Work With Us</h2>
              <p className="text-sm text-gray-300">
                We're hiring! <br />
                Explore careers with Us. <br />
                <br />
                <strong>
                  Send your CV @ <span className="font-medium">info@vayucleantechnologies.com</span>
                </strong>
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <ul className="text-sm text-gray-300 space-y-3">
                {/* Phone */}
                <li className="flex items-center space-x-2 group cursor-pointer">
                  <i className="fas fa-phone-alt w-5 transition-transform duration-300 ease-in-out group-hover:animate-wiggle"></i>
                  <span className="transition-transform duration-300 ease-in-out group-hover:scale-105">
                    +91-9876543210 | +91-9123456789
                  </span>
                </li>
                {/* Email */}
                <li className="flex items-center space-x-2 group cursor-pointer">
                  <i className="fas fa-envelope w-5 transition-transform duration-300 ease-in-out group-hover:animate-wiggle"></i>
                  <span className="transition-transform duration-300 ease-in-out group-hover:scale-105">
                    info@vayucleantechnologies.com
                  </span>
                </li>
                {/* Address */}
                <li className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt w-5"></i>
                  <span>
                    Unit No 22, Phase-1 Parmar Techno Centre, Nr-Western Express Highway, Vasai (East), Maharashtra - 401208, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="border-t border-gray-700 my-6"
        style={{ marginLeft: paddingLeft, marginRight: paddingRight }}/>

      {/* Copyright */}
      <div
        className="text-center text-gray-400 text-sm"
        style={{ paddingLeft, paddingRight }}>
        Copyrights © 2025 All Rights Reserved by VayuClean Technologies
      </div>
    </footer>
  );
}

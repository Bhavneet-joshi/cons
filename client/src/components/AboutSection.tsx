import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export default function AboutSection() {
  const socialLinks = [
    { name: "LINKEDIN", icon: <Linkedin className="w-4 h-4 mr-2" />, url: "#" },
    { name: "TWITTER", icon: <Twitter className="w-4 h-4 mr-2" />, url: "#" },
    { name: "INSTAGRAM", icon: <Instagram className="w-4 h-4 mr-2" />, url: "#" },
    { name: "FACEBOOK", icon: <Facebook className="w-4 h-4 mr-2" />, url: "#" }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 border-b border-[rgba(0,0,0,0.1)]">
      <div className="md:col-span-5 h-96 md:h-auto relative">
        <img 
          src="https://images.unsplash.com/photo-1613520771254-80d917eda8f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
          alt="Building exterior" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:col-span-7 p-8 md:p-12">
        <h2 className="text-2xl font-semibold mb-8">
          WE ARE COMMITTED TO CREATING BUILDINGS THAT ARE NOT ONLY FUNCTIONAL AND AESTHETICALLY PLEASING.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8">
          <div className="md:col-span-4 text-sm font-medium">ABOUT US</div>
          <div className="md:col-span-8">
            <div className="mb-6">
              <span className="text-xs">(01)</span>
              <p>NOVA CONSTRUCT IS AN ARCHITECTURAL STUDIO THAT DESIGNS SPACES THAT INSPIRE.</p>
            </div>
            <div className="mb-6">
              <span className="text-xs">(02)</span>
              <p>WE BELIEVE THAT ARCHITECTURE HAS THE POWER TO TRANSFORM LIVES</p>
            </div>
          </div>
          
          <div className="md:col-span-4 text-sm font-medium">OUR APPROACH</div>
          <div className="md:col-span-8">
            <div className="mb-6">
              <span className="text-xs">(03)</span>
              <p>WE ARE COMMITTED TO CREATING BUILDINGS THAT ARE NOT ONLY FUNCTIONAL AND AESTHETICALLY PLEASING</p>
            </div>
          </div>
          
          <div className="md:col-span-4 text-sm font-medium">OUR MISSION</div>
          <div className="md:col-span-8">
            <div className="mb-6">
              <span className="text-xs">(04)</span>
              <p>OUR MISSION IS TO USE OUR CREATIVITY AND EXPERTISE TO DESIGN SPACES THAT MAKE A POSITIVE IMPACT ON THE WORLD</p>
            </div>
          </div>
          
          <div className="md:col-span-4 text-sm font-medium">SOCIAL MEDIA</div>
          <div className="md:col-span-8">
            <ul className="space-y-2">
              {socialLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="hover:text-[#917b53] transition flex items-center"
                  >
                    {link.icon} {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

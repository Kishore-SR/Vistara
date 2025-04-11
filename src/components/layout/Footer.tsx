
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Github } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const Footer = () => {
  const { translate } = useLanguage();
  
  return (
    <footer className="bg-card border-t py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-primary">VISTARA</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {translate("footer.discoverheritage")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@vistara.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-base mb-4">{translate("footer.explorehead")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.heritagesites")}
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.culturalstories")}
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.artisanproducts")}
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.findcotravelers")}
                </Link>
              </li>
              <li>
                <Link to="/badges" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.sustainabletourism")}
                </Link>
              </li>
              <li>
                <Link to="/knowledge-graph" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("culturalknowledge")}
                </Link>
              </li>
              <li>
                <Link to="/cultural-mapping" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("interactivemapping")}
                </Link>
              </li>
              <li>
                <Link to="/educational-network" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("educationalnetwork")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-base mb-4">{translate("footer.resourceshead")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.aboutus")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.ourmission")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.termsofservice")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.privacypolicy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate("footer.contactus")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-base mb-4">{translate("footer.newsletterhead")}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {translate("footer.newsletterdesc")}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={translate("footer.youremail")}
                className="flex-1 rounded-l-md border border-border bg-background px-3 py-2 text-sm"
              />
              <button className="rounded-r-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90">
                {translate("footer.subscribe")}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} VISTARA. {translate("footer.allrightsreserved")}</p>
          <p className="mt-4 md:mt-0">
            {translate("footer.madewith")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

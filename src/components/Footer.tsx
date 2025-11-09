import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              Industry Unfolded
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Khám phá hành trình của các cuộc Cách mạng Công nghiệp từ 1.0 đến 4.0
              và vai trò của công nghệ trong tương lai.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Cách mạng Công nghiệp
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/revolution-1"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cách mạng 1.0
                </Link>
              </li>
              <li>
                <Link
                  to="/revolution-2"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cách mạng 2.0
                </Link>
              </li>
              <li>
                <Link
                  to="/revolution-3"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cách mạng 3.0
                </Link>
              </li>
              <li>
                <Link
                  to="/revolution-4"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cách mạng 4.0
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Tài nguyên
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/quiz"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Liên hệ
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DaoNQ1408"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Dự án học thuật<br />
              FPTU - MLN122
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Industry Unfolded. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

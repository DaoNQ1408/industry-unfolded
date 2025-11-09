import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { revolutionsData } from "@/data/revolutionsData";
import { ArrowRight, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4">
            <Zap className="h-12 w-12 text-secondary animate-pulse" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground">
            4 Cuộc Cách Mạng Công Nghiệp
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Khám phá hành trình phát triển công nghệ từ máy hơi nước đến trí tuệ nhân tạo
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/revolution-1">
              Bắt đầu khám phá <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Revolutions Grid */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Các cuộc cách mạng công nghiệp
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {revolutionsData.map((revolution, index) => (
            <Link key={revolution.id} to={`/revolution-${revolution.id}`}>
              <Card className="p-6 h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1 cursor-pointer group">
                <div className={`w-12 h-12 rounded-full bg-${revolution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl font-bold text-white">{revolution.id}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {revolution.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{revolution.period}</p>
                <p className="text-sm text-foreground/80">{revolution.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="container mx-auto py-16 px-4">
        <Card className="bg-gradient-primary p-8 text-center shadow-medium">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
            Kiểm tra kiến thức của bạn
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Hoàn thành bài kiểm tra để đánh giá mức độ hiểu biết của bạn về 4 cuộc cách mạng công nghiệp
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/quiz">
              Làm bài kiểm tra <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;

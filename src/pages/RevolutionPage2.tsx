import { useParams, Navigate } from "react-router-dom";
import { revolutionsData } from "@/data/revolutionsData";
import Timeline from "@/components/Timeline";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const RevolutionPage2 = () => {
  const { id } = useParams<{ id: string }>();
  const revolutionId = parseInt(id || "2");

  const revolution = revolutionsData.find(r => r.id === revolutionId);

  if (!revolution) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto py-12 px-4">
        {/* Header */}
        <Card className="p-8 mb-12 shadow-soft">
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-full bg-${revolution.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-3xl font-bold text-white">{revolution.id}</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">
                {revolution.title} - {revolution.engTitle}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{revolution.period} | {revolution.location}</p>
              <p className="text-foreground/80 leading-relaxed">
                {revolution.description}
              </p>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <Timeline events={revolution.events} color={revolution.color} />
      </div>
    </div>
  );
};

export default RevolutionPage2;

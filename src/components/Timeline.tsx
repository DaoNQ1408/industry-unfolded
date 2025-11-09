import { useState } from "react";
import { Event } from "@/data/revolutionsData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TimelineProps {
  events: Event[];
  color: string;
}

const Timeline = ({ events, color }: TimelineProps) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(events[0] || null);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Timeline */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Dòng thời gian</h3>
        <div className="relative">
          {/* Vertical line */}
          <div className={cn("absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-border to-transparent")} />
          
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={cn(
                  "relative pl-12 cursor-pointer transition-all duration-300",
                  selectedEvent?.id === event.id ? "scale-105" : "hover:scale-102"
                )}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute left-0 w-8 h-8 rounded-full border-4 border-background transition-all duration-300",
                    selectedEvent?.id === event.id
                      ? `bg-${color} shadow-medium`
                      : "bg-muted hover:bg-muted-foreground/20"
                  )}
                />
                
                <Card
                  className={cn(
                    "p-4 transition-all duration-300",
                    selectedEvent?.id === event.id
                      ? "shadow-medium border-primary"
                      : "hover:shadow-soft"
                  )}
                >
                  <Badge className={cn("mb-2", selectedEvent?.id === event.id && `bg-${color}`)}>
                    {event.year}
                  </Badge>
                  <h4 className="font-semibold text-foreground">{event.title}</h4>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Detail */}
      <div className="lg:sticky lg:top-24 h-fit">
        {selectedEvent && (
          <Card className="overflow-hidden shadow-medium">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Badge className={`mb-3 bg-${color}`}>
                {selectedEvent.year}
              </Badge>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {selectedEvent.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Timeline;

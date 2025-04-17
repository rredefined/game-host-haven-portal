
import { Cpu, Gauge, Clock, Shield, Server, Cloud, Settings, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "High-Performance Hardware",
    description: "Powered by the latest AMD & Intel CPUs with NVMe SSDs for maximum speed and responsiveness.",
    icon: Cpu,
  },
  {
    title: "Low Latency Network",
    description: "Global server locations ensure minimal ping and a smooth gaming experience for players worldwide.",
    icon: Gauge,
  },
  {
    title: "24/7 Availability",
    description: "Your servers are online around the clock with our 99.9% uptime guarantee and constant monitoring.",
    icon: Clock,
  },
  {
    title: "DDoS Protection",
    description: "Advanced protection systems keep your servers safe from attacks and ensure uninterrupted gameplay.",
    icon: Shield,
  },
  {
    title: "One-Click Deployment",
    description: "Launch your game server in seconds with our easy-to-use control panel and pre-configured templates.",
    icon: Server,
  },
  {
    title: "Scalable Resources",
    description: "Easily upgrade your server resources as your player base grows, without any downtime.",
    icon: Cloud,
  },
  {
    title: "Full Admin Access",
    description: "Complete control over your server with root access, custom mods and configuration options.",
    icon: Settings,
  },
  {
    title: "Unlimited Players",
    description: "Host as many players as your game allows with our flexible plans designed for communities of all sizes.",
    icon: Users,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Premium Features</span> for Serious Gamers
          </h2>
          <p className="text-gray-300 text-lg">
            Our hosting platform is built by gamers, for gamers. Experience the difference with our high-performance servers and gamer-focused features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border border-gray-800 card-glow group">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-game group-hover:text-game-accent transition-colors duration-300" />
                <CardTitle className="text-xl mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

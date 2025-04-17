
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Starter",
    price: "$4.99",
    description: "Perfect for small gaming communities",
    features: [
      "2GB RAM",
      "1 vCPU Core",
      "30GB SSD Storage",
      "1 Game Server",
      "Basic DDoS Protection",
      "Community Support",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Premium",
    price: "$14.99",
    description: "Ideal for growing communities",
    features: [
      "8GB RAM",
      "4 vCPU Cores",
      "100GB NVMe Storage",
      "3 Game Servers",
      "Advanced DDoS Protection",
      "24/7 Priority Support",
      "Automatic Backups",
      "Custom Domain",
    ],
    popular: true,
    buttonText: "Choose Premium",
  },
  {
    name: "Ultimate",
    price: "$29.99",
    description: "For professional gaming communities",
    features: [
      "16GB RAM",
      "8 vCPU Cores",
      "250GB NVMe Storage",
      "Unlimited Game Servers",
      "Enterprise DDoS Protection",
      "24/7 VIP Support",
      "Hourly Backups",
      "Custom Domain",
      "API Access",
      "Dedicated IP Address",
    ],
    popular: false,
    buttonText: "Choose Ultimate",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Choose the plan that fits your needs. All plans include 24/7 server uptime, DDoS protection, and our game-ready control panel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border ${plan.popular ? 'border-game shadow-lg shadow-game/20' : 'border-gray-800'} bg-gray-900/50`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-3 py-1 bg-game rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="ml-1 text-gray-400">/month</span>
                </div>
                <CardDescription className="mt-2 text-gray-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-game shrink-0 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-game hover:bg-game/90' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-900/30 rounded-lg p-8 max-w-3xl mx-auto border border-gray-800">
          <h3 className="text-xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-300 mb-6">
            Contact our sales team for custom plans with dedicated hardware, multi-region deployments, and enterprise support.
          </p>
          <Button className="bg-gradient-game hover:opacity-90">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

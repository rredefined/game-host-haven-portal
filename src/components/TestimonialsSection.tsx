
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Bunnyfoy",
    role: "Minecraft Content Creator",
    content: "RenderByte has transformed our Minecraft SMP. The servers are incredibly fast and the control panel makes management a breeze. Their support team is responsive and actually understands gaming!",
    rating: 5,
    avatar: "https://i.imgur.com/5NEq5u8.jpeg",
  },
  {
    name: "Vexzo Max",
    role: "eSports Team Manager",
    content: "We've tried multiple hosting providers for our CS2 tournaments, but none compare to GameHostHaven. The performance is consistently excellent and the DDoS protection has saved us during critical matches.",
    rating: 5,
    avatar: "https://i.imgur.com/XI8Ye2l.jpeg",
  },
  {
    name: "NighT",
    role: "ArixMC Network Founder",
    content: "Managing servers for our 10,000+ member community used to be a nightmare until we switched to GameHostHaven. Their scalable solutions and automation tools have saved us countless hours of work.",
    rating: 5,
    avatar: "https://i.imgur.com/KYc12Vb.jpeg",
  },
  {
    name: "Jami Pragyan",
    role: "Minecraft Community Owner",
    content: "RenderByte has been amazing for my Minecraft community. The servers are fast, stable, and their support team is always quick to help. Highly recommend!",
    rating: 4,
    avatar: "https://i.imgur.com/Kw4kD05.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-10 relative bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by <span className="text-gradient">Gaming Communities</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Join thousands of satisfied gamers who have chosen our hosting services for their communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900/50 border border-gray-800 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className={`h-5 w-5 ${starIndex < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 border-2 border-game"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

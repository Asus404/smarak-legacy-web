import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Harshwardhan Sawant',
    role: '3D Artist',
    description: 'Creating stunning 3D models and AR experiences'
  },
  {
    name: 'Narayani Ahire',
    role: 'Game Developer',
    description: 'Building immersive interactive experiences'
  },
  {
    name: 'Shubham Gharte',
    role: 'Backend Developer',
    description: 'Engineering robust server architecture'
  },
  {
    name: 'Unnati Girase',
    role: 'UI/UX Designer',
    description: 'Crafting beautiful user experiences'
  },
  {
    name: 'Vaibhav Sonawane',
    role: 'Mobile Developer',
    description: 'Developing native mobile applications'
  },
  {
    name: 'Yash Thorat',
    role: 'Project Manager',
    description: 'Leading the team to success'
  }
];

export const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-gradient">
            About Smarak AR
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To bring heritage into the digital age — preserving the past, inspiring the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="leading-relaxed">
                Smarak AR reimagines how we connect with India's heritage by blending culture with cutting-edge technology. 
                We're creating an immersive platform that brings monuments to life through augmented reality, making history 
                accessible and engaging for everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="leading-relaxed">
                We envision a world where technology bridges the gap between past and present, where every monument tells 
                its story in vivid detail, and where communities come together to preserve and celebrate our shared heritage 
                for future generations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-gradient">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="shadow-soft hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full gradient-heritage flex items-center justify-center text-3xl font-serif font-bold text-white mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <CardTitle className="font-serif text-xl">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="shadow-soft gradient-heritage text-white">
          <CardContent className="p-12 text-center">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Join Our Journey
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Be part of our mission to preserve India's heritage through technology. 
              Whether you're a developer, designer, historian, or heritage enthusiast, we'd love to hear from you.
            </p>
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;

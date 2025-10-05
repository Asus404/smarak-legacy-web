import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Hotel, MapPin, Calendar, ExternalLink } from 'lucide-react';

export const PlanTrip = () => {
  const affiliatePartners = [
    {
      name: 'MakeMyTrip',
      description: 'Book flights, hotels, and holiday packages',
      icon: Plane,
      url: 'https://www.makemytrip.com'
    },
    {
      name: 'Goibibo',
      description: 'Find best deals on flights and accommodations',
      icon: Hotel,
      url: 'https://www.goibibo.com'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Plan Your Heritage Journey
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover and book your cultural exploration with our trusted partners
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Travel Partners</CardTitle>
              <CardDescription>
                We've partnered with leading travel platforms to help you plan seamless journeys to India's heritage sites.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {affiliatePartners.map((partner) => {
                const Icon = partner.icon;
                return (
                  <div 
                    key={partner.name}
                    className="flex items-center justify-between p-4 rounded-lg border hover:shadow-soft transition-smooth"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full gradient-heritage flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{partner.name}</h3>
                        <p className="text-sm text-muted-foreground">{partner.description}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => window.open(partner.url, '_blank')}
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-full gradient-sunset flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="font-serif">Curated Itineraries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore specially designed heritage trails that take you through the best monuments in each region.
                </p>
                <Button variant="outline" className="w-full">Coming Soon</Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-full gradient-royal flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="font-serif">Best Time to Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get personalized recommendations on the best seasons and times to visit each monument for optimal experience.
                </p>
                <Button variant="outline" className="w-full">View Calendar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;

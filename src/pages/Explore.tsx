import { useState } from 'react';
import { Search, MapPin, Calendar, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import tajMahal from '@/assets/taj-mahal.jpg';
import gatewayOfIndia from '@/assets/gateway-of-india.jpg';
import hampi from '@/assets/hampi.jpg';
import qutubMinar from '@/assets/qutub-minar.jpg';

interface Monument {
  id: string;
  name: string;
  location: string;
  state: string;
  period: string;
  image: string;
  description: string;
  builtBy: string;
  yearBuilt: string;
  bestTimeToVisit: string;
  rating: number;
}

const monuments: Monument[] = [
  {
    id: '1',
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    state: 'Uttar Pradesh',
    period: 'Mughal Era',
    image: tajMahal,
    description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna, built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. A UNESCO World Heritage Site and one of the New Seven Wonders of the World.',
    builtBy: 'Emperor Shah Jahan',
    yearBuilt: '1632-1653',
    bestTimeToVisit: 'October to March',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Gateway of India',
    location: 'Mumbai, Maharashtra',
    state: 'Maharashtra',
    period: 'British Era',
    image: gatewayOfIndia,
    description: 'An arch-monument built in the 20th century in Mumbai, India. It was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911.',
    builtBy: 'British Government',
    yearBuilt: '1924',
    bestTimeToVisit: 'November to February',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Hampi',
    location: 'Hampi, Karnataka',
    state: 'Karnataka',
    period: 'Vijayanagara Empire',
    image: hampi,
    description: 'A UNESCO World Heritage Site featuring ruins of the Vijayanagara Empire. The site has temples and other structures amid spectacular boulder-strewn hills and valleys.',
    builtBy: 'Vijayanagara Kings',
    yearBuilt: '14th-16th Century',
    bestTimeToVisit: 'October to February',
    rating: 4.8
  },
  {
    id: '4',
    name: 'Qutub Minar',
    location: 'Delhi',
    state: 'Delhi',
    period: 'Medieval Period',
    image: qutubMinar,
    description: 'A 73-metre tall tapering tower with five storeys, built in 1193 by Qutab-ud-din Aibak. It is an excellent example of Indo-Islamic architecture and a UNESCO World Heritage Site.',
    builtBy: 'Qutub-ud-din Aibak',
    yearBuilt: '1193',
    bestTimeToVisit: 'October to March',
    rating: 4.6
  }
];

export const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null);

  const filteredMonuments = monuments.filter(monument =>
    monument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    monument.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    monument.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Explore Heritage Sites
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover India's magnificent monuments and their stories
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by name, location, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMonuments.map((monument) => (
            <Card 
              key={monument.id} 
              className="overflow-hidden shadow-soft hover:shadow-glow transition-smooth cursor-pointer group"
              onClick={() => setSelectedMonument(monument)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={monument.image} 
                  alt={monument.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {monument.rating}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-serif">{monument.name}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {monument.location}
                </div>
              </CardHeader>

              <CardFooter className="flex gap-2">
                <Badge variant="secondary">{monument.state}</Badge>
                <Badge variant="outline">{monument.period}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Monument Detail Modal */}
        <Dialog open={!!selectedMonument} onOpenChange={() => setSelectedMonument(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedMonument && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl">
                    {selectedMonument.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <img 
                    src={selectedMonument.image} 
                    alt={selectedMonument.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{selectedMonument.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Built</p>
                        <p className="font-medium">{selectedMonument.yearBuilt}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedMonument.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Built By</h4>
                      <p className="text-muted-foreground">{selectedMonument.builtBy}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                      <p className="text-muted-foreground">{selectedMonument.bestTimeToVisit}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full">Plan Your Visit</Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Explore;

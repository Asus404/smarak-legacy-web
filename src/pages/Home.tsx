import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-ar-showcase.jpg';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-sunset opacity-20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-gradient">
              Smarak AR
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90 max-w-2xl mx-auto">
              Bring heritage to life. Explore, learn, and contribute to the preservation of our monuments through Augmented Reality.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/explore">
                <Button size="lg" className="gap-2 shadow-glow">
                  Explore Heritage
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/community">
                <Button size="lg" variant="outline" className="gap-2">
                  Join Community
                  <Users className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 text-primary rotate-90" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="font-serif text-5xl font-bold text-center mb-16 text-gradient">
            App Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 shadow-soft transition-smooth hover:shadow-glow group">
              <div className="w-16 h-16 rounded-full gradient-heritage flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Interactive 3D Models</h3>
              <p className="text-muted-foreground">
                Experience monuments in stunning augmented reality with detailed 3D reconstructions that bring history to your fingertips.
              </p>
            </div>

            <div className="card p-8 shadow-soft transition-smooth hover:shadow-glow group">
              <div className="w-16 h-16 rounded-full gradient-sunset flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Audio Storytelling</h3>
              <p className="text-muted-foreground">
                Listen to captivating narratives that unveil the rich history, legends, and cultural significance of each monument.
              </p>
            </div>

            <div className="card p-8 shadow-soft transition-smooth hover:shadow-glow group">
              <div className="w-16 h-16 rounded-full gradient-royal flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Community Powered</h3>
              <p className="text-muted-foreground">
                Contribute photos, share reviews, and support preservation efforts. Together, we protect our heritage for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 gradient-heritage">
        <div className="container mx-auto text-center text-white">
          <h2 className="font-serif text-5xl font-bold mb-6">
            Download Smarak AR Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Available on iOS and Android. Start your augmented reality journey through India's magnificent heritage.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Download on App Store
            </Button>
            <Button size="lg" variant="secondary">
              Get it on Google Play
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

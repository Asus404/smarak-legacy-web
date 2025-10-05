import { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import merchandiseBanner from '@/assets/merchandise-banner.jpg';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Taj Mahal Miniature',
    category: 'Miniatures',
    price: 1499,
    image: merchandiseBanner,
    description: 'Handcrafted marble miniature replica'
  },
  {
    id: '2',
    name: 'Heritage Wall Frame',
    category: 'Frames',
    price: 899,
    image: merchandiseBanner,
    description: 'Premium quality framed art print'
  },
  {
    id: '3',
    name: 'Monument Art Print',
    category: 'Posters',
    price: 499,
    image: merchandiseBanner,
    description: 'Limited edition art print'
  },
  {
    id: '4',
    name: 'Heritage T-Shirt',
    category: 'Apparel',
    price: 799,
    image: merchandiseBanner,
    description: 'Premium cotton with monument design'
  }
];

export const Merchandise = () => {
  const [cart, setCart] = useState<string[]>([]);
  const { toast } = useToast();

  const addToCart = (productId: string, productName: string) => {
    setCart([...cart, productId]);
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div 
          className="relative h-64 rounded-2xl overflow-hidden mb-12 shadow-soft"
          style={{ backgroundImage: `url(${merchandiseBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="font-serif text-5xl font-bold mb-4">Heritage Store</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Every purchase supports local artisans and contributes to preservation funds
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold">Shop Products</h2>
            <p className="text-muted-foreground">Discover heritage-inspired crafts and memorabilia</p>
          </div>
          <Button className="gap-2">
            <ShoppingCart className="w-5 h-5" />
            Cart ({cart.length})
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-smooth group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 rounded-full"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {product.category}
                </Badge>
                <CardTitle className="font-serif">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardHeader>

              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                <Button 
                  size="sm" 
                  className="gap-2"
                  onClick={() => addToCart(product.id, product.name)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merchandise;

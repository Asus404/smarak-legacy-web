import { useState } from 'react';
import { Heart, MessageSquare, Upload, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Community = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const { toast } = useToast();

  const campaigns = [
    {
      id: '1',
      name: 'Taj Mahal Restoration',
      raised: 450000,
      goal: 1000000,
      supporters: 342
    },
    {
      id: '2',
      name: 'Hampi Heritage Conservation',
      raised: 280000,
      goal: 500000,
      supporters: 198
    }
  ];

  const handleDonate = () => {
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank you for your contribution!",
      description: `Your donation of ₹${donationAmount} will help preserve our heritage.`
    });
    setDonationAmount('');
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Community Hub
          </h1>
          <p className="text-xl text-muted-foreground">
            Be part of something bigger. Help preserve our heritage for future generations.
          </p>
        </div>

        <Tabs defaultValue="donate" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="donate">
              <Heart className="w-4 h-4 mr-2" />
              Donate
            </TabsTrigger>
            <TabsTrigger value="contribute">
              <Upload className="w-4 h-4 mr-2" />
              Contribute
            </TabsTrigger>
            <TabsTrigger value="feedback">
              <MessageSquare className="w-4 h-4 mr-2" />
              Feedback
            </TabsTrigger>
          </TabsList>

          <TabsContent value="donate" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {campaigns.map((campaign) => {
                const percentage = (campaign.raised / campaign.goal) * 100;
                return (
                  <Card key={campaign.id} className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="font-serif">{campaign.name}</CardTitle>
                      <CardDescription>{campaign.supporters} supporters</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{percentage.toFixed(0)}%</span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-sm text-muted-foreground">Raised</p>
                          <p className="text-2xl font-bold text-primary">₹{campaign.raised.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Goal</p>
                          <p className="text-lg font-semibold">₹{campaign.goal.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif">Make a Donation</CardTitle>
                <CardDescription>
                  Your contribution helps fund restoration and preservation efforts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setDonationAmount('500')}>₹500</Button>
                  <Button variant="outline" onClick={() => setDonationAmount('1000')}>₹1000</Button>
                  <Button variant="outline" onClick={() => setDonationAmount('5000')}>₹5000</Button>
                </div>
                <Button className="w-full" onClick={handleDonate}>
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contribute" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif">Upload Photos for Photogrammetry</CardTitle>
                <CardDescription>
                  Help us create accurate 3D models by uploading high-quality photos of monuments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop your images here, or click to browse
                  </p>
                  <Button variant="outline">Choose Files</Button>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Photo Quality Guidelines:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Minimum resolution: 12 MP</li>
                    <li>• Clear focus, minimal blur</li>
                    <li>• Multiple angles of the same structure</li>
                    <li>• Good lighting conditions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif">Share Your Review</CardTitle>
                <CardDescription>
                  Tell us about your experience visiting heritage sites
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-secondary fill-secondary cursor-pointer" />
                  ))}
                </div>
                <Textarea placeholder="Share your experience..." rows={4} />
                <Button className="w-full">Submit Review</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif">Send Us Your Feedback</CardTitle>
                <CardDescription>
                  Help us improve Smarak AR with your suggestions and ideas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your feedback or suggestions..." rows={6} />
                </div>
                <Button className="w-full">Submit Feedback</Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif">Report an Issue</CardTitle>
                <CardDescription>
                  Found a problem? Let us know and we'll fix it
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="issue-type">Issue Type</Label>
                  <Input id="issue-type" placeholder="E.g., Incorrect information, broken link" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="issue-details">Details</Label>
                  <Textarea id="issue-details" placeholder="Describe the issue..." rows={4} />
                </div>
                <Button className="w-full" variant="destructive">Report Issue</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;

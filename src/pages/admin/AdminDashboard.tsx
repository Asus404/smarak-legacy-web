import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, Eye, Download, Heart, ShoppingBag, TrendingUp, 
  FileText, Image, LogOut, BarChart3, Database
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('adminAuth');
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.setItem('smarakMode', 'user');
    navigate('/');
  };

  const metrics = [
    { label: 'Total Visits', value: '45,231', icon: Eye, trend: '+12.5%' },
    { label: 'App Downloads', value: '12,450', icon: Download, trend: '+8.2%' },
    { label: 'User Registrations', value: '8,923', icon: Users, trend: '+15.3%' },
    { label: 'Active Donations', value: '₹7.3L', icon: Heart, trend: '+20.1%' },
    { label: 'Merchandise Sales', value: '₹2.8L', icon: ShoppingBag, trend: '+18.7%' },
    { label: 'Revenue This Month', value: '₹10.1L', icon: TrendingUp, trend: '+22.4%' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-serif text-4xl font-bold text-gradient mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage content, monitor analytics, and oversee community contributions
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="cms">
              <FileText className="w-4 h-4 mr-2" />
              CMS
            </TabsTrigger>
            <TabsTrigger value="community">
              <Users className="w-4 h-4 mr-2" />
              Community
            </TabsTrigger>
            <TabsTrigger value="photogrammetry">
              <Image className="w-4 h-4 mr-2" />
              Photogrammetry
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <Card key={metric.label} className="shadow-soft">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {metric.label}
                      </CardTitle>
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{metric.value}</div>
                      <p className="text-xs text-green-600 mt-1">
                        {metric.trend} from last month
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-serif">Top Heritage Sites</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Taj Mahal', 'Gateway of India', 'Hampi', 'Qutub Minar', 'Red Fort'].map((site, i) => (
                      <div key={site} className="flex justify-between items-center">
                        <span className="text-sm">{i + 1}. {site}</span>
                        <span className="text-sm font-medium text-primary">{(5000 - i * 800).toLocaleString()} views</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-serif">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="text-sm font-medium">New donation received</p>
                        <p className="text-xs text-muted-foreground">₹5,000 for Taj Mahal restoration</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                      <div>
                        <p className="text-sm font-medium">Photos submitted</p>
                        <p className="text-xs text-muted-foreground">12 new images for Hampi</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <p className="text-sm font-medium">Review posted</p>
                        <p className="text-xs text-muted-foreground">5-star review for Gateway of India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cms" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif">Content Management System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 gap-3">
                    <FileText className="w-6 h-6" />
                    <div className="text-left">
                      <p className="font-semibold">Website Cards</p>
                      <p className="text-xs text-muted-foreground">Manage heritage listings</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-20 gap-3">
                    <Database className="w-6 h-6" />
                    <div className="text-left">
                      <p className="font-semibold">AR App Content</p>
                      <p className="text-xs text-muted-foreground">Manage 3D models & audio</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif">Community Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Review submissions, manage feedback, and track community leaderboard.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="photogrammetry" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif">Photogrammetry Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manage image batches and 3D model generation workflow.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

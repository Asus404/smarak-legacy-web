import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Building2, Compass, ShoppingBag, Users, Info, LayoutDashboard, Plane } from 'lucide-react';

export const Navigation = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPath = location.pathname.startsWith('/admin');

  useEffect(() => {
    const savedMode = localStorage.getItem('smarakMode');
    if (savedMode === 'admin') {
      setIsAdminMode(true);
    }
  }, []);

  const handleModeSwitch = (checked: boolean) => {
    setIsAdminMode(checked);
    localStorage.setItem('smarakMode', checked ? 'admin' : 'user');
    
    if (checked) {
      navigate('/admin/login');
    } else {
      navigate('/');
    }
  };

  const userNavItems = [
    { path: '/', label: 'Home', icon: Building2 },
    { path: '/explore', label: 'Explore', icon: Compass },
    { path: '/plan-trip', label: 'Plan Trip', icon: Plane },
    { path: '/merchandise', label: 'Merchandise', icon: ShoppingBag },
    { path: '/community', label: 'Community', icon: Users },
    { path: '/about', label: 'About', icon: Info },
  ];

  const adminNavItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];

  const navItems = isAdminPath ? adminNavItems : userNavItems;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass-panel rounded-full px-6 py-3 shadow-soft transition-smooth">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-primary" />
            <span className="font-serif font-bold text-xl text-gradient">Smarak AR</span>
          </Link>

          {!isAdminPath && (
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      size="sm"
                      className="gap-2 transition-smooth"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
              <Label htmlFor="mode-switch" className="text-sm cursor-pointer">
                {isAdminMode ? 'Admin' : 'User'}
              </Label>
              <Switch
                id="mode-switch"
                checked={isAdminMode}
                onCheckedChange={handleModeSwitch}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

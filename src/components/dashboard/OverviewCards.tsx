
import React from 'react';
import { motion } from 'framer-motion';
import { CustomCard } from '@/components/ui/custom-card';
import { Package, Truck, Users, AlertCircle, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

interface OverviewCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  delay?: number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ 
  title, 
  value, 
  description, 
  icon, 
  trend, 
  trendValue, 
  delay = 0 
}) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUp size={14} className="text-green-500" />;
      case 'down':
        return <ArrowDown size={14} className="text-red-500" />;
      case 'neutral':
      default:
        return <ArrowRight size={14} className="text-wms-500" />;
    }
  };
  
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      case 'neutral':
      default:
        return 'text-wms-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
    >
      <CustomCard variant="elevated" className="h-full">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-wms-500 text-sm font-medium mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-wms-900 mb-1">{value}</h3>
            <p className="text-wms-600 text-xs">{description}</p>
            
            {trend && trendValue && (
              <div className="flex items-center mt-3">
                <span className={`flex items-center text-xs font-medium ${getTrendColor()}`}>
                  {getTrendIcon()}
                  <span className="ml-1">{trendValue}</span>
                </span>
                <span className="ml-2 text-xs text-wms-500">vs last period</span>
              </div>
            )}
          </div>
          <div className="p-3 rounded-lg bg-wms-accent/10 text-wms-accent">
            {icon}
          </div>
        </div>
      </CustomCard>
    </motion.div>
  );
};

interface OverviewCardsProps {
  dashboardType: 'admin' | 'moderator' | 'driver' | 'client';
}

const OverviewCards: React.FC<OverviewCardsProps> = ({ dashboardType }) => {
  const adminCards = [
    {
      title: 'Total Merchandise',
      value: '1,247',
      description: 'Items in warehouse',
      icon: <Package size={20} />,
      trend: 'up' as const,
      trendValue: '12%',
      delay: 0
    },
    {
      title: 'Active Drivers',
      value: '42',
      description: 'Currently on duty',
      icon: <Truck size={20} />,
      trend: 'neutral' as const,
      trendValue: '0%',
      delay: 1
    },
    {
      title: 'Total Clients',
      value: '587',
      description: 'Registered accounts',
      icon: <Users size={20} />,
      trend: 'up' as const,
      trendValue: '8%',
      delay: 2
    },
    {
      title: 'Pending Tasks',
      value: '23',
      description: 'Require attention',
      icon: <AlertCircle size={20} />,
      trend: 'down' as const,
      trendValue: '15%',
      delay: 3
    }
  ];

  const moderatorCards = [
    {
      title: 'Pending Orders',
      value: '18',
      description: 'Needs validation',
      icon: <Package size={20} />,
      trend: 'up' as const,
      trendValue: '5%',
      delay: 0
    },
    {
      title: 'Available Drivers',
      value: '27',
      description: 'Ready for assignment',
      icon: <Truck size={20} />,
      trend: 'neutral' as const,
      trendValue: '2%',
      delay: 1
    },
    {
      title: 'Inspections Required',
      value: '12',
      description: 'Pending controller assignment',
      icon: <AlertCircle size={20} />,
      trend: 'down' as const,
      trendValue: '10%',
      delay: 2
    },
    {
      title: 'Validated Today',
      value: '47',
      description: 'Orders processed',
      icon: <Package size={20} />,
      trend: 'up' as const,
      trendValue: '18%',
      delay: 3
    }
  ];

  const driverCards = [
    {
      title: 'Assigned Tasks',
      value: '5',
      description: 'Current workload',
      icon: <Package size={20} />,
      trend: 'neutral' as const,
      trendValue: '0%',
      delay: 0
    },
    {
      title: 'Completed Today',
      value: '12',
      description: 'Tasks finished',
      icon: <Truck size={20} />,
      trend: 'up' as const,
      trendValue: '25%',
      delay: 1
    },
    {
      title: 'Average Rating',
      value: '4.8',
      description: 'Out of 5.0',
      icon: <Users size={20} />,
      trend: 'up' as const,
      trendValue: '0.2',
      delay: 2
    },
    {
      title: 'Efficiency Score',
      value: '92%',
      description: 'Performance metric',
      icon: <AlertCircle size={20} />,
      trend: 'up' as const,
      trendValue: '3%',
      delay: 3
    }
  ];

  const clientCards = [
    {
      title: 'Active Products',
      value: '28',
      description: 'Currently in storage',
      icon: <Package size={20} />,
      trend: 'up' as const,
      trendValue: '3',
      delay: 0
    },
    {
      title: 'Pending Orders',
      value: '3',
      description: 'Awaiting processing',
      icon: <Truck size={20} />,
      trend: 'neutral' as const,
      trendValue: '0',
      delay: 1
    },
    {
      title: 'In Transit',
      value: '7',
      description: 'Being delivered',
      icon: <AlertCircle size={20} />,
      trend: 'up' as const,
      trendValue: '2',
      delay: 2
    },
    {
      title: 'Storage Usage',
      value: '72%',
      description: 'Of allocated space',
      icon: <Package size={20} />,
      trend: 'up' as const,
      trendValue: '5%',
      delay: 3
    }
  ];

  const getCards = () => {
    switch (dashboardType) {
      case 'admin': 
        return adminCards;
      case 'moderator': 
        return moderatorCards;
      case 'driver': 
        return driverCards;
      case 'client': 
        return clientCards;
      default: 
        return adminCards;
    }
  };

  const cards = getCards();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <OverviewCard key={index} {...card} />
      ))}
    </div>
  );
};

export default OverviewCards;

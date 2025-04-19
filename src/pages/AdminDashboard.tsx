
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, CreditCard, Package, TrendingUp, Clock, Calendar, Zap } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import OverviewCards from '@/components/dashboard/OverviewCards';
import ZoneManagement from '@/components/dashboard/ZoneManagement';
import { CustomCard } from '@/components/ui/custom-card';
import { CustomButton } from '@/components/ui/custom-button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const AdminDashboard: React.FC = () => {
  // Mock data for charts
  const performanceData = [
    { name: 'Jan', drivers: 78, controllers: 65, moderators: 85 },
    { name: 'Feb', drivers: 82, controllers: 70, moderators: 83 },
    { name: 'Mar', drivers: 80, controllers: 72, moderators: 87 },
    { name: 'Apr', drivers: 85, controllers: 75, moderators: 90 },
    { name: 'May', drivers: 83, controllers: 78, moderators: 88 },
    { name: 'Jun', drivers: 87, controllers: 80, moderators: 92 },
    { name: 'Jul', drivers: 91, controllers: 82, moderators: 93 },
    { name: 'Aug', drivers: 89, controllers: 85, moderators: 91 },
    { name: 'Sep', drivers: 92, controllers: 87, moderators: 94 },
    { name: 'Oct', drivers: 90, controllers: 84, moderators: 92 },
    { name: 'Nov', drivers: 93, controllers: 88, moderators: 95 },
    { name: 'Dec', drivers: 95, controllers: 90, moderators: 96 },
  ];

  const zoneSaturationData = [
    { name: 'Zone A', saturation: 75 },
    { name: 'Zone B', saturation: 45 },
    { name: 'Zone C', saturation: 90 },
    { name: 'Zone D', saturation: 60 },
    { name: 'Zone E', saturation: 82 },
    { name: 'Zone F', saturation: 38 },
  ];

  const recentActivities = [
    {
      id: 1,
      activity: 'Zone A-12 reached 90% saturation',
      time: '10 minutes ago',
      icon: <Package size={18} />,
      color: 'text-yellow-500'
    },
    {
      id: 2,
      activity: 'Driver #42 completed 3 tasks ahead of schedule',
      time: '25 minutes ago',
      icon: <Zap size={18} />,
      color: 'text-green-500'
    },
    {
      id: 3,
      activity: 'Controller #7 finished inspection in Cold Storage',
      time: '1 hour ago',
      icon: <Clock size={18} />,
      color: 'text-wms-accent'
    },
    {
      id: 4,
      activity: 'Moderator #3 validated 15 new orders',
      time: '2 hours ago',
      icon: <Users size={18} />,
      color: 'text-purple-500'
    },
    {
      id: 5,
      activity: 'System update: Zone mapping optimized',
      time: '3 hours ago',
      icon: <TrendingUp size={18} />,
      color: 'text-blue-500'
    }
  ];

  return (
    <DashboardLayout title="Administrator Dashboard" dashboardType="admin">
      <div className="space-y-6">
        <OverviewCards dashboardType="admin" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <CustomCard variant="elevated" className="h-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-wms-900">Performance Metrics</h3>
                  <p className="text-sm text-wms-500">Role-based efficiency over time</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <select className="text-sm border border-wms-200 rounded-md py-1.5 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-wms-accent focus:border-transparent">
                    <option>Last 12 Months</option>
                    <option>Last 6 Months</option>
                    <option>Last 3 Months</option>
                  </select>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={performanceData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                    <YAxis stroke="#64748b" fontSize={12} tickFormatter={(value) => `${value}%`} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
                      }}
                      formatter={(value) => [`${value}%`, '']}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="drivers" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="controllers" stroke="#10b981" strokeWidth={2} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="moderators" stroke="#8b5cf6" strokeWidth={2} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <CustomCard variant="elevated" className="h-full">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-wms-900">Recent Activity</h3>
                  <p className="text-sm text-wms-500">Latest events in the warehouse</p>
                </div>
                <div>
                  <button className="text-wms-accent text-sm font-medium hover:underline">
                    View All
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className={`p-2 rounded-full ${activity.color.replace('text', 'bg')}/10 ${activity.color} mr-3 mt-0.5`}>
                      {activity.icon}
                    </div>
                    <div>
                      <p className="text-wms-700 text-sm">{activity.activity}</p>
                      <p className="text-wms-500 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-wms-200">
                <div className="flex items-center">
                  <Calendar size={16} className="text-wms-500 mr-2" />
                  <span className="text-sm text-wms-500">Today, {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </CustomCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <CustomCard variant="elevated">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-wms-900">Zone Saturation</h3>
                <p className="text-sm text-wms-500">Current storage utilization by zone</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <select className="text-sm border border-wms-200 rounded-md py-1.5 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-wms-accent focus:border-transparent">
                  <option>All Zones</option>
                  <option>Rack Storage</option>
                  <option>Bulk Storage</option>
                </select>
              </div>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={zoneSaturationData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} tickFormatter={(value) => `${value}%`} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
                    }}
                    formatter={(value) => [`${value}%`, 'Saturation']}
                  />
                  <Bar 
                    dataKey="saturation" 
                    fill="url(#colorGradient)" 
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3182ce" stopColor="#3182ce" />
                      <stop offset="100%" stopColor="#63b3ed" stopColor="#63b3ed" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CustomCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <ZoneManagement />
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;

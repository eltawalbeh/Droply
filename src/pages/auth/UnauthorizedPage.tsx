import React from 'react';
import { Card, Button } from '../../components/common/UIComponents';
import { useNavigate } from 'react-router';
import { ShieldAlert } from 'lucide-react';

export const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card className="text-center p-8 space-y-4">
      <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
        <ShieldAlert className="w-6 h-6" />
      </div>
      <h2 className="text-lg font-bold text-slate-100">Access Restricted</h2>
      <p className="text-xs text-slate-400">
        Your current role does not have permission to view this section. Use the role switcher at the top to change your role.
      </p>
      <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
        Return to Login
      </Button>
    </Card>
  );
};

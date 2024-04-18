import { useState } from 'react';
import LoginForm from '@/features/auth/ui/LoginForm';
import RegForm from '@/features/auth/ui/RegForm';
import { Button } from '@/shared/component/Button';
import { useAuthStore } from '@/shared/store';

export default function Authentication() {
  const auth = useAuthStore((state) => state.auth);
  return (
    <div className={'flex flex-col w-full h-full'}>
      {auth ? <RegForm /> : <LoginForm />}
    </div>
  );
}

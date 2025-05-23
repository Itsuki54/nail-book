'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export const SignoutButton = () => {
	return <Button onClick={() => signOut()}>Sign Out</Button>;
};

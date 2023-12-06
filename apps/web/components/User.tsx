'use client';

import { Logout as LogoutIcon } from '@mui/icons-material';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { FC } from 'react';

export const User: FC = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-4">
      {session ? (
        <>
          <div className="flex gap-2">
            <div>
              <img height={24} width={24} src={session.user?.image!} />
            </div>
            <div>{session.user?.email}</div>
          </div>
          <button onClick={() => signOut()}>
            <LogoutIcon />
          </button>
        </>
      ) : (
        <Link href="signin">Sign In</Link>
      )}
    </div>
  );
};

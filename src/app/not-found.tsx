import { Metadata } from 'next';
import * as React from 'react';
import { RiAlarmWarningFill as RiAlarm } from 'react-icons/ri';
const AlarmIcon = RiAlarm as React.ComponentType<{
  size?: string | number;
  className?: string;
}>;

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <AlarmIcon
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          <a href='/'>Back to home</a>
        </div>
      </section>
    </main>
  );
}

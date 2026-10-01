import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return (
    <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-b border-gray-200 flex flex-row items-center justify-between px-5">
      <div className="flex flex-row items-center h-full">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>
      <div className="flex flex-row items-center h-full">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
          className="h-full w-auto py-1"
        />
      </div>
    </div>
  );
}

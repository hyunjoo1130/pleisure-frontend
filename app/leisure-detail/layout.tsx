import React from 'react';
import Header from '../components-hj/leisure-detail/organisms/Header';
import { STORE_POST_DATA } from '../libs-hj/data/STORE_POST_DATA';
import Button from '../components-hj/leisure-detail/atoms/Button';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen bg-grayBg">
      <div className="container relative max-w-md min-w-[360px] m-auto text-grayTxt pb-24 bg-white">
        <Header
          storeName={STORE_POST_DATA.storeName}
          storeImageUrl={STORE_POST_DATA.storeImageUrls![0]}
          address={STORE_POST_DATA.storeAddress}
        />
        {children}
        {/* 예약하기 버튼 */}
        <Button
          divStyle="fixed z-50 w-full max-w-md rounded-t-lg bottom-2 reservation-btn shadow-[0_-5px_5px_0_rgba(87,83,78,0.2)]"
          buttonStyle="w-full h-[3.5rem] text-white bg-cyanTxt btn btn-active border-1 border-cyanTxt hover:border-cyanTxt hover:bg-cyanTxt text-xl"
          content="예약하기"
          linkHref="/reservation"
        />
        <div className="spacing fixed bottom-0 bg-white opacity-[80%] max-w-md w-full h-10"></div>
      </div>
    </div>
  );
}

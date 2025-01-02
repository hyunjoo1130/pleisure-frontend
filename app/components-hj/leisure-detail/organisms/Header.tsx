'use client';

import React, { useEffect, useState } from 'react';
import Icon from '../atoms/Icon';

declare global {
  interface Window {
    Kakao: any;
  }
}

type HeaderProps = {
  storeName: string | undefined;
  storeImageUrl?: string;
  address?: string;
};

export default function Header({
  storeName,
  storeImageUrl,
  address,
}: HeaderProps) {
  const [showLinkCopyAlert, setShowLinkCopyAlert] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    const kakaoSdk = document.createElement('script');
    kakaoSdk.defer = true;
    kakaoSdk.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    kakaoSdk.onload = function () {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    };
    document.head.appendChild(kakaoSdk);
  }, []);

  let currentUrl = document.location.href;

  function copyLink() {
    let t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = currentUrl;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);

    setShowLinkCopyAlert(true);
    // 일정시간 지나면, 알림창 사라지기
    setTimeout(() => {
      setShowLinkCopyAlert(false);
    }, 2000);
  }

  // 카카오 공유하기 => 공유할 템플릿 컨텐트
  function kakaoShare() {
    window.Kakao.Share.sendDefault({
      objectType: 'location',
      address: address,
      addressTitle: storeName,
      content: {
        title: storeName,
        imageUrl:
          'https://github.com/Pleisure/frontend/assets/58460131/2fd4bfd8-89d3-47e0-8b60-8f8c57d500db',
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
      social: {
        likeCount: 10,
        commentCount: 5,
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
      ],
    });
  }

  return (
    <header className="flex items-center justify-between px-5 pt-6 mb-4 previous">
      <div className="flex items-center cursor-pointer w-9 h-9">
        <Icon
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathD="M15 19l-7-7 7-7"
        />
      </div>
      <p className="max-w-[240px] overflow-hidden text-xl font-bold text-center break-all title-txt text-ellipsis">
        {storeName}
      </p>
      <div
        className="relative items-center cursor-pointer share w-9 h-9"
        onClick={() => setShowShareModal(!showShareModal)}
      >
        <Icon
          className="w-6 h-6 shareIcon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathD="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </div>

      {/* 링크버튼 클릭 시, 복사 완료 알림창 */}
      {showLinkCopyAlert && (
        <div className="fixed left-[50%] -translate-x-[50%] w-36 text-sm bg-white border-[1px] border-[#ccc] rounded-md z-[103] shadow-md opacity-[97%]">
          <div className="flex items-center justify-center px-4 py-2">
            <Icon
              className="w-5 h-5 mr-1 text-cyanTxt"
              viewBox="0 0 20 20"
              fill="currentColor"
              pathD="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
            <p>링크 복사 완료</p>
          </div>
        </div>
      )}

      {/* 공유버튼 클릭하면 나오는 상단모달 */}
      {showShareModal && (
        <div className="shareModal fixed top-0 left-[50%] -translate-x-[50%] max-w-md w-[240px] bg-white border-[1px] border-[#eee] border-t-0 z-[102] pt-5 pb-7 rounded-b-lg shadow-md">
          <p className="text-lg font-bold text-center">공유하기</p>
          <div className="flex items-center justify-center gap-5 mt-5 shareBox">
            <div
              className="flex justify-center items-center w-12 h-12 bg-[#ffeb02] cursor-pointer rounded-full kakaoLogo"
              onClick={() => kakaoShare()}
            >
              <img
                src="/images-hj/leisure-detail/kakao-logo.png"
                className="w-[80%] rounded-full"
              />
            </div>
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-grayBg copyLink"
              onClick={() => copyLink()}
            >
              <Icon
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathD="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .title-txt {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </header>
  );
}

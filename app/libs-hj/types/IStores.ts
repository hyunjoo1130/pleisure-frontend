export interface IStores {
  storeId?: string;
  storeImageUrls?: string[];
  storeName?: string; // storeName이 storeContent
  storeStatus?: 'OPENNING' | 'CLOSING' | 'SHUT_DOWN';
  storeCategories?: {
    categoryLevel: number;
    categoryName: string;
  };
  storeAverageRating?: number;
  storeReviewCount?: number;
  storeBusinessHours?: {
    // 오늘을 기준으로 일주일의 영업시간을 나타냅니다. 예를 들어, 오늘이 토요일이면 토, 일, 월, 화, 수, 목, 금 순으로 영업시간을 나열합니다.

    dayOfWeek?: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
    businessHourStatus?: 'OPENED' | 'CLOSED';
    // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
    // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
    openingHours?: string; // (“HH:MM” 24시간 기준)
    closingHours?: string; // (“HH:MM” 24시간 기준)
    breakTimes?: [
      {
        breakTimeStart: string; // (“HH:MM” 24시간 기준)
        breakTimeEnd: string; // (“HH:MM” 24시간 기준)
      }
    ];
  }[];
  storeAddress?: string;
  storeLatitude?: number;
  storeLongitude?: number;
  storePhone?: string;
  storeReservationUrl?: string;
}

export interface IReviewSummerize {
  totalRatingAverage: number;
  numOfFiveStars: number;
  numOfFourStars: number;
  numOfThreeStars: number;
  numOfTwoStars: number;
  numOfOneStars: number;
}

export interface IReviewList {
  reviewWriterNickname: string;
  reviewWriterProfilePictureUrl: string;
  reviewWriterAge: number;
  reviewWriterGender: 'MALE' | 'FEMALE';
  storeReviewId: string;
  storeReviewRating: number; // (1 ~ 5)
  storeReviewContent: string; // (max 400)
  storeReviewPhotoUrls: { id: number; imgUrl: string }[]; // * ✅ 내가 임의로 객체타입 만듬
  createdAt: string; //"2023-07-29T12:00:00.000Z"
}

export interface IVisitorPost {
  postId: string;
  postPhotoUrl: { id: number; imgUrl: string }[]; // * ✅ 내가 임의로 객체타입 만듬
}

export interface ICEOInfo {
  ceoName: string;
  ceoPhone: string; //000-0000-0000
  ceoEmail: string;
  ceoAddress: string;
  businessName: string;
  businessRegNumber: string; // 사업자번호. 000-00-00000.
}

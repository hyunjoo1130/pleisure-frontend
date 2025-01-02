import { IStores } from '@/app/libs-hj/types/IStores';

export const STORE_POST_DATA: IStores = {
  storeId: '1',
  storeImageUrls: [
    '/images-hj/leisure-detail/test-slide-img1.jpeg',
    '/images-hj/leisure-detail/test-slide-img2.jpeg',
    '/images-hj/leisure-detail/test-slide-img3.jpeg',
    '/images-hj/leisure-detail/test-slide-img1.jpeg',
    '/images-hj/leisure-detail/test-slide-img2.jpeg',
  ],
  storeName: '핫한 여름, 가평빠지월드가 더 핫해진 익스트림 레저로 초대합니다.',
  storeStatus: 'OPENNING',
  storeCategories: {
    categoryLevel: 2,
    categoryName: '수상레저',
  },
  storeAverageRating: 4.8,
  storeReviewCount: 471,
  storeBusinessHours: [
    // 오늘을 기준으로 일주일의 영업시간을 나타냅니다. 예를 들어, 오늘이 토요일이면 토, 일, 월, 화, 수, 목, 금 순으로 영업시간을 나열합니다.
    {
      dayOfWeek: 'MON',
      businessHourStatus: 'CLOSED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
    },
    {
      dayOfWeek: 'TUE',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'WED',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'THU',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'FRI',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'SAT',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'SUN',
      businessHourStatus: 'CLOSED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
    },
  ],
  storeAddress: '경기 가평군 가평읍 북한강변로 274-22',
  storeLatitude: 37.752532,
  storeLongitude: 127.535929,
  storePhone: '010-1234-5678',
  storeReservationUrl: 'http://localhost:3000/leisure-detail#',
};

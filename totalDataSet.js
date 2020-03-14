// 업데이트 일시 함수(자동)
var updateTarget = document.getElementById("text-update-datetime");
updateTarget.innerHTML = koreaRegionalData[koreaRegionalData.length-1]['업데이트날짜'];

//세계지도에 표시할 데이터 추가, 아래 데이터는 메인페이지 최상단 데이터와 연결되어 있음(자동)
marker.push({
  "Name": "한국",
  "Name_en": "Korea, Republic of",
  "Name_ch": "韩国",
  "lat": 37.5456299,
  "lng": 126.9540667,
  "확진자수": koreaRegionalData[0]['확진자수'],
  "사망자수": koreaRegionalData[0]['사망자수'],
  "완치자수": koreaRegionalData[0]['격리해제수'],
  "십만명당발생율": koreaRegionalData[0]['십만명당발생율']
})


for (var i = 0; i < koreaRegionalData.length; i++) {
  if(koreaRegionalData[i]['지역이름'] == '제주'){
    marker.push({
      "Name": "제주",
      "Name_en": "Jeju",
      "Name_ch": "濟州",
      "lat": 33.50972,
      "lng": 126.52194,
      "확진자수": koreaRegionalData[i]['확진자수'],
      "사망자수": koreaRegionalData[i]['사망자수'],
      "완치자수": koreaRegionalData[i]['격리해제수'],
    })
    // console.log(koreaRegionalData[i]['확진자수'], koreaRegionalData[i]['사망자수'], koreaRegionalData[i]['격리해제수'])
  }
}

/////////////// 업데이트 방법 //////////////
// 1. 아래 데이터는 민감데이터로 크롤링에 의존하지 않는 데이터입니다.
//    긴급할 경우 아래 데이터만 수정하여 push 해주세요.
// 2. 크롤러_통합.py를 실행시키시고, 모두 push해주시면 됩니다.
//    크롤러_세계확진자.js, koreaRegionalData.js가 뽑힙니다.
// 3. 크롤러가 동작하지 않을 경우 수동업데이트해야 합니다.
// 4. 지역별 현황 사이트(질병관리본부 홈페이지) : http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=
// 5. 세계 현황 사이트 : https://www.worldometers.info/coronavirus/
//     개수가 많아 긴급할 경우 Top 5 정도만 업데이트 부탁드립니다.
////////////////////////////////////////////


// 선차트용 데이터 세계 확진자수, 세계 사망자수, 세계 완치자수
// 세계 확진자수, 세계 사망자수는 질병관리본부 데이터 근거
// 세계 완치자수는 존스 홉킨스 코로나 맵 데이터에 근거


// 존스홉킨스 : https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6

// 질본 : http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=&brdGubun=&ncvContSeq=&contSeq=&board_id=&gubun=
// data : 확진환자
// data2 : 사망
// 3월 12일부터 존스홉킨스 데이터만 참고

var marker2 = {
  //날짜
  labels: ["1/24", "1/25", "1/26", "1/27", "1/28", "1/29", "1/30", "1/31", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9", "2/10", "2/11", "2/12", "2/13", "2/14", "2/15", "2/16", "2/17", "2/18", "2/19", "2/20", "2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27", "2/28", "2/29", "3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3/7", "3/8", "3/9", "3/10", "3/11", "3/12"],
  //전세계 확진환자
  data: [845, 1315, 2010, 2794, 4576, 6056, 7812, 9812, 11925, 14550, 17378, 20619, 24524, 28253, 31422, 34929, 37607, 40597, 43099, 45260, 59287, 64420, 67097, 69195, 71673, 73326, 75196, 75710, 76563, 77778, 78346, 78595, 80294, 81467, 82227,
    83706, //2월 28일
    85329, //2월 29일
    87199, //3월 1일
    89217, //3월 2일
    90920, //3월 3일
    93036, //3월 4일
    95479, //3월 5일
    98875, //3월 6일
    102050, //3월 7일
    104144, //3월 8일
    110094, //3월 9일
    118947, //3월 10일
    126135, //3월 11일
    134769, //3월 12일
    145267, //3월 13일
  ],
  //사망자
  data2: [25, 41, 56, 80, 106, 132, 170, 213, 259, 304, 362, 426, 492, 565, 638, 724, 813, 910, 1016, 1115, 1115, 1382, 1526, 1669, 1775, 1873, 2009, 2124, 2246, 2359, 2456, 2612, 2707, 2766, 2801,
    2860, //2월 28일
    2924, //2월 29일
    2980, //3월 1일
    3058, //3월 2일
    3125, //3월 3일
    3168, //3월 4일
    3288, //3월 5일
    3393, //3월 6일
    3494, //3월 7일
    3526, //3월 8일
    3829, //3월 9일
    4296, //3월 10일
    4630, //3월 11일
    4983, //3월 12일
    5411, //3월 13일
  ],
  //완치자
  data3: [36, 49, 54, 63, 110, 133, 141, 220, 284, 487, 621, 899, 1100, 1500, 2000, 2600, 3200, 3300, 3957, 4849, 5924, 6982, 8158, 9600, 10892, 12604, 14417, 16195, 18327, 20707, 23377, 25038, 27806, 30199, 32898,
    36636, //2월 28일
    39448, //2월 29일
    42326, //3월 1일
    45185, //3월 2일
    48129, //3월 3일
    48596, //3월 4일
    53688, //3월 5일
    55696, //3월 6일
    57611, //3월 7일
    58559, //3월 8일
    62298, //3월 9일
    64404, //3월 10일
    68216, //3월 11일
    69516, //3월 12일
    70296, //3월 13일
  ]
}

// 선차트용 데이터 - 제주도청 제공
// 바울랩 메일 참고(업데이트 늦어도 괜찮습니다.)

var 입도객현황 = {
  날짜: ["19년평균", "2/3", "2/4", "2/5", "2/6", "2/8", "2/9", "2/10", "2/11", "2/12", "2/13", "2/16", "2/17", "2/18", "2/19", "2/20", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27",
    "2/29",
    "3/1",
    "3/2",
    "3/3",
    "3/4",
    "3/5",
    "3/7",
    "3/8",
    "3/9",
    "3/10",
    "3/11",
    "3/12",
  ],
  내국인: [37150, 19209, 17633, 15873, 17184, 20488, 18959, 19074, 18922, 18720, 24409, 26120, 25105, 27135, 27247, 29316, 23732, 20508, 16379, 14567, 13978, 13318,
    14855, //2월 29일
    13402, //3월 1일
    15628, //3월 2일
    15668, //3월 3일
    14598, //3월 4일
    15727, //3월 5일
    16015, //3월 7일
    13672, //3월 8일
    15234, //3월 9일
    15637, //3월 10일
    17209, //3월 11일
    17600, //3월 12일
  ],
  외국인: [4729, 1866, 1285, 1247, 1280, 1127, 976, 906, 1003, 755, 793, 769, 639, 453, 623, 815, 762, 613, 524, 598, 351, 383,
    320, //2월 29일
    337, //3월 1일
    270, //3월 2일
    343, //3월 3일
    205, //3월 4일
    222, //3월 5일
    193, //3월 7일
    139, //3월 8일
    137, //3월 9일
    153, //3월 10일
    106, //3월 11일
    118, //3월 12일
  ],
  중국인: [2957, 755, 156, 116, 157, 86, 209, 66, 76, 103, 52, 186, 6, 12, 100, 7, 9, 7, 6, 6, 1, 24,
    33, //2월 29일
    69, //3월 1일
    61, //3월 2일
    54, //3월 3일
    24, //3월 4일
    18, //3월 5일
    13, //3월 7일
    10, //3월 8일
    10, //3월 9일
    5, //3월 10일
    2, //3월 11일
    5, //3월 12일
  ]
}

// This is a bad way to copy, but for now it will suffice.
// 네이버 지도 API가 로드된 후 marker를 수정하기 때문에 일단 copy를 진행하지만 수정이 필요한 코드입니다.
var _marker = JSON.parse(JSON.stringify(marker));


// 업데이트 시간
var 지역별확진자_업데이트_시간 = "";
for (var i = 0; i < koreaRegionalData.length; i++) {
  if(koreaRegionalData[i]['업데이트날짜']){
    지역별확진자_업데이트_시간 = koreaRegionalData[i]['업데이트날짜'];
  }
}


// 한국 확진자 분석을 위한 데이터
// 참고링크 : https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EC%BD%94%EB%A1%9C%EB%82%98%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4%EA%B0%90%EC%97%BC%EC%A6%9D-19_%EC%9C%A0%ED%96%89
// 누적 확진자, 전일차이, 누적 사망자

var 분석차트_한국누적확진자 = [
  ["2/1", 12, 1, 0],
  ["2/2", 15, 3, 0],
  ["2/3", 15, 0, 0],
  ["2/4", 16, 1, 0],
  ["2/5", 19, 3, 0],
  ["2/6", 23, 4, 0],
  ["2/7", 24, 1, 0],
  ["2/8", 24, 0, 0],
  ["2/9", 27, 3, 0],
  ["2/10", 27, 0, 0],
  ["2/11", 28, 1, 0],
  ["2/12", 28, 0, 0],
  ["2/13", 28, 0, 0],
  ["2/14", 28, 0, 0],
  ["2/15", 28, 0, 0],
  ["2/16", 29, 1, 0],
  ["2/17", 30, 1, 0],
  ["2/18", 31, 1, 0],
  ["2/19", 51, 20, 0],
  ["2/20", 104, 53, 1],
  ["2/21", 204, 100, 2],
  ["2/22", 433, 229, 2],
  ["2/23", 602, 169, 6],
  ["2/24", 833, 231, 8],
  ["2/25", 977, 144, 12],
  ["2/26", 1261, 284, 13],
  ["2/27", 1766, 505, 13],
  ["2/28", 2337, 571, 16],
  ["2/29", 3150, 813, 17],
  ["3/1", 4212, 1062, 21],
  ["3/2", 4812, 600, 22],
  ["3/3", 5328, 516, 28],
  ["3/4", 5766, 438, 32],
  ["3/5", 6284, 518, 43],
  ["3/6", 6767, 483, 44],
  ["3/7", 7134, 367, 49],
  ["3/8", 7382, 248, 50],
  ["3/9", 7513, 131, 54],
  ["3/10", 7755, 242, 60],
  ["3/11", 7869, 114, 66],
  ["3/12", 7979, 110, 67]
];

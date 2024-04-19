// 툴팁 연습
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
    function initMap() {
      const uluru = { lat: 25.626141, lng: 121.070385 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: uluru,
      });
  
  // flightPlanCoordinates: 경로1 
  const flightPlanCoordinates = [
    { lat: 10.342425, lng: 107.181647 },
    { lat: 11.287378, lng: 109.122458 },
    { lat: 12.315624, lng: 109.894307 },
    { lat: 13.225530, lng: 110.960465 },
    { lat: 14.326309, lng: 111.707371 },
    { lat: 15.394471, lng: 112.566322 },
    { lat: 16.452633, lng: 113.332487 },
    { lat: 17.287721, lng: 114.560402 },
    { lat: 18.280724, lng: 115.425642 },
    { lat: 19.272197, lng: 116.333740 },
    { lat: 20.238315, lng: 117.291348 },
    { lat: 21.271168, lng: 118.247871 },
    { lat: 22.280603, lng: 119.153469 },
    { lat: 23.369062, lng: 119.851758 },
    { lat: 24.802393, lng: 119.940084 },
    { lat: 25.626141, lng: 121.070385 },
    { lat: 26.685873, lng: 121.864337 },
    { lat: 28.017270, lng: 122.182578 }
  ];

  // flightPlanCoordinates2: 경로2
    const flightPlanCoordinates2 = [
    { lat: 28.017270, lng: 122.182578 },
    { lat: 29.197996, lng: 122.992508 },
    { lat: 30.250693, lng: 123.584102 },
    { lat: 31.474988, lng: 124.055415 },
    { lat: 32.769480, lng: 124.518321 },
    { lat: 34.136264, lng: 124.882907 },
    { lat: 35.315848, lng: 125.399373 },
    { lat: 36.608339, lng: 125.953862 }
  ];

  // 선그리기1
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  
  // 선그리기2
  const flightPath2 = new google.maps.Polyline({
    path: flightPlanCoordinates2,
    geodesic: true,
    strokeColor: "green",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
  flightPath2.setMap(map);
  
  const contentString =
  // ul>li 없애고, <p>에 <br>넣었음 ==> 혹시 안되면, 07/06 단톡방 apiTooltip.js 코드 넣으면 돼요! 
  // 구글api 함수에서 안 먹는 거 많음 ㅠㅠ 
   '<div id="content">' +
   '<div id="siteNotice">' +
   "</div>" +
   '<h1 id="firstHeading" class="firstHeading">내 선박 정보</h1>' +
   '<div id="bodyContent">' +
   "<div class='conetent'>" +
   "<p>" +
   "🔒(유료) Voyage State (스프링에서 인증user만 정보제공)<br>" +
   "🔒(유료) Calculated ETA<br>" +
   "🔒Calculated ETA at<br>" +
   "🔒Predictive ETD<br>" +
   "🔒Current Port - lat, long<br>" +
   "🔒Vessel's Local Time<br>" +
   "🔒Distance Travelled<br>" +
    "🔒Speed Course<br>" +
    "🔒Distance to Go<br>" +
    "🔒Total Voyage Distance<br>" +
    "🔒Time to Destination<br>" +
    "🔒Draught (Reported/Max)<br>" +
    "🔒Load Condition<br>" +
    "</p>" +
    "</div>" +
    '<p>더 많은 서비스 보기 → <a href="https://www.naver.com/">' +
    " 유료 서비스 가입하기</a> " +
    "</div>" +
    "</div>" +
    "</div>"; // end.content
    
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Uluru",
      });

      const marker = new google.maps.Marker({
        position: uluru,
        map,
        title: "Uluru (Ayers Rock)",
        // 다른 이미지 파일 경로를 사용해야 함 (예: 외부 URL 또는 상대 경로)
        icon: "",
      });

      marker.addListener("click", () => {
        infowindow.open(map, marker); // map 객체를 전달
      });
    }
   

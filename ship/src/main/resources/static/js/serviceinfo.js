let map;
let uluru;
let marker;

$(function () {
	/*initMap();*/
	initStdPath('VK');
    $(".service_route").on('click', sandwich); // 추가

});

function initMap() {
    uluru = { lat:  28.1904, lng: 120.8036 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
}

// 위 상단 지역을 클릭했을 때 처리할 함수
function sandwich() {
    let title = $(this).children("span").text().trim();
    let menu = menuchoice(title);
    let sand = '';
	initMap();
    tochoice(title);

    sand += `
       <div class="text-center mb-5  font-weight-bold">
         <p class="title" id="title">
           ${title}
         </p>
         <div class=" d-flex justify-content-center align-items-center">
           <div class="dropdown">
             <button class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton"
               data-toggle="dropdown" aria-expanded="false">
               <span> 서비스 항로 </span>
               <i class="fa fa-caret-down"></i>
             </button>
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">`;

    for (item of menu) {
        sand += item;
    }

    sand += `
             </ul>
           </div>
         </div>
       </div>
       `;

    /*for (item of apple) {
        sand += item;
    }*/
    // 껴넣는 단계
    $("#sandwich").html(sand);
   
} // 끝

function menuchoice(title) {
    let menu = [];
    switch (title) {
        case "동남아 서비스":
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - HO CHI MINH CITY(VN)</a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - SINGAORE(SG)</a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - JAKARTA(ID)</a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - BANGKOK(TH)</a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">INCHEON(KR) - HO CHI MINH CITY(VN)</a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">INCHEON(KR) - HANOI(VN)</a></li>`);
            break;

        case "한/일 서비스":
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - TOKYO(JP)</a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - YOKOHAMA(JP)</a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - AKITA (JP)</a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - FUKUYAMA(JP)</a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - HAKATA (JP)</a></li>`);
            break;

        case "한/중 서비스":
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - HONGKONG(CN)</span></a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - SHANGHI(CN)</span></a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - SHENCHEN(CN)</span></a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - XIAMEN(CN)</span></a></li>`);
            menu.push(`<li><a class="dropdown-item" href="#">PUSAN(KR) - QINGDAO(CN)</span></a></li>`);
            break;

    }

    return menu;
}

function tochoice(title) {
    let pathname;
    
    switch (title) {
        case "동남아 서비스":
            pathname = 'VK';
            break;
        case "한/일 서비스":
            pathname = 'KJ';
            break;
        case "한/중 서비스":
            pathname = 'KH';
            break;
    }
    console.log(pathname);
            
    initStdPath(pathname);
}
    

function initStdPath(pathname) {
	path_num = 1;
	
	if(pathname=='VT'){
		uluru = { lat:  28.1904, lng: 120.8036 };
	    map = new google.maps.Map(document.getElementById("map"), {
	        zoom: 4,
	        center: uluru,
	    });
	}
	if(pathname=='KJ'){
		uluru = { lat: 34.6156, lng: 132.2698 };
	    map = new google.maps.Map(document.getElementById("map"), {
	        zoom: 6,
	        center: uluru,
	    });
	}
	if(pathname=='KH'){
		uluru = { lat: 28.1904, lng: 120.8036 };
	    map = new google.maps.Map(document.getElementById("map"), {
	        zoom: 5,
	        center: uluru,
	    });
	}
	
	let sendData = { "pathname": pathname, "path_num": path_num };
    let coordinates;
    
    $.ajax({
		url: "searchStdPath",
   		method: "POST",
    	data: sendData,
    	success: function (resp) {
			const path = [];
			$.each(resp, function (idx, item) {
				  coordinates = { lat: item.lat, lng: item.lon };
				  path.push(coordinates);
       		});

	       const flightPath = new google.maps.Polyline({
			   path: path,
	           geodesic: true,
	           strokeColor: "#FF0000",
	           strokeOpacity: 1.0,
	           strokeWeight: 2,
	       });
       	flightPath.setMap(map);
    },
  });
}
let pathname = 'VK';
let path_num = 1;
let map;
let uluru;
let marker;
let rolename = document.getElementById("role").innerHTML.replace("[","").replace("]","");
let currentlocation;
let hour;
let lastItem;

$(function() {
	initMap();
	$('#submitBtn').click(searchVslID);
})

function initMap() {
    uluru = { lat: 25.626141, lng: 121.070385 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: uluru,
    });
}

function searchVslID() {
	let vsl_id = $('#vslId').val();
	
	if(vsl_id == 'fcb9d93e'|| vsl_id == 'HK') {
		pathname = 'KH'
		hour = 30;
	}
	if(vsl_id == '0d67e314'|| vsl_id == 'VT') {
		pathname = 'VK'
		hour = 65;
	}
	if(vsl_id == '3a516512'|| vsl_id == 'JP') {
		pathname = 'KJ'
		hour = 30;
	}
	
	//initStdPath();
	initNormalPath(vsl_id, hour, pathname);
	
	$('#vslId').val(vsl_id);
}

function initStdPath() {
	initMap();
	path_num = 4;
	
	let sendData = { "pathname": pathname, "path_num": path_num };
    let coordinates;
    
    $.ajax({
		url: "searchStdPath",
   		method: "POST",
    	data: sendData,
    	success: function (resp) {
			const path = [];
			$.each(resp, function (idx, item) {
				  console.log(item.lat, item.lon);
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

function initNormalPath(vsl_id, hour, pathname) {
	initMap();
	
	let sendData = { "vsl_id" : vsl_id, "hour" : hour };
	let coordinates;
    
    $.ajax({
		url: "searchNormalPath",
   		method: "POST",
    	data: sendData,
    	success: function (resp) {
	
			$.ajax({
				method : 'post',
				url : 'predict',
				async : false, // ajax가 여러개 있을 때 동시가 아니라 위에 있는 게 먼저 실행되고 실행되게 함. default : true
				data : {"vsl_id":vsl_id, "pathname":pathname, "hour":hour},
				success : function(resp2) {
					let list = resp2['list'];
					let calcedETA = resp2['formattedDateTime']
					let leftduration = list[0].left_duration
			
					const path = [];
					$.each(resp, function (idx, item) {
						  coordinates = { lat: item.lat, lng: item.lon };
						  path.push(coordinates);
		       		});
		       		
		       		currentlocation = coordinates;
		
			       const flightPath = new google.maps.Polyline({
					   path: path,
			           geodesic: true,
			           strokeColor: "navy",
			           strokeOpacity: 1.0,
			           strokeWeight: 2,
			       });
		
		       	flightPath.setMap(map);
			    lastItem = resp[resp.length - 1];
			    const markerPosition = { lat: lastItem.lat, lng: lastItem.lon };
			
			    marker = new google.maps.Marker({
			    	position: markerPosition,
			    	map,
			    	title: "Uluru (Ayers Rock)",
			    	// 다른 이미지 파일 경로를 사용해야 함 (예: 외부 URL 또는 상대 경로)
			    	icon: "",
			    });
			    
			    let time2dest = "***********";
			    let calcETA = "***********";
			    let predicturl = "<a href='javascript:subscribe()'>";
			    let plus = 
			    '<p>더 많은 서비스 보기 → <a href="subscribe">' +
			    " 유료 서비스 가입하기</a> ";
			    let difclass = "locked";
			    
			    if(rolename=="premium_user") {
					time2dest = leftduration;
					calcETA = calcedETA;
					//calcETA = lastItem.vsl_timestamp + leftduration;
					predicturl = "<a href='javascript:predict()'>"
					plus = '';
					difclass = "dot";
				}
				
				const contentString =
			    '<div id="content">' +
			    '<div id="siteNotice">' +
			    "</div>" +
			    '<h1 id="firstHeading" class="firstHeading">내 선박 정보</h1>' +
			    '<div id="bodyContent">' +
			    "<div class='conetent'>" +
			    "<ul>" +
			    "<li class=\"dot\"><span class=\"bold\">Vessel ID</span> : "+lastItem.vsl_id+"</li>" +
			    "<li class=\"dot\"><span class=\"bold\">Cuurrent time</span> : "+formatDateTime(lastItem.vsl_timestamp)+"</li>" +
			    "<li class=\"dot\"><span class=\"bold\">Destination</span> : "+lastItem.destination+"</li>" +
			    "<li class=\"dot\"><span class=\"bold\">ETA</span> : "+lastItem.eta+"</li>" +
			    "<li class=\"dot\"><span class=\"bold\">Speed</span> : "+lastItem.vsl_speed+"</li>" +
			    "<li class=\"dot\"><span class=\"bold\">Course</span> : "+lastItem.vsl_course+"</li>" +
			    "<li class=\"dot\"><span class=\"bold\">Heading</span> : "+lastItem.vsl_heading+"</li>" +
			    "<li class=\"dot\"><span class=\"bold\">Draught</span> : "+lastItem.vsl_draught+"</li>" +
			    "<li class=\"dot\"><span class=\"bold\">Nav Status</span> : "+lastItem.nav_status+"</li>" +
			    "<li class=\"dot\"><span class=\"bold\">Current Location</span> : ("+lastItem.lat+","+lastItem.lon+")</li>" +
			    "<li class=\""+difclass+"\"><span class=\"bold\">Calculated ETA</span> : "+ calcETA +"</li>" +
			    "<li class=\""+difclass+"\"><span class=\"bold\">Time to Destination</span> : "+ time2dest +"</li>" +
			    "<li class=\""+difclass+"\">"+predicturl+"예측 항로 보기</a></li>" +
			    "</ul>" +
			    "</div>" + plus+
			    "</div>" +
			    "</div>" +
			    "</div>"; // end.content
			
			
			  const infowindow = new google.maps.InfoWindow({
			    content: contentString,
			    ariaLabel: "Uluru",
			  });
			
			  marker.addListener("click", () => {
			    infowindow.open(map, marker); // map 객체를 전달
			  });
			    },
			  });
				}
			})
}

function formatDateTime(dateTime) {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

  return formattedDateTime;
}

function predict() {
	initMap();
	
	let vsl_id = $('#vslId').val();
	
	if(vsl_id == 'fcb9d93e'|| vsl_id == 'HK') {
		pathname = 'KH'
		hour = 30;
	}
	if(vsl_id == '0d67e314'|| vsl_id == 'VT') {
		pathname = 'VK'
		hour = 65;
	}
	if(vsl_id == '3a516512'|| vsl_id == 'JP') {
		pathname = 'KJ'
		hour = 30;
	}
	
	$.ajax({
		method : 'post',
		url : 'predict',
		data : {"vsl_id":vsl_id, "pathname":pathname, "hour":hour},
		success : function(resp) { showPredictPath(resp, vsl_id, hour); }
	})
}

function showPredictPath(resp, vsl_id, hour) {
	initMap();
	let list = resp['list'];
	let calcedETA = resp['formattedDateTime']
	console.log(vsl_id, hour);
	const path = [];
	$.each(list, function (idx, item) {
		if(idx!=0){
		  coordinates = { lat: item.lat, lng: item.lon };
		  path.push(coordinates);
		}
	});
			
	path.unshift(currentlocation);
	
   const flightPath = new google.maps.Polyline({
	   path: path,
       geodesic: true,
       strokeColor: "#FF0000",
       strokeOpacity: 1.0,
       strokeWeight: 2,
   });

   	flightPath.setMap(map);
    const firstItem = lastItem;
    const markerPosition = currentlocation;

    marker = new google.maps.Marker({
    	position: markerPosition,
    	map,
    	title: "Uluru (Ayers Rock)",
    	icon: "",
    });
    
    let information = list[0].left_duration;
    let predicturl = "<a href='javascript:predict()'>";
	
	const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">내 선박 정보</h1>' +
    '<div id="bodyContent">' +
    "<div class='conetent'>" +
    "<ul>" +
    "<li class=\"dot\"><span class=\"bold\">Vessel ID</span> : "+firstItem.vsl_id+"</li>" +
    "<li class=\"dot\"><span class=\"bold\">Cuurrent time</span> : "+formatDateTime(firstItem.vsl_timestamp)+"</li>" +
    "<li class=\"dot\"><span class=\"bold\">Destination</span> : "+firstItem.destination+"</li>" +
    "<li class=\"dot\"><span class=\"bold\">ETA</span> : "+firstItem.eta+"</li>" +
    "<li class=\"dot\"><span class=\"bold\">Speed</span> : "+firstItem.vsl_speed+"</li>" +
    "<li class=\"dot\"><span class=\"bold\">Course</span> : "+firstItem.vsl_course+"</li>" +
    "<li class=\"dot\"><span class=\"bold\">Heading</span> : "+firstItem.vsl_heading+"</li>" +
    "<li class=\"dot\"><span class=\"bold\">Draught</span> : "+firstItem.vsl_draught+"</li>" +
    "<li class=\"dot\"><span class=\"bold\">Nav Status</span> : "+firstItem.nav_status+"</li>" +
    "<li class=\"dot\"><span class=\"bold\">Current Location</span> : ("+firstItem.lat+","+firstItem.lon+")</li>" +
    "<li class=\"dot\"><span class=\"bold\">Calculated ETA</span> : "+ calcedETA +"</li>" +
    "<li class=\"dot\"><span class=\"bold\">Time to Destination</span> : "+ information +"</li>" +
    '<li class=\"dot\"><a href="javascript:initNormalPath(\'' + vsl_id + '\', ' + hour + ')">항로 tracking</a></li>' +
    "</ul>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>"; // end.content


  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker); // map 객체를 전달
  });
	
}

function subscribe() {
	location.href = "subscribe";
}
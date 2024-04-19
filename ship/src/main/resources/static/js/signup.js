document.getElementById("signupBtn").addEventListener('click', validation);

function validation(e) {
	e.preventDefault(); // 기능이 있는 태그의 기본 기능( ex) a, submit, reset 등 )을 없애줌
	
	// 이름
	let familyName = document.getElementById("familyName");
	let lastName = document.getElementById("lastName");
	
	if(familyName.value.length == 0) {
		alert("성을 입력해주세요.");
		familyName.focus();
		familyName.select();
		return;
	}
	if(lastName.value.length == 0) {
		alert("이름을 입력해주세요.");
		lastName.focus();
		lastName.select();
		return;
	}
	console.log()
	document.getElementById("membername").value = familyName.value + lastName.value;


	// 아이디(이메일)
	let email = document.getElementById("email");
	if(email.value.length == 0) {
		alert("이메일을 입력해주세요.");
		email.focus();
		email.select();
		return;
	}
	
	// 비밀번호
	let memberpw = document.getElementById("memberpw");
	if(memberpw.value.length < 3 || memberpw.value.length > 10) {
		alert("비밀번호는 3~10자 사이로 입력해주세요.");
		memberpw.focus();
		memberpw.select();
		return;
	}
	
	// 비밀번호 확인
	let memberpwchk = document.getElementById("pwdchk");
	if(memberpw.value != memberpwchk.value) {
		alert("비밀번호가 일치하지 않습니다.");
		memberpwchk.focus();
		memberpwchk.select();
		return;
	}

	// 정보 보내기
	let memberForm = document.getElementById("memberForm");
	memberForm.submit();
	
}
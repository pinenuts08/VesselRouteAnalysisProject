package net.kdigital.project.util;

import java.io.File;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

public class FileService {
	// 이름은 오라클에 저장되고 파일은 하드디스크에 저장해야함
	// 오라클에서 해당 파일명을 가져와서 하드디스크에서 그 파일명을 가진 파일을 찾은 후 파일 전송
	
	// 저장하기 위한 메소드
	public static String saveFile(MultipartFile upload, String uploadPath) {
		
		if (!upload.isEmpty()) { // 첨부된 파일이 있으면
			// 파일이 첨부되었을 경우 경로가 있는지부터 확인하고 없으면 폴더 생성
			// 디렉토리도 파일로 취급
			File path = new File(uploadPath); // 폴더관리, 파일관리
			if (!path.isDirectory()) { // path에 있는 디렉토리가 없으면(해당 경로가 없으면)
				path.mkdirs(); // 디렉토리 생성
			}
		}
		
		// 원본의 파일명
		String originalFileName = upload.getOriginalFilename();
		
		// 확장자 전후로 잘라서 사이에 랜덤값을 추가해서 저장명 만들어야 함
		// c:\ upload\그림1_ksdfjksjdklfjasdlfjkdsjfk34-7odj.jpg 하드 디스크에 이런 식으로 경로가 저장됨
		
		
		// 랜덤값 발생
		String uuid = UUID.randomUUID().toString(); 
		// UUID에서 발생시키는 값은 문자가 아니라 toString으로 문자로 바꿔서 변수에 넣음
		
		// 원본 파일명에서 확장자와 파일명 분리
		String filename; // 파일명(확장자X)
		String ext; // 확장자명
		String savedFileName; // 서버, 오라클에 저장할 파일명
		
		int position = originalFileName.lastIndexOf("."); // 마지막 .의 위치값(인덱스값) 반환
		// 찾는 문자열이 없으면 -1 반환
		// 마지막 .을 찾는 이유는 파일명에도 .이 있을 수도 있으니까
		
		// 확장자가 없는 경우
		if (position==-1) { // position이 -1 : 확장자가 없음
			ext = ""; // 확장자명 없음
		}
		// 확장자가 있는 경우
		else {
			ext = "."+originalFileName.substring(position+1); 
			// . + 원본 파일명에서 .뒤(확장자명)를 전부 가져옴
		}
		
		filename = originalFileName.substring(0, position); // 처음부터 position 바로 앞까지
		// => .확장자명을 제외한 파일명만

		savedFileName = filename+"_"+uuid+ext; // 저장할 이름 = 파일이름_uuid.확장명
		
		// 파일을 하드디스크에 저장하기
		File serverFile = null; // 파일객체는 파일을 관리(저장, 삭제 등)할 수 있음
		// full path명 만들기
		serverFile = new File(uploadPath+"/"+savedFileName); // 경로/파일명 이렇게 해서 파일 생성
		// /가 있어야 경로와 파일명이 구분이 됨
		
		try {
			upload.transferTo(serverFile);// 목적지(저장할 경로)를 전체 풀네임으로 줘야함
			// transfer를 하면 파일 저장
		} catch (Exception e) {
			savedFileName = null; // 저장을 못했다는 뜻. 에러가 날 때를 대비
			e.printStackTrace();
		}
		
		return savedFileName;
	}
	
	// 삭제할 경로 포함 파일명이 조합된 문자열을 파라메터로 받음
	public static boolean deleteFile(String fullPath) { // 경로명 + savedFileName 을 fullPath로 받음
		boolean result = false; // 삭제여부를 반환할 변수
		
		File delFile = new File(fullPath); // 파일 삭제작업을 할 기초 객체
		
		if (delFile.isFile()) { // 이런 파일이 존재하는지 여부 확인. 존재하면 실행문 실행
			delFile.delete(); // 파일 하드디스크에서 삭제
			result = true;
		}
		
		return result;
	}
				
}
			
		
	

$(function() {
	init();
	$("#search").click(search);
})

function search() {
	let searchWord = $('#search').val();
	
	$.ajax({
		url : 'loadList',
		method : 'POST',
        data : {"searchWord":searchWord},
        success : output 
	})
}

function init() {
    $.ajax({
        url : 'loadList',
        method : 'GET',
        success : output
    });
}
    
function output(resp) {
	let searchWord = resp.searchWord;
	let listboard = resp.listboard;
	
    let data = 
        `<table class="table bg-white rounded border" id="tableWrapper">
	        <thead>
	            <tr>
	                <th class="seqNo idx"></th>
	                <th id="title">제목</th>
	                <th class="date regdate">작성일자</th>
	                <th class="writer memberid">작성자</th>
	            </tr>
	        </thead>
	        <tbody>`;
    
    $.each(listboard, function(idx, item) {
        data +=
            `<tr>
                 <th class="seqNo idx">${idx+1}</th>
                 <th class="title"><a href="readboard?boardseq=${item['boardseq']}">${item['title']}</th>
                 <th class="date regdate">${item['regdate']}</th>
                 <td class="writer memberid">${item['memberid']}</td>
             </tr>`;
    });

    data += `</tbody>
			</table>`;

    $('#result').html(data);
    $('#search').html(searchWord);

}
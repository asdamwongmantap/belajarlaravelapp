function show_usergroup(){
	alert("ok");
	$('#modallistusergroup').modal('show');
	$('#mydatausergroup').dataTable({
		"pageLength": 5
	});
	$.ajax({
		type  : 'ajax',
		url   : '<?=base_url('hybrid/User/listusergroupjson');?>',
		async : false,
		"processing": true, //Feature control the processing indicator.
		"serverSide": true, //Feature control DataTables' server-side processing mode.
		"order": [], //Initial no order.
		dataType : 'json',
		success : function(data){
			var html = '';
			$.each(data,function(data, value) {
				html += '<tr>'+
						'<td><a href="javascript:void(0)" class="btn btn-primary chooseusergroup" data="'+value.USER_GROUP_NAME+'" data-dismiss="modal" title="Pilih User Group">Pilih</a></td>'+
						'<td>'+value.USER_GROUP_ID+'</td>'+
						'<td>'+value.USER_GROUP_NAME+'</td>'+
						'<td>'+value.INITIAL_CODE+'</td>'+
						'</tr>';
						
			})
			$('#show_datausergroup').html(html);
			
		}

	});
}
function show_dealer(){
	$.ajax({
		type  : 'ajax',
		url   : '<?=base_url('hybrid/master/Dealer/listdealerjson');?>',
		async : false,
		dataType : 'json',
		success : function(data){
			var html = '';
			var no = 1;
			$.each(data,function(data, value) {
				html += '<tr>'+
						'<td><a href="javascript:void(0)" class="btn btn-primary choosesupp" data="'+value.SUPPL_BRANCH_NAME+'" title="Pilih Supplier">Pilih</a></td>'+
						'<td>'+value.SUPPL_BRANCH_CODE+'</td>'+
						'<td>'+value.SUPPL_BRANCH_NAME+'</td>'+
						'</tr>';
						
			})
			$('#show_datasupp').html(html);
			
		}

	});
}
function show_branch(){
	$.ajax({
		type  : 'ajax',
		url   : '<?=base_url('hybrid/master/Dealer/listbranchjson');?>',
		async : false,
		dataType : 'json',
		success : function(data){
			var html = '';
			var no = 1;
			$.each(data,function(data, value) {
				html += '<tr>'+
						'<td><a href="javascript:void(0)" class="btn btn-primary choosebranch" data="'+value.OFFICE_NAME+'" title="Pilih Branch">Pilih</a></td>'+
						'<td>'+value.OFFICE_CODE+'</td>'+
						'<td>'+value.OFFICE_NAME+'</td>'+
						'</tr>';
						
			})
			$('#show_databranch').html(html);
			
		}

	});
}
$(document).ready(function()
		{
			
			//$("input").prop('required',true);
			$("input[value='Add Row']").click(function(event)
			{
						event.preventDefault();
						var name=$("#name").val();
						var email=$("#email").val();
						if(name && email)
						{
							var markup = "<tr class = 'tblRow'><td>"+name+"</td><td>"+email+"</td></tr>";
							$("table tbody").append(markup);
							$('#name').val('');
							$('#email').val('');
						}
						else
						{
							alert("Enter both fields");
						}
			});
			$("input[id='Add-Column']").click(function(event)
			{
				var columnName=$("input[id='column-name").val();
				var getRowCount=$('#table tr').length;
				console.log(getRowCount);
				if(columnName)
				{
					var mkp = "<th>"+columnName+"</th>";
					$("table thead tr").append(mkp);
					$("table tbody tr").append("<td></td>");
					$("#column-name").val('');
				}
				else
				{
					alert("Enter Column Name");
				}
				
			});
			$(".btn-primary").click(function()
			{
				/*$("table tbody").find('input[name = "record" ]').each(function()
					{
						if($(this).is(":checked"))
						{
							$(this).parents("tr").remove();
						}
					});*/
					$('.highlight_row').remove();
			});
			$('#table').on('click', '.tblRow', function (event)
			{	
				//console.log(event.target);
				//console.log("clicked");
				
				if (!$(event.target.closest('tr')).hasClass('highlight_row') ) {
						$(this).closest('tr').addClass("highlight_row");
				} else {
					$(this).closest('tr').removeClass("highlight_row");
				}
				
				/*if (event.target.type !== 'checkbox') 
				{
					$(':checkbox', this).trigger('click');
				}*/
			});

		$(function () {
				$("#table").on('dblclick','td',function (e) {
					e.stopPropagation();      //<-------stop the bubbling of the event here
					var currentEle = $(this);
					var value = $(this).html();
					//console.log(value);
					updateVal(currentEle, value);
			});
		});

		function updateVal(currentEle, value) {
			$(currentEle).html('<input class="thVal" type="text" value="' + value + '" />');
			$(".thVal").focus();
			$(".thVal").keyup(function (event) {
				if (event.keyCode == 13) {
					$(currentEle).html($(".thVal").val().trim());
			}
		});

		$(document).click(function () { // you can use $('html')
        $(currentEle).html($(".thVal").val().trim());
		});
		}
			/*$("input[type='checkbox']").change(function (e)
			{
				if ($(this).is(":checked"))
				{
					$(this).closest('tr').addClass("highlight_row");
				} 
				else
				{
					$(this).closest('tr').removeClass("highlight_row");
				}
			});*/
		});
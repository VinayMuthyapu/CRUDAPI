$(document).ready(function()
		{
			$("form").submit(function(event)
			{
						event.preventDefault();
						var name=$("#name").val();
						var email=$("#email").val();
						var markup = "<tr><td><input type='checkbox' name='record'></td><td>"+name+"</td><td>"+email+"</td></tr>";
						$("table tbody").append(markup);
						$('#name').val('');
						$('#email').val('');
			});
			$(".btn-primary").click(function()
			{
				$("table tbody").find('input[name = "record" ]').each(function()
					{
						if($(this).is(":checked"))
						{
							$(this).parents("tr").remove();
						}
					});
			});
		});
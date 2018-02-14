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
			$(function() {
			$.contextMenu({
            selector: '.context-menu-one', 
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m); 
            },
            items: {
                "edit": {name: "Edit", icon: "edit"},
                "cut": {name: "Cut", icon: "cut"},
               copy: {name: "Copy", icon: "copy"},
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "Delete", icon: "delete"},
                "sep1": "---------",
                "quit": {name: "Quit", icon: function(){
                    return 'context-menu-icon context-menu-icon-quit';
                }}
            }
        });

        $('.context-menu-one').on('click', function(e){
            console.log('clicked', this);
        })    
    });
		});
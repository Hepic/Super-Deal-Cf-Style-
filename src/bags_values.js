var i = 0, cnt = 0;

var interval = setInterval(function()
{
	$.ajax({
		url: 'http://codeforces.com/api/user.rating?handle=' + cf_accounts[i],
		dataType: 'json',
		success: function(data)
		{
			var info = data.result;
			bags_values.push( info[info.length-1].newRating ); // take latest rating of user
		},
		type: 'GET'
	});
	
	++i;
	
	if(i == bags_num)
		clearInterval(interval);
	
}, 500);


$(document).ajaxStop(function()
{
	++cnt;
	alert('Loading ... ' + cnt + '/' + bags_num);
	
	if(cnt == bags_num) // when all ajax stop then we start the game
	{
		make_bags();
		draw_all();
	}
});



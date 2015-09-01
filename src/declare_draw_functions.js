function background()
{
	ctx.fillStyle = 'red';
	ctx.fillRect(0, 0, W, H);
}


function draw_rect(x1, y1, szX, szY, color)
{
	ctx.beginPath();
	ctx.rect(x1, y1, szX, szY);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.lineWidth = 3;
	ctx.strokeStyle = 'black';
	ctx.stroke();
}


function draw_bags()
{
	for(var i=0; i<bags_num; ++i)
		if(!visited[i])
			bags[i].draw();

}


function draw_score_board()
{
	draw_rect(W-275, 25, 250, H-50, '#9999CC');
	
	
	score_values = [];
	
	for(var i=0; i<bags_num; ++i)
		score_values.push({'value': bags[i].value, 'vis': visited[i]});
	
	score_values.sort(function(a, b) // sort the score_values in relation of their points
	{
		return a.value < b.value;
	});
	
	
	for(var i=0; i<bags_num; ++i)
	{
		if(!score_values[i].vis) // we draw the points of the bag, only if the bag is still available in the board
		{
			ctx.font = '30pt Calibri';
			ctx.fillStyle = 'black';
			ctx.fillText(score_values[i].value + '$', W-185, i*70 + 90); //number of bag
		}
	}
}


function draw_all()
{
	background(); //draw background
	draw_rect(25, 25, W-50, H-50, '#0066CC'); //draw board
	draw_bags(); //draw bags
	draw_score_board() //draw score board
}

canvas.onmousedown = function(e)
{
	var x = e.clientX, y = e.clientY;
	var bag = search_bag(x, y);
	
	
	if(bag != null)
	{
		if(pos_user_bag == null)// user select its bag
		{
			bag.x = user_x;	
			bag.y = user_y;
			pos_user_bag = bag.pos;
			
			draw_all();
		}
		
		else if(bag.pos != pos_user_bag  &&  !visited[bag.pos]) // if there is still the bag in the board.
		{
			alert("Value of Bag: " + bag.value + '$');
			visited[bag.pos] = true; // we remove the bag
			
			draw_all();
			negotiation();
			end_of_game();
		}
	}
};
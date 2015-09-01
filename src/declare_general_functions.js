function make_bags()
{		
	for(var i=0; i<bags_num/2; ++i)
		bags.push(new Bag(i*150+80, 100, i+1, bags_values[i], i));
	
	for(var i=5; i<bags_num; ++i)
		bags.push(new Bag((i-5)*150+80, 300, i+1, bags_values[i], i));
		
	for(var i=0; i<bags_num; ++i)
		visited.push(false);
}


function search_bag(x, y)
{
	var bag = null;
	
	for(var i=0; i<bags_num; ++i) // searching for the box, that user clicked
	{
		if((x >= bags[i].x  &&  x <= bags[i].x + bag_size_x) &&
			(y >= bags[i].y  &&  y <= bags[i].y + bag_size_y))
			{
				bag = bags[i];
				break;
			}
	}
	
	return bag;
}


function are_available()
{
	var cnt = 0;
	
	for(var i=0; i<bags_num; ++i) // counts the bags which are in the board
		if(!visited[i])
			++cnt;
			
	return cnt;
}


function offer_money()
{
	var money = 0, cnt = 0;
	
	for(var i=0; i<bags_num; ++i)
		if(!visited[i])
		{
			money += bags[i].value;
			++cnt;
		}
		
	money /= cnt; // Offer the average value 
	
	return money;
}


function negotiation()
{
	var cnt = are_available();
	
	if(cnt == bags_num/2-1)// case when exchange bags
	{
		var answer = confirm("Do you want negotiation to change your bag?");
		if(answer)
		{
			var bag_number = parseInt(prompt("Enter bag's number you want"));
			exchange(bag_number);
			draw_all();
		}
	}
	
	else if(cnt == bags_num/2+1) // case we offer money
	{
		var money = offer_money();
		var answer = confirm("Do you want to take " + money + '$ and leave?');
		
		if(answer)
		{
			alert("You won: " + money + '$');
			return false;
		}
	}
}


function exchange(bag_number)
{	
	for(var i=0; i<bags_num; ++i) // we exchange details between user's bag and new-bag he choose
	{
		if(bags[i].number == bag_number)
		{
			var keep_num = bags[pos_user_bag].number;
			var keep_val = bags[pos_user_bag].value;
			
			bags[pos_user_bag].number = bag_number;
			bags[pos_user_bag].value = bags[i].value;
			
			bags[i].number = keep_num;
			bags[i].value = keep_val;
		}
	}
}


function end_of_game()
{
	var cnt = are_available();
	
	if(cnt == 1)
		alert("You won: " + bags[pos_user_bag].value + '$');
}
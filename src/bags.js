function Bag(x, y, number, value, pos)
{
	this.x = x;
	this.y = y;
	this.number = number;
	this.value = value;
	this.pos = pos;
}

Bag.prototype = {
	draw: function()
	{
		var num_x = (2*this.x + bag_size_x) / 2 - 15;
		var num_y = (2*this.y + bag_size_y) / 2 + 10;
		var handle_x = (2*this.x + bag_size_x) / 2 - 20;
		var handle_y = this.y - 10;
		
		if(this.number == 10)
			num_x -= 10;
		
		
		draw_rect(this.x, this.y, bag_size_x, bag_size_y, '#B8B8B8'); //draw the bag
		draw_rect(handle_x, handle_y, 40, 10, '#B8B8B8'); //draw the handle
		
		ctx.font = '40pt Calibri';
		ctx.fillStyle = 'black';
		ctx.fillText(this.number, num_x, num_y); //number of bag
	}
};
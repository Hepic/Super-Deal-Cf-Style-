var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var W = 1100, H = 800;
var user_x = 400, user_y = 500, pos_user_bag = null;
var bag_size_x = 100, bag_size_y = 80;
var bags_num = 10;
var bags = [], bags_values = [], visited = [], score_values = [];
var cf_accounts = ['tourist', 'Petr', 'vepifanov', 'yeputons', 'minimario',
			  'sotiris', 'shakil_AUST', 'rajon_aust', 'Determinism', 'I_Have_A_Dream'];

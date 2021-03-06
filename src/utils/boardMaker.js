
module.exports = {
	makeBlank: (height, width) => {
		var blank = [];
		for (var y = 0; y < height; y++){
			blank.push([]);
			for(var x = 0; x < width; x++){
				blank[y].push(0);
			}
		}
		return blank;
	},
	makeNeighborFn: (originBoard) => {
		const board = JSON.parse(JSON.stringify(originBoard));
		const h = board.length;
		const w = board[0].length;
		return function(vert){

			const hh = vert[0];
			const ww = vert[1];
			var successors = [];
			var squareKind = board[hh][ww];
 
			if (squareKind == 2){ var cost = 2;}         //MUD
			else if(squareKind == 1){ var cost = 10000;} //WALL
			else{ var cost = 1; }						 //EVERYTHING ELSE

			(hh > 0) && successors.push({neighbor: [hh-1, ww], cost});
			(hh < h-1) && successors.push({neighbor: [hh+1, ww], cost});
			(ww > 0) && successors.push({neighbor: [hh, ww-1], cost});
			(ww < w-1) && successors.push({neighbor: [hh, ww+1], cost});
			return successors
		}
	}
}
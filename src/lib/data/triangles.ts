type Triangle = {
	x: number;
	y: number;
	sides: number;
	radius: number;
	fill?: string;
	stroke: string;
	strokeWidth: number;
	rotation: number;
}

// Array containing the triangles attributes
export const triangles: Triangle[] = [
	{
		x: 0.5,
		y: 0.1,
		sides: 3,
		radius: 0.05,
		stroke: '#0E9594',
		strokeWidth: 3,
		rotation: 45
	},
	{
		x: 0.65,
		y: 0.35,
		sides: 3,
		radius: 0.10,
		stroke: '#773686',
		strokeWidth: 3,
		rotation: 75
	},
	{
		x: 0.25,
		y: 0.5,
		sides: 3,
		radius: 0.15,
		stroke: '#EE6055',
		strokeWidth: 3,
		rotation: 105
	},
	{
		x: 0.75,
		y: 0.75,
		sides: 3,
		radius: 0.15,
		stroke: '#0E9594',
		strokeWidth: 3,
		rotation: 105
	},
	{
		x: 0.85,
		y: 0.25,
		sides: 3,
		radius: 0.05,
		stroke: '#EE6055',
		strokeWidth: 3,
		rotation: 105
	},
	{
		x: 0.35,
		y: 0.89,
		sides: 3,
		radius: 0.05,
		stroke: '#773686',
		strokeWidth: 3,
		rotation: 150
	},
	{
		x: 0.10,
		y: 0.15,
		sides: 3,
		radius: 0.10,
		stroke: '#773686',
		strokeWidth: 3,
		rotation: 0
	},
	{
		x: 0.10,
		y: 0.85,
		sides: 3,
		radius: 0.10,
		stroke: '#0E9594',
		strokeWidth: 3,
		rotation: 45
	},
	{
		x: 0.91,
		y: 0.65,
		sides: 3,
		radius: 0.10,
		stroke: '#773686',
		strokeWidth: 3,
		rotation: 45
	},
	{
		x: 0.52,
		y: 0.70,
		sides: 3,
		radius: 0.10,
		stroke: '#EE6055',
		strokeWidth: 3,
		rotation: 105
	},
	{
		x: 0.38,
		y: 0.33,
		sides: 3,
		radius: 0.15,
		stroke: '#773686',
		strokeWidth: 3,
		rotation: 70
	}
];
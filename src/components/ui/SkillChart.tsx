import React from "react";

interface ChartProps {
	percentage: number;
}

const SkillChart = ({ percentage }: ChartProps) => {
	const strokeWidth = 2;
	const radius = 18;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<svg className="w-18 h-18 text-textColor" viewBox="0 0 40 40">
			<circle
				className="stroke-current"
				cx="20"
				cy="20"
				r={radius}
				strokeWidth={strokeWidth}
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				fill="none"
			/>
			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				className="text-xs fill-textColor"
			>
				{percentage}%
			</text>
		</svg>
	);
};

export default SkillChart;

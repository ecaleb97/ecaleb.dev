import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl;
	const postTitle = searchParams.get("title");

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
					backgroundImage: "url(https://ecaleb.dev/og-bg.png",
				}}
			>
				<div
					style={{
						marginLeft: 200,
						marginRight: 200,
						marginBottom: 200,
						display: "flex",
						fontSize: 110,
						letterSpacing: "-0.025em",
						fontStyle: "normal",
						color: "white",
						lineHeight: "115px",
						whiteSpace: "pre-wrap",
					}}
				>
					{postTitle}
				</div>
			</div>
		),
		{
			width: 1920,
			height: 1080,
		},
	);
}

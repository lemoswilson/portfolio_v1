import { LoaderValue } from "next/dist/server/image-config";
import { LabelHTMLAttributes } from "react";

declare namespace NodeJS {
	interface ProcessEnv {
		JSON_BIN: string,
		JSON_BIN_KEY: string,
	}
}
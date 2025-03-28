"use client";

import { FilePathRow } from "@/components/common-setting-parts";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { commands } from "@/lib/bindings";
import { tc, tt } from "@/lib/i18n";
import { createFileRoute } from "@tanstack/react-router";
import { type BodyProps, SetupPageBase } from "../-setup-page-base";

export const Route = createFileRoute("/_setup/setup/unity-hub/")({
	component: Page,
});

function Page() {
	return (
		<SetupPageBase
			heading={tc("setup:unity-hub:heading")}
			Body={Body}
			// user should set unity hub path so we re-update unity paths
			onFinish={() => commands.environmentUpdateUnityPathsFromUnityHub()}
			nextPage={"/setup/project-path"}
			prevPage={"/setup/appearance"}
			pageId={"UnityHub"}
		/>
	);
}

function Body({ environment, refetch }: BodyProps) {
	const hubInstalled = !!environment.unity_hub;

	return (
		<>
			<CardDescription className={"whitespace-normal"}>
				{tc("setup:unity-hub:description")}
			</CardDescription>
			{hubInstalled ? (
				<>
					<div className={"pb-4"} />
					<p className={"whitespace-normal text-muted-foreground"}>
						{tc("setup:unity-hub:using this unity hub")}:
					</p>
					<FilePathRow
						withoutSelect
						path={environment.unity_hub ?? ""}
						pick={commands.environmentPickUnityHub}
						refetch={refetch}
						notFoundMessage={"Unity Hub Not Found"}
						successMessage={tc("settings:toast:unity hub path updated")}
					/>
				</>
			) : (
				<>
					<div className={"p-2"} />
					<div className={"flex flex-row flex-wrap gap-2"}>
						<Button
							onClick={() =>
								commands.utilOpenUrl(tt("setup:unity-hub:unity hub link"))
							}
						>
							{tc("setup:unity-hub:download unity hub from unity.com")}
						</Button>
						<Button onClick={refetch}>
							{tc("setup:unity-hub:recheck installation")}
						</Button>
					</div>
					<Accordion type="single" collapsible>
						<AccordionItem value={"you-have"} className={"border-none"}>
							<AccordionTrigger className={"text-sm"}>
								{tc("setup:unity-hub:detection failed collapse")}
							</AccordionTrigger>
							<AccordionContent>
								<p className={"whitespace-normal"}>
									{tc("setup:unity-hub:detection failed description")}
								</p>
								<FilePathRow
									withoutSelect
									path={environment.unity_hub}
									pick={commands.environmentPickUnityHub}
									refetch={refetch}
									notFoundMessage={"Unity Hub Not Found"}
									successMessage={tc("settings:toast:unity hub path updated")}
								/>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<div className={"flex w-full"}>
						<span className={"text-destructive"}>
							{tc("setup:unity-hub:not found")}
						</span>
					</div>
				</>
			)}
		</>
	);
}

import { Suspense } from "react";
import PageTitleSkeleton from "./skeletons";
import Head from "next/head";

export default function PageTitle({ title }: { title: string }) {
    return (
        <Suspense fallback={<PageTitleSkeleton />}>
            <Head>{title}</Head>
            <h1 className="text-3xl font-extrabold" tabIndex={0}>
                {title}
            </h1>
        </Suspense>
    )
}
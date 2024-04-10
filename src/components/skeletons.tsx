const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function TechnologyIconSkeleton() {
    return <span className={`${shimmer} relative overflow-hidden bg-gray-200 h-6 w-12 inline-flex me-1 mt-1 items-center rounded-md bg-gray-50 px-2 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`}>

    </span>;
}

export function ProjectSkeleton() {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-extrabold bg-gray-200 h-5 w-24 " tabIndex={0} />
            <div>
                <TechnologyIconSkeleton />
                <TechnologyIconSkeleton />
                <TechnologyIconSkeleton />
            </div>
            <div className="flex flex-col gap-2">

                <div className="flex gap-4  ">
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-24 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-6 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-12 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-6 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-24 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-24 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-12 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-12 `} />
                </div>
                <div className="flex gap-4">
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-12 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-24 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-24 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-6 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-24 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-6 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-12 `} />
                    <p className={`${shimmer} relative overflow-hidden  bg-gray-200 h-5 w-12 `} />
                </div>
            </div>


            <span className="border-b-2 border-gray-900">
                <b>Read more &rarr;</b>
            </span>

            <div className={`${shimmer} relative overflow-hidden `}>
                <div className="h-96 w-full rounded-md bg-gray-200" />
            </div>
            <hr className="border-gray-300 my-8" />
        </div>
    )
}

export function ProjectListSkeleton() {
    return (
        <>
            <ProjectSkeleton />
            <ProjectSkeleton />
            <ProjectSkeleton />
        </>
    )
}
import { AiOutlinePaperClip } from 'react-icons/ai'

function DownloadButton() {
    const handleDownload = () => {
        const pdfUrl = '/Kamil_Starmach_Resume.pdf';
        window.open(pdfUrl, '_blank');
    };

    return (
        <button onClick={handleDownload} className="font-medium text-indigo-600 hover:text-indigo-500">Download</button>

    );
}

export default function DownloadTable() {
    return (
        <div className="px-4 pt-4  -cols-3 sm:gap-4 sm:px-0 ">
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 ">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                            <AiOutlinePaperClip className="h-5 w-5 flex-shrink-0 text-gray-400" />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium">Kamil_Starmach_Resume.pdf</span>
                                <span className="flex-shrink-0 text-gray-400">103 KB</span>
                            </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <DownloadButton />
                        </div>
                    </li>
                </ul>
            </dd>
        </div>
    )
}
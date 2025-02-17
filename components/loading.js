export default function Loading() {
    return (
        <div className=" flex flex-wrap bg-white">
<div className=" m-8 rounded shadow-md w-50 sm:w-80 animate-pulse h-96 w-">
	<div className="h-48 rounded-t dark:bg-gray-300"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
		<div className="w-full h-6 rounded dark:bg-gray-300"></div>
		<div className="w-full h-6 rounded dark:bg-gray-300"></div>
		<div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
	</div>
</div>


        </div>
    );
}
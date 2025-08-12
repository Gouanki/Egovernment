function ListOfServices() {
    return (
        <div className="flex min-h-screen items-start justify-center bg-gray-50">
            <div className="mt-10 w-full max-w-5xl rounded-lg bg-white p-6 shadow-md">
                <h1 className="mb-4 text-3xl font-bold text-gray-800">🎓 Education</h1>
                <p className="mb-6 text-gray-600">Here you can find a list of all available services.</p>

                {/* Example list of services */}
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <ul className="space-y-4">
                            <li className="mx-auto rounded-md bg-gray-100 p-2 font-bold text-black shadow-sm transition-colors hover:scale-95 hover:bg-gray-200">
                                Service 1
                            </li>
                            <li className="mx-auto rounded-md bg-gray-100 p-2 text-black shadow-sm transition-colors hover:scale-95 hover:bg-gray-200">
                                Service 2
                            </li>
                            <li className="mx-auto rounded-md bg-gray-100 p-2 text-black shadow-sm transition-colors hover:scale-95 hover:bg-gray-200">
                                Service 3
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-4">
                            <li className="rounded-scale-95 mx-auto bg-gray-100 p-2 font-bold text-black shadow-sm transition-colors hover:scale-3d hover:bg-gray-200">
                                Service 1
                            </li>
                            <li className="rounded-scale-95 mx-auto bg-gray-100 p-2 text-black shadow-sm transition-colors hover:scale-3d hover:bg-gray-200">
                                Service 2
                            </li>
                            <li className="rounded-scale-95 mx-auto bg-gray-100 p-2 text-black shadow-sm transition-colors hover:scale-3d hover:bg-gray-200">
                                Service 3
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListOfServices;

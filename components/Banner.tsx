
function Banner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
            <div className="">
                <h1 className="text-7xl gradient-text">The Beacon Daily Blog</h1>
                <h2 className="mt-5 md:mt-4">
                    Welcome to {" "}
                    <span className="underline decoration-4 decoration-secondary ">
                        Every Developers
                    </span>{" "}
                    favorite blog!
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Discover Insights, Inspire Change: Explore the World of Becon. Your Source for Thought-Provoking Articles, Personal Journeys, and Informed Perspectives. Illuminate Your Mind with Becon.
            </p>
        </div>
    )
}

export default Banner
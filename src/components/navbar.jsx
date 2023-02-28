export default function Navbar() {
    return (
        <>
            <div className="bg-green-10 flex w-screen h-20 items-center">

                <h1 className="text-white text-4xl font-700 mx-9">Logo</h1>

                <a href="\" className="text-white mx-9">
                    Home
                </a>
                {/* Search Bar */}
                <div className="bg-white rounded-lg px-5 mobile:ml-24 tablet:ml-44 desktop:ml-96">
                    <input
                        className="border-0 px-5 py-3  w-30 focus:outline-none"
                        type="text"
                        placeholder="Search your product"
                    />
                    <button className="text-green-6 bg-white">
                        {" "}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5236 15.1308L13.5582 11.1654C14.2486 10.0474 14.666 8.74321 14.666 7.33301C14.666 3.28293 11.3831 0 7.33301 0C3.28293 0 0 3.28293 0 7.33301C0 11.3831 3.28293 14.666 7.33301 14.666C8.74321 14.666 10.0474 14.2486 11.1642 13.5593L15.1308 17.5248C15.4501 17.8334 15.8778 18.0043 16.3218 18.0005C16.7659 17.9967 17.1906 17.8186 17.5045 17.5045C17.8184 17.1905 17.9964 16.7656 17.9999 16.3216C18.0035 15.8776 17.8325 15.4499 17.5236 15.1308ZM7.33301 12.4097C4.52955 12.4097 2.25631 10.1365 2.25631 7.33301C2.25631 4.52955 4.52955 2.25631 7.33301 2.25631C10.1365 2.25631 12.4097 4.52955 12.4097 7.33301C12.4097 10.1365 10.1365 12.4097 7.33301 12.4097Z" fill="black" fill-opacity="0.45" />
                            </svg>

                        </svg>
                    </button>
                </div>

                <a
                    href="\"
                    className="text-green-7 border-green-7 border-solid border-2 px-5 py-2 ml-12 rounded-md"
                >
                    LogIn
                </a>

                <a
                    href="\"
                    className="text-white bg-green-5 border-green-5 border-solid border-2 px-5 py-2 ml-12 rounded-md"
                >
                    SignUp
                </a>







            </div>
        </>
    );
}

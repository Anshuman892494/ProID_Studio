import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NotFound404() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />

            <main className="container mx-auto px-4 py-8 min-h-[70vh] flex flex-col items-center justify-center">
                {/* Error Content */}
                <div className="text-center max-w-3xl mx-auto">
                    {/* Animated Error Number */}
                    <div className="relative mb-8">
                        <div className="text-[180px] md:text-[240px] font-bold text-primary/10 leading-none">
                            404
                        </div>
                    </div>

                    {/* Error Message */}
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Oops! The page you're looking for seems to have wandered off. <br />
                        It might have been moved, deleted, or perhaps never existed.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-10">
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                        >
                            <i className="fas fa-arrow-left mr-2"></i>
                            Go Back
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
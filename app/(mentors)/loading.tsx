export default function MentorsLoading() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
}

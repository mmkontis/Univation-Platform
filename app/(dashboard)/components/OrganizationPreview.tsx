interface PreviewProps {
  firstName: string;
  lastName: string;
  email: string;
  universityName: string;
  jobPosition: string;
  profilePhoto?: string;
  shortBio: string;
  selectedCourses: string[];
}

export default function Preview({
  firstName,
  lastName,
  email,
  universityName,
  jobPosition,
  profilePhoto,
  shortBio,
  selectedCourses,
}: PreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-80">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-black rounded-full mr-4 overflow-hidden">
          {profilePhoto ? (
            <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
              {firstName[0]}{lastName[0]}
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold">{firstName} {lastName}</h3>
          <p className="text-sm text-gray-500">{jobPosition}</p>
        </div>
      </div>
      {selectedCourses.length > 0 ? (
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Courses</p>
          <div className="flex flex-wrap gap-2">
            {selectedCourses.map((course, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                {course}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex space-x-4 mb-4">
          <span className="text-black">About</span>
          <span>Courses</span>
          <span>Publications</span>
        </div>
      )}
      <div className="mb-4">
        <p className="text-sm font-medium">University</p>
        <p className="text-sm text-gray-600">{universityName}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm font-medium">Email</p>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">About {firstName}</p>
        <p className="text-sm text-gray-600">
          {shortBio || "Your professional bio will appear here."}
        </p>
      </div>
    </div>
  );
}
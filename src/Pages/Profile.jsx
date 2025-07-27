import { useState } from "react"
import { User, KeyRound } from "lucide-react"

export default function Profile() {
  const [tab, setTab] = useState("profile")

  const [name, setName] = useState("Unnati Vaidya")
  const [email, setEmail] = useState("unnati.vaidya23@vit.edu")
  const [profileMessage, setProfileMessage] = useState("")

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [passwordMessage, setPasswordMessage] = useState("")

  const handleProfileSave = () => {
    setProfileMessage("")
    setTimeout(() => {
      setProfileMessage("Profile updated successfully!")
    }, 1000)
  }

  const handleChangePassword = () => {
    setPasswordMessage("")
    if (newPassword !== confirmNewPassword) {
      setPasswordMessage("New passwords do not match.")
      return
    }
    if (newPassword.length < 6) {
      setPasswordMessage("New password must be at least 6 characters long.")
      return
    }
    setTimeout(() => {
      setPasswordMessage("Password changed successfully!")
      setCurrentPassword("")
      setNewPassword("")
      setConfirmNewPassword("")
    }, 1000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg border border-blue-100">
        <div className="text-center p-6 border-b border-blue-100">
          <div className="mx-auto h-24 w-24 mb-4 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-800">
            UV
          </div>
          <h2 className="text-3xl font-bold text-blue-900">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>

        <div className="px-6 pt-4">
          <div className="flex mb-6 gap-2">
            <button
              onClick={() => setTab("profile")}
              className={`flex-1 flex items-center justify-center gap-1 px-4 py-2 rounded-md text-sm font-medium ${
                tab === "profile"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
            >
              <User className="w-4 h-4" /> Profile Info
            </button>
            <button
              onClick={() => setTab("password")}
              className={`flex-1 flex items-center justify-center gap-1 px-4 py-2 rounded-md text-sm font-medium ${
                tab === "password"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
            >
              <KeyRound className="w-4 h-4" /> Change Password
            </button>
          </div>

          {tab === "profile" && (
            <div className="space-y-4 pb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                onClick={handleProfileSave}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
              {profileMessage && (
                <p className="text-center text-sm text-green-600 mt-2">{profileMessage}</p>
              )}
            </div>
          )}

          {tab === "password" && (
            <div className="space-y-4 pb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                onClick={handleChangePassword}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Change Password
              </button>
              {passwordMessage && (
                <p
                  className={`text-center text-sm mt-2 ${
                    passwordMessage.includes("successfully") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {passwordMessage}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import LeftPanel from "@/components/auth/Left-panel";
import SignupForm from "@/components/auth/Signup-form";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-violet-50 via-white to-blue-50">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        <LeftPanel />
        <SignupForm />
      </div>
    </main>
  );
}
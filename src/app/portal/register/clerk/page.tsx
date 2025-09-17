import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <SignUp 
        appearance={{
          elements: {
            formButtonPrimary: 
              "bg-blue-600 hover:bg-blue-700 text-white",
            card: "shadow-xl",
            headerTitle: "text-2xl font-bold",
            headerSubtitle: "text-gray-600",
          },
        }}
        routing="path"
        path="/portal/register/clerk"
        signInUrl="/portal/login/clerk"
        redirectUrl="/tools/calculator"
      />
    </div>
  );
}
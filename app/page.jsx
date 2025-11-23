"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  // Rename if needed
  const { user, isLoaded } = useUser();
  const [checking, setChecking] = useState(true);
  const { openSignIn } = useClerk();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return; // Wait for loading

    if (!user) {
      openSignIn(); // Prompt sign-in if no user
      return;
    }

    const role = user?.publicMetadata?.role;
    console.log("User role:", role); // Debug: Check this in console

    if (role === "admin") {
      router.replace("/admin/products");
    } else {
      router.replace("/unauthorized");
    }

    setChecking(false);
  }, [isLoaded, user, router, openSignIn]);

  if (!isLoaded || checking) {
    return <div className="p-6 text-center">Checking access...</div>;
  }

  return <div>Redirecting...</div>;
}

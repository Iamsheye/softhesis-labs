import React from "react";
import ProfileForm from "src/components/organisms/ProfileForm";

const Profile = () => (
  <section className="flex justify-center items-center h-[100dvh]">
    <div className="grow max-w-96">
      <main className="flex flex-col gap-2 mx-3">
        <h1 className="text-6xl text-center">Update Profile</h1>
        <ProfileForm />
      </main>
    </div>
  </section>
);

export default Profile;

import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
        <UserButton
          afterSignOutUrl="/"
        />
      hello
    </div>
  );
}

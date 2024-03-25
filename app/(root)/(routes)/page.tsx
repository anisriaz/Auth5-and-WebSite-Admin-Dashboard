"use client"
import { useEffect } from "react";
import  { useStoreModal } from "@/hooks/useStoreModal";

const HomePage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

useEffect(() => {
 if(!isOpen) {
  onOpen();
 }
}, [isOpen, onOpen]);

  return null;
}

export default HomePage;






































// <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
//   <div className="space-y-6 text-center">
//     <h1 className={cn(
//       "text-6xl font-semibold text-white drop-shadow-md",
//       font.className,
//     )}>
//       🔐 Auth
//     </h1>
//     <p className="text-white text-lg">
//       A simple authentication service
//     </p>
//     <div>
//       <LoginButton  asChild>
//         <Button variant="secondary" size="lg">
//           Log in
//         </Button>
//       </LoginButton>
//     </div>
//   </div>
// </main>

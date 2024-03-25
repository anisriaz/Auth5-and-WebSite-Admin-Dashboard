import {db} from "@/lib/db";
import { BillboardForm } from "./components/billboardForm"



const BillboardPage = async ({
  params
}: {
  params: { billboardId: string }
}) => {
  console.log("Billboard ID:", params.billboardId);
  const billboard = await db.billboard.findUnique({
    where: {
      id: params.billboardId
    }
  });

  return ( 
    <div className="flex-col">
      Existing Billboard: {billboard?.label}
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;















// "use client"


// import { useEffect, useState } from 'react';
// import prismadb from "@/lib/prismadb";
// import { BillboardForm } from "./components/billboardForm";

// const BillboardPage = ({
//   params
// }: {
//   params: { billboardId: string }
// }) => {

//   const [billboard, setBillboard] = useState<any>(null);

//   useEffect(() => {
//     const fetchBillboard = async () => {
//       try {
//         // Check if the billboardId exists
//         if (params.billboardId !== 'new') {
//           const fetchedBillboard = await prismadb.billboard.findUnique({
//             where: {
//               id: params.billboardId
//             }
//           });
//           setBillboard(fetchedBillboard);
//         }
//       } catch (error) {
//         console.error('Error fetching billboard:', error);
//       }
//     };

//     fetchBillboard();
//   }, [params.billboardId]);

//   // If the billboardId is 'new', it's a create page
//   if (params.billboardId === 'new') {
//     return (
//       <div className="flex-col">
//         Create New Billboard
//         <div className="flex-1 space-y-4 p-8 pt-6">
//           <BillboardForm initialData={null} />
//         </div>
//       </div>
//     );
//   }

//   // If billboardId exists, it's an edit page
//   return (
//     <div className="flex-col">
//       Edit Billboard: {billboard?.label}
//       <div className="flex-1 space-y-4 p-8 pt-6">
//         <BillboardForm initialData={billboard} />
//       </div>
//     </div>
//   );
// };

// export default BillboardPage;









// "use client"

// import prismadb from "@/lib/prismadb";
// import { BillboardForm } from "./components/billboardForm"


// import { useEffect, useState } from 'react';


// const useFetchBillboard = (_Id: string) => {
//   const [billboard, setBillboard] = useState<any>(null);

//   useEffect(() => {
//     const fetchBillboard = async () => {
//       try {
//         const fetchedBillboard = await prismadb.billboard.findUnique({
//           where: {
//             id: _Id
//           }
//         });
//         setBillboard(fetchedBillboard);
//       } catch (error) {
//         console.error('Error fetching billboard:', error);
//       }
//     };

//     fetchBillboard();
//   }, [billboardId]);

//   return (
//     <div className="flex-col">
//       Existing Billboard: {billboard?.label}
//       <div className="flex-1 space-y-4 p-8 pt-6">
//         <BillboardForm initialData={billboard} />
//       </div>
//     </div>
//   );
// };

// export default useFetchBillboard;


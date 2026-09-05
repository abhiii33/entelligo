// "use client"
// import React from 'react'
// import { useUsers } from '@/hooks/getUsers'
// import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'
// import { useRouter } from 'next/navigation'
// import { Button } from '@/components/ui/button'

// type Props = {}
// const UserRecord = (props: Props) => {
    
// const router = useRouter()
//   const { data: users, isLoading, isError, error } = useUsers()

//   return (
//     <div className='p-4 w-full max-w-4xl mx-auto'>
//       <Card>
//         <CardHeader>
//           <CardTitle className='text-xl sm:text-2xl font-bold text-center'>
//             User Record
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           {isLoading && <p className='text-center'>Loading...</p>}
//           {isError && (
//             <p className='text-center text-red-500'>
//               Error: {error.message}
//             </p>
//           )}

//           {users && (
//             <div className='overflow-x-auto'>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead >ID</TableHead>
//                     <TableHead>Name</TableHead>
//                     <TableHead className='hidden sm:table-cell'>Username</TableHead>
//                     <TableHead>Email</TableHead>
//                     <TableHead className='hidden md:table-cell'>City</TableHead>
//                     <TableHead className='hidden lg:table-cell'>Company</TableHead>
//                     <TableHead>View Details</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {users.map((user) => (
//                     <TableRow key={user.id}>
//                         <TableCell className='font-medium'>{user.id}</TableCell>
//                       <TableCell className='font-medium'>{user.name}</TableCell>
//                       <TableCell className='hidden sm:table-cell'>
//                         {user.username}
//                       </TableCell>
//                       <TableCell className='max-w-[150px] truncate '>
//                         {user.email}
//                       </TableCell>
//                       <TableCell className='hidden md:table-cell'>
//                         {user.address.city}
//                       </TableCell>
//                       <TableCell className='hidden lg:table-cell'>
//                         {user.company.name}
//                       </TableCell>
//                       <TableCell>
//                         <Button onClick={() => router.push(`/home/details/${user.id}`)}>
//                             View User
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// export default UserRecord

import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>page</div>
  )
}

export default page
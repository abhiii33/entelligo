// 'use client'
// import React from 'react'
// import { useUserById } from '@/hooks/getUsers'
// import { useParams } from 'next/navigation'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Avatar, AvatarFallback } from '@/components/ui/avatar'
// import { Badge } from '@/components/ui/badge'
// import { Separator } from '@/components/ui/separator'
// import { Mail, Phone, Globe, MapPin, Building2 } from 'lucide-react'
// import { Button } from '@/components/ui/button'

// type Props = {}

// const DetailPage = (props: Props) => {
//   const { id } = useParams()
//   const userId = parseInt(id as string, 10)

//   const { data: user, isLoading, isError } = useUserById(userId)

//   if (isLoading) {
//     return (
//       <div className='flex items-center justify-center min-h-[60vh] text-muted-foreground'>
//         Loading...
//       </div>
//     )
//   }

//   if (isError || !user) {
//     return (
//       <div className='flex items-center justify-center min-h-[60vh] text-red-500'>
//         Error occurred while fetching user details.
//       </div>
//     )
//   }

//   const initials = user.name
//     .split(' ')
//     .map((n) => n[0])
//     .join('')
//     .toUpperCase()

//   return (
//     <div className='w-full max-w-2xl mx-auto p-4 sm:p-6'>
//       <div className='flex justify-end items-center mb-4'>
//  <Button onClick={() => window.history.back()}>
//         &larr; Go Back
//       </Button>
//       </div>
     
//       <Card>
//         <CardHeader className='flex flex-col items-center text-center gap-3 pb-2'>
//           <Avatar className='h-20 w-20 text-xl'>
//             <AvatarFallback>{initials}</AvatarFallback>
//           </Avatar>
//           <div>
//             <CardTitle className='text-2xl'>{user.name}</CardTitle>
//             <p className='text-muted-foreground text-sm'>@{user.username}</p>
//           </div>
//           <Badge variant='secondary'>{user.company.name}</Badge>
//         </CardHeader>

//         <CardContent className='space-y-6 pt-4'>
//           <Separator />

//           {/* Contact Info */}
//           <section className='space-y-3'>
//             <h3 className='text-sm font-semibold text-muted-foreground uppercase tracking-wide'>
//               Contact
//             </h3>
//             <div className='space-y-2'>
//               <div className='flex items-center gap-3 text-sm'>
//                 <Mail className='h-4 w-4 text-muted-foreground shrink-0' />
//                 <span>{user.email}</span>
//               </div>
//               <div className='flex items-center gap-3 text-sm'>
//                 <Phone className='h-4 w-4 text-muted-foreground shrink-0' />
//                 <span>{user.phone}</span>
//               </div>
//               <div className='flex items-center gap-3 text-sm'>
//                 <Globe className='h-4 w-4 text-muted-foreground shrink-0' />
//                 <span>{user.website}</span>
//               </div>
//             </div>
//           </section>

//           <Separator />

//           {/* Address */}
//           <section className='space-y-3'>
//             <h3 className='text-sm font-semibold text-muted-foreground uppercase tracking-wide'>
//               Address
//             </h3>
//             <div className='flex items-start gap-3 text-sm'>
//               <MapPin className='h-4 w-4 text-muted-foreground shrink-0 mt-0.5' />
//               <span>
//                 {user.address.street}, {user.address.suite}
//                 <br />
//                 {user.address.city}, {user.address.zipcode}
//               </span>
//             </div>
//           </section>

//           <Separator />

//           {/* Company */}
//           <section className='space-y-3'>
//             <h3 className='text-sm font-semibold text-muted-foreground uppercase tracking-wide'>
//               Company
//             </h3>
//             <div className='flex items-start gap-3 text-sm'>
//               <Building2 className='h-4 w-4 text-muted-foreground shrink-0 mt-0.5' />
//               <div>
//                 <p className='font-medium'>{user.company.name}</p>
//                 <p className='text-muted-foreground italic'>
//                   "{user.company.catchPhrase}"
//                 </p>
//               </div>
//             </div>
//           </section>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// export default DetailPage
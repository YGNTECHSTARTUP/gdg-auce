import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { GenAiParticipants } from '../constant'
const page = () => {
  return (
    <div className='mt-16 sm:mt-28 md:mt-[6%] container mx-auto flex justify-center items-center min-h-screen min-w-full'>
        <Table >
        <TableCaption>Gen Ai Study Jam Participants</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[100px]'>Id</TableHead>
                    <TableHead className=''>Name</TableHead>
                </TableRow>
                
            </TableHeader>
            <TableBody>
            {
                    GenAiParticipants.map((member)=>{
                        return (
                            <TableRow key={member.id}>
                                <TableCell>{member.id}</TableCell>
                                <TableCell>{member.name}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
               
                
            
        </Table>
    </div>
  )
}

export default page
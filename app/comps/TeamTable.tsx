import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import React from 'react'
import { SocialIcon } from "react-social-icons";

interface Teams {
  team: string;
    members: {
        name: string;
        role: string;
        linkedin:string;
    }[];
}

const TeamTable:React.FC<Teams> = ({team,members}) => {
  return (
    <Table className="container">
    <TableCaption>{team}</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">S.NO</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Role</TableHead>
        <TableHead className="text-right">Social Links</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        members.map((member,index)=>{
          return (
            <TableRow key={index}>
            <TableCell>{index+1}</TableCell>
            <TableCell>{member.name}</TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell><SocialIcon url={member.linkedin} fgColor="#fff" bgColor="#000" style={{ height: 40, width: 40 }}>
              </SocialIcon></TableCell>
                   </TableRow>
          )
        }
       
         
        )}
     
    </TableBody>
  </Table>
  
  )
}

export default TeamTable
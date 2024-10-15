import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Image from "next/image";
import React from 'react'
import { SocialIcon } from "react-social-icons";

interface Teams {
  team: string;
    members: {
        name: string;
        role: string;
        linkedin:string;
        imgurl:string;
        email:string;
    }[];
}

const TeamTable:React.FC<Teams> = ({team,members}) => {
  return (
   <div className="container">
<Table >
    <TableCaption>{team}</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">S.NO</TableHead>
        <TableHead>Image</TableHead>
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
            <TableCell><Image src={member.imgurl} alt={member.name} height={250} width={250}/></TableCell>
            <TableCell>{member.name}</TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell className="space-y-2 sm:space-y-0" ><SocialIcon target="_blank" url={member.linkedin} fgColor="#fff" bgColor="#000" style={{ height: 40, width: 40 }}>
              </SocialIcon>&nbsp;
              <SocialIcon target="_blank" url={"mailto:"+member.email} fgColor="#fff" bgColor="#000" style={{ height: 40, width: 40 }}>
              </SocialIcon></TableCell>
              
                   </TableRow>
          )
        }
       
         
        )}
     
    </TableBody>
  </Table>
   
   </div>

    
  
  )
}

export default TeamTable
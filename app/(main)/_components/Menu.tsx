/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "convex/react"
import { toast } from "sonner"
import { MoreHorizontal, Trash } from "lucide-react"

import { Id } from "@/convex/_generated/dataModel"
import {DropdownMenu,DropdownMenuTrigger,
  DropdownMenuContent,DropdownMenuItem,
  DropdownMenuSeparator} from '@/components/ui/dropdown-menu'
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
	

interface MenuProps {
  documentId:Id<'documents'>
}

export function Menu ({documentId}:MenuProps) {

  const router = useRouter()
  const {user} = useUser()

  // The generated Convex API currently does not expose the documents namespace.
  const archive = useMutation((api as any).documents.archive)

  const onArchive = () => {
    const promise = archive({id:documentId})

    toast.promise(promise,{
      loading:'Moving to trash...',
      success:"Note Moved to trash!",
      error:"Failed to archive note."
    })
    router.push('/documents')
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        <Button size='sm' variant='ghost'>
          <MoreHorizontal className="w-4 h-4"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end" alignOffset={8} >
        <DropdownMenuItem onClick={onArchive}>
          <Trash className="w-4 h-4 mr-2"/>
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <div className="text-xs text-muted-foreground p-2">
          Last edited by: {user?.fullName}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

Menu.Skeleton = function MenuSkeleton() {
  return (
    <Skeleton className="w-10 h-10"/>
  )
}

import Service from "@/app/components/Service"
import readDataFiles from "@/app/functions/readDataFiles"
import { ServiceData } from "@/app/components/Service"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    const slugs = ["chauffage","depannage","sanitaire"]
    return slugs.map(slug => ({slug}))
  }

export default async function Page({ params} : { params :Promise<{ slug: string }>}){
    const {slug} = await params
    const json : ServiceData = await readDataFiles(slug)
    if (!json) return notFound();
    
    return <Service data={json} />
}
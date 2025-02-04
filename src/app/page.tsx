import TopicCreateForm from "@/components/topics/topic-create-form"

// user is an obj about user 
export default function Home() {
  return <div className="grid grid-cols-4 gap-4 p-4">
    <div className="col-span-3">
      <div className="text-xl m-2">Top Posts</div>
    </div>
    <div>
      <TopicCreateForm />
    </div>
  </div>
}

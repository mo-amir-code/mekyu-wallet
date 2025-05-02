import { DialogModal } from "@/components/custom/dialog"
import { GeneratePhrase } from "@/components/custom/phrase"


const NewUser = () => {
  return (
    <div className={"flex items-center justify-center h-screen"} >
        <DialogModal btnText="Create New Wallet">
            <GeneratePhrase />
        </DialogModal>
    </div>
  )
}

export default NewUser

import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog"
import { AuthContext } from "@/contextApi/AuthContext"
import { useContext, useState } from "react"
import toast from "react-hot-toast";

const AccountDialog = () => {
  const { open, setOpen } = useContext(AuthContext);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handelOnSubmit = (e) => {
    e.preventDefault();
    toast("please Wait a minute...!");
    setTimeout(()=>{
      const { email, name } = input;
      const userInfo = { name, email };
      localStorage.setItem("user", JSON.stringify(userInfo));
  
      setInput({
        name: "",
        email: "",
        password: ""
      });
      toast.success("login success...!");
      setOpen(false)
    },3000)
  }

  // console.log(input)



  return (
    <Dialog defaultOpen={open} open={open} onOpenChange={setOpen}>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          Login Your Account
        </DialogHeader>
        <form className="w-full shadow p-4 flex flex-col gap-2" onSubmit={handelOnSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-primary font-normal" htmlFor="name">Enter Your Name</label>
            <input value={input.name} onChange={(e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))} className="px-3 rounded-3xl bg-gray-100" type="text" name="name" id="name" placeholder="Enter Your Name" required />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-primary font-normal" htmlFor="email">Enter Your Name</label>
            <input value={input.email} onChange={(e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))} className="px-3 rounded-3xl bg-gray-100" type="email" name="email" id="Email" placeholder="Enter Your Email" required />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-primary font-normal" htmlFor="password">Enter Your Password</label>
            <input value={input.password} onChange={(e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))} className="px-3 rounded-3xl bg-gray-100" type="password" name="password" id="password" placeholder="Enter Your Password" required />
          </div>

          <button type="submit">Login</button>

        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AccountDialog
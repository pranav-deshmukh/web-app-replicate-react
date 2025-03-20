import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen bg-gray-100">
      <div className="login w-[70%] bg-cover bg-center">
        <div className="flex w-[90%] items-center justify-center h-full bg-opacity-50 text-white p-6">
          <div className="Text flex flex-col w-[90%] justify-center">
            <h1 className="text-4xl font-bold mb-4">Mifos X</h1>
            <div className="border-b-2 text-white"></div>
            <p className="text-2xl">
              Mifos X is designed by the Mifos Initiative. A global community
              that aims to speed the elimination of poverty by enabling
              Organizations to more effectively and efficiently deliver
              responsible financial services to the world's poor and unbanked.
              Sounds interesting? Get involved!
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 items-center justify-center p-6">
        <img
          src="/mifos_lg-logo.png"
          width={280}
          alt="Mifos Logo"
          className="mx-auto mt-2"
        />

        <form className="space-y-4 flex flex-col justify-center items-center gap-4 w-full">
          <div className="space-y-2 w-[65%]">
            <Label htmlFor="tenant">Tenant</Label>
            <select id="tenant" className="w-full p-2 border rounded">
              <option value="default">default</option>
            </select>
          </div>
          <div className="space-y-2 w-[65%]">
            <Label htmlFor="username">Username *</Label>
            <Input id="username" type="text" placeholder="Username" className="border-[1px]" />
          </div>
          <div className="space-y-2 w-[65%]">
            <Label htmlFor="password">Password *</Label>
            <Input id="password" type="password" placeholder="Password" />
          </div>
          <div className="flex items-center justify-center space-x-2 w-[65%]">
            <input type="checkbox" id="remember" className="h-4 w-4" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="button" className="w-50 bg-blue-500 text-white cursor-pointer hover:bg-blue-600" onClick={()=>navigate("/home")}>Login</Button>
          <div className="text-center text-sm font-semibold">
            <a href="#" className=" hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="flex gap-4 justify-between text-sm mt-4 font-semibold">
            <a href="#" className=" hover:underline">
              Resources
            </a>
            <a href="#" className=" hover:underline">
              Community
            </a>
            <a href="#" className=" hover:underline">
              Contribute
            </a>
          </div>
        </form>
      </div>
    </div>
    )
}
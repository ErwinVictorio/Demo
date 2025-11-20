
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface DialogProps {
    open: boolean,
    onOpenChange: (open: boolean) => void
}

export default function ConfirmLogout({ open, onOpenChange }: DialogProps) {
    const navigate = useNavigate()

    // function onConfirm() {
    //     setisLoading(true)
    //     try {
    //         axiosClient({
    //             method: 'post',
    //             url: 'api/logout',
    //             headers: {
    //                 "X-XSRF-TOKEN": getXsrfToken() ?? ""
    //             }
    //         }).then((res) => {
    //             console.log(res.data)
    //             if (res.data.success == true) {
    //                  navigate('/')
    //             }
               
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }finally{
    //          setisLoading(false)
    //     }


    // }


    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>

            <AlertDialogContent className="rounded-2xl">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl font-semibold">
                        Are you sure you want to logout?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        This will end your current session.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel className="rounded-xl">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                       asChild
                    >
                        <Button  onClick={() => navigate('/')}  className="bg-red-600 text-white rounded-xl hover:bg-red-700">
                            Logout
                        </Button>
                        
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

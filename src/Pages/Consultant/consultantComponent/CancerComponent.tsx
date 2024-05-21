import {Card, CardContent,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";


const CancerComponent = ({ item }) => {
    console.log(item);
    // <span className="loading loading-infinity loading-md"></span>
    return (
        <Card>
                <CardHeader>
                <Avatar className="size-28">
                        <AvatarImage src={item.img} />
                         <AvatarFallback>img</AvatarFallback>
                    </Avatar>
                <CardTitle className="space-y-9">
                    {item.name}
                    <p className="text-[#34a97b] text-sm font-normal">{item.description}</p>
                </CardTitle>
                </CardHeader>
                <CardContent>
                       

                        <p>Location: {item.district}</p>
                        <p>Hospital: {item.hospitalName}</p>
                        <p>Specialist: {item.specialist}</p>
                        <p>Compensation: {item.videoCallFee}</p>
                </CardContent>
                <CardFooter>
                <Badge className="text-sm bg-green-500" variant="destructive">Booking</Badge>
                </CardFooter>
        </Card>

    );
};

export default CancerComponent;
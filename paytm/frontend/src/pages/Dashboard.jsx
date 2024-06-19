import { Topbar, Users } from "../components"

export const Dashboard = () => {
    return (
        <>
            <Topbar/>
            <div className="m-5">
                <Users/>     
            </div>
        </>
    )
}
import styles from "./Home.module.scss"
import DashboardCards from '@/components/DashboardCards/DashboardCards';
import RunningOutTable from '@/components/Tables/RunningOutTable';

export const metadata = {
  title: "Products Stock",
  description: "Register and manage your products."
}
export default function Home() {
  return (
    <>
      <div className={`${styles.homeContainer} container-fluid`}>
        <DashboardCards />
        <div className={`${styles.runningTable} container-fluid`} >
            <RunningOutTable columnTitle="Running Out Items"/>
        </div>
      </div>
    </>
  )
}

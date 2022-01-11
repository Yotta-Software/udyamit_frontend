import React from 'react'
import SmallCard from '../../components/career/SmallCard'
import { getJobs } from '../../utils/dataApi'
import Process from '../Process'

function Career() {
  const [jobs, setJobs] = React.useState([])
  React.useEffect(() => {
    async function fetchData() {
      const jobData = await getJobs('?limit=15')

      setJobs(jobData ? jobData.jobs : [])
    }
    fetchData()
    return () => {
      setJobs([])
    }
  }, [])
  return (
    <div>
      {/* <Process /> */}
      <div className='row crd'>
        {jobs?.map((job) => {
          return (
            <div className='col-md-4 col-sm-12'>
              <SmallCard
                title={job.title}
                salary={job.salary}
                icon={job.icon}
                id={job._id}
                url1={job.url1}
                url2={job.url2}
              />
            </div>
          )
        })}
        {/* <div className="col-md-4 col-sm-12">
          <SmallCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <SmallCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <SmallCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <SmallCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <SmallCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <SmallCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <SmallCard />
        </div> */}
      </div>
    </div>
  )
}

export default Career

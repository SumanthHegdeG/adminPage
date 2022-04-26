import LineCharts from '../components/LineChart'
import DoughnutChart from '../components/DoughnutChart'
import EarningCard from '../components/EarningCard'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { FaDownload, FaCircle } from 'react-icons/fa'
const Home = () => {
  return (
    <div>
      <div className='container-fluid'>
        {/* <!-- Page Heading --> */}
        <div className='d-sm-flex align-items-center justify-content-between mb-4'>
          <h1 className='h3 mb-0 text-gray-800'>Dashboard</h1>
          <a
            href='#'
            className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'
          >
            <FaDownload className='fa-sm text-white-50'></FaDownload> Generate
            Report
          </a>
        </div>

        {/* <!-- Content Row --> */}
        <EarningCard />
        {/* <!-- Content Row --> */}
        <div className='row'>
          {/* <!-- Area Chart --> */}
          <div className='col-xl-8 col-lg-7'>
            <div className='card shadow mb-4'>
              {/* <!-- Card Header - Dropdown --> */}
              <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                <h6 className='m-0 font-weight-bold text-primary'>
                  Earnings Overview
                </h6>
              </div>
              {/* <!-- Card Body --> */}
              <div className='card-body'>
                <div className='chart-area'>
                  <LineCharts />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pie Chart --> */}
          <div className='col-xl-4 col-lg-5'>
            <div className='card shadow mb-4'>
              {/* <!-- Card Header - Dropdown --> */}
              <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                <h6 className='m-0 font-weight-bold text-primary'>
                  Revenue Sources
                </h6>
              </div>
              {/* <!-- Card Body --> */}
              <div className='card-body'>
                <div className='chart-pie pt-4 pb-2'>
                  <DoughnutChart></DoughnutChart>
                </div>
                <div className='mt-4 text-center small'>
                  <span className='mr-2'>
                    <FaCircle className='text-primary'></FaCircle> Direct
                  </span>
                  <span className='mr-2'>
                    <FaCircle className='text-success'></FaCircle> Social
                  </span>
                  <span className='mr-2'>
                    <FaCircle className=' text-info'></FaCircle> Referral
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Content Row --> */}
        <div className='row'>
          {/* <!-- Content Column --> */}
          <div className='col-lg-6 mb-4'>
            {/* <!-- Project Card Example --> */}
            <div className='card shadow mb-4'>
              <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>Projects</h6>
              </div>
              <div className='card-body'>
                <h4 className='small font-weight-bold'>
                  Server Migration <span className='float-right'>20%</span>
                </h4>
                <div className='mb-4'>
                  <ProgressBar variant='danger' now={20} />
                </div>
                <h4 className='small font-weight-bold'>
                  Sales Tracking <span className='float-right'>40%</span>
                </h4>
                <div className='mb-4'>
                  <ProgressBar variant='warning' now={40} />
                </div>
                <h4 className='small font-weight-bold'>
                  Customer Database <span className='float-right'>60%</span>
                </h4>
                <div className=' mb-4'>
                  <ProgressBar now={60} />
                </div>
                <h4 className='small font-weight-bold'>
                  Payout Details <span className='float-right'>80%</span>
                </h4>
                <div className='mb-4'>
                  <ProgressBar variant='info' now={80} />
                </div>
                <h4 className='small font-weight-bold'>
                  Account Setup <span className='float-right'>Complete!</span>
                </h4>
                <div>
                  <ProgressBar variant='success' now={100} />
                </div>
              </div>
            </div>

            {/* <!-- Color System --> */}
            <div className='row'>
              <div className='col-lg-6 mb-4'>
                <div className='card bg-primary text-white shadow'>
                  <div className='card-body'>
                    Primary
                    <div className='text-white-50 small'>#4e73df</div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='card bg-success text-white shadow'>
                  <div className='card-body'>
                    Success
                    <div className='text-white-50 small'>#1cc88a</div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='card bg-info text-white shadow'>
                  <div className='card-body'>
                    Info
                    <div className='text-white-50 small'>#36b9cc</div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='card bg-warning text-white shadow'>
                  <div className='card-body'>
                    Warning
                    <div className='text-white-50 small'>#f6c23e</div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='card bg-danger text-white shadow'>
                  <div className='card-body'>
                    Danger
                    <div className='text-white-50 small'>#e74a3b</div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='card bg-secondary text-white shadow'>
                  <div className='card-body'>
                    Secondary
                    <div className='text-white-50 small'>#858796</div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='card bg-light text-black shadow'>
                  <div className='card-body'>
                    Light
                    <div className='text-black-50 small'>#f8f9fc</div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='card bg-dark text-white shadow'>
                  <div className='card-body'>
                    Dark
                    <div className='text-white-50 small'>#5a5c69</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 mb-4'>
            {/* <!-- Illustrations --> */}

            {/* <!-- Approach --> */}
            <div className='card shadow mb-4'>
              <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>
                  Development Approach
                </h6>
              </div>
              <div className='card-body'>
                <p>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility
                  classNamees in order to reduce CSS bloat and poor page
                  performance. Custom CSS classNamees are used to create custom
                  components and custom utility classNamees.
                </p>
                <p className='mb-0'>
                  Before working with this theme, you should become familiar
                  with the Bootstrap framework, especially the utility
                  classNamees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

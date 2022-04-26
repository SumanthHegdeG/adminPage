import React from 'react'
import {
  FaCalendar,
  FaDollarSign,
  FaClipboardList,
  FaComments,
} from 'react-icons/fa'
import { LinearProgress } from '@mui/material'
const EarningCard = () => {
  return (
    <div className='row'>
      {/* <!-- Earnings (Monthly) Card Example --> */}
      <div className='col-xl-3 col-md-6 mb-4'>
        <div className='card border-left-primary shadow h-100 py-2'>
          <div className='card-body'>
            <div className='row no-gutters align-items-center'>
              <div className='col mr-2'>
                <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                  Earnings (Monthly)
                </div>
                <div className='h5 mb-0 font-weight-bold text-gray-800'>
                  $40,000
                </div>
              </div>
              <div className='col-auto'>
                <FaCalendar className=' fa-2x text-gray-300'></FaCalendar>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Earnings (Annual) Card Example --> */}
      <div className='col-xl-3 col-md-6 mb-4'>
        <div className='card border-left-success shadow h-100 py-2'>
          <div className='card-body'>
            <div className='row no-gutters align-items-center'>
              <div className='col mr-2'>
                <div className='text-xs font-weight-bold text-success text-uppercase mb-1'>
                  Earnings (Annual)
                </div>
                <div className='h5 mb-0 font-weight-bold text-gray-800'>
                  $215,000
                </div>
              </div>
              <div className='col-auto'>
                <FaDollarSign className='fa-2x text-gray-300'></FaDollarSign>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Tasks Card Example --> */}
      <div className='col-xl-3 col-md-6 mb-4'>
        <div className='card border-left-info shadow h-100 py-2'>
          <div className='card-body'>
            <div className='row no-gutters align-items-center'>
              <div className='col mr-2'>
                <div className='text-xs font-weight-bold text-info text-uppercase mb-1'>
                  Tasks
                </div>
                <div className='row no-gutters align-items-center'>
                  <div className='col-auto'>
                    <div className='h5 mb-0 mr-3 font-weight-bold text-gray-800'>
                      50%
                    </div>
                  </div>
                  <div className='col'>
                    <LinearProgress
                      variant='determinate'
                      value={50}
                      sx={{ borderRadius: 5, height: 8 }}
                    />
                  </div>
                </div>
              </div>
              <div className='col-auto'>
                <FaClipboardList className='fa-2x text-gray-300'></FaClipboardList>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Pending Requests Card Example --> */}
      <div className='col-xl-3 col-md-6 mb-4'>
        <div className='card border-left-warning shadow h-100 py-2'>
          <div className='card-body'>
            <div className='row no-gutters align-items-center'>
              <div className='col mr-2'>
                <div className='text-xs font-weight-bold text-warning text-uppercase mb-1'>
                  Pending Requests
                </div>
                <div className='h5 mb-0 font-weight-bold text-gray-800'>18</div>
              </div>
              <div className='col-auto'>
                <FaComments className='fa-2x text-gray-300'></FaComments>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningCard

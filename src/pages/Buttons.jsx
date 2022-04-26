import React from 'react'
import {
  FaFacebookF,
  FaCheck,
  FaInfo,
  FaExclamationTriangle,
  FaTrash,
  FaGoogle,
  FaFlag,
  FaArrowRight,
} from 'react-icons/fa'
const Buttons = () => {
  return (
    <div className='container-fluid'>
      {/* <!-- Page Heading --> */}
      <h1 className='h3 mb-4 text-gray-800'>Buttons</h1>

      <div className='row'>
        <div className='col-lg-6'>
          {/* <!-- Circle Buttons --> */}
          <div classNameName='card shadow mb-4'>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>
                Circle Buttons
              </h6>
            </div>
            <div className='card-body'>
              <p>
                Use Font Awesome Icons (included with this theme package) along
                with the circle buttons as shown in the examples below!
              </p>
              {/* <!-- Circle Buttons (Default) --> */}
              <div className='mb-2'>
                <code>.btn-circle</code>
              </div>
              <a href='#' className='btn btn-primary btn-circle'>
                <FaFacebookF />
              </a>
              <a href='#' className='btn btn-success btn-circle'>
                <FaCheck />
              </a>
              <a href='#' className='btn btn-info btn-circle'>
                <FaInfo />
              </a>
              <a href='#' className='btn btn-warning btn-circle'>
                <FaExclamationTriangle />
              </a>
              <a href='#' className='btn btn-danger btn-circle'>
                <FaTrash />
              </a>
              {/* <!-- Circle Buttons (Small) --> */}
              <div className='mt-4 mb-2'>
                <code>.btn-circle .btn-sm</code>
              </div>
              <a href='#' className='btn btn-primary btn-circle btn-sm'>
                <FaFacebookF />
              </a>
              <a href='#' className='btn btn-success btn-circle btn-sm'>
                <FaCheck />
              </a>
              <a href='#' className='btn btn-info btn-circle btn-sm'>
                <FaInfo />
              </a>
              <a href='#' className='btn btn-warning btn-circle btn-sm'>
                <FaExclamationTriangle />
              </a>
              <a href='#' className='btn btn-danger btn-circle btn-sm'>
                <FaTrash />
              </a>
              {/* <!-- Circle Buttons (Large) --> */}
              <div className='mt-4 mb-2'>
                <code>.btn-circle .btn-lg</code>
              </div>
              <a href='#' className='btn btn-primary btn-circle btn-lg'>
                <FaFacebookF />
              </a>
              <a href='#' className='btn btn-success btn-circle btn-lg'>
                <FaCheck />
              </a>
              <a href='#' className='btn btn-info btn-circle btn-lg'>
                <FaInfo />
              </a>
              <a href='#' className='btn btn-warning btn-circle btn-lg'>
                <FaExclamationTriangle />
              </a>
              <a href='#' className='btn btn-danger btn-circle btn-lg'>
                <FaTrash />
              </a>
            </div>
          </div>

          {/* <!-- Brand Buttons --> */}
          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>
                Brand Buttons
              </h6>
            </div>
            <div className='card-body'>
              <p>
                Google and Facebook buttons are available featuring each
                company's respective brand color. They are used on the user
                login and registration pages.
              </p>
              <p>
                You can create more custom buttons by adding a new color
                variable in the
                <code>_variables.scss</code> file and then using the Bootstrap
                button variant mixin to create a new style, as demonstrated in
                the <code>_buttons.scss</code>
                file.
              </p>
              <a href='#' className='btn btn-google btn-block'>
                <FaGoogle />
                .btn-google
              </a>
              <a href='#' className='btn btn-facebook btn-block'>
                <FaFacebookF /> .btn-facebook
              </a>
            </div>
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>
                Split Buttons with Icon
              </h6>
            </div>
            <div className='card-body'>
              <p>
                Works with any button colors, just use the{' '}
                <code>.btn-icon-split</code> className and the markup in the
                examples below. The examples below also use the
                <code>.text-white-50</code> helper className on the icons for
                additional styling, but it is not required.
              </p>
              <a href='#' className='btn btn-primary btn-icon-split'>
                <span className='icon text-white-50'>
                  <FaFlag />
                </span>
                <span className='text'>Split Button Primary</span>
              </a>
              <div className='my-2'></div>
              <a href='#' className='btn btn-success btn-icon-split'>
                <span className='icon text-white-50'>
                  <FaCheck />
                </span>
                <span className='text'>Split Button Success</span>
              </a>
              <div className='my-2'></div>
              <a href='#' className='btn btn-info btn-icon-split'>
                <span className='icon text-white-50'>
                  <FaInfo />
                </span>
                <span className='text'>Split Button Info</span>
              </a>
              <div className='my-2'></div>
              <a href='#' className='btn btn-warning btn-icon-split'>
                <span className='icon text-white-50'>
                  <FaExclamationTriangle />
                </span>
                <span className='text'>Split Button Warning</span>
              </a>
              <div className='my-2'></div>
              <a href='#' className='btn btn-danger btn-icon-split'>
                <span className='icon text-white-50'>
                  <FaTrash />
                </span>
                <span className='text'>Split Button Danger</span>
              </a>
              <div className='my-2'></div>
              <a href='#' className='btn btn-secondary btn-icon-split'>
                <span className='icon text-white-50'>
                  <FaArrowRight />
                </span>
                <span className='text'>Split Button Secondary</span>
              </a>
              <div className='my-2'></div>
              <a href='#' className='btn btn-light btn-icon-split'>
                <span className='icon text-gray-600'>
                  <FaArrowRight />
                </span>
                <span className='text'>Split Button Light</span>
              </a>
              <div className='mb-4'></div>
              <p>Also works with small and large button classNamees!</p>
              <a href='#' className='btn btn-primary btn-icon-split btn-sm'>
                <span className='icon text-white-50'>
                  <FaFlag />
                </span>
                <span className='text'>Split Button Small</span>
              </a>
              <div className='my-2'></div>
              <a href='#' className='btn btn-primary btn-icon-split btn-lg'>
                <span className='icon text-white-50'>
                  <FaFlag />
                </span>
                <span className='text'>Split Button Large</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buttons

import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import { TableHead } from '@mui/material'

function TablePaginationActions(props) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

function createData(name, calories, fat) {
  return { name, calories, fat }
}

const rows = [
  [
    'Tiger Nixon',
    'System Architect',
    'Edinburgh',
    '61',
    '2011/04/25',
    '$320,800',
  ],
  ['Garrett Winters', 'Accountant', 'Tokyo', '63', '2011/07/25', '$170,750'],
  [
    'Ashton Cox',
    'Junior Technical Author',
    'San Francisco',
    '66',
    '2009/01/12',
    '$86,000',
  ],
  [
    'Cedric Kelly',
    'Senior Javascript Developer',
    'Edinburgh',
    '22',
    '2012/03/29',
    '$433,060',
  ],
  ['Airi Satou', 'Accountant', 'Tokyo', '33', '2008/11/28', '$162,700'],
  [
    'Brielle Williamson',
    'Integration Specialist',
    'New York',
    '61',
    '2012/12/02',
    '$372,000',
  ],
  [
    'Herrod Chandler',
    'Sales Assistant',
    'San Francisco',
    '59',
    '2012/08/06',
    '$137,500',
  ],
  [
    'Rhona Davidson',
    'Integration Specialist',
    'Tokyo',
    '55',
    '2010/10/14',
    '$327,900',
  ],
  [
    'Colleen Hurst',
    'Javascript Developer',
    'San Francisco',
    '39',
    '2009/09/15',
    '$205,500',
  ],
  [
    'Sonya Frost',
    'Software Engineer',
    'Edinburgh',
    '23',
    '2008/12/13',
    '$103,600',
  ],
  ['Jena Gaines', 'Office Manager', 'London', '30', '2008/12/19', '$90,560'],
  ['Quinn Flynn', 'Support Lead', 'Edinburgh', '22', '2013/03/03', '$342,000'],
  [
    'Charde Marshall',
    'Regional Director',
    'San Francisco',
    '36',
    '2008/10/16',
    '$470,600',
  ],
  [
    'Haley Kennedy',
    'Senior Marketing Designer',
    'London',
    '43',
    '2012/12/18',
    '$313,500',
  ],
  [
    'Tatyana Fitzpatrick',
    'Regional Director',
    'London',
    '19',
    '2010/03/17',
    '$385,750',
  ],
  [
    'Michael Silva',
    'Marketing Designer',
    'London',
    '66',
    '2012/11/27',
    '$198,500',
  ],
  [
    'Paul Byrd',
    'Chief Financial Officer (CFO)',
    'New York',
    '64',
    '2010/06/09',
    '$725,000',
  ],
  [
    'Gloria Little',
    'Systems Administrator',
    'New York',
    '59',
    '2009/04/10',
    '$237,500',
  ],
  [
    'Bradley Greer',
    'Software Engineer',
    'London',
    '41',
    '2012/10/13',
    '$132,000',
  ],
  ['Dai Rios', 'Personnel Lead', 'Edinburgh', '35', '2012/09/26', '$217,500'],
  [
    'Jenette Caldwell',
    'Development Lead',
    'New York',
    '30',
    '2011/09/03',
    '$345,000',
  ],
  [
    'Yuri Berry',
    'Chief Marketing Officer (CMO)',
    'New York',
    '40',
    '2009/06/25',
    '$675,000',
  ],
  [
    'Caesar Vance',
    'Pre-Sales Support',
    'New York',
    '21',
    '2011/12/12',
    '$106,450',
  ],
  ['Doris Wilder', 'Sales Assistant', 'Sidney', '23', '2010/09/20', '$85,600'],
  [
    'Angelica Ramos',
    'Chief Executive Officer (CEO)',
    'London',
    '47',
    '2009/10/09',
    '$1,200,000',
  ],
  ['Gavin Joyce', 'Developer', 'Edinburgh', '42', '2010/12/22', '$92,575'],
  [
    'Jennifer Chang',
    'Regional Director',
    'Singapore',
    '28',
    '2010/11/14',
    '$357,650',
  ],
  [
    'Brenden Wagner',
    'Software Engineer',
    'San Francisco',
    '28',
    '2011/06/07',
    '$206,850',
  ],
  [
    'Fiona Green',
    'Chief Operating Officer (COO)',
    'San Francisco',
    '48',
    '2010/03/11',
    '$850,000',
  ],
  ['Shou Itou', 'Regional Marketing', 'Tokyo', '20', '2011/08/14', '$163,000'],
  [
    'Michelle House',
    'Integration Specialist',
    'Sidney',
    '37',
    '2011/06/02',
    '$95,400',
  ],
  ['Suki Burks', 'Developer', 'London', '53', '2009/10/22', '$114,500'],
  [
    'Prescott Bartlett',
    'Technical Author',
    'London',
    '27',
    '2011/05/07',
    '$145,000',
  ],
  [
    'Gavin Cortez',
    'Team Leader',
    'San Francisco',
    '22',
    '2008/10/26',
    '$235,500',
  ],
  [
    'Martena Mccray',
    'Post-Sales support',
    'Edinburgh',
    '46',
    '2011/03/09',
    '$324,050',
  ],
  [
    'Unity Butler',
    'Marketing Designer',
    'San Francisco',
    '47',
    '2009/12/09',
    '$85,675',
  ],
  [
    'Howard Hatfield',
    'Office Manager',
    'San Francisco',
    '51',
    '2008/12/16',
    '$164,500',
  ],
  [
    'Hope Fuentes',
    'Secretary',
    'San Francisco',
    '41',
    '2010/02/12',
    '$109,850',
  ],
  [
    'Vivian Harrell',
    'Financial Controller',
    'San Francisco',
    '62',
    '2009/02/14',
    '$452,500',
  ],
  [
    'Timothy Mooney',
    'Office Manager',
    'London',
    '37',
    '2008/12/11',
    '$136,200',
  ],
  ['Jackson Bradshaw', 'Director', 'New York', '65', '2008/09/26', '$645,750'],
  [
    'Olivia Liang',
    'Support Engineer',
    'Singapore',
    '64',
    '2011/02/03',
    '$234,500',
  ],
  ['Bruno Nash', 'Software Engineer', 'London', '38', '2011/05/03', '$163,500'],
  [
    'Sakura Yamamoto',
    'Support Engineer',
    'Tokyo',
    '37',
    '2009/08/19',
    '$139,575',
  ],
  ['Thor Walton', 'Developer', 'New York', '61', '2013/08/11', '$98,540'],
  [
    'Finn Camacho',
    'Support Engineer',
    'San Francisco',
    '47',
    '2009/07/07',
    '$87,500',
  ],
  [
    'Serge Baldwin',
    'Data Coordinator',
    'Singapore',
    '64',
    '2012/04/09',
    '$138,575',
  ],
  [
    'Zenaida Frank',
    'Software Engineer',
    'New York',
    '63',
    '2010/01/04',
    '$125,250',
  ],
  [
    'Zorita Serrano',
    'Software Engineer',
    'San Francisco',
    '56',
    '2012/06/01',
    '$115,000',
  ],
  [
    'Jennifer Acosta',
    'Junior Javascript Developer',
    'Edinburgh',
    '43',
    '2013/02/01',
    '$75,650',
  ],
  [
    'Cara Stevens',
    'Sales Assistant',
    'New York',
    '46',
    '2011/12/06',
    '$145,600',
  ],
  [
    'Hermione Butler',
    'Regional Director',
    'London',
    '47',
    '2011/03/21',
    '$356,250',
  ],
  [
    'Lael Greer',
    'Systems Administrator',
    'London',
    '21',
    '2009/02/27',
    '$103,500',
  ],
  [
    'Jonas Alexander',
    'Developer',
    'San Francisco',
    '30',
    '2010/07/14',
    '$86,500',
  ],
  [
    'Shad Decker',
    'Regional Director',
    'Edinburgh',
    '51',
    '2008/11/13',
    '$183,000',
  ],
  [
    'Michael Bruce',
    'Javascript Developer',
    'Singapore',
    '29',
    '2011/06/27',
    '$183,000',
  ],
  [
    'Donna Snider',
    'Customer Support',
    'New York',
    '27',
    '2011/01/25',
    '$112,000',
  ],
]

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 500 }}
        aria-label='custom pagination table'
        className='table table-bordered'
        id='dataTable'
        width='100%'
        cellSpacing='0'
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Office</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Start date</TableCell>
            <TableCell>Salary</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {row[0]}
              </TableCell>
              <TableCell>{row[1]}</TableCell>
              <TableCell>{row[2]}</TableCell>
              <TableCell>{row[3]}</TableCell>
              <TableCell>{row[4]}</TableCell>
              <TableCell>{row[5]}</TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Office</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Start date</TableCell>
            <TableCell>Salary</TableCell>
          </TableRow>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

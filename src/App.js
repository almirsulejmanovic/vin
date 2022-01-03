import React, { useState, useRef } from 'react'
import axios from 'axios'
import './assets/css/font.css'
import './assets/css/styles.css'

export default function App() {
  const [vin, setVIN] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())
  const vinRef = useRef()


  const getData = async () => {
    setIsLoading(true);
    setVIN('')
    try {
      const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/${vin}?format=json`);
      setData(response.data)
      setIsLoading(false)
      setIsSubmitted(true)
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (vin.length === 0) {
      e.preventDefault()
    } else {
      getData()
    }
    blurInput()
  }

  const sampleVin = () => {
    setVIN('1NXBE4EE8AZ314183')
  }

  const blurInput = () => {
    vinRef.current.blur()
  }


  const vinInput = () => {
    return (
      <section className='bg-feature'>
        <div id='top_content' className='container text-center'>
          <h1 style={{ fontSize: '51px', lineHeight: '1.0625', fontWeight: '700', letterSpacing: '-0.009em', color: '#FFF' }}>
            VIN Decoder & Lookup
          </h1>
          <p style={{ fontWeight: '400', letterSpacing: '0.011em', color: '#FFF', fontSize: '16px', lineHeight: '28px', margin: '24px 0px 4px' }}>
            Decode Your <strong>Vehicle Identification Number</strong> for Free
          </p>
          <form id='check_vin'>
            <input
              id='vin_input'
              type='text'
              placeholder={isLoading ? 'Loading your vehicle info...' : 'Enter Your VIN'}
              maxLength='17'
              style={{ textTransform: 'uppercase' }}
              value={vin}
              ref={vinRef}
              onChange={e => setVIN(e.target.value)}
              disabled={isLoading}
            />
            <input
              id='submit_vin'
              type='submit'
              className={isLoading ? 'submit_btn_disabled' : 'submit_btn'}
              value=''
              onClick={handleSubmit}
            />
            <div className='sample_vin' onClick={() => sampleVin()}>
              Try a sample VIN
            </div>
          </form>

          <ul id="wwtb-ul" style={{ margin: '40px 0 -36px 0', padding: '0', textAlign: 'center' }}>
            <li className="checks">
              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="15px"
                width="15px" version="1.1" viewBox="0 0 15 15" style={{ position: 'relative', margin: '0px 6px -2px -15px' }}>
                <g fillRule="evenodd" fill="none" style={{ fill: 'white' }}>
                  <g fillRule="nonzero" fill="#50C850"
                    transform="translate(-1014 -1003)" style={{ fill: 'white' }}>
                    <g transform="translate(104 959)">
                      <g transform="translate(0 33)">
                        <g>
                          <g transform="translate(910 11)">
                            <path id="Shape"
                              d="m7.5 3.3307e-16c1.9891-1.6654e-16 3.897 0.79018 5.303 2.1967 1.407 1.4065 2.197 3.3142 2.197 5.3033 0 4.142-3.358 7.5-7.5 7.5-1.9891 0-3.8968-0.79-5.3033-2.197-1.4065-1.406-2.1967-3.3139-2.1967-5.303-9.992e-16 -1.9891 0.79018-3.8968 2.1967-5.3033s3.3142-2.1967 5.3033-2.1967v3.3307e-16zm-0.75 10.875l5.25-5.25-1.058-1.0575-4.192 4.185-2.3175-2.31-1.0575 1.0575 3.375 3.375z"
                              style={{ fill: 'white' }}></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>Official data from NHTSA
            </li>
            <li className="checks">
              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="15px"
                width="15px" version="1.1" viewBox="0 0 15 15" style={{ position: 'relative', margin: '0px 6px -2px -15px' }}>
                <g id="Mockups---Grow" fillRule="evenodd" fill="none">
                  <g fillRule="nonzero" fill="#50C850"
                    transform="translate(-1014 -1003)">
                    <g id="Group-17" transform="translate(104 959)">
                      <g id="Group-4" transform="translate(0 33)">
                        <g id="Group-16">
                          <g id="check-circle-copy-2" transform="translate(910 11)">
                            <path id="Shape"
                              d="m7.5 3.3307e-16c1.9891-1.6654e-16 3.897 0.79018 5.303 2.1967 1.407 1.4065 2.197 3.3142 2.197 5.3033 0 4.142-3.358 7.5-7.5 7.5-1.9891 0-3.8968-0.79-5.3033-2.197-1.4065-1.406-2.1967-3.3139-2.1967-5.303-9.992e-16 -1.9891 0.79018-3.8968 2.1967-5.3033s3.3142-2.1967 5.3033-2.1967v3.3307e-16zm-0.75 10.875l5.25-5.25-1.058-1.0575-4.192 4.185-2.3175-2.31-1.0575 1.0575 3.375 3.375z"
                              style={{ fill: 'white' }}></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>Additional Vehicle Info
            </li>
          </ul>
        </div>
        <svg className="CurvedBottom" width="1440" height="96" viewBox="0 0 1440 96" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ bottom: '-1px', height: 'auto', left: '0px', maxHeight: '100px', position: 'absolute', width: '100%' }} >
          <path d="M1440 0v96H0V0c231.32 53.768 472.313 82.282 720 82.282S1208.68 53.768 1440 0z" fill="#FFF"></path>
        </svg>
      </section>
    )
  }


  const displayData = () => {
    console.log(data);
    return (
      <section className='vin-report'>
        <div className='panel panel-info'>
          <div className='main-decoded'>
            <div className='panel-heading'>
              <span className='report-value'>{data.Results[9].Value}</span>{' '}
              <span className='report-value'>{data.Results[6].Value}</span>{' '}
              <span className='report-value'>{data.Results[8].Value}</span>
            </div>
          </div>
          <table className='tableinfo' style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0px' }}>
            <tbody style={{ display: 'table-row-group', verticalAlign: 'middle', borderColor: 'inherit' }}>
              <tr>
                <td>VIN<br></br><b><span>{data.SearchCriteria.substring(4)}</span></b></td>
                <td>Make<br></br><b><span className='report-value'>{data.Results[6].Value}</span></b></td>
                <td>Model<br></br><b><span className='report-value'>{data.Results[8].Value}</span></b></td>
                <td>Year<br></br><b><span className='report-value'>{data.Results[9].Value}</span></b></td>
                <td>Drive Type<br></br><b><span className='report-value'>{data.Results[49].Value}</span></b></td>
              </tr>
              <tr>
                <td>Style/Body<br></br><b><span className='report-value'>{data.Results[107].Value}</span></b></td>
                <td>Engine<br></br><b><span className='report-value'>{Math.round(data.Results[71].Value * 10) / 10} L</span></b></td>
                <td colSpan='2'>Manufactured in<br></br><b><span>{data.Results[14].Value}</span></b></td>
                <td>Age<br></br><b><span className='report-value'>{currentYear - data.Results[9].Value} years</span></b></td>
              </tr>
            </tbody>
          </table>

          <div className='panel-body table'>
            <table className='table table-striped'>
              <tbody>
                <tr>
                  <td>Manufactured by</td>
                  <td className='report-value'>{data.Results[7].Value}</td>
                </tr>
                <tr>
                  <td>Plant Company Name</td>
                  <td className='report-value'>{data.Results[15].Value}</td>
                </tr>
                <tr>
                  <td>Vehicle Type</td>
                  <td className='report-value'>{data.Results[13].Value}</td>
                </tr>
                <tr>
                  <td>Series</td>
                  <td className='report-value'>{data.Results[11].Value}</td>
                </tr>
                <tr>
                  <td>Body Class</td>
                  <td className='report-value'>{data.Results[21].Value}</td>
                </tr>
                <tr>
                  <td>Doors</td>
                  <td className='report-value'>{data.Results[22].Value}</td>
                </tr>
                <tr>
                  <td>Front Airbag Location</td>
                  <td className='report-value'>{data.Results[93].Value}</td>
                </tr>
                <tr>
                  <td>Seat Belts Type</td>
                  <td className='report-value'>{data.Results[89].Value}</td>
                </tr>
                <tr>
                  <td>Engine Displacement (CI)</td>
                  <td className='report-value'>{data.Results[70].Value}</td>
                </tr>
                <tr>
                  <td>Engine Displacement (CC)</td>
                  <td className='report-value'>{data.Results[69].Value}</td>
                </tr>
                <tr>
                  <td>Fuel Type</td>
                  <td className='report-value'>{data.Results[75].Value}</td>
                </tr>
                <tr>
                  <td>Engine Number of Cylinders</td>
                  <td className='report-value'>{data.Results[68].Value}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='panel panel-info' id='report_extra' style={{ margin: '50px auto 0' }}>
            <div className='panel-heading'>
              Additional Vehicle info
            </div>
            <div className='panel-body table'>
              <table className='table table-striped'>
                <tbody>
                  <tr>
                    <td>Bed Type</td>
                    <td>{data.Results[34].Value}</td>
                  </tr>
                  <tr>
                    <td>Cab Type</td>
                    <td>{data.Results[35].Value}</td>
                  </tr>
                  <tr>
                    <td>Engine Model</td>
                    <td>{data.Results[73].Value}</td>
                  </tr>
                  <tr>
                    <td>Engine Power</td>
                    <td>{data.Results[74].Value}</td>
                  </tr>
                  <tr>
                    <td>Transmission Style</td>
                    <td>{data.Results[47].Value}</td>
                  </tr>
                  <tr>
                    <td>Trim</td>
                    <td>{data.Results[12].Value}</td>
                  </tr>
                  <tr>
                    <td>Curtain Air Bag Locations</td>
                    <td>{data.Results[91].Value}</td>
                  </tr>
                  <tr>
                    <td>Transmission Speeds</td>
                    <td>{data.Results[48].Value}</td>
                  </tr>
                  <tr>
                    <td>Engine Configuration</td>
                    <td>{data.Results[77].Value}</td>
                  </tr>
                  <tr>
                    <td>Knee Air Bag Locations</td>
                    <td>{data.Results[94].Value}</td>
                  </tr>
                  <tr>
                    <td>Engine Brake (hp) From</td>
                    <td>{data.Results[80].Value}</td>
                  </tr>
                  <tr>
                    <td>NCSA Make</td>
                    <td>{data.Results[108].Value}</td>
                  </tr>
                  <tr>
                    <td>NCSA Model</td>
                    <td>{data.Results[109].Value}</td>
                  </tr>
                  <tr>
                    <td>Side Air Bag Locations</td>
                    <td>{data.Results[95].Value}</td>
                  </tr>
                  <tr>
                    <td>Trailer Type Connection</td>
                    <td>{data.Results[36].Value}</td>
                  </tr>
                  <tr>
                    <td>Trailer Body Type</td>
                    <td>{data.Results[37].Value}</td>
                  </tr>
                  <tr>
                    <td>Other Restraint System Info</td>
                    <td>{data.Results[90].Value}</td>
                  </tr>
                  <tr>
                    <td>Engine Brake (hp) To</td>
                    <td>{data.Results[82].Value}</td>
                  </tr>
                  <tr>
                    <td>Bus Floor Configuration Type</td>
                    <td>{data.Results[120].Value}</td>
                  </tr>
                  <tr>
                    <td>Bus Type</td>
                    <td>{data.Results[121].Value}</td>
                  </tr>
                  <tr>
                    <td>Custom Motorcycle Type</td>
                    <td>{data.Results[123].Value}</td>
                  </tr>
                  <tr>
                    <td>Motorcycle Suspension Type</td>
                    <td>{data.Results[124].Value}</td>
                  </tr>
                  <tr>
                    <td>Motorcycle Chassis Type</td>
                    <td>{data.Results[125].Value}</td>
                  </tr>
                  <tr>
                    <td>Tire Pressure Monitoring System (TPMS) Type</td>
                    <td>{data.Results[99].Value}</td>
                  </tr>
                  <tr>
                    <td>Error Text</td>
                    <td>{data.Results[4].Value}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </section>
    )
  }

  return (
    <div>
      {vinInput()}
      {isSubmitted && displayData()}
    </div>
  )
}

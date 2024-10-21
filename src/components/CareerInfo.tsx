import React from 'react'

type Props = {
  from: string;
  until: string;
  title: string;
  company: string;
  subjects: string[];
  stack: string[];
}

function CareerInfo({from = 'Okt. 2000', until = 'Now', title = "Entrepreneur", company = " Tha Worldo", subjects, stack}: Props) {
  return (
    <article className='flex' >
      <div className="time-info">
        <div className="w-1/4">
          <span>{from} - {until}</span>
        </div>
        <div className="w-3/4">
          <h4 className='career-title'>
            {title} - <span>{company}</span>
          </h4>
          <div className="career-content">
            <ul>
              {
                subjects && subjects.map((subject, idx) => <li key={`sitem-${idx}`}>{subject}</li>)
              }
            </ul>
          </div>
          <div className="career-stack">
            <div className='inline-block'>Stack 
            {
              stack && stack.map((item, idx) => <span key={`stack-item${idx}`}>{item}</span>)
            }
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CareerInfo
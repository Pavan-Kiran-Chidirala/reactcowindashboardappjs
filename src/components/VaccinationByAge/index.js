// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {VaccineAgeContainer, VaccineAgeHeading} from './styledComponents'

const VaccinationByAge = props => {
  const {resultObject} = props
  const {vaccinationByAge} = resultObject
  return (
    <VaccineAgeContainer>
      <VaccineAgeHeading>Vaccination by Age</VaccineAgeHeading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </VaccineAgeContainer>
  )
}

export default VaccinationByAge

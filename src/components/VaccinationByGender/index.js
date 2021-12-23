// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {
  VaccinationGenderContainer,
  VaccineGenderHeading,
} from './styledComponents'

const VaccinationByGender = props => {
  const {resultObject} = props
  const {vaccinationByGender} = resultObject
  return (
    <VaccinationGenderContainer>
      <VaccineGenderHeading>Vaccination by gender</VaccineGenderHeading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByGender}
            startAngle={180}
            endAngle={0}
            innerRadius="30%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill=" #64c2a6" />
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
    </VaccinationGenderContainer>
  )
}

export default VaccinationByGender

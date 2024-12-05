import {selectplan} from "../../constants"


type SelectPlan = {
    title: string,
    price: string,
    icon: string
  }[]


const SelectPlan = () => {
  return (
    <div className="select-plan-container">
      {selectplan.map((plan) => (
        <div className="select-plan" key={plan.title}>
          <div className="select-plan-icon">
            <p>{plan.icon}</p>
          </div>
          <div className="select-plan-title">
            
            <p>{plan.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SelectPlan
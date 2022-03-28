
interface IGenerator {
  max: number;
  min: number;
  step?: number;
}
export const yearsGenerator = ({max, min}:IGenerator) => {
  const yearsArray = []
  for(let i = max; i >=min; i--){
    yearsArray.push(i)
  }
  return yearsArray
}

export const reachRadiusGenerator = ({min, max, step =1}:IGenerator) => {
  const reachRadius = []
  for(let i = min; i <=max; i + step){
    reachRadius.push(i)
  }
  return reachRadius
}